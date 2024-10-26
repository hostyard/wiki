---
label: Ustawienie własnego MOTD
order: 938
icon: project-roadmap
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
  - name: OreQr
    email: oreqr@hostyard.eu
    avatar: /static/avatars/oreqr.png
---

!!!primary
MOTD - Opis serwera na liście serwerów. Do ustawienia zalecane jest użycie pluginu.
!!!

1. Wejdź do plików serwera (Zakładaka **Pliki** lub [**SFTP**](/sftp.md)).
2. Otwórz pliku o nazwie `server.properties`.
3. Znajdź linijkę:

```properties
motd=A Minecraft Server
```

4. Wejdź na stronę [**Minecraft Server Tools**](https://mctools.org/motd-creator) i stwórz swój opis.
5. Skopiuj jeden z poniższych tekstów odpowiednich do twojego zainstalowanego silnika.
   ![](/static/minecraft/motd1.png)

6. Wklej skopiowany tekst tekst po:

```properties
motd=
```

![](/static/minecraft/motd2.png)

7. Uruchom serwer ponownie, aby zastosować zmiany.

![](/static/minecraft/motd3.png)
