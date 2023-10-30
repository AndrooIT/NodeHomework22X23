homework: Wrzuciłem na GitHuba materiały z zajęć. W ramach pracy domowej zostały zadania: 7, 8, 10, 11, 12


7. Aplikacja wyświetlająca informację o zalogowanym użytkowniku systemu, przy użyciu modułu OS (https://nodejs.org/dist/latest-v18.x/docs/api/os.html , szukana funkcja ma przyrostek `Sync`). Dodatkowo: zapis nazwy użytkownika do pliku na dysku.

8. Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku `a.txt`, drugą liczbę z pliku `b.txt`. Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku `wynik.txt`, każdy wynik w osobnej linii.
Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , szukana funkcja ma przyrostek `Sync`)

Przykład pliku wynik txt:
```
Dodawanie liczb 1024 i 16 daje w wyniku 1040
Odejmowanie liczb 1024 i 16 daje w wyniku 1008
Mnożenie liczb 1024 i 16 daje w wyniku 16384
Dzielenie liczb 1024 i 16 daje w wyniku 64
```

10. Rozszerzenie aplikacji z zadania 8 tak, by nazwy plików z których pobieramy liczby były podawane w parametrach w czasie uruchamiania.

```
Przykładowe uruchomienie aplikacji:
> node app.js a.txt b.txt
```

11. Rozszerzenie aplikacji z zadania 10 tak, by jej uruchomienie z niewłaściwą liczbą parametrów skutkowało wyświetleniem stosownego komunikatu w konsoli.

```
Przykładowe uruchomienie aplikacji:
> node app.js a.txt
Wynik działania aplikacji:
> zbyt mało parametrów!

Przykładowe uruchomienie aplikacji:
> node app.js a.txt b.txt c.txt
Wynik działania aplikacji:
> zbyt dużo parametrów!
```

12. Aplikacja złożona jest z jednego pliku: `app.js`. Podczas uruchamiania możemy przekazać jej dodatkowy parametr który jest ścieżką do istniejącego na dysku folderu. Zadaniem aplikacji jest wyświetlanie w konsoli nazw wszystkich plików i folderów znajdujących się bezpośrednio we wskazanym folderze.
Uruchomienie z niewłaściwą liczbą parametrów powinno skutkować wyświetleniem komunikatu w konsoli. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , szukane funkcje mają przyrostek `Sync`)

```
Przykładowe uruchomienie aplikacji:
> node app.js C:\\code
Wynik działania aplikacji:
Pliki w folderze C:\\code:
folder1
folder2
plik1.txt
plik2.txt

Przykładowe uruchomienie aplikacji:
> node app.js
Wynik działania aplikacji:
> zbyt mało parametrów!

Przykładowe uruchomienie aplikacji:
> node app.js C:\\code C:\\apps
Wynik działania aplikacji:
> zbyt dużo parametrów!
```
