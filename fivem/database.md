---
label: Jak podpiąć bazę danych?
order: 1
icon: database
author:
  name: OreQr
  email: oreqr@hostyard.eu
  avatar: /static/avatars/oreqr.png
---

## Automatycznie
Wystarczy nacisnąć przycisk otwartej książki w zakładce `Bazy danych`.
 ![](/static/fivem/database.png)

## Ręcznie
1. Wejdź w zakładkę `Pliki` następnie kliknij w plik **server.cfg**.
2. Usuń linijkę `set mysql_connection_string "...` jeżeli istnieje.
3. W nowej karcie otwórz zakładkę `Bazy danych` a następnie naciśnij w przycisk oczka.
   ![](/static/fivem/eye.png)
4. Naciśnij w **CIĄG POŁĄCZENIA**, aby go skopiować.
3. Dodaj linijkę `set mysql_connection_string "CIĄG POŁĄCZENIA"` do `server.cfg` i zamień **CIĄG POŁĄCZENIA** na skopiowaną wartość.