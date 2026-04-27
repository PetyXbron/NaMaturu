---
title: Zeměpis
description: Hlavní stránka pro přípravu na maturitu ze zeměpisu
state: 2
---

<script setup>
import TopicCardsGrid from '../.vitepress/theme/components/TopicCardsGrid.vue'
import { getTopicsFor } from '../.vitepress/theme/utils/topicIndexData.ts'

const topics = getTopicsFor('zemepis')
</script>

# 🌍 **Zeměpis**

Rychlý přehled všech otázek ze zeměpisu

<TopicCardsGrid :items="topics" />

<hr />

<ul style="display: flex; justify-content: center; gap: 3rem; list-style-type: none;">
    <li style="margin-top: 8px;">✅ Hotovo</li>
    <li style="margin-top: 8px;">🟡 Rozpracované</li>
    <li style="margin-top: 8px;">❌ Nedokončeno</li>
</ul>
