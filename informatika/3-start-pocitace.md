---
title: Start počítače
description: Otázka 3 - Start počítače
state: 2
---

# **Start počítače**

- BIOS, zavádění OS, fyzická a logická struktura pevného disku, režim spánku PC

## BIOS

- Základní firmware, který je uložen v **paměti základní desky** počítače
- Je to úplně **první program**, který se na PC spustí po zapnutí
- Je zodpovědný za **inicializaci hardwaru** a **zavedení operačního systému** do paměti
- Obsahuje jednoduché uživatelské rozhraní pro konfiguraci počítače
- Moderní počítače mají **UEFI** (rozšířenou verzi BIOSu s více funkcemi)

## Zavádění OS

1. Stisknutí tlačítka -> **elektrický signál**
2. Procesor načítá **BIOS** z paměti základní desky
3. BIOS provádí **POST** (Power-On Self Test) - kontrola hardwaru
4. BIOS hledá **bootovací zařízení** (MBR = Master Boot Record)
5. Pokud je nalezen bootovací sektor, BIOS načítá **bootloader** do paměti
6. Bootloader **načítá operační systém** do paměti a předává mu kontrolu nad počítačem
7. **Spouští se OS** a uživatel může začít pracovat

## Pevný disk

HDD (Hard Disk Drive) ukládá data na **magnetické disky**.
Data jsou na ně zapisována pomocí **magnetických hlaviček**, které se pohybují nad povrchem disku.

Pevné disky jsou spolehlivé a mají dlouhou životnost, ale mohou být **citlivé na nárazy** a vibrace.
HDD mají obvykle větší kapacitu a jsou **levnější než SSD**.

### Fyzická struktura

- Pevný disk je rozdělen na **stopy** (kruhy) a **sektory** (výseče)
- Nejmenší fyzická jednotka pro zápis je **sektor**
- Sousední sektory jsou seskupeny do větších celků - **clusterů**

### Logická struktura

- **Cluster** je nejmenší logická jednotka pro ukládání dat v souborovém systému
- Soubory zabírají celé clustery, i když jsou menší než jejich velikost
- Dále existují **oddíly**, které jsou logickými částmi pevného disku, a **svazky**, které jsou logickými jednotkami pro ukládání dat

::: tip Zajímavost
Pokud na HDD ukládám spíše větší soubory (filmy, hry), je vhodné zvolit větší velikost clusteru, protože to může zlepšit výkon.  
Naopak pro menší soubory (dokumenty, obrázky) je lepší menší velikost clusteru, aby se minimalizovalo plýtvání místem.
:::

## Režim spánku PC

Při režimu spánku počítač přechází do stavu nízké spotřeby energie, kdy jsou všechny otevřené aplikace a dokumenty uloženy **do paměti RAM**.  
Ostatní komponenty, jako je procesor a pevný disk, **jsou vypnuty nebo pracují na minimální úrovni**.

#### Režim hibernace

Při hibernaci počítač ukládá obsah paměti RAM **na pevný disk** a poté se úplně vypne.  
Při opětovném zapnutí počítač načítá data z pevného disku zpět do paměti RAM, což umožňuje pokračovat v práci tam, kde byla přerušena.

---

### Jak otevřít BIOS? <span style="font-size: 13px; font-weight: 400;">(Windows)</span>

1. Před kliknutím na **tlačítko Restartovat držet Shift** a v následné nabídce zvolit **Upřesnit možnosti**.
2. Při startu počítače klikat na klávesu, obvykle **F2**, **Del** nebo **Esc**

### Jak zjistit počet disků a svazků?

Pravým tlačítkem kliknout na **Tento počítač** > **Správa počítače** > **Správa disků**.
