---
title: Multimédia
description: Otázka 14 - Multimédia
state: 2
---

# **Multimédia**

- Formáty zvukových a audio souborů, kodek, nastavení kvality komprese
- Datový tok, streamování

## Formáty zvukových souborů

- **MP3** - ztrátový komprimovaný formát, široce používaný pro hudbu a audio nahrávky
- **AAC** - alternativa k MP3, ztrátový formát s lepší kvalitou při stejné velikosti souboru
- **WAV** - neztrátový formát, často používaný pro profesionální audio nahrávky
- **FLAC** - ztrátový formát, který zachovává původní kvalitu zvuku, ale s menší velikostí souboru než WAV

### Formáty video souborů

Všechny formáty video souborů jsou ztrátové, ale liší se v kvalitě a velikosti souboru:

- **MP4** - nejrozšířenější, malý soubor
- **AVI** - starší, větší soubor
- **MKV** - moderní, podporuje více stop a vysokou kvalitu
- **MOV** - vyvinutý společností Apple, často používaný pro profesionální video nahrávky

## Kodek

Kodek je **software nebo hardware**, který komprimuje a dekomprimuje digitální média, jako jsou zvukové a video soubory.
Jeho účelem je **snížit velikost souboru** pro usnadnění přenosu a ukládání, přičemž se snaží **zachovat co nejvyšší kvalitu**.  
Kodek může data i šifrovat.

Kodek a formát souboru jsou dvě rozdílné věci, ale zároveň sobě blízké, protože různé formáty podporují různé kodeky.
Například MP4 formát může používat H.264 nebo H.265 kodek pro video.

## Nastavení kvality komprese

Kvalita komprese se obvykle nastavuje pomocí bitrate (bitová rychlost),
která určuje, kolik dat se používá k reprezentaci zvuku nebo videa za sekundu.  
Vyšší bitrate znamená lepší kvalitu, ale také větší velikost souboru.

#### Bezeztrátová komprese

Zachování původní kvality zvuku nebo videa, ale s menší velikostí souboru než originál.  
ZIP, RAR pro archivaci, ale třeba i FLAC nebo PNG pro multimédia.

#### Ztrátová komprese

Po dekompresi se ztrácí část původních dat, což může vést ke snížení kvality.
Příkladem jsou JPEG, WEBP, MP3, AAC, MP4 (jak H.264, tak H.265) a další.

## Datový tok (bitrate)

Datový tok, nebo také bitrate, je **množství dat přenášených za jednotku času**.  
Obvykle se měří v kilobitech nebo megabitech za sekundu (**kbps** nebo **Mbps**).  
Vyšší datový tok znamená lepší kvalitu, ale také větší velikost souboru a vyšší nároky na přenosovou kapacitu.  
Může být realizován pomocí různých technologií nebo protokolů jako **TCP/IP** nebo **HTTP**.

Datový tok může být:

- **Jednosměrný** –⁠ streamování videa, hudby, ...
- **Obousměrný** –⁠ videohovory, online hry, ...

Druhy: 
- **Variabilní (VBR)** –⁠ maximalizuje kvalitu videa při snaze, o co
nejnižší množství přenesených dat
- **Konstantní (CBR)** –⁠ po celou dobu nahrávání obrazu je
datový tok konstantní, má větší velikost

## Streamování

Streamování je proces přenosu **multimediálního obsahu** (jako je video, audio nebo interaktivní média) **přes internet v reálném čase**.  
Umožňuje uživatelům přehrávat obsah **bez nutnosti stahování celého souboru**, což zlepšuje uživatelský zážitek a umožňuje okamžitou konzumaci obsahu.  
Příkladem streamovacích služeb jsou Netflix, YouTube, Spotify a Twitch.
