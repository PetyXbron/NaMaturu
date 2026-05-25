---
title: Základy informatiky
description: Otázka 1 - Základy informatiky a teorie informace, základní jednotky
state: 2
---

# **Základy informatiky a teorie informace, základní jednotky**

- Základní jednotky informace, pravdivostní tabulka pro zápis logických funkcí
- Dvojková, desítková a šestnáctková číselná soustava, převody čísel mezi soustavami
- ASCII a Unicode tabulka znaků

## Základní jednotky informace

Informace používáme ve formách textu, zvuku, obrazu a dalších.  
Ty můžeme vysílat, přijímat, uchovávat a zpracovávat.  
A přenášet je můžeme digitálně nebo analogově.

V informačních technologiích se informace měří v bitech.  
Bit nejmenší jednotka informace a může nabývat pouze dvou hodnot: `0` a `1`.  
Vyšší jednotkou je potom Byte, který se skládá z 8 bitů. Byte může reprezentovat 256 různých hodnot ($2^8$, 0-255).

## Pravdivostní tabulka

| **A** | **B** | A AND B   | A OR B  | A XOR B  | A XNOR B |
|:-----:|:-----:|:---------:|:-------:|:--------:|:--------:|
| **1** | **1** |     1     |    1    |    0     |    1     |
| **1** | **0** |     0     |    1    |    1     |    0     |
| **0** | **1** |     0     |    1    |    1     |    0     |
| **0** | **0** |     0     |    0    |    0     |    1     |

- **AND (konjunkce):** pokud jsou oba vstupy 1
- **OR (disjunkce):** alespoň jeden vstup je 1
- **XOR (exkluzivní OR):** pokud je právě jeden vstup 1
- **XNOR (ekvivalence):** pokud jsou oba vstupy stejné

## Číselné soustavy

#### **Desítková soustava**

| Základ | Cifry | Příklad čísla 13 z dek. |
|--------|-------|-------------------------|
| 10     | 0-9   | 13                      |

Nejběžnější číselná soustava, kterou používáme v každodenním životě.

#### **Dvojková soustava**

| Základ | Cifry | Příklad čísla 13 z dek. |
|--------|-------|-------------------------|
| 2      | 0-1   | 1101                    |

Přirozená pro počítače, protože elektronické obvody mohou být snadno reprezentovány dvěma stavy (zapnuto/vypnuto).

#### **Šestnáctková soustava**

| Základ | Cifry    | Příklad čísla 13 z dek. |
|--------|----------|-------------------------|
| 16     | 0-9, A-F | D                       |

Kompaktní způsob zápisu binárních dat, často používaný v programování a počítačové grafice.
Lze jí taky nazývat hexadecimální.  
Šestnáctková číslice se dá zapsat jako čtyři bity (**nibble**).

---

### Převody mezi soustavami

**Desítková -> Dvojková**  
Dělení základem (2) a zapisování zbytků.

> ```txt{9}
> 105 / 2 = 52 zb. 1
> 52 / 2 = 26 zb. 0
> 26 / 2 = 13 zb. 0
> 13 / 2 = 6 zb. 1
> 6 / 2 = 3 zb. 0
> 3 / 2 = 1 zb. 1
> 1 / 2 = 0 zb. 1
> 
> Výsledek: 1101001 (zbytky zespodu nahoru)
> ```

**Desítková -> Šestnáctková**  
Dělení základem (16) a zapisování zbytků, přičemž zbytky 10-15 se převádí na A-F.
> ```txt{5}
> 346 / 16 = 21 zb. 10 (A)
> 21 / 16 = 1 zb. 5
> 1 / 16 = 0 zb. 1
> 
> Výsledek: 15A (zbytky zespodu nahoru)
> ```

**Dvojková -> Šestnáctková**  
Seskupování bitů po čtyřech (od pravé strany) a převodem každé skupiny na odpovídající hexadecimální cifru.

> ```txt{6}
> 101101101 -> 1 0110 1101
> 1 -> 1 (8 ne + 4 ne + 2 ne + 1 ano)
> 0110 -> 6 (8 ne + 4 ano + 2 ano + 1 ne)
> 1101 -> D (13 => D)
> 
> Výsledek: 16D
> ```

**Jakákoli -> Desítková**  
Stačí vynásobit každou cifru základem umocněným na pozici a sečíst.  
Je vhodné začít zprava, protože nejnižší pozice je 0 a zvyšuje se směrem doleva.  
Pokud pracuji s hexadecimálními čísly, písmena A-F se převádí na hodnoty 10-15.

> `F3D5`  
$5 \cdot 16^0 + 13 \cdot 16^1 + 3 \cdot 16^2 + 15 \cdot 16^3 = 62261$

> `101101`  
$1 \cdot 2^0 + 0 \cdot 2^1 + 1 \cdot 2^2 + 1 \cdot 2^3 + 0 \cdot 2^4 + 1 \cdot 2^5 = 45$

## Tabulky znaků

#### **ASCII**

ASCII = American Standard Code for Information Interchange.  
Původně byla **7bitová**, později rozšířená na **8 bitů** (Extended ASCII).  
Dokáže tedy reprezentovat **128 (nebo 256) znaků**, včetně písmen, číslic a speciálních symbolů.
Obsahuje i klávesové zkratky a řídící znaky (např. nový řádek, tabulátor).

#### **Unicode**

Narozdíl od ASCII, Unicode je navržen tak, aby pokryl **všechny znaky používané v různých jazycích**.
Používá různé kódování, nejběžnější je UTF-8, které je zpětně kompatibilní s ASCII.  
Unicode může reprezentovat **více než 1 milion znaků**, což zahrnuje písmena, číslice, symboly, emotikony a mnoho dalších.
