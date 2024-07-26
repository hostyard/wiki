---
label: Zmiana wersji Java
order: 982
icon: git-compare
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
---
###### Ostatnia aktualizacja: 26.07.2024

## Zmiana wersji Java
!!!primary
Serwer od razu po zainstalowaniu będzie posiadał najnowszą wersję Java. Starsze silniki wymagają niższej wersji Java.
</a>
!!!

1. Wchodzimy w zakładkę `Startup`.
2. W polu `Docker Image` wybieramy odpowiednią wersję **Java**.
![](https://i.imgur.com/KHwrfnn.png)
1. Uruchamiamy ponownie serwer.
2. [!badge variant="success" text="**Brawo**"] Wersja Java na serwerze została zmieniona!


## Kompatybilność

Wersja Java   | Silnik
---    | ---
Java 21 | Vanilla: 1.21.x<br>Spigot/Bukkit/Paper: 1.21.x
Java 17 | Vanilla: 1.18.x - 1.20.x<br>Spigot/Bukkit/Paper: 1.18.x - 1.20.x
Java 16 | Vanilla: 1.17.x<br>Spigot/Bukkit/Paper: 1.17.x
Java 11 | Vanilla: 1.13 - 1.17.x (chociaż od wersji 1.17 zalecane jest używanie Java 16)<br>Spigot/Bukkit/Paper: 1.13 - 1.17
Java 8 | Vanilla: 1.8 - 1.16.x<br>Spigot/Bukkit/Paper: 1.8 - 1.16.5


<!-- Java 21 | 21
Java 20 | 20
Java 18 | 18 -->