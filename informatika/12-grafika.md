---
title: Grafika
description: Otázka 12 - Počítačová grafika
---

# **Počítačová grafika**

- Vektorová a rastrová grafika, barevné modely, barevná hloubka
- Počet bodů rastrového obrázku, rozlišení, grafické formáty
- Skenování, úpravy rastrových souborů, výběry
- Formáty grafických souborů, export vektorové kresby

## Vektorová a rastrová grafika

#### Rastrová grafika

- Rastr se skládá z mřížky bodů
- Každý bod (pixel) má přiřazenou barvu
- Zároveň má určitou polohu v obrázku

#### Vektorová grafika

- Skládá se z geometrických objektů (čáry, křivky, tvary)
- Ty jsou definovány matematickými vzorci a rovnicemi
- Nezávisí na rozlišení, lze je zvětšovat bez ztráty kvality

<div style="text-align: center;">

![Rozdíl mezi vektorovou a rastrovou grafikou](https://medialniict.wordpress.com/wp-content/uploads/2016/11/rozdil-vektor-rastr-full.jpg "Rozdíl mezi vektorovou a rastrovou grafikou")
</div><div style="display: flex; justify-content: center; margin-top: -10px; font-size: 13px; color: gray; gap: 4px;">
Rastr a vektor | Web <a href="https://medialniict.wordpress.com/2016/11/07/vektorova-grafika/rozdil-vektor-rastr-full/" target="_blank">Mediální ICT</a>
</div>

## Barevné modely

|                       | **RGB**              | **CMYK**                 |
|-----------------------|----------------------|--------------------------|
| **Princip**           | Aditivní (přidávání) | Subtraktivní (odebírání) |
| **Základní barva**    | Černá (displej)      | Bílá (papír)             |
| **Výsledek smíchání** | Bílá                 | Černá                    |
| **Využití**           | Obrazovky            | Tisk                     |


<div style="text-align: center;">

![Barevné model RGB a CMYK](https://meb.fi/media/magefan_blog/CMYK-vs-RGB-blogi.jpg "Barevné model RGB a CMYK")
</div><div style="display: flex; justify-content: center; margin-top: -10px; font-size: 13px; color: gray; gap: 4px;">
RGB a CMYK | Web <a href="https://meb.fi/ENG/blog/post/rgb-or-cmyk-with-printed-products" target="_blank">MEB Kamppi</a>
</div>

## Barevná hloubka

Barevná hloubka (bitová hloubka) určuje počet bitů použitých k reprezentaci barvy jednoho pixelu.
Vyšší barevná hloubka umožňuje zobrazit více barev a jemnější přechody mezi nimi.  
Druhů může být několik, nejdůležitějšími jsou:

- **Černobílá [1-bit]:** černá a bílá
- **High Color [8-bit]:** 256 barev
- **True Color [24-bit]:** 16,7 milionů barev
- **Deep Color [32-bit]:** 16,7 milionů barev + průhlednost (alfa)

## Počet bodů rastrového obrázku

- **Pixel:** základní jednotka - nejmenší jednotka rastru
- **Rozlišení:** počet pixelů v obrázku (šířka x výška)
- **Hustota DPI:** počet bodů na palec, důležité pro tisk
- **Hustota PPI:** počet pixelů na palec (pixels per inch)

## Grafické formáty

- **JPEG:** ztrátová komprese, vhodný pro fotografie
- **PNG:** bezztrátová komprese, podporuje průhlednost
- **GIF:** bezztrátová komprese, animace, jen 8 bitová hloubka
- **SVG:** vektorový formát, škálovatelný bez ztráty kvality
- **RAW:** nekomprimovaný formát pro profesionální fotografii, vysoká kvalita
- **WEBP:** moderní formát, menší velikost souboru, určený pro web

## Výběry a export vektorové kresby

#### Výběry

Patří mezi ně geometrické nástroje pro výběr částí obrázku,
jako jsou **obdélníkové**, **eliptické**, **laso**, **kouzelná hůlka** a další.
U těchto nástrojů bývá používána umělá inteligence pro přesnější výběr objektů.
Využívá prolnutí barev, textur a hran pro identifikaci a oddělení objektů od pozadí.

#### Export vektorové kresby

**Rasterizace** je proces převodu vektorové grafiky na rastrovou,
což umožňuje její zobrazení na obrazovkách a tisk.
Při exportu vektorové kresby do rastrového formátu je důležité zvolit správné rozlišení
a barevnou hloubku, aby se zachovala kvalita a detaily obrázku.  
Export **do formátu SVG** umožňuje zachovat vektorovou povahu kresby,
což je ideální pro použití na webu a v digitálních médiích, kde je potřeba škálovatelnost bez ztráty kvality
