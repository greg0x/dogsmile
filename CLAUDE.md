# Útmutató Claude-nak

Krisztina nem programozó. Egyszerű, magyar nyelvű utasításokat ad, és te (Claude) találd ki magadtól a részleteket.

## Fontos szabályok

**A dogsmile.hu az igazság.** Ha bármi nem stimmel a kód és az élő oldal között, az ÉLŐ oldal a helyes. A kódot kell igazítani, nem fordítva. Mielőtt változtatsz egy oldal kinézetén, nyisd meg a `https://dogsmile.hu/<oldal>/` címet és nézd meg ténylegesen, hogyan néz ki — ne csak szövegesen leíratasd.

**Worktree friss legyen.** Új feladat előtt ellenőrizd, hogy a worktree szinkronban van-e a `main` branchcsel. Ha nem, frissítsd. Régi kódból dolgozni hibákat okoz.

**Port-ütközés.** Ha több worktree fut egyszerre, a 4321-es portot már foglalhatja másik. Indítsd a saját dev szervered más porton (pl. 4329, 4330).

## Gyakori feladat: új gazdi+kutya hozzáadása a Büszkeségfalra

Krisztina küld egy képet és egy nevet (pl. "Filippo, Barbara és Filippo"). Lépések:

1. A kép a `src/assets/images/` mappában van — másold át a `src/assets/images/graduates/` mappába.
2. Nyisd meg a `src/content/graduates/all.json` fájlt és add hozzá az utolsó sorhoz egy új bejegyzést a végére:
   ```json
   { "ownerName": "Barbara", "dogName": "Filippo", "image": "filippo.jpg" }
   ```
3. Ha a felhasználó nem mondja a gazdi nevét, kérdezd meg — ne találd ki.
4. Commitold, push, PR, merge — utána a Netlify magától deployolja.

## Ha bizonytalan vagy

Ne találd ki — kérdezz vissza egy mondatban. Krisztina nem programozó, jobb pontosítani, mint utólag visszacsinálni.
