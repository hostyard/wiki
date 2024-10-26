---
label: Tworzenie nowego świata
order: 939
icon: globe
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
---

!!!primary
Zalecamy stworzenie kopii zapasowej świata. Po usunięciu świata wszelki postęp zostanie utracony. Nie da się tego cofnąć.
!!!

1. Wyłącz serwer.
2. Wejdź do plików serwera (Zakładaka **Pliki** lub [**SFTP**](/sftp.md)).
3. Usuń foldery: `world`, `world_nether` oraz `world_the_end`.
4. [!badge variant="warning" text="Opcjonalnie"] W pliku **server.properties** można ustawić seed świata.

```properties
level-seed=
```

6. Włącz serwer.

Teraz możesz cieszyć się nowym światem!
