---
label: Ustawienie EndPointów
order: 99
icon: broadcast
author:
  name: Korpens
  email: korpens.yt@gmail.com
  avatar: /static/avatars/korpens.jpg
---
!!!primary
Domyślnie endpointy serwera są ustawiane na poprawne. Jeśli kożystasz z gotowej paczki, musisz je ustawić samodzielnie.
</a>
!!!

1. Wchodzimy w zakładkę `Pliki`,a następnie otwieramy swój plik **server.cfg**.


2. Na samej górze pliku dodajemy 2 linijki:<br>
```cfg
endpoint_add_tcp "0.0.0.0:PORT"
```

```cfg
endpoint_add_tcp "0.0.0.0:PORT"
```


![](/static/fivem/end1.png)


3. W miejscu `PORT` wpisujemy nasz port serwera.

![](/static/fivem/end2.png)


!!!danger UWAGA
W Endpoint nie podawaj IP swojego serwera! Jedynie port. `0.0.0.0:PORT`
!!!