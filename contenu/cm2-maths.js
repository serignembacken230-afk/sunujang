/* Sunu Jàng — CM2 · Mathématiques
   Programme : Curriculum de l'Éducation de Base (CEB), 3e étape — activités numériques,
   de mesure, géométriques et résolution de problèmes. Préparation au CFEE. */
(window.SJ_CONTENT=window.SJ_CONTENT||[]).push({
chapters:{'CM2|Mathématiques':[
 'Les grands nombres',
 'Addition et soustraction',
 'Multiplication et preuve par 9',
 'La division',
 'Les critères de divisibilité',
 'Les nombres décimaux',
 'Les fractions',
 'Proportionnalité, pourcentages et échelles',
 'Mesures de longueur, de masse et de capacité',
 'Les durées et la vitesse',
 'Les périmètres',
 'Les aires',
 'Les volumes',
 'Droites, angles et figures',
 'Achats, ventes et intérêts',
 'Partages et moyenne'
]},
lessons:{
'CM2|Mathématiques|0':{dur:7,html:`<p>Pour lire un grand nombre, on le découpe en <b>classes de 3 chiffres</b> en partant de la droite : unités, mille, millions, milliards.</p>
<table class="table"><tr><th>Milliards</th><th>Millions</th><th>Mille</th><th>Unités</th></tr><tr><td class="n">2</td><td class="n">014</td><td class="n">238</td><td class="n">576</td></tr></table>
<p style="margin-top:8px">On lit : <b>deux milliards quatorze millions deux cent trente-huit mille cinq cent soixante-seize</b>.</p>
<h4>Les règles d'écriture en lettres</h4>
<ul><li><b>Mille</b> ne prend jamais de « s » : trois mille.</li>
<li><b>Cent</b> et <b>vingt</b> prennent un « s » s'ils sont multipliés et terminent le nombre : deux cents, quatre-vingts. Mais : deux cent dix, quatre-vingt-trois.</li>
<li><b>Million</b> et <b>milliard</b> sont des noms : ils prennent un « s » au pluriel (deux millions).</li></ul>
<h4>Comparer et ranger</h4><p>Le nombre qui a le plus de chiffres est le plus grand. S'ils ont autant de chiffres, on compare chiffre par chiffre en partant de la gauche.</p>
<div class="ex"><b>Exemple :</b> 18 126 390 et 18 216 000 : les millions sont égaux (18), puis 126 &lt; 216. Donc 18 126 390 &lt; 18 216 000.</div>
<div class="box"><b>À retenir :</b> 1 million = 1 000 000 = mille milliers. 1 milliard = 1 000 000 000 = mille millions.</div>`},
'CM2|Mathématiques|1':{dur:6,html:`<p>Pour additionner ou soustraire, on <b>aligne les chiffres</b> de même rang (unités sous unités, dizaines sous dizaines…) et on n'oublie pas les <b>retenues</b>.</p>
<div class="ex"><b>Addition :</b> 45 780 + 8 965 = <b>54 745</b>.</div>
<div class="ex"><b>Soustraction :</b> 70 000 − 23 458 = <b>46 542</b>.<br><b>Preuve :</b> on vérifie par l'addition : 46 542 + 23 458 = 70 000. ✔</div>
<h4>Avec des nombres décimaux</h4><p>On aligne les <b>virgules</b>. S'il manque des chiffres, on ajoute des zéros.</p>
<div class="box">125,5 + 34,75 → 125,50 + 34,75 = <b>160,25</b><br>200 − 35,6 → 200,0 − 35,6 = <b>164,4</b></div>
<h4>Le calcul rapide</h4><ul><li>Ajouter 99, c'est ajouter 100 puis enlever 1 : 456 + 99 = 555.</li><li>Enlever 98, c'est enlever 100 puis ajouter 2 : 730 − 98 = 632.</li></ul>
<h4>À toi</h4><p>Moussa avait 15 000 F. Il dépense 3 750 F au marché de Sandaga. Combien lui reste-t-il ? <i>(Réponse : 15 000 − 3 750 = 11 250 F)</i></p>`},
'CM2|Mathématiques|2':{dur:8,html:`<p>Dans une multiplication, les nombres multipliés sont les <b>facteurs</b> et le résultat est le <b>produit</b>.</p>
<div class="ex"><b>Exemple :</b> 347 × 26 : on calcule 347 × 6 = 2 082, puis 347 × 20 = 6 940. On additionne : 2 082 + 6 940 = <b>9 022</b>.</div>
<h4>Multiplier par 10, 100, 1 000</h4><p>On ajoute 1, 2 ou 3 zéros à un entier : 45 × 100 = 4 500. Avec un décimal, on déplace la virgule vers la droite : 3,25 × 10 = 32,5.</p>
<h4>Multiplier deux nombres décimaux</h4><p>On multiplie sans s'occuper des virgules, puis on place dans le produit autant de chiffres après la virgule qu'il y en a dans les deux facteurs réunis.</p>
<div class="box">2,5 × 1,2 : 25 × 12 = 300. Il y a 1 + 1 = 2 chiffres après la virgule → <b>3,00 = 3</b>.</div>
<h4>La preuve par 9</h4><p>Pour chaque nombre, on additionne ses chiffres jusqu'à obtenir un seul chiffre (en enlevant les 9).</p>
<ul><li>347 → 3 + 4 + 7 = 14 → 1 + 4 = <b>5</b></li><li>26 → 2 + 6 = <b>8</b></li><li>5 × 8 = 40 → 4 + 0 = <b>4</b></li><li>Produit 9 022 → 9 + 0 + 2 + 2 = 13 → 1 + 3 = <b>4</b></li></ul>
<p>Les deux résultats sont égaux (4 = 4) : la multiplication est <b>probablement juste</b>. Si les résultats sont différents, elle est sûrement fausse.</p>`},
'CM2|Mathématiques|3':{dur:8,html:`<p>Dans une division, le nombre qu'on partage est le <b>dividende</b>, celui par lequel on divise est le <b>diviseur</b>, le résultat est le <b>quotient</b> et ce qui reste est le <b>reste</b>.</p>
<div class="box"><b>Dividende = diviseur × quotient + reste</b>, avec un reste toujours plus petit que le diviseur.</div>
<div class="ex"><b>Exemple :</b> 9 875 ÷ 25 = <b>395</b>, reste 0. Preuve : 25 × 395 = 9 875. ✔</div>
<h4>Quotient approché</h4><p>Quand la division ne « tombe pas juste », on continue après la virgule.</p>
<div class="ex">22 ÷ 7 = 3,142… On dit que le quotient est <b>3,14 au centième près</b>.</div>
<h4>Diviser un décimal par un entier</h4><p>On place la virgule au quotient dès qu'on abaisse le premier chiffre après la virgule : 37,5 ÷ 5 = <b>7,5</b>.</p>
<h4>Diviser par un nombre décimal</h4><p>On multiplie le dividende et le diviseur par 10, 100… pour que le diviseur devienne un entier.</p>
<div class="box">12 ÷ 0,4 = 120 ÷ 4 = <b>30</b></div>
<h4>À toi</h4><p>Une école de Kaolack reçoit 1 250 cahiers pour 50 élèves. Combien chaque élève en reçoit-il ? <i>(Réponse : 1 250 ÷ 50 = 25 cahiers)</i></p>`},
'CM2|Mathématiques|4':{dur:5,html:`<p>Un nombre est <b>divisible</b> par un autre quand la division tombe juste (reste 0).</p>
<table class="table"><tr><th>Divisible par</th><th>Si…</th><th>Exemple</th></tr>
<tr><td>2</td><td>il se termine par 0, 2, 4, 6 ou 8 (nombre pair)</td><td class="n">3 458</td></tr>
<tr><td>5</td><td>il se termine par 0 ou 5</td><td class="n">1 275</td></tr>
<tr><td>10</td><td>il se termine par 0</td><td class="n">4 730</td></tr>
<tr><td>3</td><td>la somme de ses chiffres est divisible par 3</td><td class="n">471 (4+7+1=12)</td></tr>
<tr><td>9</td><td>la somme de ses chiffres est divisible par 9</td><td class="n">234 (2+3+4=9)</td></tr>
<tr><td>4</td><td>ses deux derniers chiffres forment un nombre divisible par 4</td><td class="n">1 316 (16)</td></tr></table>
<div class="ex"><b>Exemple :</b> 540 se termine par 0 : il est divisible par 2, 5 et 10. 5 + 4 + 0 = 9 : il est aussi divisible par 3 et par 9.</div>
<div class="box"><b>Astuce :</b> ces règles servent à simplifier les fractions et à vérifier un partage sans poser la division.</div>`},
'CM2|Mathématiques|5':{dur:7,html:`<p>Un <b>nombre décimal</b> a une partie entière et une partie décimale séparées par une virgule.</p>
<table class="table"><tr><th>Centaines</th><th>Dizaines</th><th>Unités</th><th>,</th><th>Dixièmes</th><th>Centièmes</th><th>Millièmes</th></tr><tr><td class="n">2</td><td class="n">4</td><td class="n">7</td><td>,</td><td class="n">3</td><td class="n">0</td><td class="n">5</td></tr></table>
<p style="margin-top:8px">247,305 se lit « deux cent quarante-sept <b>virgule</b> trois cent cinq » ou « 247 unités et 305 millièmes ».</p>
<h4>Comparer deux décimaux</h4><p>On compare d'abord les parties entières. Si elles sont égales, on compare les dixièmes, puis les centièmes… Ajouter des zéros à droite aide : 3,4 = 3,40.</p>
<div class="ex"><b>Exemple :</b> 3,25 ou 3,4 ? → 3,25 et 3,40 : 25 centièmes &lt; 40 centièmes, donc <b>3,25 &lt; 3,4</b>.</div>
<h4>Arrondir</h4><p>Pour arrondir au dixième, on regarde le chiffre des centièmes : s'il est 5 ou plus, on augmente le dixième.</p>
<div class="box">7,48 arrondi au dixième = <b>7,5</b> · 7,43 arrondi au dixième = <b>7,4</b> · 12,6 arrondi à l'unité = <b>13</b></div>`},
'CM2|Mathématiques|6':{dur:8,html:`<p>Une <b>fraction</b> représente une partie d'un tout partagé en parts égales. Dans 3/4, <b>3 est le numérateur</b> (les parts prises) et <b>4 le dénominateur</b> (le nombre de parts).</p>
<h4>Comparer une fraction à l'unité</h4><ul><li>Numérateur plus petit que le dénominateur → fraction <b>inférieure à 1</b> (3/4 &lt; 1).</li><li>Numérateur égal au dénominateur → fraction <b>égale à 1</b> (5/5 = 1).</li><li>Numérateur plus grand → fraction <b>supérieure à 1</b> (7/4 &gt; 1).</li></ul>
<h4>Fraction d'un nombre</h4><p>On divise par le dénominateur puis on multiplie par le numérateur.</p>
<div class="ex"><b>Exemple :</b> Awa a 2 000 F. Elle dépense les 3/4. 2 000 ÷ 4 = 500, puis 500 × 3 = <b>1 500 F</b>. Il lui reste 500 F.</div>
<h4>Simplifier une fraction</h4><p>On divise le numérateur et le dénominateur par un même nombre : 6/8 = (6 ÷ 2)/(8 ÷ 2) = <b>3/4</b>.</p>
<h4>Additionner des fractions de même dénominateur</h4><p>On additionne les numérateurs, on garde le dénominateur : 2/7 + 3/7 = <b>5/7</b>.</p>
<div class="box"><b>Fraction et décimal :</b> 1/2 = 0,5 · 1/4 = 0,25 · 3/4 = 0,75 · 1/10 = 0,1</div>`},
'CM2|Mathématiques|7':{dur:8,html:`<p>Deux grandeurs sont <b>proportionnelles</b> quand on passe de l'une à l'autre en multipliant toujours par le même nombre.</p>
<h4>La règle de trois (passage par l'unité)</h4>
<div class="ex"><b>Exemple :</b> 3 kg de riz coûtent 1 500 F. Combien coûtent 5 kg ?<br>1 kg coûte 1 500 ÷ 3 = 500 F, donc 5 kg coûtent 500 × 5 = <b>2 500 F</b>.</div>
<h4>Les pourcentages</h4><p>15 % veut dire 15 pour 100, c'est-à-dire 15/100.</p>
<div class="ex">Une boutique de Thiès fait une réduction de 15 % sur une chemise à 20 000 F.<br>Réduction : 20 000 × 15 ÷ 100 = 3 000 F. Nouveau prix : 20 000 − 3 000 = <b>17 000 F</b>.</div>
<h4>Les échelles</h4><p>L'échelle d'une carte indique le rapport entre la distance sur la carte et la distance réelle (dans la même unité).</p>
<div class="box">Échelle 1/100 000 : 1 cm sur la carte = 100 000 cm = <b>1 km</b> en réalité.<br>Sur cette carte, 7 cm représentent donc 7 km.</div>
<p><b>Formules :</b> distance réelle = distance sur la carte × dénominateur de l'échelle ; distance sur la carte = distance réelle ÷ dénominateur.</p>`},
'CM2|Mathématiques|8':{dur:9,html:`<h4>Les longueurs</h4><table class="table"><tr><th>km</th><th>hm</th><th>dam</th><th>m</th><th>dm</th><th>cm</th><th>mm</th></tr></table><p>Chaque unité vaut <b>10 fois</b> l'unité qui est à sa droite. 1 km = 1 000 m ; 1 m = 100 cm.</p>
<h4>Les masses</h4><table class="table"><tr><th>kg</th><th>hg</th><th>dag</th><th>g</th><th>dg</th><th>cg</th><th>mg</th></tr></table><p>1 kg = 1 000 g. Pour les grosses masses : 1 <b>quintal</b> (q) = 100 kg ; 1 <b>tonne</b> (t) = 1 000 kg.</p>
<h4>Les capacités</h4><table class="table"><tr><th>kL</th><th>hL</th><th>daL</th><th>L</th><th>dL</th><th>cL</th><th>mL</th></tr></table><p>1 L = 100 cL = 1 000 mL. Une bouteille d'eau de 1,5 L contient 150 cL.</p>
<div class="ex"><b>Convertir :</b> on écrit le nombre dans le tableau, le chiffre des unités dans la colonne de l'unité donnée, puis on lit dans la nouvelle unité.<br>3,25 km = 3 250 m · 450 g = 0,45 kg · 2 L = 200 cL</div>
<h4>Masse brute, masse nette, tare</h4><p>La <b>masse brute</b> = masse de la marchandise (<b>nette</b>) + masse de l'emballage (<b>tare</b>).</p>
<div class="box">Un sac de riz pèse 50,5 kg avec son sac de 0,5 kg. Masse nette = 50,5 − 0,5 = <b>50 kg</b>.</div>`},
'CM2|Mathématiques|9':{dur:7,html:`<h4>Les unités de durée</h4><ul><li>1 jour = 24 heures</li><li>1 heure (h) = 60 minutes (min)</li><li>1 minute = 60 secondes (s)</li><li>1 année = 12 mois = 365 jours (366 jours pour une année bissextile)</li></ul>
<p>Attention : les durées ne se comptent pas en base 10. 1 h 45 min + 30 min = 1 h 75 min = <b>2 h 15 min</b>.</p>
<h4>Calculer une durée</h4><div class="ex">Un car quitte Dakar à 7 h 40 et arrive à Saint-Louis à 11 h 15.<br>De 7 h 40 à 8 h : 20 min. De 8 h à 11 h 15 : 3 h 15 min. Durée totale : <b>3 h 35 min</b>.</div>
<h4>La vitesse moyenne</h4><div class="box"><b>Vitesse = distance ÷ durée</b><br><b>Distance = vitesse × durée</b><br><b>Durée = distance ÷ vitesse</b></div>
<div class="ex">Un taxi roule pendant 3 h à 80 km/h. Distance : 80 × 3 = <b>240 km</b>.<br>Un car parcourt 70 km à 60 km/h. Durée : 70 ÷ 60 = 1 h et 10/60 h, soit <b>1 h 10 min</b>.</div>`},
'CM2|Mathématiques|10':{dur:7,html:`<p>Le <b>périmètre</b> est la longueur du contour d'une figure. On l'exprime en m, cm, km…</p>
<table class="table"><tr><th>Figure</th><th>Périmètre</th></tr>
<tr><td>Carré de côté c</td><td>P = c × 4</td></tr>
<tr><td>Rectangle (longueur L, largeur l)</td><td>P = (L + l) × 2</td></tr>
<tr><td>Losange de côté c</td><td>P = c × 4</td></tr>
<tr><td>Cercle de diamètre D</td><td>P = D × 3,14</td></tr></table>
<div class="ex"><b>Exemple :</b> un champ rectangulaire de Kaffrine mesure 45 m sur 30 m.<br>Demi-périmètre : 45 + 30 = 75 m. Périmètre : 75 × 2 = <b>150 m</b>.</div>
<h4>Retrouver une dimension</h4><ul><li>Côté du carré = périmètre ÷ 4</li><li>Largeur du rectangle = demi-périmètre − longueur</li><li>Diamètre du cercle = périmètre ÷ 3,14 ; rayon = diamètre ÷ 2</li></ul>
<div class="box">Un puits circulaire a 1,5 m de rayon. Diamètre : 3 m. Tour du puits : 3 × 3,14 = <b>9,42 m</b>.</div>`},
'CM2|Mathématiques|11':{dur:9,html:`<p>L'<b>aire</b> est la mesure de la surface d'une figure. Unité principale : le <b>mètre carré (m²)</b>.</p>
<table class="table"><tr><th>Figure</th><th>Aire</th></tr>
<tr><td>Carré</td><td>A = c × c</td></tr>
<tr><td>Rectangle</td><td>A = L × l</td></tr>
<tr><td>Triangle</td><td>A = (base × hauteur) ÷ 2</td></tr>
<tr><td>Losange</td><td>A = (grande diagonale × petite diagonale) ÷ 2</td></tr>
<tr><td>Trapèze</td><td>A = (grande base + petite base) × hauteur ÷ 2</td></tr>
<tr><td>Disque</td><td>A = rayon × rayon × 3,14</td></tr></table>
<div class="ex">Triangle : base 8 m, hauteur 5 m → (8 × 5) ÷ 2 = <b>20 m²</b>.<br>Trapèze : bases 10 m et 6 m, hauteur 4 m → (10 + 6) × 4 ÷ 2 = <b>32 m²</b>.<br>Disque de rayon 5 m → 5 × 5 × 3,14 = <b>78,5 m²</b>.</div>
<h4>Les unités d'aire</h4><p>Chaque unité vaut <b>100 fois</b> l'unité suivante (2 chiffres par colonne) : km² · hm² · dam² · m² · dm² · cm² · mm².</p>
<div class="box"><b>Mesures agraires :</b> 1 are (a) = 1 dam² = 100 m² · 1 hectare (ha) = 1 hm² = 10 000 m² · 1 centiare (ca) = 1 m²</div>`},
'CM2|Mathématiques|12':{dur:6,html:`<p>Le <b>volume</b> est la place occupée par un solide. Unité principale : le <b>mètre cube (m³)</b>.</p>
<ul><li><b>Cube</b> d'arête a : V = a × a × a</li><li><b>Pavé droit</b> (parallélépipède rectangle) : V = longueur × largeur × hauteur</li></ul>
<p>Chaque unité de volume vaut <b>1 000 fois</b> l'unité suivante : m³ · dm³ · cm³.</p>
<div class="box"><b>Volume et capacité :</b> 1 dm³ = 1 litre · 1 m³ = 1 000 litres · 1 cm³ = 1 mL</div>
<div class="ex"><b>Exemple :</b> une citerne en forme de pavé mesure 2 m sur 1,5 m et 1 m de haut.<br>V = 2 × 1,5 × 1 = 3 m³ = <b>3 000 litres</b> d'eau.</div>
<h4>À toi</h4><p>Une boîte cubique a 10 cm d'arête. Quel est son volume ? <i>(Réponse : 10 × 10 × 10 = 1 000 cm³ = 1 dm³ = 1 L)</i></p>`},
'CM2|Mathématiques|13':{dur:8,html:`<h4>Les droites</h4><ul><li>Deux droites <b>parallèles</b> ne se rencontrent jamais.</li><li>Deux droites <b>sécantes</b> se coupent en un point.</li><li>Deux droites <b>perpendiculaires</b> se coupent en formant un angle droit (on le vérifie avec l'équerre).</li></ul>
<p>Un <b>segment</b> a deux extrémités ; une <b>demi-droite</b> a une origine et pas de fin.</p>
<h4>Les angles</h4><ul><li><b>Angle droit</b> : 90°</li><li><b>Angle aigu</b> : plus petit qu'un angle droit</li><li><b>Angle obtus</b> : plus grand qu'un angle droit (et plus petit que 180°)</li></ul><p>On mesure un angle avec le <b>rapporteur</b>. La somme des angles d'un triangle est toujours <b>180°</b>.</p>
<h4>Les triangles</h4><ul><li><b>Équilatéral</b> : 3 côtés égaux (3 angles de 60°)</li><li><b>Isocèle</b> : 2 côtés égaux</li><li><b>Rectangle</b> : un angle droit</li></ul>
<h4>Les quadrilatères</h4><ul><li><b>Carré</b> : 4 côtés égaux et 4 angles droits</li><li><b>Rectangle</b> : côtés opposés égaux et 4 angles droits</li><li><b>Losange</b> : 4 côtés égaux, diagonales perpendiculaires</li><li><b>Parallélogramme</b> : côtés opposés parallèles et égaux</li><li><b>Trapèze</b> : 2 côtés parallèles (les bases)</li></ul>
<div class="box"><b>Le cercle :</b> tous ses points sont à la même distance du <b>centre</b> ; cette distance est le <b>rayon</b>. Diamètre = 2 × rayon. On le trace au compas.</div>`},
'CM2|Mathématiques|14':{dur:9,html:`<div class="box"><b>Prix de revient</b> = prix d'achat + frais (transport, emballage…)<br><b>Bénéfice</b> = prix de vente − prix de revient<br><b>Perte</b> = prix de revient − prix de vente</div>
<div class="ex"><b>Exemple :</b> Ndèye achète 50 kg de mangues à 15 000 F. Le transport jusqu'au marché coûte 2 000 F. Elle vend tout 25 000 F.<br>Prix de revient : 15 000 + 2 000 = 17 000 F. Bénéfice : 25 000 − 17 000 = <b>8 000 F</b>.</div>
<h4>Gains, dépenses, économies</h4><p><b>Économie</b> = gains − dépenses. Si les dépenses dépassent les gains, on a une <b>dette</b>.</p>
<div class="ex">Un tailleur gagne 150 000 F par mois et dépense 120 000 F. Il économise 30 000 F par mois, soit 30 000 × 12 = <b>360 000 F</b> par an.</div>
<h4>L'intérêt simple</h4><p>Quand on place de l'argent (le <b>capital</b>) à la banque, il rapporte un <b>intérêt</b> chaque année selon un <b>taux</b> (en %).</p>
<div class="box"><b>Intérêt = capital × taux × durée (en années) ÷ 100</b></div>
<div class="ex">100 000 F placés à 6 % pendant 2 ans : 100 000 × 6 × 2 ÷ 100 = <b>12 000 F</b> d'intérêt.</div>`},
'CM2|Mathématiques|15':{dur:7,html:`<h4>Partage en parts égales</h4><p>On divise la somme par le nombre de parts : 12 000 F partagés entre 4 enfants → 3 000 F chacun.</p>
<h4>Partage en parts inégales</h4><div class="ex"><b>Exemple :</b> Awa et Modou se partagent 9 000 F. Awa reçoit 1 000 F de plus que Modou.<br>On enlève la différence : 9 000 − 1 000 = 8 000 F. On partage : 8 000 ÷ 2 = 4 000 F.<br>Modou reçoit <b>4 000 F</b>, Awa reçoit 4 000 + 1 000 = <b>5 000 F</b>. Vérification : 4 000 + 5 000 = 9 000 ✔</div>
<div class="ex"><b>Une part double de l'autre :</b> 9 000 F, la part d'Awa est le double de celle de Modou. Il y a 1 + 2 = 3 parts. Une part = 9 000 ÷ 3 = 3 000 F. Modou : <b>3 000 F</b>, Awa : <b>6 000 F</b>.</div>
<h4>La moyenne</h4><div class="box"><b>Moyenne = somme des valeurs ÷ nombre de valeurs</b></div>
<div class="ex">Fatou a eu 6, 7 et 8 sur 10 en calcul. Moyenne : (6 + 7 + 8) ÷ 3 = 21 ÷ 3 = <b>7 sur 10</b>.</div>
<p><b>Méthode pour un problème :</b> 1. Je lis deux fois. 2. Je souligne les données et la question. 3. Je choisis les opérations. 4. Je calcule. 5. Je vérifie et je rédige une phrase-réponse.</p>`}
},
bank:{'CM2|Mathématiques':[
 ["Comment s'écrit « deux millions trois cent mille » ?",["2 300 000","2 030 000","230 000","2 000 300"],0,"2 millions = 2 000 000, plus 300 000 → 2 300 000."],
 ["Quelle écriture est correcte ?",["quatre-vingts-deux","deux cent dix","trois milles","deux cents trois"],1,"« Cent » ne prend pas de s quand il est suivi d'un autre nombre : deux cent dix."],
 ["Dans 14 238 576, quel est le chiffre des millions ?",["1","4","2","8"],1,"14 millions : le chiffre des millions est 4 (le 1 est celui des dizaines de millions)."],
 ["70 000 − 23 458 = ?",["46 542","47 542","46 652","53 458"],0,"Vérification : 46 542 + 23 458 = 70 000."],
 ["125,5 + 34,75 = ?",["159,25","160,25","160,3","47,25"],1,"On aligne les virgules : 125,50 + 34,75 = 160,25."],
 ["347 × 26 = ?",["9 022","8 922","9 122","2 082"],0,"347 × 6 = 2 082 et 347 × 20 = 6 940 ; 2 082 + 6 940 = 9 022."],
 ["2,5 × 1,2 = ?",["30","0,3","3","2,7"],2,"25 × 12 = 300, avec 2 chiffres après la virgule : 3,00 = 3."],
 ["3,25 × 100 = ?",["32,5","325","3 250","0,0325"],1,"Multiplier par 100 : la virgule avance de 2 rangs → 325."],
 ["9 875 ÷ 25 = ?",["385","395","405","375"],1,"25 × 395 = 9 875."],
 ["12 ÷ 0,4 = ?",["3","4,8","30","300"],2,"On multiplie les deux par 10 : 120 ÷ 4 = 30."],
 ["Dans une division, le reste est toujours :",["plus grand que le diviseur","plus petit que le diviseur","égal au quotient","égal à zéro"],1,"Si le reste était plus grand, on pourrait encore diviser."],
 ["Quel nombre est divisible par 9 ?",["234","325","418","512"],0,"2 + 3 + 4 = 9, qui est divisible par 9."],
 ["Quel nombre est divisible par 2 et par 5 ?",["125","232","340","515"],2,"Pour être divisible par 2 et 5, il doit se terminer par 0."],
 ["Quel est le plus grand nombre ?",["3,25","3,4","3,099","3,39"],1,"3,4 = 3,40 : c'est le plus grand."],
 ["7,48 arrondi au dixième donne :",["7,4","7,5","7","8"],1,"Le chiffre des centièmes est 8 (≥ 5) : on arrondit à 7,5."],
 ["Les 3/4 de 2 000 F font :",["500 F","1 500 F","1 200 F","750 F"],1,"2 000 ÷ 4 = 500, puis 500 × 3 = 1 500 F."],
 ["La fraction 6/8 simplifiée est :",["2/3","3/4","1/2","4/6"],1,"On divise par 2 : 6/8 = 3/4."],
 ["Quelle fraction est supérieure à 1 ?",["3/4","5/5","7/4","1/2"],2,"Le numérateur (7) est plus grand que le dénominateur (4)."],
 ["2/7 + 3/7 = ?",["5/14","5/7","6/7","1/7"],1,"Même dénominateur : on additionne les numérateurs."],
 ["3/4 est égal à :",["0,34","0,75","0,25","3,4"],1,"3 ÷ 4 = 0,75."],
 ["3 kg de riz coûtent 1 500 F. Combien coûtent 5 kg ?",["2 000 F","2 500 F","3 000 F","7 500 F"],1,"1 kg = 500 F, donc 5 kg = 2 500 F."],
 ["15 % de 20 000 F, c'est :",["1 500 F","2 000 F","3 000 F","15 000 F"],2,"20 000 × 15 ÷ 100 = 3 000 F."],
 ["Sur une carte au 1/100 000, 7 cm représentent :",["7 m","70 m","700 m","7 km"],3,"1 cm = 100 000 cm = 1 km, donc 7 cm = 7 km."],
 ["3,25 km = … m",["325","3 250","32,5","32 500"],1,"1 km = 1 000 m : 3,25 × 1 000 = 3 250 m."],
 ["1 tonne = … kg",["10","100","1 000","10 000"],2,"La tonne vaut 1 000 kg (et le quintal 100 kg)."],
 ["Masse brute 50,5 kg, tare 0,5 kg. La masse nette est :",["51 kg","50 kg","49,5 kg","50,5 kg"],1,"Masse nette = brute − tare = 50 kg."],
 ["2 L = … cL",["20","200","2 000","0,2"],1,"1 L = 100 cL, donc 2 L = 200 cL."],
 ["1 h 45 min + 30 min = ?",["1 h 75 min","2 h 15 min","2 h 05 min","2 h 25 min"],1,"75 min = 1 h 15 min, donc 2 h 15 min."],
 ["Un taxi roule 3 h à 80 km/h. Distance parcourue ?",["83 km","160 km","240 km","26 km"],2,"Distance = vitesse × durée = 80 × 3 = 240 km."],
 ["Un car part à 7 h 40 et arrive à 11 h 15. Durée du trajet ?",["3 h 35 min","4 h 35 min","3 h 25 min","4 h 15 min"],0,"20 min jusqu'à 8 h, puis 3 h 15 : 3 h 35 min."],
 ["Périmètre d'un rectangle de 45 m sur 30 m ?",["75 m","150 m","1 350 m","135 m"],1,"(45 + 30) × 2 = 150 m."],
 ["Tour d'un cercle de 3 m de diamètre (π ≈ 3,14) ?",["6 m","9,42 m","28,26 m","4,71 m"],1,"Périmètre = D × 3,14 = 3 × 3,14 = 9,42 m."],
 ["Un carré a 36 m de périmètre. Son côté mesure :",["6 m","9 m","18 m","12 m"],1,"Côté = périmètre ÷ 4 = 9 m."],
 ["Aire d'un triangle de base 8 m et de hauteur 5 m ?",["40 m²","20 m²","13 m²","26 m²"],1,"(8 × 5) ÷ 2 = 20 m²."],
 ["Aire d'un trapèze : bases 10 m et 6 m, hauteur 4 m ?",["64 m²","32 m²","20 m²","40 m²"],1,"(10 + 6) × 4 ÷ 2 = 32 m²."],
 ["1 hectare = … m²",["100","1 000","10 000","100 000"],2,"1 ha = 1 hm² = 10 000 m²."],
 ["Aire d'un losange de diagonales 6 cm et 4 cm ?",["24 cm²","12 cm²","10 cm²","20 cm²"],1,"(6 × 4) ÷ 2 = 12 cm²."],
 ["Une citerne de 2 m × 1,5 m × 1 m contient :",["300 L","3 000 L","4 500 L","30 000 L"],1,"V = 3 m³ et 1 m³ = 1 000 L, donc 3 000 L."],
 ["1 dm³ = …",["1 mL","1 cL","1 L","1 hL"],2,"Un décimètre cube contient exactement un litre."],
 ["Un angle obtus mesure :",["moins de 90°","exactement 90°","entre 90° et 180°","plus de 180°"],2,"Obtus : plus grand qu'un angle droit."],
 ["La somme des angles d'un triangle vaut :",["90°","180°","270°","360°"],1,"Dans tout triangle, la somme des angles est 180°."],
 ["Quel quadrilatère a 4 côtés égaux mais pas forcément d'angle droit ?",["Le rectangle","Le losange","Le trapèze","Le parallélogramme"],1,"Le losange a 4 côtés égaux ; s'il a un angle droit, c'est un carré."],
 ["Achat 15 000 F, transport 2 000 F, vente 25 000 F. Le bénéfice est :",["10 000 F","8 000 F","7 000 F","12 000 F"],1,"Prix de revient 17 000 F ; bénéfice = 25 000 − 17 000 = 8 000 F."],
 ["Prix de revient 30 000 F, vente 26 500 F. C'est :",["un bénéfice de 3 500 F","une perte de 3 500 F","une perte de 4 500 F","ni perte ni bénéfice"],1,"Vente < revient : perte = 30 000 − 26 500 = 3 500 F."],
 ["Intérêt de 100 000 F placés à 6 % pendant 2 ans ?",["6 000 F","12 000 F","1 200 F","120 000 F"],1,"100 000 × 6 × 2 ÷ 100 = 12 000 F."],
 ["9 000 F partagés : Awa a 1 000 F de plus que Modou. Part de Modou ?",["4 500 F","4 000 F","5 000 F","3 000 F"],1,"(9 000 − 1 000) ÷ 2 = 4 000 F."],
 ["Moyenne de 6, 7 et 8 ?",["6","7","8","21"],1,"(6 + 7 + 8) ÷ 3 = 7."]
]}
});
