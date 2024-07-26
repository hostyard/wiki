---
label: Serwer Non Premium
order: 960
icon: shield
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
---
###### Ostatnia aktualizacja: 26.07.2024

## Ustawienia serwera Non Premium
!!!primary
Serwer od razu po zainstalowaniu i włączeniu będzie dostępny tylko dla graczy premium. Jeśli natomiast chcemy aby mógł wejść każdy, należy wykonać następujące kroki.
</a>
!!!

1. Wchodzimy do plików serwera. ( Zakładaka `Pliki` lub [**SFTP**](/sftp.md) )
2. Szukamy pliku o nazwie **server.properties** i otwieramy go.
3. Znajdujemy linijkę:
```properties
online-mode=true
```
4. Zmieniamy `true` na `false` i zapisujemy.
```properties
online-mode=false
```
5. Uruchamiamy serwer ponownie w celu zastosowania zmian.
6. [!badge variant="success" text="**Brawo**"] Teraz gracze Non Premium mogę się połączyć z serwerem!