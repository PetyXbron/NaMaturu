/// <reference types="vite/client" />

import englishSidebar from '../../sidebars/english.json'
import informatikaSidebar from '../../sidebars/informatika.json'
import matematikaSidebar from '../../sidebars/matematika.json'
import zemepisSidebar from '../../sidebars/zemepis.json'

const pages = import.meta.glob('../../../{english,informatika,matematika,zemepis}/[0-9]*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
}) as Record<string, string>

const SUBJECTS = ['english', 'informatika', 'matematika', 'zemepis'] as const

type Subject = (typeof SUBJECTS)[number]
type TopicState = '0' | '1' | '2' | ''

type SidebarEntry = {
    text?: string
    link?: string
    items?: SidebarEntry[]
}

export type TopicItem = {
    text: string
    link: string
    state: TopicState
    category: string
}

const SIDEBAR_BY_SUBJECT: Record<Subject, SidebarEntry[]> = {
    english: englishSidebar as SidebarEntry[],
    informatika: informatikaSidebar as SidebarEntry[],
    matematika: matematikaSidebar as SidebarEntry[],
    zemepis: zemepisSidebar as SidebarEntry[],
}

const stripQuotes = (value: string | undefined) => {
    if (!value) return ''
    return value.replace(/"/g, '').replace(/'/g, '').trim()
}

const parseMetaField = (source: string, field: string) => {
    const lines = source.split('\n')
    for (const line of lines) {
        if (line.startsWith(`${field}:`)) {
            const value = line.split(':')[1]
            return stripQuotes(value)
        }
    }
    return ''
}

const getOrderFromSlug = (slug: string) => {
    const parts = slug.split('-')
    const number = parseInt(parts[0])
    return isNaN(number) ? 0 : number
}

const normalizeSidebarLink = (link?: string) => {
    if (!link) return ''
    const parts = link.replace('.md', '').split('/')
    return parts[parts.length - 1]
}

const getCategoryMapForSubject = (subject: Subject) => {
    const sidebar = SIDEBAR_BY_SUBJECT[subject]
    const categoryMap = new Map<string, string>()

    for (const section of sidebar) {
        if (Array.isArray(section?.items)) {
            const categoryName = section.text ?? ''

            for (const entry of section.items) {
                const slug = normalizeSidebarLink(entry?.link)
                if (slug) categoryMap.set(slug, categoryName)
            }

            continue
        }

        const slug = normalizeSidebarLink(section?.link)
        if (!slug || slug === 'index') continue

        if (!categoryMap.has(slug)) {
            categoryMap.set(slug, '')
        }
    }

    return categoryMap
}

const getSubjectAndSlug = (filePath: string) => {
    const path = filePath.replace(/\\/g, '/')

    let foundSubject: Subject | null = null
    for (const s of SUBJECTS) {
        if (path.includes(`/${s}/`)) {
            foundSubject = s
            break
        }
    }

    if (!foundSubject) return null

    const fileName = path.split('/').pop() || ''
    if (!fileName.endsWith('.md')) return null

    return {
        subject: foundSubject,
        slug: fileName.replace('.md', ''),
    }
}

export const getTopicsFor = (subject: Subject): TopicItem[] => {
    const categoryMap = getCategoryMapForSubject(subject)
    const result: TopicItem[] = []

    for (const filePath in pages) {
        const source = pages[filePath]
        const info = getSubjectAndSlug(filePath)

        if (info && info.subject === subject) {
            let title = parseMetaField(source, 'title')
            if (!title) {
                title = info.slug.replace(/^\d+-/, '').replace(/-/g, ' ')
            }

            const state = parseMetaField(source, 'state') as TopicState

            result.push({
                text: getOrderFromSlug(info.slug) + '. ' + title,
                link: `/${subject}/${info.slug}`,
                state: state as TopicState,
                category: categoryMap.get(info.slug) || '',
            })
        }
    }

    return result.sort((a, b) => {
        const orderA = getOrderFromSlug(a.link.split('/').pop() || '')
        const orderB = getOrderFromSlug(b.link.split('/').pop() || '')
        return orderA - orderB
    })
}
