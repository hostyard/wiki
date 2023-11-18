---
label: Podpięcie domeny
order: 95
icon: link
author:
  name: Korpens
  email: korpens.yt@gmail.com
  avatar: /static/avatars/korpens.jpg
---
!!!primary
Poradnik zgodny z usługami <a href="https://dash.cloudflare.com/" target="_blank">**CloudFlare** [!badge variant="primary" text="Klik"]
</a>.
!!!

## Konfiguracja domeny

Do podłączenia domeny potrzebujemy mieć zarejestrowaną/dodaną domenę na Cloudflare. Jeśli nie masz domeny na Cloudflare, możesz ją dodać w zakładce [!badge variant="info" text="**Websites**"] klikając przycisk [!badge variant="primary" text="**Add a site**"]

## Podpięcie domeny

1. W panelu **CloudFlare** Przechodzimy do zakładki `DNS > Records`.

2. Klikamy przycisk [!badge variant="primary" text="**Add record**"] i wybieramy **A**.


![](/static/fivem/cld1.png)


* W polu `Name` wpisujemy `@` lub ***nazwę subdomeny***,<br>
* W polu `IPv4 address` wpisujemy **IP** serwera ***bez portu***,<br>
* Zmieniamy opcję **Proxy** status na [!badge variant="contrast" text="**DNS Only**"],
* Zapisujemy przyciskiem [!badge variant="primary" text="**Save**"].


![](/static/fivem/cld2.png)


3. Klikamy przycisk [!badge variant="primary" text="**Add record**"] i wybieramy **SRV**.
* W polu `Name` wpisujemy `@` lub ***nazwę subdomeny***,<br>
* W polu `Service` wpisujemy `_cfx`,<br>
* W polu `Protocol` wybieramy `UDP`,<br>
* W polu `Priority` wpisujemy `10`,<br>
* W polu `Weight` wpisujemy `10`,<br>
* W polu `Port` wpisujemy ***port serwera***,<br>
* W polu `Target` wpisujemy `fivem.twojadomena.pl` *(gdzie `fivem` to nazwa rekordu `A`, a `twojadomena.pl` to twoja domena)*.,<br>
* Zapisujemy przyciskiem [!badge variant="primary" text="**Save**"].


![](/static/fivem/cld3.png)


4. [!badge variant="success" text="**Brawo**"] Możesz teraz połączyć sie z serwerem używając domeny.