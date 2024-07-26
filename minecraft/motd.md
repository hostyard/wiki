---
label: Własny opis serwera
order: 938
icon: sort-desc
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
---
###### Ostatnia aktualizacja: 26.07.2024

## Jak ustawić własne MOTD
!!!primary
MOTD - Opis serwera na liście serwerów. Do ustawienia można użyć również pluginu.
</a>
!!!

1. Wchodzimy do plików serwera. ( Zakładaka `Pliki` lub [**SFTP**](/sftp.md) )
2. Szukamy pliku o nazwie **server.properties** i otwieramy go.
3. Znajdujemy linijkę:
```properties
motd=A Minecraft Server
```
4. Wchodzimy na stronę <a href="https://mctools.org/motd-creator" target="_blank">**Minecraft Server Tools**</a> i tworzymy swój opis.
5. Kopiujemy 1 z poniższych tekstów odpowiednich do naszego silnika.
![](/static/minecraft/motd1.png)

6. Wklejami nasz skopoiwany tekst po:
```properties
motd=
```
![](/static/minecraft/motd2.png)

7. Uruchamiamy serwer ponownie w celu zastosowania zmian.
8. [!badge variant="success" text="**Brawo**"] Właśnie ustawiłeś/aś własny opis serwera!
   
![](/static/minecraft/motd3.png)