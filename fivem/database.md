---
label: Podpinanie bazy danych
order: 98
icon: database
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.jpg
  - name: OreQr
    email: oreqr@hostyard.eu
    avatar: /static/avatars/oreqr.png
---

  

## Automatycznie

!!!danger
**Chwilowo niedostępne!**
!!!

## Ręcznie
1. Wchodzimy w zakładkę `Pliki`,a następnie otwieramy swój plik **server.cfg**.

2.  [!badge variant="info" text="**Jeśli istnieje**"] Usuwamy linijkę:
```cfg
set mysql_connection_string "..."
```

==- Tworzenie bazy danych
1. W zakładce `Bazy danych` klikamy w przycisk [!badge variant="success" text="NOWA BAZA DANYCH"].


![](/static/fivem/baza2.png)


2. Wybieramy nazwę dla swojej bazy danych, a następnie klikamy przycisk [!badge variant="success" text="UTWÓRZ BAZĘ DANYCH"].
!!!primary
**CONNECTIONS FROM** pozostawiamy puste.
!!!


![](/static/fivem/baza3.png)


3. [!badge variant="success" text="**Brawo**"] Baza danych została utworzona.
===
3. Wchodzimy w zakładkę `Bazy danych`, a następnie naciskamy w przycisk oczka.


![](/static/fivem/baza1.png)


4. Kopiujemy `CIĄG POŁĄCZENIA`.

![](/static/fivem/baza4.png)

5. Ponownie wchodzimy do **server.cfg** i wklejamy poniższą linijkę: (Gdzie `CIĄG POŁĄCZENIA` to skopiowany wcześniej ciąg)
```cfg
set mysql_connection_string "CIĄG POŁĄCZENIA"
```

![](/static/fivem/baza5.png)
!!!primary
**Linijkę najlepiej wkleić od razu po Endpointach**
!!!

6. [!badge variant="success" text="**Brawo**"] Baza danych została podłączona pomyślnie.