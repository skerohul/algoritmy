# JavaScript – funkce a testování

## A) Součet kladných čísel
Funkce `sumPositive` vrací součet kladných čísel v poli.
Za kladná čísla beru pouze hodnoty větší než 0, nula se nepočítá.
Pokud se v poli objeví jiný typ než číslo, tak se ignoruje.

Testy jsem zkoušel na:
- prázdném poli
- pouze záporných číslech
- kombinaci kladných a záporných
- velkých číslech
- delším poli

U každého testu se vypisuje vstup, očekávaný výsledek, skutečný výsledek
a informace, jestli test prošel.

---

## B) Odstranění duplicit
Vytvořil jsem dvě verze funkce:
- první projde pole a kontroluje, jestli už tam hodnota není
- druhá používá `Set`

Testoval jsem to na dvou velikostech vstupu (cca 1 000 a 50 000 položek).

| Velikost | Pole | Set |
|--------|------|-----|
| 1 000 | pomalejší | rychlejší |
| 50 000 | hodně pomalé | výrazně rychlé |

---

## C) Závěr
Na základě měření bych v reálném použití zvolil variantu se `Set`,
protože je rychlejší hlavně u větších dat a kód je kratší.

U funkce na součet kladných čísel jsem musel ošetřit neplatný vstup
a hodnoty, které nejsou čísla. Správnost jsem ověřil pomocí testů,
které všechny prošly.
