---
label: Ustawienie endpointów
order: 99
icon: broadcast
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
  - name: OreQr
    email: oreqr@hostyard.eu
    avatar: /static/avatars/oreqr.png
---

!!!warning
Domyślnie endpointy serwera są ustawiane automatycznie. Jeżeli korzystasz z panelu **txAdmin** oraz ustawiłeś lokalizacje pliku `server.cfg` gdzieś indziej niż `/home/container/`, musisz je ustawić ręcznie.
!!!

1. Otwórz plik konfiguracyjny, z którego korzysta twój serwer (`server.cfg`).

2. Znajdź w górnej części pliku dwie poniższe linijki.

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

3. W powyższych linijkach zmień `30120` na port twojego serwera i zapisz.

Aby zastosować zmiany, uruchom serwer ponownie.
