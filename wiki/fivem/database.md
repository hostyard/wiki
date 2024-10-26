---
label: Podpięcie bazy danych
order: 98
icon: database
authors:
  - name: Korpens
    email: korpens.yt@gmail.com
    avatar: /static/avatars/korpens.png
  - name: OreQr
    email: oreqr@hostyard.eu
    avatar: /static/avatars/oreqr.png
---

1. Wejdź do plików serwera (Zakładaka **Pliki** lub [**SFTP**](/sftp.md)).

2. Otwórz plik konfiguracyjny serwera o nazwie `server.cfg`.

3. **Jeśli istnieje** usuń linijkę:

   ```cfg
   set mysql_connection_string "..."
   ```

4. W zakładce `Bazy danych` kliknij przycisk [!badge variant="primary" text="NOWA BAZA DANYCH"].

5. Wpisz nazwę dla bazy danych, a następnie klinij przycisk [!badge variant="primary" text="UTWÓRZ BAZĘ DANYCH"].
   !!!primary
   **CONNECTIONS FROM** pozostaw puste.
   !!!

6. Kliknij przycisk oczka przy bazie danych, aby zobaczyć szczegóły.

   ![](/static/fivem/baza1.png)

7. Skopiuj `CIĄG POŁĄCZENIA`.

8. Ponownie otwórz `server.cfg` i wklej poniższą linijkę: (Gdzie `CIĄG POŁĄCZENIA` to skopiowany wcześniej ciąg)

   ```cfg
   set mysql_connection_string "CIĄG POŁĄCZENIA"
   ```

   ![](/static/fivem/baza5.png)
   !!!primary
   Linijkę najlepiej wkleić od razu po Endpointach.
   !!!
