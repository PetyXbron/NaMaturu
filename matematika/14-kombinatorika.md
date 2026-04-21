---
title: Kombinatorika
description: Otázka 14 - Kombinatorika
---

# **Kombinatorika**

- kombinatorické pravidlo součtu a součinu
- permutace, variace a kombinace
- faktoriály a počítání s nimi
- kombinační čísla
- binomická věta

::: warning STÁLE UPRAVUJEME
Tato stránka je stále ve vývoji a může se brzy změnit.
:::

## **Permutace, variace a kombinace**

- **Permutace:** uspořádání celé množiny, záleží na pořadí  
$P(n) = n!$
- **Variace:** uspořádání podmnožiny, záleží na pořadí  
$V_k(n) = \frac{n!}{(n-k)!}$
- **Kombinace:** výběr podmnožiny, nezáleží na pořadí  
$C_k(n) = \frac{n!}{k!(n-k)!} = \binom{n}{k}$

::: details Známé vlastnosti kombinačních čísel
$\binom{n}{n} = 1$  
$\binom{n}{0} = 1$  
$\binom{n}{1} = n$  
$\binom{n}{k} = \binom{n}{n-k}$  
$\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$
:::

$$(A + B)^n = \sum_{i=0}^{n} \binom{n}{i} \cdot A^{n-i} \cdot B^i$$
