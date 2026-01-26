---
title: Technické vybavení
description: Otázka 2 - Technické vybavení počítačů
---

# **Technické vybavení počítačů**

- Druhy počítačů, von Neumannovo schéma, základní počítačové komponenty
- Základní parametry, datová úložiště, vstupní a výstupní zařízení
- Paměti, optimalizace zdrojů

# Druhy počítačů

- **Osobní počítače (PC)**: Stolní a přenosné počítače určené pro běžné uživatele
- **Mobilní zařízení**: Chytré telefony, tablety a další přenosná zařízení
- **Servery**: Výkonné počítače určené pro poskytování služeb a ukládání dat
- **Superpočítače**: Extrémně výkonné stroje používané pro vědecké výpočty a simulace
- **Vestavěné systémy**: Počítače integrované do zařízení (auta, domácí spotřebiče, ...)

# Von Neumannovo schéma

<div style="text-align: center;">

![Von Neumannovo schéma](https://www.fi.muni.cz/usr/pelikan/ARCHIT/PICTURES/OBECNE/VNEUMAN.GIF "Von Neumannovo schéma")
</div><div style="display: flex; justify-content: center; margin-top: -10px; font-size: 13px; color: gray; gap: 4px;">
Von Neumannovo schéma | RNDr. Jaroslav Pelikán, Ph.D. | <a href="https://www.fi.muni.cz/usr/pelikan/ARCHIT/TEXTY/VNEUM.HTML" target="_blank">FI MUNI</a>
</div>

Jedná se o model počítače, který popisuje základní komponenty a jejich interakce.  
Všechny programy a data jsou uloženy v sjednocené paměti. **CPU se skládá z ALU a řadiče.**

- **ALU (aritmetickologická jednotka)** - jádro, provádí výpočty a logické operace
- **Řadič** - řídí tok dat mezi komponentami (most mezi pamětí a ALU)
- **Paměť** - ukládá data a instrukce
- **Vstupní zařízení** - umožňují zadávání dat (klávesnice, myš)
- **Výstupní zařízení** - zobrazují výsledky (monitor, tiskárna)

# Základní počítačové komponenty

- **Motherboard (základní deska)** - hlavní deska, na které jsou připojeny všechny komponenty
- **[CPU] centrální procesorová jednotka** - mozek počítače, vykonává instrukce
- **[RAM] operační paměť** - dočasné úložiště pro data a programy během jejich běhu
- **[HDD/SSD] Pevný disk** - trvalé úložiště dat
- **[GPU] Grafická karta GPU** - zpracovává grafiku a vizuální výstupy
- **[PSU] Napájecí zdroj PSU** - dodává energii všem komponentám

# Základní parametry

- **Rychlost procesoru (GHz)** - určuje, kolik operací může CPU vykonat za sekundu
- **Velikost RAM (GB)** - určuje, kolik dat může být současně uloženo pro rychlý přístup
- **Kapacita úložiště (GB x TB)** - určuje, kolik dat může být trvale uloženo
- **Rychlost čtení/zápisu (GB/s)** - určuje, jak rychle může být data načítána nebo zapisována na úložiště
- **Typ paměti** - různé typy pamětí mají různé rychlosti a vlastnosti (DDR4, DDR5, NVMe)
- **Rozhraní** - různé způsoby připojení komponent (SATA, PCIe, USB)
- **Chlazení** - zajišťuje optimální teplotu komponent (vzduchové, vodní)

# Datová úložiště

- **HDD (Hard Disk Drive)** - tradiční pevné disky s mechanickými částmi
- **SSD (Solid State Drive)** - rychlejší a spolehlivější než HDD, bez pohyblivých částí
- **Optická média** - CD, DVD, Blu-ray disky pro ukládání dat
- **Flash paměti** - USB flash disky, paměťové karty
- **Cloudové úložiště** - online služby pro ukládání dat (Google Drive, Dropbox)

# Vstupní a výstupní zařízení

- **Vstupní zařízení** - klávesnice, myš, skener, mikrofon, webkamera
- **Výstupní zařízení** - monitor, tiskárna, reproduktory, sluchátka
- **Kombinovaná zařízení** - kombinace vstupních a výstupních zařízení (dotykové obrazovky)

# Paměti

- **RAM (Random Access Memory)** - operační paměť pro dočasné ukládání dat během běhu programů
- **ROM (Read-Only Memory)** - paměť pouze pro čtení, obsahuje základní instrukce pro spuštění počítače
- **Cache paměť** - malá, rychlá paměť uvnitř CPU pro dočasné ukládání často používaných dat
- **Virtualní paměť** - využívá část pevného disku jako rozšíření RAM

**Cache** zároveň vyrovnává rychlost mezi pomalejší pamětí RAM a rychlejším procesorem.  
Dnes se **ROM** skoro nepoužívá a BIOS/UEFI je spíše na Flash paměti (aby šel aktualizovat).

# Optimalizace zdrojů

- **Správa paměti** - efektivní využití RAM a virtuální paměti
- **Optimalizace procesoru** - využití více jader a vláken pro paralelní zpracování
- **Optimalizace úložiště** - defragmentace HDD, využití SSD pro rychlejší přístup
- **Chlazení** - zajištění optimální teploty pro stabilní výkon
- **Aktualizace ovladačů** - zajištění kompatibility a výkonu komponent
- **Správa místa na disku** - pravidelné čištění nepotřebných souborů a aplikací

Defragmentace se týká pouze HDD, protože SSD mají jiný způsob ukládání dat a defragmentace by mohla zkrátit jejich životnost.