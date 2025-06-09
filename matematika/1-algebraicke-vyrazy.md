---
title: Algebraické výrazy
description: Otázka 1 - Úprava algebraických výrazů
---

# **Úprava algebraických výrazů**

- definiční obor výrazu
- vzorce $(a \pm b)^2$, $(a \pm b)^3$ a $a^2 - b^2$
- rozklad mnohočlenu pomocí vytýkání a pomocí vzorců
- společný násobek a dělitel výrazu
- výrazy s mocninami a odmocninami, pravidla pro počítání s mocninami a odmocninami

## **Definiční obor výrazu** {#1}

Výrazy mají svá pravidla. Některé hodnoty proměnné jsou zakázané - právě ty určuje definiční obor.

**Definiční obor výrazu** = vše, co můžeme dosazovat  
Definičním oborem výrazu rozumíme **množinu všech čísel**, pro která dokážeme výraz spočítat. Například u zlomků nesmí být jmenovatel roven nule, protože dělení nulou není definováno. U odmocnin zase nesmí být pod odmocninou záporné číslo, pokud pracujeme v oboru reálných čísel.

### Pravidla pro určení definičního oboru

1. **Zlomky**  
    Jmenovatel zlomku nesmí být roven nule.  
    **Příklad:** U výrazu $\frac{1}{x-2}$ platí podmínka $x-2 \neq 0$, tedy $x \neq 2$.

2. **Odmocniny**  
    Pod odmocninou nesmí být záporné číslo (v oboru reálných čísel).  
    **Příklad:** U výrazu $\sqrt{x-3}$ platí podmínka $x-3 \geq 0$, tedy $x \geq 3$.

3. **Logaritmy**  
    Argument logaritmu musí být kladný.  
    **Příklad:** U výrazu $\log(x+1)$ platí podmínka $x+1 > 0$, tedy $x > -1$.

4. **Exponenciální výrazy**  
    Základ mocniny musí být kladný, pokud je proměnná v exponentu.  
    **Příklad:** U výrazu $a^x$ platí podmínka $a > 0$.

5. **Trigonometrické funkce**:  
    U některých funkcí je třeba zohlednit omezení na definiční obor.  
    **Příklad:** U výrazu $\tan(x)$ platí podmínka $x \neq \frac{\pi}{2} + k\pi$, kde $k \in \mathbb{Z}$.

Při **určování definičního oboru** postupujeme takto:
1. Najdeme všechny podmínky, které musí být splněny.
2. Vyřešíme tyto podmínky a určíme množinu hodnot, které vyhovují.
3. Výsledkem je definiční obor výrazu.

::: details Příklad 1.1.1 {open}
#### Určete definiční obor výrazu $\frac{\sqrt{x-1}}{x-2}$

Podmínky:
  - $x-1 \geq 0$ (odmocnina)
  - $x-2 \neq 0$ (zlomek)

Řešení:
  - $x \geq 1$
  - $x \neq 2$

**Definiční obor je $\langle 1, 2) \cup (2, \infty)$.**
:::


## **Algebraické vzorce** {#2}

Tyto vzorce jsou základními nástroji pro úpravu algebraických výrazů:

### Rozklad kvadrátu součtu/diference

   $$(a + b)^2 = a^2 + 2ab + b^2$$
   $$(a - b)^2 = a^2 - 2ab + b^2$$

### Rozklad kubu součtu/diference

   $$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
   $$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

### Rozdíl čtverců

   $$a^2 - b^2 = (a + b)(a - b)$$

Tyto vzorce se používají při rozkladu mnohočlenů, zjednodušování výrazů a řešení rovnic.

::: details Příklad 1.2.1 {open}
#### Rozložte výraz $x^2 - 9$

Použijeme vzorec rozdílu čtverců:  
$x^2 - 9 =$ **$(x + 3)(x - 3)$**
:::

## **Rozklad mnohočlenu pomocí vytýkání a pomocí vzorců** {#3}

Rozklad mnohočlenu je proces, při kterém **hledáme jednodušší formy**, které tvoří daný mnohočlen. Existují dva hlavní způsoby:

### Vytýkání

Hledáme společný faktor všech členů mnohočlenu.

::: details Příklad 1.3.1 {open}
#### Rozložte výraz $3x^2 + 6x$

Společný faktor je $3x$.  
Rozklad: **$3x(x + 2)$**.
:::

### Použití vzorců 

Používáme známé algebraické vzorce.

::: details Příklad 1.3.2 {open}
#### Rozložte výraz $x^2 - 4$

Použijeme vzorec rozdílu čtverců:  
$x^2 - 4 =$ **$(x + 2)(x - 2)$**.
:::

## **Společný násobek a dělitel výrazu** {#4}

Společný násobek a dělitel jsou důležité při práci s algebraickými výrazy:

### Společný násobek

Nejmenší výraz, který je násobkem všech daných výrazů.

::: details Příklad 1.4.1 {open}
#### Najděte společný násobek $x^2$ a $x^3$

Společný násobek je **$x^3$**
:::

### Společný dělitel

Největší výraz, který dělí všechny dané výrazy.

::: details Příklad 1.4.2 {open}
#### Najděte společný dělitel $x^2$ a $x^3$

Společný násobek je **$x^2$**
:::

## **Výrazy s mocninami a odmocninami, pravidla pro počítání s mocninami a odmocninami** {#5}

Práce s mocninami a odmocninami vyžaduje znalost základních pravidel:

### Pravidla pro mocniny
   - $a^m \cdot a^n = a^{m+n}$
   - $\frac{a^m}{a^n} = a^{m-n}$
   - $(a^m)^n = a^{m \cdot n}$

### Pravidla pro odmocniny
   - $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$
   - $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$
   - $\sqrt{a^2} = |a|$

::: details Příklad 1.5.1 {open}
#### Zjednodušte výraz $\sqrt{50}$

Rozklad:  
$\sqrt{50} = \sqrt{25 \cdot 2} = \sqrt{25} \cdot \sqrt{2} =$ **$5\sqrt{2}$**
:::
