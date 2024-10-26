---
label: Ustawienie non-premium
order: 960
icon: shield
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
  - name: OreQr
    email: oreqr@hostyard.eu
    avatar: /static/avatars/oreqr.png
---

!!!primary
Domyślnie serwer będzie dostępny tylko dla graczy premium. Jeśli natomiast chcemy aby mógł wejść każdy, należy wykonać następujące kroki.
!!!

1. Wejdź do plików serwera (Zakładaka **Pliki** lub [**SFTP**](/sftp.md)).
2. Otwórz plik o nazwie `server.properties`.
3. Znajdź linijkę:

```properties
online-mode=true
```

4. Zmień `true` na `false` i zapisz.

```properties
online-mode=false
```

5. Uruchom serwer ponownie, aby zastosować zmiany.

Teraz gracze non-premium mogę się połączyć z serwerem!
