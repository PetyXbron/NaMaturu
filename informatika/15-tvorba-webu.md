---
title: Tvorba webu
description: Otázka 15 - Tvorba webu
state: 2
---

# **Tvorba webu**

- Struktura webové stránky, formátování pomocí HTML a kaskádových stylů
- Statický a dynamický web, redakční systémy
- Poskytovatelé služeb pro umístění a provoz webových stránek - providers
- Základní požadavky na provoz web stránek na domácím počítači
- Validace a SEO optimalizace HTML stránek

## Struktura webové stránky

Webová stránka se skládá z několika základních částí, které jsou definovány pomocí **HTML**.  
Každý web (HTML5) by měl obsahovat **`header`**, **`content`** a **`footer`**.
Tyto části jsou důležité pro správnou strukturu a organizaci obsahu na webové stránce.  
Ukázkové rozložení by bylo:

<div style="text-align: center;">

![Značkovaná HTML struktura webové stránky](https://global.discourse-cdn.com/freecodecamp/original/3X/6/c/6c8b3cc3a6bbdcada76848a3b7b9d7fdb5096db7.png "Značkovaná HTML struktura webové stránky")
</div><div style="display: flex; justify-content: center; margin-top: -10px; font-size: 13px; color: gray; gap: 4px;">
Struktura webu | Web <a href="https://forum.freecodecamp.org/t/where-to-put-section-element-in-bootstrap/43582/3" target="_blank">freeCodeCamp Forum</a>
</div>

## Formátování s HTML a kaskádových stylů

**HTML (HyperText Markup Language)** je základní jazyk pro tvorbu webových stránek.
Používá se k definování struktury a obsahu webové stránky **pomocí značek** (tags).

Kaskádové styly (**CSS** - Cascading Style Sheets) se používají k formátování a stylování webových stránek.  
**CSS** umožňuje oddělit obsah (HTML) od **prezentace (styly)**, což usnadňuje údržbu a zlepšuje vzhled webu.
Pomocí **CSS** lze nastavit barvy, písma, rozložení, mezery a další vizuální aspekty webové stránky.

### Příklad kódu

```html
<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title>Moje první webová stránka</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            header {
                color: rgb(255, 0, 0);
                font-size: 24px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Vítejte na mé první webové stránce!</h1>
        </header>
        <main>
            <p>Toto je ukázka jednoduché webové stránky vytvořené pomocí HTML a CSS.</p>
        </main>
        <footer>
            <p>&copy; 2026 Moje Webová Stránka</p>
        </footer>
    </body>
</html>
```

## Statický a dynamický web

- **Statický web:** Obsah je pevně uložen na serveru a nemění se.
Server slouží jen jako úložiště a odešle HTML soubor.
- **Dynamický web:** Obsah se generuje na základě uživatelských požadavků nebo dat z databáze.
Server odesílá HTML akutálně vygenerované pro každého uživatele.
Často bývají i zapojené jazyky jako PHP a Python.

## Redakční systémy

Redakční systém (**CMS** - Content Management System) je software,
který umožňuje snadnou správu a tvorbu webových stránek bez nutnosti znalosti programování.
Nejznámější: **WordPress**, **Drupal**, **Framer**, **Wix** nebo i český **Webnode**.

## Providers

Providers jsou společnosti, které poskytují služby pro umístění a provoz webových stránek.
Mezi nejznámější české patří **Vedos** (dříve Wedos), **Forpsi** a **Active24**.  
Různé typy serverů, které mohou nabízet:

| Typ serveru            | Popis                                                                 | Cena           | Výkon         |
|------------------------|-----------------------------------------------------------------------|----------------|---------------|
| **Sdílený hosting**    | Více webů na jednom serveru, nejlevnější, ale omezené zdroje.         | Nejnižší       | Nízký         |
| **VPS**                | Virtuální server s vlastními zdroji, dražší, ale lepší výkon.         | Střední        | Střední       |
| **Dedikovaný server**  | Celý server pro jednoho zákazníka, nejdražší, ale nejlepší výkon.     | Nejvyšší       | Nejvyšší      |

:::info TIP
Podívej se na [webhosting ceník Vedosu](https://vedos.cz/webhosting/) nebo na [stránky Webnodu](https://www.webnode.com/cs/).
:::

## Požadavky na provoz stránek

V případě nejjednodušího webu bychom mohli volit tyto specifikace:

- **CPU:** 2 jádra
- **RAM:** 2–4 GB
- **Stabilní připojení** k internetu
- **Nepřetržitý provoz** (`24/7`)
- **Veřejná IP adresa** (statická)
- **Nastavení routeru** (*port forwarding*)
- **Webový server** (např. `Apache`, `Nginx`)
- **Zabezpečení** (*firewall*, aktualizace)
- **SSL certifikát** (pro `HTTPS`)
- **Doména**

## SEO optimalizace

Proces SEO (Search Engine Optimization) je optimalizace webových stránek
pro lepší viditelnost ve vyhledávačích, jako Google nebo Seznam.

SEO můžeme dělit na:

- **On-page:** kvalitní obsah, klíčová slova (v nadpisech, ...), technické SEO (rychlost, ...)
- **Off-page:** backlinks (kolik webů odkazuje na nás), sociální sítě, věrohodnost certifikátů

Jinak dále záleží na správné **užití elementů HTML** (header, content, article, aside, footer, ...),
**meta tagy**, **popisky obrázků** (tzv. *alt text*), **rychlost načítání** (velké fotky),
**dlouhodobá reputace** a **robots.txt** (pravidla pro prohledávače).

## Ukázkový soubor HTML

```html
<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title>První webová stránka</title>
    </head>
    <body>
        <h1><u>Hello World</u></h1>
        <ul>
            <li>První položka</li>
            <li><b>Druhá položka</b></li>
            <li>Třetí položka</li>
        </ul>
    </body>
</html>
```

### Důležité tagy

- **`!DOCTYPE`:** deklarace typu dokumentu
- **`html`:** kořenový element
- **`head`:** hlavička dokumentu (meta informace, title, ...)
- **`meta`:** meta informace (charset, description, keywords, ...)
- **`title`:** název stránky (zobrazí se v záložce prohlížeče)
- **`body`:** tělo dokumentu (viditelný obsah)
- **`h1 - h6`:** nadpisy různých úrovní
- **`p`:** odstavec textu
- **`a`:** odkaz (hyperlink)
- **`div`:** blokový element pro seskupování obsahu
- **`hr`:** nečíslovaný oddělovač (horizontální čára)
- **`b`:** tučný text
- **`u`:** podtržení textu
- **`ul`:** nečíslovaný seznam
- **`ol`:** číslovaný seznam
- **`li`:** položka seznamu
