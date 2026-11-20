/* Sunu Jàng — 3e · Mathématiques
   Programme du cycle moyen (Sénégal), classe de 3e : activités numériques et activités
   géométriques. Préparation au BFEM. */
(window.SJ_CONTENT=window.SJ_CONTENT||[]).push({
chapters:{'3e|Mathématiques':[
 'Racines carrées',
 'Calcul littéral — identités remarquables',
 'Équations et inéquations',
 'Systèmes de deux équations',
 'Applications linéaires et affines',
 'Statistiques',
 'Théorème de Thalès',
 'Relations trigonométriques',
 'Angles inscrits',
 'Vecteurs et repérage',
 'Équations de droites',
 'Géométrie dans l\'espace',
 'Réussir l\'épreuve du BFEM'
]},
lessons:{
'3e|Mathématiques|0':{dur:9,html:`<p>La <b>racine carrée</b> d'un nombre positif <i>a</i> est le nombre positif dont le carré vaut <i>a</i>. On la note √a.</p>
<div class="box">√a existe seulement si a ≥ 0, et (√a)² = a.<br>√(a²) = |a| (valeur absolue).</div>
<h4>Les règles de calcul (a ≥ 0, b ≥ 0)</h4>
<ul><li>√(a × b) = √a × √b</li>
<li>√(a ÷ b) = √a ÷ √b (avec b ≠ 0)</li>
<li><b>Attention :</b> √(a + b) ≠ √a + √b. Exemple : √(9 + 16) = √25 = 5, mais √9 + √16 = 7.</li></ul>
<h4>Simplifier une racine</h4>
<p>On fait apparaître un <b>carré parfait</b> (4, 9, 16, 25, 36, 49…).</p>
<div class="ex">√72 = √(36 × 2) = 6√2<br>3√50 − √8 = 3 × 5√2 − 2√2 = 15√2 − 2√2 = <b>13√2</b></div>
<h4>Rendre rationnel un dénominateur</h4>
<p>On ne laisse pas de racine au dénominateur.</p>
<div class="ex">5/√3 = 5√3/3<br>2/(√5 − 1) : on multiplie par la <b>quantité conjuguée</b> (√5 + 1) :<br>2(√5 + 1)/((√5)² − 1²) = 2(√5 + 1)/4 = (√5 + 1)/2</div>
<h4>Comparer et encadrer</h4>
<p>Pour comparer 3√2 et 2√3, on compare leurs carrés : 18 et 12. Donc 3√2 > 2√3.<br>Encadrement : 1,41 < √2 < 1,42 (à 10⁻² près).</p>`},
'3e|Mathématiques|1':{dur:10,html:`<p>Le calcul littéral sert à <b>développer</b> (transformer un produit en somme) et à <b>factoriser</b> (transformer une somme en produit).</p>
<h4>Les trois identités remarquables</h4>
<div class="box">(a + b)² = a² + 2ab + b²<br>(a − b)² = a² − 2ab + b²<br>(a + b)(a − b) = a² − b²</div>
<div class="ex">Développer : (2x + 3)² = 4x² + 12x + 9<br>(x − 5)² = x² − 10x + 25<br>(3x + 1)(3x − 1) = 9x² − 1</div>
<h4>Factoriser</h4>
<ul><li><b>Facteur commun</b> : 6x² − 9x = 3x(2x − 3).</li>
<li><b>Facteur commun entre parenthèses</b> : (x + 1)(2x − 3) + (x + 1)(x + 4) = (x + 1)[(2x − 3) + (x + 4)] = (x + 1)(3x + 1).</li>
<li><b>Identité remarquable</b> : x² − 49 = (x − 7)(x + 7) ; 4x² + 4x + 1 = (2x + 1)².</li>
<li>Différence de deux carrés : (2x + 1)² − 9 = (2x + 1 − 3)(2x + 1 + 3) = (2x − 2)(2x + 4).</li></ul>
<h4>Fraction rationnelle</h4>
<p>Une expression comme F = (x² − 4)/((x − 2)(x + 5)) n'existe que si le dénominateur est non nul : x ≠ 2 et x ≠ −5. Pour ces valeurs, on simplifie : F = (x − 2)(x + 2)/((x − 2)(x + 5)) = (x + 2)/(x + 5).</p>
<div class="box">Au BFEM, une question classique : « Développer, réduire et ordonner E », puis « Factoriser E », puis « Résoudre E = 0 ». La forme factorisée sert à résoudre !</div>`},
'3e|Mathématiques|2':{dur:9,html:`<h4>Équation du 1er degré</h4>
<p>On isole l'inconnue en faisant la même opération des deux côtés.</p>
<div class="ex">3x − 7 = x + 5 ⇔ 3x − x = 5 + 7 ⇔ 2x = 12 ⇔ x = 6. S = {6}</div>
<h4>Équation produit nul</h4>
<div class="box">Un produit est nul si et seulement si l'un au moins de ses facteurs est nul.</div>
<div class="ex">(2x − 3)(x + 4) = 0 ⇔ 2x − 3 = 0 ou x + 4 = 0 ⇔ x = 3/2 ou x = −4.<br>S = {−4 ; 3/2}</div>
<p>Pour x² = 25 : x² − 25 = 0 ⇔ (x − 5)(x + 5) = 0 ⇔ x = 5 ou x = −5.</p>
<h4>Équation avec valeur absolue</h4>
<p>|x − 2| = 3 ⇔ x − 2 = 3 ou x − 2 = −3 ⇔ x = 5 ou x = −1.</p>
<h4>Inéquation du 1er degré</h4>
<div class="box">Quand on multiplie ou divise les deux membres par un nombre <b>négatif</b>, on <b>change le sens</b> de l'inégalité.</div>
<div class="ex">−2x + 1 ≤ 7 ⇔ −2x ≤ 6 ⇔ x ≥ −3. S = [−3 ; +∞[</div>
<p>On représente la solution sur une droite graduée en hachurant la partie qui <b>ne convient pas</b> (convention fréquente en classe).</p>
<h4>Mettre un problème en équation</h4>
<ol><li>Choisir l'inconnue (ex. : x = prix d'un cahier).</li><li>Traduire l'énoncé en équation.</li><li>Résoudre.</li><li>Vérifier et rédiger une phrase-réponse.</li></ol>`},
'3e|Mathématiques|3':{dur:9,html:`<p>Un système de deux équations à deux inconnues se résout par <b>substitution</b>, par <b>combinaison</b> (addition) ou <b>graphiquement</b>.</p>
<h4>Par substitution</h4>
<div class="ex">{ x + y = 10 ; 2x − y = 5 }<br>De la 1re : y = 10 − x. On remplace : 2x − (10 − x) = 5 ⇔ 3x = 15 ⇔ x = 5, puis y = 5.<br>S = {(5 ; 5)}</div>
<h4>Par combinaison</h4>
<div class="ex">{ 3x + 2y = 16 ; x − 2y = 0 }<br>On additionne : 4x = 16 ⇔ x = 4. Puis 4 − 2y = 0 ⇔ y = 2. S = {(4 ; 2)}</div>
<h4>Graphiquement</h4>
<p>Chaque équation est une droite. La solution est le <b>point d'intersection</b>. Si les droites sont parallèles, il n'y a pas de solution.</p>
<h4>Problème type</h4>
<div class="ex">Au marché, 2 kg de mangues et 3 kg d'oranges coûtent 2 300 F ; 1 kg de mangues et 2 kg d'oranges coûtent 1 400 F.<br>x = prix du kg de mangues, y = prix du kg d'oranges :<br>{ 2x + 3y = 2 300 ; x + 2y = 1 400 }<br>On multiplie la 2e par 2 : 2x + 4y = 2 800. On soustrait : y = 500, puis x = 400.<br>Réponse : mangues 400 F/kg, oranges 500 F/kg.</div>
<div class="box">Vérifie toujours ta solution dans les <b>deux</b> équations.</div>`},
'3e|Mathématiques|4':{dur:9,html:`<h4>Application linéaire</h4>
<p>f(x) = ax. Sa représentation est une <b>droite qui passe par l'origine</b>. Elle traduit une situation de <b>proportionnalité</b>.</p>
<div class="ex">Si f(4) = 10 alors a = 10/4 = 2,5 et f(x) = 2,5x.</div>
<h4>Application affine</h4>
<p>f(x) = ax + b. Sa représentation est une <b>droite</b> ; a est le <b>coefficient directeur</b>, b l'<b>ordonnée à l'origine</b>.</p>
<div class="box">a = (f(x₂) − f(x₁)) / (x₂ − x₁)<br>Si a > 0, f est croissante ; si a < 0, f est décroissante ; si a = 0, f est constante.</div>
<div class="ex">f(1) = 5 et f(3) = 9 : a = (9 − 5)/(3 − 1) = 2. Puis 5 = 2 × 1 + b ⇔ b = 3. Donc f(x) = 2x + 3.</div>
<h4>Tracer la droite</h4>
<p>Deux points suffisent. Pour f(x) = 2x + 3 : x = 0 → 3 ; x = 2 → 7. On place (0 ; 3) et (2 ; 7).</p>
<h4>Situation de la vie courante</h4>
<div class="ex">Un taxi demande 500 F de prise en charge et 200 F par km : f(x) = 200x + 500 (affine).<br>Une autre course à 300 F/km sans prise en charge : g(x) = 300x (linéaire).<br>f(x) = g(x) ⇔ 100x = 500 ⇔ x = 5 km : au-delà de 5 km, le premier taxi est moins cher.</div>`},
'3e|Mathématiques|5':{dur:8,html:`<p>On étudie une <b>série statistique</b> : une population, un caractère (quantitatif ou qualitatif), des effectifs.</p>
<table class="table"><tr><th>Note</th><th>8</th><th>10</th><th>12</th><th>15</th></tr><tr><td>Effectif</td><td class="n">3</td><td class="n">5</td><td class="n">8</td><td class="n">4</td></tr><tr><td>ECC</td><td class="n">3</td><td class="n">8</td><td class="n">16</td><td class="n">20</td></tr></table>
<h4>Les notions à connaître</h4>
<ul><li><b>Effectif total</b> N = 20.</li>
<li><b>Fréquence</b> = effectif ÷ N (souvent en %) : note 12 → 8/20 = 40 %.</li>
<li><b>Effectifs cumulés croissants (ECC)</b> : on additionne au fur et à mesure.</li>
<li><b>Mode</b> : valeur de plus grand effectif → 12.</li>
<li><b>Moyenne</b> = (8×3 + 10×5 + 12×8 + 15×4) ÷ 20 = 230 ÷ 20 = <b>11,5</b>.</li>
<li><b>Médiane</b> : valeur qui partage la série en deux moitiés. N/2 = 10 → la 10e valeur est 12 (ECC passe de 8 à 16).</li></ul>
<h4>Séries regroupées en classes</h4>
<p>Pour une classe [10 ; 14[, on utilise le <b>centre</b> (10 + 14)/2 = 12 pour calculer la moyenne. La <b>classe modale</b> est celle de plus grand effectif.</p>
<h4>Les diagrammes</h4>
<p>Diagramme en bâtons, histogramme (classes), diagramme circulaire : angle = fréquence × 360°. Polygone des ECC pour lire graphiquement la médiane.</p>`},
'3e|Mathématiques|6':{dur:9,html:`<h4>Le théorème de Thalès</h4>
<p>Soit deux droites (BM) et (CN) sécantes en A, avec M ∈ (AB) et N ∈ (AC).</p>
<div class="box">Si (MN) ∥ (BC), alors AM/AB = AN/AC = MN/BC.</div>
<div class="ex">AM = 3, AB = 5, AC = 7,5. (MN) ∥ (BC). Calcule AN.<br>AM/AB = AN/AC ⇔ 3/5 = AN/7,5 ⇔ AN = 3 × 7,5 ÷ 5 = <b>4,5</b>.</div>
<h4>La réciproque : montrer que deux droites sont parallèles</h4>
<div class="box">Si AM/AB = AN/AC et si les points A, M, B et A, N, C sont <b>dans le même ordre</b>, alors (MN) ∥ (BC).</div>
<div class="ex">AM = 2, AB = 5, AN = 3, AC = 7,5. AM/AB = 0,4 et AN/AC = 0,4 : égaux, même ordre → (MN) ∥ (BC).</div>
<h4>La contraposée : montrer que deux droites ne sont pas parallèles</h4>
<p>Si AM/AB ≠ AN/AC, alors (MN) et (BC) ne sont pas parallèles.</p>
<h4>Configuration « papillon »</h4>
<p>Le théorème marche aussi quand M et N sont de l'autre côté de A (les droites se croisent en A). Les rapports restent les mêmes.</p>
<h4>Application : partager un segment</h4>
<p>Pour partager [AB] en 5 parts égales à la règle non graduée : on trace une demi-droite d'origine A, on reporte 5 longueurs égales au compas, on joint le dernier point à B puis on trace des parallèles.</p>`},
'3e|Mathématiques|7':{dur:9,html:`<p>Dans un triangle <b>rectangle</b> ABC rectangle en A, pour l'angle aigu B̂ :</p>
<div class="box">cos B̂ = côté adjacent / hypoténuse = AB/BC<br>sin B̂ = côté opposé / hypoténuse = AC/BC<br>tan B̂ = côté opposé / côté adjacent = AC/AB</div>
<p>Moyen mnémotechnique : <b>CAH SOH TOA</b>.</p>
<h4>Propriétés</h4>
<ul><li>0 < cos x < 1 et 0 < sin x < 1 pour un angle aigu.</li>
<li><b>cos² x + sin² x = 1</b></li>
<li>tan x = sin x / cos x</li>
<li>Si deux angles sont complémentaires (somme 90°) : sin x = cos(90° − x).</li></ul>
<h4>Valeurs remarquables</h4>
<table class="table"><tr><th></th><th>30°</th><th>45°</th><th>60°</th></tr><tr><td>cos</td><td>√3/2</td><td>√2/2</td><td>1/2</td></tr><tr><td>sin</td><td>1/2</td><td>√2/2</td><td>√3/2</td></tr><tr><td>tan</td><td>√3/3</td><td>1</td><td>√3</td></tr></table>
<h4>Exemples</h4>
<div class="ex">BC = 10 cm et B̂ = 30°. AC = BC × sin 30° = 10 × 1/2 = <b>5 cm</b>.<br>Si cos x = 3/5 : sin² x = 1 − 9/25 = 16/25, donc sin x = 4/5 et tan x = 4/3.</div>
<h4>Avec la calculatrice</h4>
<p>Vérifie qu'elle est en mode <b>degrés</b> (DEG). Pour trouver l'angle : touches cos⁻¹, sin⁻¹, tan⁻¹.</p>`},
'3e|Mathématiques|8':{dur:8,html:`<h4>Vocabulaire</h4>
<ul><li><b>Angle au centre</b> : son sommet est le centre O du cercle.</li>
<li><b>Angle inscrit</b> : son sommet est sur le cercle et ses côtés coupent le cercle.</li></ul>
<div class="box">Un angle inscrit mesure la <b>moitié</b> de l'angle au centre qui intercepte le même arc.<br>Deux angles inscrits qui interceptent le même arc sont <b>égaux</b>.</div>
<div class="ex">A, B, M sur un cercle de centre O, avec AÔB = 110°. Alors AM̂B = 55°.</div>
<h4>Cas particulier : le demi-cercle</h4>
<p>Si [AB] est un diamètre et M un point du cercle (M ≠ A, B), alors AM̂B = 90° : le triangle AMB est rectangle en M.</p>
<h4>Polygones réguliers</h4>
<p>Un polygone régulier à n côtés est inscrit dans un cercle. Son angle au centre vaut 360°/n.</p>
<div class="ex">Hexagone régulier : 360°/6 = 60°. Chaque triangle OAB est équilatéral, donc le côté est égal au rayon.<br>Pentagone régulier : 360°/5 = 72°.</div>
<h4>Quadrilatère inscriptible</h4>
<p>Si ABCD est inscrit dans un cercle, ses angles opposés sont <b>supplémentaires</b> (somme 180°).</p>`},
'3e|Mathématiques|9':{dur:9,html:`<p>Dans un repère orthonormé (O, I, J), on travaille avec les coordonnées.</p>
<div class="box">A(xA ; yA), B(xB ; yB)<br>Vecteur AB : (xB − xA ; yB − yA)<br>Milieu I de [AB] : ((xA + xB)/2 ; (yA + yB)/2)<br>Distance AB = √((xB − xA)² + (yB − yA)²)</div>
<div class="ex">A(1 ; 2), B(5 ; −1). Vecteur AB (4 ; −3). AB = √(16 + 9) = 5. Milieu I(3 ; 0,5).</div>
<h4>Égalité et somme de vecteurs</h4>
<ul><li>Deux vecteurs sont égaux s'ils ont les mêmes coordonnées.</li>
<li>Relation de Chasles : AB + BC = AC.</li>
<li>ABCD est un <b>parallélogramme</b> ⇔ vecteur AB = vecteur DC.</li></ul>
<h4>Colinéarité</h4>
<p>u(x ; y) et v(x' ; y') sont colinéaires ⇔ <b>xy' − x'y = 0</b>. Cela sert à prouver un alignement ou un parallélisme.</p>
<div class="ex">u(2 ; 3) et v(4 ; 6) : 2×6 − 4×3 = 0 → colinéaires.</div>
<h4>Orthogonalité (repère orthonormé)</h4>
<p>u(x ; y) ⊥ v(x' ; y') ⇔ <b>xx' + yy' = 0</b>.</p>
<div class="ex">u(3 ; −2) et v(4 ; 6) : 12 − 12 = 0 → orthogonaux.</div>`},
'3e|Mathématiques|10':{dur:9,html:`<p>Une droite non parallèle à l'axe des ordonnées a une équation de la forme <b>y = ax + b</b> (a : coefficient directeur, b : ordonnée à l'origine). Une droite parallèle à l'axe des ordonnées a pour équation x = k.</p>
<h4>Équation d'une droite passant par deux points</h4>
<div class="ex">A(1 ; 3) et B(3 ; 7). a = (7 − 3)/(3 − 1) = 2. Avec A : 3 = 2 × 1 + b, donc b = 1. (AB) : y = 2x + 1.</div>
<h4>Avec un point et un vecteur directeur</h4>
<p>M(x ; y) ∈ (D) ⇔ vecteur AM et u sont colinéaires.</p>
<div class="ex">A(2 ; 1), u(1 ; 3) : AM(x − 2 ; y − 1). 3(x − 2) − 1(y − 1) = 0 ⇔ 3x − y − 5 = 0 ⇔ y = 3x − 5.</div>
<h4>Parallèles et perpendiculaires</h4>
<div class="box">(D) ∥ (D') ⇔ a = a'<br>(D) ⊥ (D') ⇔ a × a' = −1 (repère orthonormé)</div>
<div class="ex">Parallèle à y = 2x + 1 passant par C(0 ; −4) : y = 2x − 4.<br>Perpendiculaire à y = 2x + 1 : coefficient −1/2.</div>
<h4>Vérifier qu'un point est sur une droite</h4>
<p>On remplace x et y : E(2 ; 5) et (D) : y = 2x + 1 → 2 × 2 + 1 = 5 ✔ donc E ∈ (D).</p>`},
'3e|Mathématiques|11':{dur:9,html:`<h4>Les solides du programme</h4>
<table class="table"><tr><th>Solide</th><th>Volume</th></tr>
<tr><td>Pyramide</td><td>V = (aire de la base × hauteur) ÷ 3</td></tr>
<tr><td>Cône de révolution</td><td>V = (π r² × h) ÷ 3</td></tr>
<tr><td>Cylindre</td><td>V = π r² × h</td></tr>
<tr><td>Sphère / boule</td><td>Aire = 4π r² ; V = (4/3) π r³</td></tr></table>
<h4>Pyramide régulière</h4>
<p>Sa base est un polygone régulier ; la hauteur tombe au centre de la base. On utilise souvent <b>Pythagore</b> pour trouver la hauteur ou l'apothème.</p>
<div class="ex">Pyramide à base carrée de côté 6 cm et de hauteur 4 cm : V = 36 × 4 ÷ 3 = <b>48 cm³</b>.</div>
<h4>Cône</h4>
<div class="ex">r = 3 cm, h = 4 cm. Génératrice g = √(9 + 16) = 5 cm. V = π × 9 × 4 ÷ 3 = 12π ≈ 37,7 cm³.</div>
<h4>Section par un plan parallèle à la base</h4>
<p>On obtient une pyramide (ou un cône) <b>réduite</b> de coefficient k (0 < k < 1).</p>
<div class="box">Longueurs × k ; aires × k² ; volumes × k³</div>
<div class="ex">On coupe un cône de volume 270 cm³ à mi-hauteur (k = 1/2) : petit cône = 270 × 1/8 = 33,75 cm³.</div>
<p>La partie restante s'appelle un <b>tronc</b> de pyramide ou de cône : son volume = grand volume − petit volume.</p>`},
'3e|Mathématiques|12':{dur:7,html:`<p>L'épreuve de mathématiques du BFEM comporte en général des <b>exercices d'activités numériques</b> et des <b>exercices d'activités géométriques</b>, notés sur 20.</p>
<h4>Avant de commencer</h4>
<ul><li>Lis tout le sujet (5 minutes) et commence par l'exercice où tu es le plus à l'aise.</li>
<li>Repère les questions enchaînées : « en déduire » signifie qu'on utilise le résultat précédent.</li>
<li>Si tu bloques sur une question, admets le résultat et continue.</li></ul>
<h4>Rédiger proprement</h4>
<ul><li>Cite la propriété : « D'après le théorème de Thalès… », « D'après la réciproque de Pythagore… ».</li>
<li>Écris les calculs, pas seulement le résultat.</li>
<li>Termine par une phrase de conclusion et l'unité (cm, cm², cm³, F…).</li>
<li>Fais une figure <b>soignée</b> et codée, avec la règle et le compas.</li></ul>
<h4>Les questions qui reviennent souvent</h4>
<ul><li>Simplifier des racines carrées, rendre rationnel un dénominateur.</li>
<li>Développer, factoriser, résoudre une équation produit nul.</li>
<li>Résoudre un système et l'appliquer à un problème concret.</li>
<li>Statistiques : moyenne, médiane, mode, diagramme.</li>
<li>Thalès, trigonométrie, repère : distance, milieu, équation de droite.</li>
<li>Pyramide ou cône : volume et réduction.</li></ul>
<div class="box">Garde 10 minutes à la fin pour te relire : signes, unités, réponses aux questions.</div>`}
},
bank:{'3e|Mathématiques':[
 ["√72 simplifié s'écrit :",["8√9","6√2","3√8","36√2"],1,"72 = 36 × 2, donc √72 = 6√2."],
 ["√(9 + 16) est égal à :",["7","5","25","√7"],1,"√(9 + 16) = √25 = 5 (et non 3 + 4)."],
 ["5/√3 avec dénominateur rationnel :",["5√3","5√3/3","√15/5","15/√3"],1,"On multiplie en haut et en bas par √3 : 5√3/3."],
 ["3√50 − √8 = ?",["13√2","3√42","17√2","15√2"],0,"15√2 − 2√2 = 13√2."],
 ["(2x + 3)² développé :",["4x² + 9","4x² + 6x + 9","4x² + 12x + 9","2x² + 12x + 9"],2,"(a + b)² = a² + 2ab + b² : 4x² + 12x + 9."],
 ["x² − 49 factorisé :",["(x − 7)²","(x − 7)(x + 7)","(x − 49)(x + 1)","x(x − 49)"],1,"a² − b² = (a − b)(a + b)."],
 ["6x² − 9x factorisé :",["3(2x² − 3x)","3x(2x − 3)","x(6x − 9x)","6x(x − 9)"],1,"Le facteur commun est 3x."],
 ["(3x + 1)(3x − 1) = ?",["9x² − 1","9x² + 1","3x² − 1","9x² − 6x − 1"],0,"(a + b)(a − b) = a² − b²."],
 ["Solution de 3x − 7 = x + 5 :",["x = 3","x = 6","x = −6","x = 1"],1,"2x = 12 donc x = 6."],
 ["Solutions de (2x − 3)(x + 4) = 0 :",["3/2 et −4","−3/2 et 4","3 et 4","2/3 et −4"],0,"2x − 3 = 0 ⇔ x = 3/2 ; x + 4 = 0 ⇔ x = −4."],
 ["Solution de −2x + 1 ≤ 7 :",["x ≤ −3","x ≥ −3","x ≥ 3","x ≤ 3"],1,"−2x ≤ 6 ; on divise par −2 et on change le sens : x ≥ −3."],
 ["|x − 2| = 3 a pour solutions :",["5 seulement","5 et −1","−5 et 1","1 et 5"],1,"x − 2 = 3 ou x − 2 = −3."],
 ["Solution de { x + y = 10 ; 2x − y = 5 } :",["(5 ; 5)","(3 ; 7)","(4 ; 6)","(6 ; 4)"],0,"On additionne : 3x = 15, x = 5 puis y = 5."],
 ["Graphiquement, la solution d'un système correspond à :",["l'origine du repère","le point d'intersection des deux droites","la pente","l'ordonnée à l'origine"],1,"Chaque équation est une droite ; la solution est leur point commun."],
 ["f affine avec f(1) = 5 et f(3) = 9. Alors f(x) = ",["2x + 3","3x + 2","4x + 1","2x + 5"],0,"a = 4/2 = 2, puis b = 5 − 2 = 3."],
 ["La représentation d'une application linéaire est :",["une droite passant par l'origine","une parabole","une droite parallèle à l'axe des abscisses","un cercle"],0,"f(x) = ax : droite passant par O."],
 ["f(x) = −3x + 2 est :",["croissante","décroissante","constante","linéaire"],1,"a = −3 < 0 : décroissante."],
 ["Notes 8 (3 élèves), 10 (5), 12 (8), 15 (4). La moyenne est :",["11","11,5","12","10,5"],1,"230 ÷ 20 = 11,5."],
 ["Dans la même série, le mode est :",["8","10","12","15"],2,"12 a le plus grand effectif (8)."],
 ["Fréquence d'une valeur d'effectif 8 sur 20 :",["8 %","20 %","40 %","80 %"],2,"8 ÷ 20 = 0,4 = 40 %."],
 ["Dans un diagramme circulaire, une fréquence de 25 % correspond à :",["25°","45°","90°","180°"],2,"0,25 × 360° = 90°."],
 ["(MN) ∥ (BC), AM = 3, AB = 5, AC = 7,5. AN = ?",["4,5","4","5","12,5"],0,"3/5 = AN/7,5 donc AN = 4,5."],
 ["Pour prouver que (MN) ∥ (BC), on utilise :",["Pythagore","la réciproque de Thalès","la trigonométrie","les angles inscrits"],1,"Rapports égaux + même ordre ⇒ parallèles."],
 ["Dans ABC rectangle en A, cos B̂ = ",["AC/BC","AB/BC","AC/AB","BC/AB"],1,"Adjacent sur hypoténuse."],
 ["sin 30° = ",["√3/2","1/2","√2/2","1"],1,"Valeur remarquable : sin 30° = 1/2."],
 ["Si cos x = 3/5 (x aigu), alors sin x = ",["4/5","2/5","5/3","3/4"],0,"sin² x = 1 − 9/25 = 16/25."],
 ["tan 45° = ",["0","√2/2","1","√3"],2,"Le triangle rectangle isocèle a deux côtés égaux."],
 ["Un angle au centre mesure 110°. L'angle inscrit qui intercepte le même arc mesure :",["110°","220°","55°","70°"],2,"L'angle inscrit vaut la moitié de l'angle au centre."],
 ["Angle inscrit dans un demi-cercle :",["45°","60°","90°","180°"],2,"Il intercepte un diamètre : c'est un angle droit."],
 ["Angle au centre d'un hexagone régulier :",["60°","72°","90°","120°"],0,"360° ÷ 6 = 60°."],
 ["A(1 ; 2), B(5 ; −1). La distance AB est :",["5","7","√7","25"],0,"√(4² + 3²) = √25 = 5."],
 ["Milieu de A(2 ; 4) et B(6 ; −2) :",["(4 ; 1)","(8 ; 2)","(4 ; 3)","(2 ; −3)"],0,"((2 + 6)/2 ; (4 − 2)/2) = (4 ; 1)."],
 ["u(2 ; 3) et v(4 ; 6) sont :",["orthogonaux","colinéaires","ni l'un ni l'autre","égaux"],1,"2×6 − 4×3 = 0."],
 ["u(3 ; −2) et v(4 ; 6) sont :",["colinéaires","orthogonaux","égaux","opposés"],1,"3×4 + (−2)×6 = 0."],
 ["Équation de la droite passant par A(1 ; 3) et B(3 ; 7) :",["y = 2x + 1","y = x + 2","y = 4x − 1","y = 2x + 3"],0,"a = 4/2 = 2 ; b = 3 − 2 = 1."],
 ["Une droite perpendiculaire à y = 2x + 1 a pour coefficient directeur :",["2","−2","1/2","−1/2"],3,"a × a' = −1 donc a' = −1/2."],
 ["Volume d'une pyramide à base carrée de 6 cm et de hauteur 4 cm :",["144 cm³","48 cm³","72 cm³","24 cm³"],1,"36 × 4 ÷ 3 = 48 cm³."],
 ["Volume d'une boule de rayon r :",["4πr²","(4/3)πr³","πr²h","(1/3)πr²h"],1,"V = (4/3)πr³."],
 ["On réduit un solide de coefficient k = 1/2. Son volume est multiplié par :",["1/2","1/4","1/8","2"],2,"Les volumes sont multipliés par k³."],
 ["Cône de rayon 3 cm et de hauteur 4 cm : la génératrice mesure :",["5 cm","7 cm","√7 cm","12 cm"],0,"Pythagore : √(9 + 16) = 5."]
]}
});
