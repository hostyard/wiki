---
label: Podpięcie domeny
order: 95
icon: link
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
  - name: OreQr
    email: oreqr@hostyard.eu
    avatar: /static/avatars/oreqr.png
---

### [!badge variant="warning" text="Opcjonalnie"] Dodanie domeny na [Cloudflare](https://www.cloudflare.com/)

Aby podpiąć domenę przez Cloudflare, najpierw upewnij się, że domena jest zarejestrowana lub dodana w serwisie Cloudflare. Jeśli jeszcze jej tam nie ma, przejdź do zakładki [[!badge variant="info" text="Websites"] w panelu Cloudflare](https://dash.cloudflare.com/?to=/:account/) i kliknij [[!badge variant="primary" text="Add a domain"]](https://dash.cloudflare.com/?to=/:account/add-site) w celu dodania domeny.

## Dodanie rekordów DNS

Aby móc połączyć się z serwerem za pomocą domeny, trzeba najpierw dodać rekordy DNS.

Dodawanie rekordów DNS wygląda podobnie we wszystkich serwisach.

==- OVH

1. Przejdź do panelu [OVH Web Cloud](https://www.ovh.com/manager/#/web/configuration/).

2. Po lewej stronie w zakładce `Domeny` wybierz domenę i następnie przejdź do `Strefa DNS`.

[!badge variant="success" text="Rekord A"]

3. Kliknij przycisk [!badge variant="info" text="**Dodaj rekord**"], wybierz **A** i ustaw tak jak na zdjęciu poniżej.
   ![](/static/domena/domena3.png)

- Pole `Subdomena` pozostaw puste lub wpisz **_nazwę subdomeny_**,
- W polu `Adres docelowy` wpisz **IP** serwera **_bez portu_**,
- Zapisz przyciskiem [!badge variant="primary" text="**Dalej**"] następnie [!badge variant="primary" text="**Zatwierdź**"]

[!badge variant="success" text="Rekord SRV"]

4. Ponownie kliknij przycisk [!badge variant="info" text="**Dodaj rekord**"], wybierz **SRV** i ustaw tak jak na zdjęciu poniżej.
   ![](/static/fivem/domena/domena4.png)

- W polu `Subdomena` wpisz `_cfx._udp`,
- W polu `Priorytet` wpisz `10`,
- W polu `Waga` wpisz `10`,
- W polu `Port` wpisz **_port serwera Minecraft_**,
- W polu `Adres docelowy` wpisz swoją domenę lub subdomenę/domenę która prowadzi na **_adres IP serwera Minecraft_**,
- Zapisz przyciskiem [!badge variant="primary" text="**Dalej**"] następnie [!badge variant="primary" text="**Zatwierdź**"]

Teraz możesz połączyć się z serwerem za pomocą domeny!
[!ref Sprawdzanie](#sprawdzanie)

==- Cloudflare

1. Przejdź do panelu [Cloudflare](https://dash.cloudflare.com/?to=/:account/).

2. Wybierz domenę i następnie po lewej stronie przejdź do zakładki `DNS > Records`.

[!badge variant="success" text="Rekord A"]

3. Kliknij przycisk [!badge variant="primary" text="**Add record**"] i ustaw tak jak na zdjęciu poniżej.
   ![](/static/domena/domena1.png)

- W polu `Type` wybierz `A`,
- W polu `Name` wpisz `@` lub **_nazwę subdomeny_**,
- W polu `IPv4 address` wpisz **IP** serwera **_bez portu_**,
- Zmień opcję `Proxy status` na **DNS Only**,
- Zapisz przyciskiem [!badge variant="primary" text="**Save**"]

[!badge variant="success" text="Rekord SRV"]

4. Ponownie kliknij przycisk [!badge variant="primary" text="**Add record**"] i ustaw tak jak na zdjęciu poniżej.
   ![](/static/fivem/domena/domena2.png)

- W polu `Type` wybierz `SRV`,
- W polu `Name` wpisz `_cfx._udp`,
- W polu `Priority` wpisz `10`,
- W polu `Weight` wpisz `10`,
- W polu `Port` wpisz **_port serwera Minecraft_**,
- W polu `Target` wpisz `@` lub subdomenę/domenę która prowadzi na **_adres IP serwera Minecraft_**,
- Zapisz przyciskiem [!badge variant="primary" text="**Save**"]

Teraz możesz połączyć się z serwerem za pomocą domeny!
[!ref Sprawdzanie](#sprawdzanie)

==-

## Sprawdzanie

Wpisz swoją domenę, aby sprawdzić, czy została ona podpięta prawidłowo.

<script
  src="/static/embeds/embed.js"
  embed="domain-fivem"
></script>
