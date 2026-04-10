---
title: Počítačové sítě
description: Otázka 5 - Počítačové sítě
---

# **Počítačové sítě**

- Druhy počítačových sítí podle velikosti a architektury
- Prvky lokální sítě, prvky bezdrátové sítě, komunikace v lokální síti
- Síť Internet, síťové složky a přístupová práva

## Druhy sítí dle rozlohy

- **PAN [Personal Area Network]:** Osobní síť (Bluetooth)
- **LAN [Local Area Network]:** Lokální síť (budova)
- **MAN [Metropolitan Area Network]:** Městská síť (kampus, kabelová TV)
- **WAN [Wide Area Network]:** Rozlehlá síť (Internet)

## Architektura sítí

- **Klient-server:** centrální počítač poskytuje služby více počítačům
- **Peer to peer:** "rovný s rovným", počítače si navzájem sdílejí mezi sebou

## Topologie sítí

<div style="text-align: center;">

![Základní topologie sítí - hvězdicová, kruhová, svěrnicová](/media/informatika/topologie.png "Základní topologie sítí - hvězdicová, kruhová, svěrnicová")
</div><div style="display: flex; justify-content: center; margin-top: -10px; font-size: 13px; color: gray; gap: 4px;">
Topologie sítí | Wikimedia Commons contributors | Web <a href="https://commons.wikimedia.org/w/index.php?title=File:NetworkTopologies.png&oldid=1182590064" target="_blank">Wikimedia Commons</a> (upraveno)
</div>

- **Hvězdicová:** všechny počítače jsou připojeny k centrálnímu uzlu (switch, router)
- **Kruhová:** počítače jsou propojeny do kruhu, data se přenášejí v jednom směru
- **Svěrnicová:** všechny počítače jsou připojeny k jedné komunikační lince, data

## Obrázek síťových zařízení

<div style="text-align: center;">

![Základní síťová zařízení](/media/informatika/sitova-zarizeni.png "Základní síťová zařízení")
</div><div style="display: flex; justify-content: center; margin-top: -10px; font-size: 13px; color: gray; gap: 4px;">
Síťová zařízení | Gemini (2026) | AI model Google
</div>

## Prvky lokální sítě

- **Switch:** vytváří síť
- **Router:** lokální síť propojuje s jinou sítí (např. Internetem)
- **Repeater:** zesiluje signál

## Prvky bezdrátové sítě

Home gateway (modem) se skládá z:

- **Access Point:** přístupový bod pro bezdrátové připojení
- **Switch:** spojuje zařízení v domácí síti
- **Router:** propojuje domácí síť s Internetem
- **Firewall:** zabezpečuje síť před neoprávněným přístupem

## Komunikace v lokální síti

- **MAC adresa:** unikátní identifikátor síťového zařízení
- **IP adresa:** logická adresa pro komunikaci v síti
- **DHCP:** protokol pro automatické přidělování IP adres
- **DNS:** systém pro překlad doménových jmen na IP adres

## Síť Internet

Internet *(velké I)* je globální síť, která propojuje miliony počítačů a zařízení po celém světě.
Je založen na protokolu TCP/IP, který umožňuje komunikaci mezi různými sítěmi.  
Internet poskytuje různé služby, jako je web, e-mail, sociální sítě, streamování a mnoho dalších.

- **Protokoly TCP/IP:** základní protokoly pro komunikaci v Internetu
- **HTTP/HTTPS:** protokoly pro přenos webových stránek
- **FTP:** protokol pro přenos souborů
- **SMTP:** protokol pro odesílání e-mailů
- **DNS:** systém pro překlad doménových jmen na IP adresy
- **WWW:** World Wide Web, systém pro prohlížení a sdílení informací na Internetu
- **IPv4:** 32-bitová verze IP adresy, umožňuje přibližně 4 miliardy unikátních adres
- **IPv6:** 128-bitová verze IP adresy, prakticky neomezený počet unikátních adres

## Síťové složky a přístupová práva

- **Složky:** organizace dat v počítači, mohou být sdíleny v síti
- **Přístupová práva:** určení, kdo může složku číst, zapisovat nebo upravovat
- **Read (R):** pouze pro čtení
- **Write (W):** pouze pro zápis
- **Read/Write (RW):** pro čtení i zápis
