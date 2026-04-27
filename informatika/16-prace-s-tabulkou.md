---
title: Práce s tabulkou
description: Otázka 16 - Tabulkový procesor – práce s tabulkou
state: 2
---

# **Tabulkový procesor – práce s tabulkou**

- Struktura tabulky, prostředí a nástroje tabulkového procesoru
- Absolutní a relativní adresy buněk, vzorce, funkce, formát buňky, formátování tabulky
- Podmíněné formátování, export a import dat, funkce podmínky

## Struktura tabulky a prostředí

```
Sešit
└── Listy
    ├── Sloupce
    └── Řádky
        └── Buňky
```

## Adresy buněk

Přepínání pomocí klávesy `F4` (4-polohový přepínač)  
nebo manuálním zápisem dolaru (`$`) pro pevné odkazy.

- **Relativní:** adresa se mění při kopírování vzorce (např. `A1`)
- **Absolutní:** pevná adresa (např. `$A$1`)
- **Smíšená:** pevný řádek nebo sloupec (např. `A$1` nebo `$A1`)

## Vzorce a funkce

- **Vzorce:** matematické výrazy s operátory (`=A1+B1`)
- **Funkce:** předdefinované operace respektující datové typyy (`=SUMA(A1:A10)`)

## Formát buňky a formátování tabulky

- **Formát buňky:** určuje jak tabulka hodnotu chápe (číslo, text, datum)
- **Formátování tabulky:** vizuální úprava (barvy, písmo, ohraničení)

## Podmíněné formátování

Nástroj, který umožňuje automaticky **měnit formát buňky na základě její hodnoty**
(např. zvýraznění červeně, pokud je hodnota menší než 0).  
Je to rychlá vizuální analýza velkého množství dat.

## Export a import dat

- **Export:** převod tabulky do jiného formátu (např. CSV, PDF)
- **Import:** načítání dat z jiných formátů do tabulkového procesoru

## Funkce podmínky

Funkce `KDYŽ` umožňuje provádět logické testy a vracet různé hodnoty na základě výsledku testu.  
Syntax: `=KDYŽ(podmínka; hodnota_pokud_pravda; hodnota_pokud_nepravda)`
> ```
> =KDYŽ(A1>10; "málo"; "hodně")
> ```

> ```
> =KDYŽ(A1="M"; "muž"; KDYŽ(A1="Ž"; "žena"; "chyba"))
> ```
