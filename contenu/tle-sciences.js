/* Sunu Jàng — Terminale · Mathématiques, SVT, Sciences physiques, Informatique
   Programmes du second cycle (Sénégal), niveau des séries scientifiques (S2).
   Préparation au baccalauréat. */
(window.SJ_CONTENT=window.SJ_CONTENT||[]).push({
chapters:{
'Tle|Mathématiques':[
 'Limites et continuité',
 'Dérivation et étude de fonctions',
 'Fonction logarithme népérien',
 'Fonction exponentielle',
 'Primitives et calcul intégral',
 'Équations différentielles',
 'Suites numériques',
 'Nombres complexes',
 'Dénombrement et probabilités',
 'Statistiques à deux variables',
 'Réussir l\'épreuve du bac'
],
'Tle|SVT':[
 'Le neurone et le message nerveux',
 'La synapse et l\'intégration nerveuse',
 'Le muscle squelettique',
 'La régulation de la glycémie',
 'La régulation hormonale de la reproduction',
 'L\'immunologie',
 'La méiose et la fécondation',
 'Les lois statistiques de l\'hérédité'
],
'Tle|Sciences physiques':[
 'Cinématique du point',
 'Les lois de Newton',
 'Mouvements dans les champs uniformes',
 'Gravitation et satellites',
 'Les oscillateurs mécaniques',
 'Le dipôle RC et les oscillations électriques',
 'Interférences et nature de la lumière',
 'La radioactivité',
 'Alcools, acides carboxyliques et dérivés',
 'Cinétique chimique',
 'Acides et bases faibles, dosages'
],
'Tle|Informatique':[
 'Algorithmique : variables, conditions, boucles',
 'Tableaux, fonctions et tris',
 'Programmer en Python',
 'Bases de données et SQL',
 'Réseaux et Internet',
 'Créer une page web (HTML et CSS)'
]},
lessons:{
'Tle|Mathématiques|0':{dur:9,html:`<h4>Limites de référence</h4>
<ul><li>En +∞ : xⁿ → +∞ ; 1/x → 0 ; √x → +∞.</li>
<li>En 0⁺ : 1/x → +∞ ; en 0⁻ : 1/x → −∞.</li></ul>
<h4>Les formes indéterminées</h4>
<div class="box">∞ − ∞ ; 0 × ∞ ; ∞/∞ ; 0/0</div>
<ul><li><b>Polynôme ou fraction rationnelle en ±∞</b> : limite du terme de plus haut degré (ou du quotient des termes de plus haut degré).<br>lim (3x² − x)/(x² + 1) en +∞ = 3.</li>
<li><b>0/0</b> : factoriser puis simplifier, ou utiliser la quantité conjuguée, ou reconnaître un nombre dérivé.</li></ul>
<h4>Asymptotes</h4>
<ul><li>lim f(x) = ±∞ quand x → a : asymptote verticale x = a.</li>
<li>lim f(x) = b quand x → ±∞ : asymptote horizontale y = b.</li>
<li>lim [f(x) − (ax + b)] = 0 : asymptote oblique y = ax + b.</li></ul>
<h4>Continuité et théorème des valeurs intermédiaires</h4>
<p>Si f est continue et <b>strictement monotone</b> sur [a ; b] et si f(a) et f(b) sont de signes contraires, l'équation f(x) = 0 admet une <b>unique</b> solution α dans ]a ; b[. On l'encadre par dichotomie ou balayage.</p>`},
'Tle|Mathématiques|1':{dur:10,html:`<h4>Dérivées usuelles</h4>
<table class="table"><tr><th>f(x)</th><th>f'(x)</th></tr><tr><td>xⁿ</td><td>n xⁿ⁻¹</td></tr><tr><td>1/x</td><td>−1/x²</td></tr><tr><td>√x</td><td>1/(2√x)</td></tr><tr><td>sin x</td><td>cos x</td></tr><tr><td>cos x</td><td>−sin x</td></tr></table>
<h4>Opérations</h4>
<div class="box">(uv)' = u'v + uv'<br>(u/v)' = (u'v − uv')/v²<br>(uⁿ)' = n u' uⁿ⁻¹<br>(f∘g)' = g' × f'∘g</div>
<h4>Applications</h4>
<ul><li>Signe de f' → sens de variation de f.</li>
<li>f' s'annule en changeant de signe → extremum.</li>
<li>Tangente en a : <b>y = f'(a)(x − a) + f(a)</b>.</li></ul>
<h4>Plan d'étude d'une fonction</h4>
<ol><li>Domaine de définition.</li><li>Limites aux bornes et asymptotes.</li><li>Dérivée et son signe.</li><li>Tableau de variation.</li><li>Points particuliers, tangentes, position relative courbe/asymptote.</li><li>Tracé de la courbe.</li></ol>
<p>Centre de symétrie Ω(a ; b) : f(2a − x) + f(x) = 2b. Axe x = a : f(2a − x) = f(x).</p>`},
'Tle|Mathématiques|2':{dur:9,html:`<p>La fonction <b>ln</b> est définie sur ]0 ; +∞[ ; c'est la primitive de 1/x qui s'annule en 1.</p>
<div class="box">ln(ab) = ln a + ln b ; ln(a/b) = ln a − ln b ; ln(aⁿ) = n ln a ; ln 1 = 0 ; ln e = 1</div>
<ul><li>(ln x)' = 1/x ; (ln u)' = u'/u (u > 0).</li>
<li>ln est strictement croissante : ln a < ln b ⇔ a < b.</li></ul>
<h4>Limites</h4>
<p>lim ln x = +∞ en +∞ ; lim ln x = −∞ en 0⁺.<br><b>Croissances comparées</b> : lim (ln x)/x = 0 en +∞ ; lim x ln x = 0 en 0⁺ ; lim ln(1+x)/x = 1 en 0.</p>
<h4>Équations et inéquations</h4>
<div class="ex">ln(2x − 1) = ln 3 ⇔ 2x − 1 = 3 et 2x − 1 > 0 ⇔ x = 2.<br>ln x ≤ 2 ⇔ 0 < x ≤ e².</div>
<div class="box">Toujours commencer par l'ensemble de validité (ce qui est dans le ln doit être &gt; 0).</div>`},
'Tle|Mathématiques|3':{dur:9,html:`<p>La fonction <b>exp</b> est la réciproque de ln : y = eˣ ⇔ x = ln y (y > 0). Elle est définie sur ℝ, strictement positive et croissante.</p>
<div class="box">e^(a+b) = eᵃ × eᵇ ; e^(−a) = 1/eᵃ ; (eᵃ)ⁿ = e^(na) ; ln(eˣ) = x ; e^(ln x) = x (x > 0)</div>
<ul><li>(eˣ)' = eˣ ; (eᵘ)' = u' eᵘ.</li>
<li>lim eˣ = +∞ en +∞ ; lim eˣ = 0 en −∞.</li>
<li>Croissances comparées : lim eˣ/x = +∞ en +∞ ; lim x eˣ = 0 en −∞ ; lim (eˣ − 1)/x = 1 en 0.</li></ul>
<div class="ex">e^(2x) − 3eˣ + 2 = 0 : on pose X = eˣ > 0 → X² − 3X + 2 = 0 → X = 1 ou X = 2 → x = 0 ou x = ln 2.</div>`},
'Tle|Mathématiques|4':{dur:9,html:`<h4>Primitives usuelles</h4>
<table class="table"><tr><th>f</th><th>F (primitive)</th></tr><tr><td>xⁿ (n ≠ −1)</td><td>xⁿ⁺¹/(n+1)</td></tr><tr><td>1/x</td><td>ln|x|</td></tr><tr><td>u'/u</td><td>ln|u|</td></tr><tr><td>u' uⁿ</td><td>uⁿ⁺¹/(n+1)</td></tr><tr><td>u' eᵘ</td><td>eᵘ</td></tr><tr><td>cos x</td><td>sin x</td></tr><tr><td>sin x</td><td>−cos x</td></tr></table>
<h4>L'intégrale</h4>
<div class="box">∫ₐᵇ f(x) dx = F(b) − F(a)</div>
<p>Si f ≥ 0 sur [a ; b], l'intégrale est l'<b>aire</b> (en unités d'aire) entre la courbe, l'axe des abscisses et les droites x = a et x = b.</p>
<h4>Propriétés</h4>
<ul><li>Linéarité, relation de Chasles.</li><li>Positivité : si f ≥ 0 et a ≤ b, l'intégrale est ≥ 0.</li><li>Valeur moyenne : μ = (1/(b − a)) ∫ₐᵇ f(x) dx.</li></ul>
<h4>Intégration par parties</h4>
<div class="box">∫ₐᵇ u v' = [uv]ₐᵇ − ∫ₐᵇ u' v</div>
<div class="ex">∫₀¹ x eˣ dx : u = x, v' = eˣ → [x eˣ]₀¹ − ∫₀¹ eˣ dx = e − (e − 1) = 1.</div>`},
'Tle|Mathématiques|5':{dur:7,html:`<h4>y' = ay</h4>
<p>Les solutions sont <b>y = C e^(ax)</b>, C réel. Avec une condition initiale, C est unique.</p>
<div class="ex">y' = −2y et y(0) = 3 → y = 3e^(−2x).</div>
<h4>y' = ay + b (a ≠ 0)</h4>
<p>y = C e^(ax) − b/a.</p>
<h4>y'' + ω² y = 0</h4>
<p>Solutions : <b>y = A cos(ωx) + B sin(ωx)</b> ; on peut aussi écrire y = R cos(ωx + φ). C'est l'équation des oscillateurs en physique.</p>
<h4>y'' + a y' + b y = 0</h4>
<p>Équation caractéristique r² + ar + b = 0 :</p>
<ul><li>Δ > 0 : y = A e^(r₁x) + B e^(r₂x).</li><li>Δ = 0 : y = (Ax + B) e^(r x).</li><li>Δ < 0, r = α ± iβ : y = e^(αx)(A cos βx + B sin βx).</li></ul>`},
'Tle|Mathématiques|6':{dur:9,html:`<table class="table"><tr><th></th><th>Arithmétique</th><th>Géométrique</th></tr>
<tr><td>Définition</td><td>uₙ₊₁ = uₙ + r</td><td>uₙ₊₁ = q × uₙ</td></tr>
<tr><td>Terme général</td><td>uₙ = u₀ + n r</td><td>uₙ = u₀ × qⁿ</td></tr>
<tr><td>Somme</td><td>(nombre de termes) × (1er + dernier)/2</td><td>1er terme × (1 − q^(nombre de termes))/(1 − q)</td></tr></table>
<h4>Limites</h4>
<p>Si −1 < q < 1, qⁿ → 0. Si q > 1, qⁿ → +∞.</p>
<h4>Suites monotones et bornées</h4>
<p>Une suite croissante et majorée (ou décroissante et minorée) <b>converge</b>.</p>
<h4>Le raisonnement par récurrence</h4>
<ol><li>Initialisation : la propriété est vraie au premier rang.</li><li>Hérédité : si elle est vraie au rang n, elle l'est au rang n + 1.</li><li>Conclusion : elle est vraie pour tout n.</li></ol>
<h4>Suite auxiliaire</h4>
<div class="ex">uₙ₊₁ = 0,5 uₙ + 3. On pose vₙ = uₙ − 6 : vₙ₊₁ = 0,5 vₙ, donc v est géométrique de raison 0,5 et uₙ = 6 + (u₀ − 6) × 0,5ⁿ → 6.</div>`},
'Tle|Mathématiques|7':{dur:10,html:`<p>Un nombre complexe s'écrit <b>z = a + ib</b> avec i² = −1. a = Re(z), b = Im(z). Conjugué : z̄ = a − ib.</p>
<h4>Module et argument</h4>
<div class="box">|z| = √(a² + b²) ; z = r(cos θ + i sin θ) = r e^(iθ)<br>|zz'| = |z||z'| ; arg(zz') = arg z + arg z' [2π]</div>
<div class="ex">z = 1 + i : |z| = √2, arg z = π/4, donc z = √2 e^(iπ/4).</div>
<h4>Formule de Moivre</h4>
<p>(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ.</p>
<h4>Équation du 2nd degré az² + bz + c = 0 (réels)</h4>
<p>Si Δ < 0 : z = (−b ± i√(−Δ))/(2a).</p>
<h4>Géométrie</h4>
<ul><li>AB = |z_B − z_A|.</li><li>(AB, AC) = arg((z_C − z_A)/(z_B − z_A)).</li><li>Si (z_C − z_A)/(z_B − z_A) est réel : A, B, C alignés ; imaginaire pur : (AB) ⊥ (AC).</li></ul>
<h4>Transformations</h4>
<p>Translation z' = z + b ; homothétie z' − ω = k(z − ω) ; rotation z' − ω = e^(iθ)(z − ω) ; similitude directe z' = az + b (rapport |a|, angle arg a).</p>`},
'Tle|Mathématiques|8':{dur:9,html:`<h4>Dénombrement</h4>
<table class="table"><tr><th>Situation</th><th>Nombre</th></tr><tr><td>p-listes (ordre, répétition)</td><td>nᵖ</td></tr><tr><td>Arrangements (ordre, sans répétition)</td><td>Aₙᵖ = n!/(n − p)!</td></tr><tr><td>Permutations</td><td>n!</td></tr><tr><td>Combinaisons (sans ordre)</td><td>Cₙᵖ = n!/(p!(n − p)!)</td></tr></table>
<div class="ex">Choisir 3 délégués parmi 10 élèves : C₁₀³ = 120.</div>
<h4>Probabilités</h4>
<ul><li>Équiprobabilité : P(A) = cardinal A / cardinal Ω.</li><li>P(Ā) = 1 − P(A) ; P(A ∪ B) = P(A) + P(B) − P(A ∩ B).</li><li>Probabilité conditionnelle : P_B(A) = P(A ∩ B)/P(B).</li><li>Indépendance : P(A ∩ B) = P(A) × P(B).</li><li>Formule des probabilités totales avec un arbre pondéré.</li></ul>
<h4>Variable aléatoire</h4>
<p>Espérance E(X) = Σ xᵢ pᵢ ; variance V(X) = Σ xᵢ² pᵢ − E(X)².</p>
<h4>Loi binomiale</h4>
<div class="box">n épreuves indépendantes, succès de probabilité p : P(X = k) = Cₙᵏ pᵏ (1 − p)ⁿ⁻ᵏ ; E(X) = np.</div>`},
'Tle|Mathématiques|9':{dur:7,html:`<p>On étudie deux caractères X et Y sur une même population : points (xᵢ ; yᵢ), c'est un <b>nuage de points</b>. Le <b>point moyen</b> est G(x̄ ; ȳ).</p>
<div class="box">Covariance : cov(X,Y) = (1/n) Σ xᵢyᵢ − x̄ ȳ<br>Variance : V(X) = (1/n) Σ xᵢ² − x̄²</div>
<h4>Droite de régression de Y en X</h4>
<p>y = ax + b avec <b>a = cov(X,Y)/V(X)</b> et b = ȳ − a x̄ (elle passe par G).</p>
<h4>Coefficient de corrélation linéaire</h4>
<p>r = cov(X,Y)/(σ_X σ_Y), compris entre −1 et 1. Si |r| est proche de 1 (en pratique |r| ≥ 0,87 selon la convention souvent utilisée), l'ajustement affine est justifié.</p>
<p>La droite sert à faire des <b>prévisions</b> (estimer y pour une valeur de x).</p>`},
'Tle|Mathématiques|10':{dur:6,html:`<p>L'épreuve comporte généralement des exercices (complexes, probabilités, suites ou statistiques) et un <b>problème</b> d'étude de fonction (avec ln ou exp, calcul d'aire, suite associée).</p>
<ul><li>Lis tout le sujet ; commence par ce que tu maîtrises le mieux, mais traite les questions d'un même exercice dans l'ordre.</li>
<li>Dans le problème, les questions sont liées : un résultat donné (« montrer que… ») peut être utilisé même si tu ne l'as pas démontré.</li>
<li>Justifie chaque limite, chaque signe de dérivée ; fais un tableau de variation complet.</li>
<li>Pour la courbe : repère soigné, unités respectées, asymptotes et tangentes tracées.</li>
<li>Une aire s'exprime en cm² : multiplie par l'unité d'aire.</li></ul>
<div class="box">Les points se gagnent sur la rédaction : propriété citée, calcul visible, conclusion encadrée.</div>`},
'Tle|SVT|0':{dur:8,html:`<p>Le <b>neurone</b> comprend un corps cellulaire, des dendrites et un axone (parfois entouré d'une gaine de myéline).</p>
<h4>Le potentiel de repos</h4>
<p>Au repos, la face interne de la membrane est négative par rapport à l'extérieur : environ <b>−70 mV</b>. Cette polarité est due à une répartition inégale des ions Na⁺ (plus nombreux à l'extérieur) et K⁺ (plus nombreux à l'intérieur), entretenue par la <b>pompe Na⁺/K⁺</b> qui consomme de l'ATP.</p>
<h4>Le potentiel d'action</h4>
<ul><li>Si la stimulation atteint le <b>seuil</b>, la membrane se dépolarise brusquement (entrée de Na⁺) puis se repolarise (sortie de K⁺).</li>
<li>Loi du « <b>tout ou rien</b> » : l'amplitude du potentiel d'action est constante.</li>
<li>L'intensité du stimulus est codée par la <b>fréquence</b> des potentiels d'action.</li>
<li>Période réfractaire : la fibre est momentanément inexcitable.</li></ul>
<p>La propagation est plus rapide dans les fibres <b>myélinisées</b> (conduction saltatoire, de nœud de Ranvier en nœud de Ranvier) et de gros diamètre.</p>`},
'Tle|SVT|1':{dur:7,html:`<p>La <b>synapse</b> est la zone de contact entre deux neurones (ou un neurone et un muscle : plaque motrice).</p>
<h4>La transmission synaptique (chimique)</h4>
<ol><li>Le potentiel d'action arrive dans la terminaison présynaptique.</li><li>Entrée de Ca²⁺, libération par exocytose d'un <b>neurotransmetteur</b> (ex. : acétylcholine) dans la fente synaptique.</li><li>Fixation sur des récepteurs postsynaptiques → potentiel postsynaptique.</li><li>Élimination du neurotransmetteur (enzyme, recapture).</li></ol>
<ul><li>Synapse excitatrice → PPSE (dépolarisation).</li><li>Synapse inhibitrice → PPSI (hyperpolarisation).</li></ul>
<h4>L'intégration</h4>
<p>Le neurone postsynaptique fait la somme des messages : <b>sommation spatiale</b> (plusieurs synapses en même temps) et <b>temporelle</b> (messages rapprochés). Un potentiel d'action naît si le seuil est atteint.</p>
<p>Drogues et médicaments agissent souvent au niveau des synapses.</p>`},
'Tle|SVT|2':{dur:7,html:`<p>Le muscle squelettique est formé de <b>fibres musculaires</b> contenant des myofibrilles. L'unité contractile est le <b>sarcomère</b>, délimité par deux stries Z.</p>
<h4>Le mécanisme de la contraction</h4>
<ul><li>Les filaments fins d'<b>actine</b> glissent entre les filaments épais de <b>myosine</b> : le sarcomère raccourcit.</li><li>Le signal est l'entrée du Ca²⁺ libéré par le réticulum sarcoplasmique.</li><li>L'énergie vient de l'hydrolyse de l'<b>ATP</b>.</li></ul>
<h4>La régénération de l'ATP</h4>
<table class="table"><tr><th>Voie</th><th>Caractères</th></tr><tr><td>Phosphocréatine</td><td>très rapide, de courte durée</td></tr><tr><td>Fermentation lactique</td><td>sans O₂, rapide, produit de l'acide lactique</td></tr><tr><td>Respiration</td><td>avec O₂, lente à démarrer, très rentable (environ 36 ATP par glucose)</td></tr></table>`},
'Tle|SVT|3':{dur:7,html:`<p>La <b>glycémie</b> (taux de glucose sanguin) est maintenue autour de <b>1 g/L</b> à jeun.</p>
<h4>Les acteurs</h4>
<ul><li>Le <b>pancréas</b> endocrine (îlots de Langerhans) : cellules β → <b>insuline</b> ; cellules α → <b>glucagon</b>.</li>
<li>Le <b>foie</b> : stocke le glucose sous forme de glycogène et le libère.</li></ul>
<table class="table"><tr><th>Situation</th><th>Hormone</th><th>Effet</th></tr><tr><td>Hyperglycémie (après repas)</td><td>insuline (hypoglycémiante)</td><td>stockage du glucose (glycogénogenèse), utilisation par les cellules</td></tr><tr><td>Hypoglycémie (jeûne, effort)</td><td>glucagon (hyperglycémiant)</td><td>libération du glucose par le foie (glycogénolyse)</td></tr></table>
<h4>Le diabète</h4>
<p>Type 1 : absence d'insuline (destruction des cellules β), traitement par insuline. Type 2 : insuline moins efficace, lié à l'alimentation et à la sédentarité.</p>`},
'Tle|SVT|4':{dur:8,html:`<h4>Chez l'homme</h4>
<p>L'hypothalamus sécrète la <b>GnRH</b> → l'hypophyse sécrète <b>FSH</b> et <b>LH</b> → les testicules produisent spermatozoïdes et <b>testostérone</b>. La testostérone exerce un <b>rétrocontrôle négatif</b> sur l'hypothalamus et l'hypophyse.</p>
<h4>Chez la femme</h4>
<ul><li><b>Phase folliculaire</b> : FSH → croissance d'un follicule qui sécrète des <b>œstrogènes</b>.</li>
<li>Pic d'œstrogènes → rétrocontrôle <b>positif</b> → <b>pic de LH</b> → <b>ovulation</b> (vers le 14e jour).</li>
<li><b>Phase lutéale</b> : le corps jaune sécrète œstrogènes et <b>progestérone</b> qui préparent l'utérus.</li>
<li>Sans fécondation, le corps jaune régresse, les hormones chutent → menstruation.</li></ul>
<p>En cas de grossesse, l'embryon sécrète l'<b>hCG</b> qui maintient le corps jaune (base des tests de grossesse).</p>
<p>La pilule contraceptive agit par rétrocontrôle négatif : elle bloque l'ovulation.</p>`},
'Tle|SVT|5':{dur:8,html:`<h4>Le soi et le non-soi</h4>
<p>Les cellules portent des marqueurs du <b>soi</b> (molécules du CMH / HLA). Tout élément étranger (antigène) est du <b>non-soi</b>.</p>
<h4>La réponse non spécifique</h4>
<p>Inflammation et phagocytose par les macrophages et granulocytes.</p>
<h4>La réponse spécifique</h4>
<ul><li><b>Immunité humorale</b> : les lymphocytes B, activés, deviennent des <b>plasmocytes</b> qui sécrètent des <b>anticorps</b>. Ceux-ci forment des complexes immuns avec l'antigène.</li>
<li><b>Immunité cellulaire</b> : les lymphocytes T8 deviennent des <b>T cytotoxiques</b> qui détruisent les cellules infectées.</li>
<li>Les <b>lymphocytes T4</b> (auxiliaires) coordonnent la réponse grâce à l'interleukine.</li></ul>
<h4>Mémoire et vaccination</h4>
<p>La réponse secondaire est plus rapide, plus ample et plus durable grâce aux cellules mémoire.</p>
<h4>Le sida</h4>
<p>Le VIH infecte les T4 : effondrement des défenses, maladies opportunistes.</p>`},
'Tle|SVT|6':{dur:8,html:`<p>La <b>méiose</b> transforme une cellule diploïde (2n) en 4 cellules haploïdes (n) : les gamètes.</p>
<ul><li><b>Division réductionnelle</b> : séparation des chromosomes homologues.</li><li><b>Division équationnelle</b> : séparation des chromatides.</li></ul>
<h4>Les brassages génétiques</h4>
<ul><li><b>Brassage interchromosomique</b> (anaphase I) : répartition aléatoire des homologues. Pour n paires : 2ⁿ gamètes différents.</li>
<li><b>Brassage intrachromosomique</b> (prophase I) : <b>crossing-over</b> entre chromatides homologues, qui recombine les gènes liés.</li></ul>
<h4>La fécondation</h4>
<p>Elle rétablit la diploïdie et réunit au hasard deux gamètes : elle amplifie la diversité.</p>
<div class="box">Cycle : 2n —méiose→ n (gamètes) —fécondation→ 2n (cellule-œuf).</div>`},
'Tle|SVT|7':{dur:9,html:`<h4>Monohybridisme</h4>
<p>Croisement de deux lignées pures différant par un caractère.</p>
<ul><li>F1 homogène : l'allèle exprimé est <b>dominant</b>.</li><li>F2 : <b>3/4</b> phénotype dominant, <b>1/4</b> récessif (dominance complète).</li><li>Codominance : F1 intermédiaire ; F2 : 1/4, 1/2, 1/4.</li></ul>
<h4>Le test-cross</h4>
<p>On croise un individu de phénotype dominant avec un homozygote récessif. Résultats 1/2 – 1/2 → l'individu testé était hétérozygote.</p>
<h4>Dihybridisme</h4>
<ul><li>Gènes <b>indépendants</b> : F2 en 9/16, 3/16, 3/16, 1/16 ; test-cross en 4 phénotypes à 25 %.</li><li>Gènes <b>liés</b> : au test-cross, phénotypes parentaux majoritaires et recombinés minoritaires (crossing-over).</li></ul>
<h4>Hérédité liée au sexe</h4>
<p>Gène porté par X : les résultats diffèrent selon le sexe et selon le sens du croisement (ex. : daltonisme, hémophilie, plus fréquents chez les garçons).</p>
<h4>Arbre généalogique</h4>
<p>Deux parents sains ayant un enfant malade → allèle récessif.</p>`},
'Tle|Sciences physiques|0':{dur:8,html:`<p>Dans un repère, la position d'un point M est donnée par le vecteur position OM.</p>
<div class="box">Vitesse : v = dOM/dt ; accélération : a = dv/dt</div>
<h4>Mouvements particuliers</h4>
<ul><li><b>Rectiligne uniforme</b> : a = 0 ; x = v t + x₀.</li>
<li><b>Rectiligne uniformément varié</b> : a constante ; v = a t + v₀ ; x = ½ a t² + v₀ t + x₀ ; v² − v₀² = 2a(x − x₀).</li>
<li><b>Circulaire uniforme</b> : vitesse de norme constante ; accélération centripète a = v²/R ; v = R ω.</li></ul>
<h4>Repère de Frenet</h4>
<p>a = (dv/dt) t + (v²/R) n : composante tangentielle et composante normale.</p>
<div class="ex">Une moto part du repos avec a = 2 m/s². Après 5 s : v = 10 m/s ; distance = ½ × 2 × 25 = 25 m.</div>`},
'Tle|Sciences physiques|1':{dur:8,html:`<ul><li><b>1re loi (principe d'inertie)</b> : dans un référentiel galiléen, si la somme des forces est nulle, le centre d'inertie est au repos ou en mouvement rectiligne uniforme.</li>
<li><b>2e loi (théorème du centre d'inertie)</b> : <b>ΣF = m a</b>.</li>
<li><b>3e loi (actions réciproques)</b> : F(A/B) = −F(B/A).</li></ul>
<h4>Méthode</h4>
<ol><li>Choisir le système et le référentiel (terrestre, supposé galiléen).</li><li>Faire le bilan des forces (poids, réaction, tension, frottements).</li><li>Appliquer ΣF = m a.</li><li>Projeter sur des axes bien choisis.</li></ol>
<div class="ex">Solide sur un plan incliné d'angle α sans frottement : a = g sin α.</div>
<h4>Théorème de l'énergie cinétique</h4>
<p>ΔEc = ΣW(forces), avec Ec = ½ m v².</p>`},
'Tle|Sciences physiques|2':{dur:8,html:`<h4>Dans le champ de pesanteur (projectile)</h4>
<p>ΣF = m g → a = g. Lancé avec v₀ faisant un angle α avec l'horizontale :</p>
<div class="box">x = v₀ cos α · t ; z = −½ g t² + v₀ sin α · t<br>Trajectoire parabolique : z = −g x²/(2 v₀² cos² α) + x tan α</div>
<p>Portée sur un sol horizontal : v₀² sin 2α / g (maximale pour α = 45°). Flèche (hauteur max) : v₀² sin² α / (2g).</p>
<h4>Dans un champ électrique uniforme</h4>
<p>F = qE, a = qE/m. Une particule chargée entrant perpendiculairement aux lignes de champ décrit une parabole (déflexion).</p>
<h4>Dans un champ magnétique uniforme</h4>
<p>Force de Lorentz F = q v ∧ B. Si v ⊥ B, mouvement <b>circulaire uniforme</b> de rayon <b>R = m v / (|q| B)</b>. Application : spectrographe de masse, cyclotron.</p>`},
'Tle|Sciences physiques|3':{dur:7,html:`<div class="box">Loi de la gravitation universelle : F = G m m' / d²<br>G = 6,67 × 10⁻¹¹ N·m²·kg⁻²</div>
<p>Champ de gravitation créé par la Terre à l'altitude h : g = G M / (R + h)² = g₀ R² / (R + h)².</p>
<h4>Satellite en orbite circulaire</h4>
<p>Dans le référentiel géocentrique, le mouvement est circulaire uniforme :</p>
<ul><li>v = √(G M / r) avec r = R + h.</li><li>Période T = 2π r / v, et <b>T²/r³ = 4π²/(G M)</b> (3e loi de Kepler).</li></ul>
<p>Un satellite <b>géostationnaire</b> tourne dans le plan de l'équateur, dans le même sens que la Terre, avec une période d'environ 24 h (en réalité un jour sidéral, environ 23 h 56 min) ; son altitude est d'environ 36 000 km.</p>`},
'Tle|Sciences physiques|4':{dur:8,html:`<h4>Le pendule élastique horizontal</h4>
<p>Masse m, ressort de raideur k, sans frottement : m ẍ + k x = 0, soit <b>ẍ + (k/m) x = 0</b>.</p>
<div class="box">x(t) = Xm cos(ω₀ t + φ) ; ω₀ = √(k/m) ; T₀ = 2π √(m/k)</div>
<p>Énergie mécanique conservée : E = ½ m v² + ½ k x² = ½ k Xm².</p>
<h4>Le pendule simple (petites oscillations)</h4>
<p>T₀ = 2π √(L/g) : la période ne dépend pas de la masse.</p>
<h4>Amortissement</h4>
<p>Avec des frottements, l'amplitude diminue : régime pseudo-périodique ou apériodique. L'énergie se dissipe en chaleur.</p>`},
'Tle|Sciences physiques|5':{dur:8,html:`<h4>Charge d'un condensateur (dipôle RC)</h4>
<p>q = C u ; i = dq/dt. Lors de la charge sous tension E : u(t) = E(1 − e^(−t/τ)) avec <b>τ = R C</b>. À t = τ, u = 63 % de E ; en 5τ, la charge est pratiquement complète.</p>
<p>Énergie stockée : E = ½ C u².</p>
<h4>La bobine</h4>
<p>u = r i + L di/dt ; elle s'oppose aux variations du courant (constante de temps τ = L/R).</p>
<h4>Oscillations électriques libres (circuit LC)</h4>
<div class="box">q̈ + q/(LC) = 0 ; ω₀ = 1/√(LC) ; T₀ = 2π √(LC)</div>
<p>L'énergie passe du condensateur (½ q²/C) à la bobine (½ L i²) ; elle se conserve sans résistance. Avec une résistance, les oscillations sont amorties.</p>
<p>En régime sinusoïdal forcé (RLC), il y a <b>résonance</b> d'intensité quand la fréquence imposée vaut la fréquence propre.</p>`},
'Tle|Sciences physiques|6':{dur:7,html:`<h4>Interférences (fentes de Young)</h4>
<p>Deux sources cohérentes produisent des franges brillantes et sombres alternées : c'est la preuve de la nature <b>ondulatoire</b> de la lumière.</p>
<div class="box">Interfrange : i = λ D / a<br>(λ longueur d'onde, D distance fentes–écran, a distance entre les fentes)</div>
<p>Différence de marche δ = a x / D. Frange brillante si δ = k λ ; sombre si δ = (k + ½) λ.</p>
<h4>L'effet photoélectrique</h4>
<p>Un métal éclairé émet des électrons seulement si la fréquence ν dépasse une fréquence seuil ν₀. Einstein l'explique par les <b>photons</b> d'énergie <b>E = h ν</b> (h = 6,62 × 10⁻³⁴ J·s) : nature <b>corpusculaire</b> de la lumière.</p>
<p>Ec max = h ν − W₀, avec W₀ = h ν₀ (travail d'extraction).</p>
<h4>Niveaux d'énergie de l'atome</h4>
<p>L'atome émet ou absorbe un photon lors d'une transition : h ν = E_haut − E_bas. Spectres de raies.</p>`},
'Tle|Sciences physiques|7':{dur:7,html:`<p>Un noyau ᴬ_Z X contient Z protons et N = A − Z neutrons. Certains noyaux instables se désintègrent spontanément.</p>
<ul><li><b>α</b> : émission d'un noyau d'hélium ⁴₂He.</li><li><b>β⁻</b> : émission d'un électron (un neutron devient proton).</li><li><b>β⁺</b> : émission d'un positon.</li><li><b>γ</b> : rayonnement accompagnant la désexcitation du noyau.</li></ul>
<div class="box">Lois de Soddy : conservation du nombre de masse A et du nombre de charge Z.</div>
<h4>Décroissance radioactive</h4>
<p>N(t) = N₀ e^(−λt) ; demi-vie (période) t½ = ln 2 / λ. Activité A = λ N (en becquerels).</p>
<p>Applications : datation au carbone 14, médecine (imagerie, radiothérapie), centrales nucléaires.</p>
<h4>Fission et fusion</h4>
<p>Elles libèrent de l'énergie à cause du <b>défaut de masse</b> : E = Δm c².</p>`},
'Tle|Sciences physiques|8':{dur:8,html:`<h4>Les alcools</h4>
<p>Groupe hydroxyle –OH. Classes : primaire (R–CH₂–OH), secondaire, tertiaire.</p>
<table class="table"><tr><th>Alcool</th><th>Oxydation ménagée</th></tr><tr><td>primaire</td><td>aldéhyde, puis acide carboxylique</td></tr><tr><td>secondaire</td><td>cétone</td></tr><tr><td>tertiaire</td><td>pas d'oxydation ménagée</td></tr></table>
<p>Tests : DNPH (précipité jaune) pour aldéhydes et cétones ; liqueur de Fehling ou réactif de Tollens positifs pour les aldéhydes seulement.</p>
<h4>Les acides carboxyliques et leurs dérivés</h4>
<ul><li>Groupe carboxyle –COOH.</li><li><b>Estérification</b> : acide + alcool ⇌ ester + eau, réaction lente, limitée et athermique (rendement ≈ 67 % avec un alcool primaire en proportions égales).</li><li><b>Hydrolyse</b> d'un ester : réaction inverse.</li><li><b>Saponification</b> : ester + soude → savon (carboxylate) + alcool, totale.</li><li>Dérivés : chlorures d'acyle, anhydrides (estérification totale), amides.</li></ul>
<h4>Les amines</h4>
<p>Groupe –NH₂ ; elles ont un caractère basique.</p>`},
'Tle|Sciences physiques|9':{dur:7,html:`<p>La <b>cinétique</b> étudie la vitesse des réactions.</p>
<div class="box">Vitesse de formation d'un produit P : v = d[P]/dt<br>Elle se lit comme la pente de la tangente à la courbe [P] = f(t).</div>
<h4>Les facteurs cinétiques</h4>
<ul><li><b>Concentration</b> des réactifs : plus elle est grande, plus la réaction est rapide.</li><li><b>Température</b> : l'augmenter accélère la réaction (la trempe dans l'eau glacée la bloque).</li><li><b>Catalyseur</b> : il accélère sans être consommé et sans changer l'état final.</li></ul>
<p>La vitesse diminue au cours du temps car les réactifs s'épuisent.</p>
<p><b>Temps de demi-réaction</b> t½ : durée pour que l'avancement atteigne la moitié de sa valeur finale.</p>`},
'Tle|Sciences physiques|10':{dur:8,html:`<div class="box">pH = −log[H₃O⁺] ; produit ionique de l'eau Ke = [H₃O⁺][OH⁻] = 10⁻¹⁴ à 25 °C</div>
<ul><li>Acide <b>fort</b> (HCl) : réaction totale avec l'eau ; pH = −log C.</li><li>Base forte (NaOH) : pH = 14 + log C.</li><li>Acide <b>faible</b> (acide éthanoïque) : réaction partielle.</li></ul>
<h4>Couple acide/base et pKa</h4>
<p>Ka = [A⁻][H₃O⁺]/[AH] ; pKa = −log Ka ; <b>pH = pKa + log([A⁻]/[AH])</b>.</p>
<p>Si pH < pKa, la forme acide prédomine ; si pH > pKa, la forme basique. Une <b>solution tampon</b> (pH = pKa) varie peu par ajout modéré d'acide, de base ou par dilution.</p>
<h4>Le dosage</h4>
<p>À l'<b>équivalence</b> : Ca Va = Cb Vb(éq). On repère l'équivalence par le saut de pH (méthode des tangentes) ou un indicateur coloré dont la zone de virage contient le pH d'équivalence.</p>
<ul><li>Acide fort / base forte : pH(éq) = 7.</li><li>Acide faible / base forte : pH(éq) > 7 ; à la demi-équivalence, pH = pKa.</li></ul>`},
'Tle|Informatique|0':{dur:6,html:`<ul><li><b>Variable</b> : nom, type (entier, réel, booléen, chaîne), valeur. Affectation : x ← 5.</li>
<li><b>Entrées / sorties</b> : Lire(x), Écrire(x).</li>
<li><b>Condition</b> : SI … ALORS … SINON … FINSI.</li>
<li><b>Boucle POUR</b> (nombre de tours connu) ; <b>TANT QUE</b> (condition) ; RÉPÉTER … JUSQU'À.</li></ul>
<div class="ex">Algorithme : somme des entiers de 1 à n<br>Lire n ; s ← 0<br>POUR i DE 1 À n FAIRE s ← s + i FINPOUR<br>Écrire s</div>
<div class="ex">Nombre de chiffres d'un entier n > 0<br>c ← 0 ; TANT QUE n > 0 FAIRE n ← n div 10 ; c ← c + 1 FINTANTQUE</div>
<div class="box">Teste ton algorithme « à la main » avec un tableau de suivi des variables.</div>`},
'Tle|Informatique|1':{dur:7,html:`<h4>Les tableaux</h4>
<p>Un tableau T de n cases indicées : T[0] … T[n − 1] (ou de 1 à n selon la convention).</p>
<div class="ex">Maximum : max ← T[0] ; POUR i DE 1 À n−1 : SI T[i] > max ALORS max ← T[i]</div>
<h4>Fonctions et procédures</h4>
<p>Une <b>fonction</b> reçoit des paramètres et <b>renvoie</b> une valeur ; une procédure effectue une action. Elles évitent de répéter du code.</p>
<h4>Recherche</h4>
<ul><li>Séquentielle : on parcourt tout le tableau.</li><li><b>Dichotomique</b> : dans un tableau trié, on coupe en deux à chaque étape (beaucoup plus rapide).</li></ul>
<h4>Les tris</h4>
<ul><li><b>Tri par sélection</b> : on place le plus petit élément en premier, puis on recommence sur le reste.</li><li><b>Tri à bulles</b> : on échange les voisins mal rangés jusqu'à ce qu'il n'y ait plus d'échange.</li><li><b>Tri par insertion</b> : comme on range des cartes dans sa main.</li></ul>`},
'Tle|Informatique|2':{dur:7,html:`<p><b>Python</b> est un langage simple et très utilisé.</p>
<div class="ex">nom = input("Ton prénom : ")<br>age = int(input("Ton âge : "))<br>if age >= 18:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(nom, "est majeur")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(nom, "est mineur")</div>
<ul><li>L'<b>indentation</b> (4 espaces) définit les blocs.</li><li>Boucles : <code>for i in range(1, 11):</code> ; <code>while x &gt; 0:</code></li><li>Listes : <code>notes = [12, 15, 9]</code> ; <code>notes.append(14)</code> ; <code>len(notes)</code> ; <code>sum(notes)</code></li><li>Fonctions : <code>def moyenne(L): return sum(L) / len(L)</code></li></ul>
<div class="box">Erreurs fréquentes : oublier les deux-points « : », mal indenter, confondre = (affectation) et == (comparaison).</div>`},
'Tle|Informatique|3':{dur:7,html:`<p>Une <b>base de données relationnelle</b> range les données dans des <b>tables</b> (lignes = enregistrements, colonnes = champs). Chaque table a une <b>clé primaire</b> (identifiant unique) ; une <b>clé étrangère</b> relie deux tables.</p>
<div class="ex">Eleve(id, nom, prenom, classe_id)<br>Classe(id, libelle)</div>
<h4>Le langage SQL</h4>
<div class="ex">SELECT nom, prenom FROM Eleve WHERE classe_id = 3 ORDER BY nom;<br>SELECT COUNT(*) FROM Eleve;<br>SELECT AVG(note) FROM Note WHERE matiere = 'Maths';<br>INSERT INTO Classe (id, libelle) VALUES (7, 'Tle S2');<br>UPDATE Eleve SET classe_id = 7 WHERE id = 12;<br>DELETE FROM Eleve WHERE id = 12;</div>
<p>Jointure : <code>SELECT Eleve.nom, Classe.libelle FROM Eleve JOIN Classe ON Eleve.classe_id = Classe.id;</code></p>
<p>Un <b>SGBD</b> (MySQL, PostgreSQL, SQLite…) gère la base.</p>`},
'Tle|Informatique|4':{dur:6,html:`<ul><li>Un <b>réseau</b> relie des appareils : LAN (local), WAN (étendu), Internet (réseau de réseaux).</li><li>Matériel : carte réseau, câble, Wi-Fi, switch, <b>routeur</b>.</li><li>Chaque appareil a une <b>adresse IP</b> (ex. 192.168.1.10) ; le <b>DNS</b> traduit un nom (www.exemple.sn) en adresse IP.</li><li><b>Protocoles</b> : TCP/IP (transport des paquets), HTTP/HTTPS (web), SMTP (envoi de courriels).</li><li>Architecture <b>client-serveur</b> : le navigateur (client) demande une page au serveur.</li></ul>
<div class="box">Sécurité : pare-feu, mises à jour, chiffrement (HTTPS), mots de passe forts, authentification à deux facteurs.</div>`},
'Tle|Informatique|5':{dur:7,html:`<p>Une page web est écrite en <b>HTML</b> (structure) et mise en forme avec <b>CSS</b> (style).</p>
<div class="ex">&lt;!DOCTYPE html&gt;<br>&lt;html lang="fr"&gt;<br>&lt;head&gt;&lt;title&gt;Mon lycée&lt;/title&gt;&lt;/head&gt;<br>&lt;body&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Lycée de Thiès&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;p&gt;Bienvenue sur notre site.&lt;/p&gt;<br>&nbsp;&nbsp;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;<br>&nbsp;&nbsp;&lt;img src="logo.png" alt="Logo"&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;</div>
<ul><li>Balises courantes : h1…h6 (titres), p, a (lien), img, ul/li (listes), table, form.</li><li>CSS : <code>h1 { color: green; font-size: 28px; }</code></li><li>JavaScript ajoute l'interactivité.</li></ul>
<p>Sunu Jàng elle-même est une page web : HTML, CSS et JavaScript !</p>`}
},
bank:{
'Tle|Mathématiques':[
 ["lim (3x² − x)/(x² + 1) en +∞ :",["0","1","3","+∞"],2,"Rapport des termes de plus haut degré : 3x²/x²."],
 ["Si lim f(x) = 2 en +∞, la courbe admet :",["une asymptote verticale x = 2","une asymptote horizontale y = 2","une tangente horizontale","aucune asymptote"],1,"Limite finie à l'infini."],
 ["Dérivée de (2x + 1)³ :",["3(2x + 1)²","6(2x + 1)²","2(2x + 1)³","6(2x + 1)"],1,"n u' uⁿ⁻¹ = 3 × 2 × (2x+1)²."],
 ["Équation de la tangente en a :",["y = f(a)(x − a) + f'(a)","y = f'(a)(x − a) + f(a)","y = f'(a)x","y = f(a)x + a"],1,"Formule de la tangente."],
 ["ln(e³) = ",["e³","3","1/3","3e"],1,"ln(eˣ) = x."],
 ["ln(ab) = ",["ln a × ln b","ln a + ln b","ln a − ln b","a ln b"],1,"Propriété fondamentale."],
 ["Dérivée de ln(x² + 1) :",["1/(x² + 1)","2x/(x² + 1)","2x ln x","x/(x² + 1)"],1,"u'/u."],
 ["lim x ln x en 0⁺ :",["−∞","0","1","+∞"],1,"Croissance comparée."],
 ["Solution de eˣ = 5 :",["x = 5e","x = ln 5","x = e⁵","x = 1/5"],1,"On applique ln."],
 ["Dérivée de e^(3x) :",["e^(3x)","3e^(3x)","3x e^(3x)","e^(3x)/3"],1,"u' eᵘ."],
 ["Une primitive de 1/x sur ]0 ; +∞[ :",["−1/x²","ln x","x ln x","eˣ"],1,"ln x."],
 ["∫₀¹ 2x dx = ",["1","2","1/2","0"],0,"[x²]₀¹ = 1."],
 ["Solutions de y' = 3y :",["y = 3x + C","y = C e^(3x)","y = e^(x/3)","y = C x³"],1,"y = C e^(ax)."],
 ["Suite géométrique u₀ = 2, q = 3 : u₄ = ",["14","162","24","54"],1,"2 × 3⁴ = 162."],
 ["Si 0 < q < 1, qⁿ tend vers :",["1","0","+∞","q"],1,"Convergence vers 0."],
 ["Module de 3 + 4i :",["7","5","25","1"],1,"√(9 + 16)."],
 ["Argument de i :",["0","π/2","π","π/4"],1,"i = e^(iπ/2)."],
 ["Solutions de z² + 1 = 0 :",["1 et −1","i et −i","2i","pas de solution"],1,"z² = −1 = i²."],
 ["z' = iz est :",["une translation","la rotation de centre O d'angle π/2","une homothétie de rapport 2","une symétrie"],1,"e^(iπ/2) = i."],
 ["Nombre de façons de choisir 3 élèves parmi 10 :",["30","120","720","1 000"],1,"C₁₀³ = 120."],
 ["A et B indépendants, P(A) = 0,5, P(B) = 0,4. P(A ∩ B) = ",["0,9","0,2","0,1","0,45"],1,"0,5 × 0,4."],
 ["Espérance d'une loi binomiale B(n ; p) :",["n + p","np","np(1 − p)","p/n"],1,"E(X) = np."],
 ["La droite de régression passe par :",["l'origine","le point moyen G","le premier point","aucun point"],1,"G(x̄ ; ȳ)."],
 ["Coefficient directeur de la droite de régression de Y en X :",["cov(X,Y)/V(X)","V(X)/cov(X,Y)","x̄/ȳ","r²"],0,"a = cov/V(X)."]
],
'Tle|SVT':[
 ["Valeur du potentiel de repos d'un neurone :",["+70 mV","−70 mV","0 mV","+30 mV"],1,"Intérieur négatif."],
 ["La dépolarisation du potentiel d'action est due à :",["la sortie de K⁺","l'entrée de Na⁺","l'entrée de Cl⁻","la pompe seule"],1,"Ouverture des canaux Na⁺."],
 ["L'intensité d'une stimulation est codée par :",["l'amplitude des PA","la fréquence des PA","la durée d'un PA","la myéline"],1,"Codage en fréquence."],
 ["La conduction saltatoire concerne les fibres :",["amyéliniques","myélinisées","musculaires","osseuses"],1,"De nœud de Ranvier en nœud."],
 ["Neurotransmetteur de la plaque motrice :",["insuline","acétylcholine","glucagon","adrénaline seulement"],1,"Acétylcholine."],
 ["Un PPSI correspond à :",["une dépolarisation","une hyperpolarisation","un PA","une contraction"],1,"Synapse inhibitrice."],
 ["Unité contractile du muscle :",["le neurone","le sarcomère","la synapse","l'alvéole"],1,"Entre deux stries Z."],
 ["Source directe d'énergie de la contraction :",["le glucose","l'ATP","l'oxygène","le Ca²⁺"],1,"Hydrolyse de l'ATP."],
 ["Hormone hypoglycémiante :",["glucagon","insuline","adrénaline","testostérone"],1,"Insuline."],
 ["Cellules qui sécrètent le glucagon :",["cellules β","cellules α","hépatocytes","lymphocytes"],1,"Îlots de Langerhans."],
 ["Le pic de LH déclenche :",["la menstruation","l'ovulation","la nidation","la puberté"],1,"Vers le 14e jour."],
 ["Hormone détectée par les tests de grossesse :",["FSH","hCG","LH","GnRH"],1,"Sécrétée par l'embryon."],
 ["Cellules qui sécrètent les anticorps :",["T8","plasmocytes","macrophages","globules rouges"],1,"Lymphocytes B différenciés."],
 ["Le VIH infecte principalement :",["les T4","les globules rouges","les plaquettes","les neurones"],0,"Lymphocytes T auxiliaires."],
 ["Le crossing-over a lieu en :",["anaphase II","prophase I","métaphase II","interphase"],1,"Brassage intrachromosomique."],
 ["Pour n = 3 paires de chromosomes, nombre de gamètes par brassage interchromosomique :",["3","6","8","9"],2,"2³ = 8."],
 ["Proportions en F2 en monohybridisme (dominance complète) :",["1/2 – 1/2","3/4 – 1/4","9/16 – 7/16","1/4 – 1/2 – 1/4"],1,"3/4 dominant."],
 ["Test-cross donnant 4 phénotypes à 25 % :",["gènes liés","gènes indépendants","codominance","hérédité liée au sexe"],1,"Brassage interchromosomique."]
],
'Tle|Sciences physiques':[
 ["Dans un mouvement circulaire uniforme, l'accélération est :",["nulle","centripète, a = v²/R","tangentielle","opposée à v"],1,"Accélération normale."],
 ["Départ au repos, a = 2 m/s². Vitesse à 5 s :",["5 m/s","10 m/s","25 m/s","2,5 m/s"],1,"v = a t."],
 ["2e loi de Newton :",["ΣF = 0","ΣF = m a","F = G m m'/d²","E = m c²"],1,"Théorème du centre d'inertie."],
 ["Accélération sur un plan incliné sans frottement :",["g","g sin α","g cos α","g tan α"],1,"Projection du poids."],
 ["Portée maximale d'un projectile pour α = ",["30°","45°","60°","90°"],1,"sin 2α = 1."],
 ["Rayon de la trajectoire dans un champ magnétique :",["R = |q|B/(mv)","R = mv/(|q|B)","R = qE/m","R = v²/g"],1,"Force de Lorentz."],
 ["Unité de G :",["N","N·m²·kg⁻²","m/s²","J"],1,"6,67 × 10⁻¹¹ N·m²·kg⁻²."],
 ["Période d'un satellite géostationnaire :",["1 h","environ 24 h","12 h","365 jours"],1,"Il suit la rotation de la Terre."],
 ["Période du pendule élastique :",["2π√(k/m)","2π√(m/k)","√(m/k)","2πmk"],1,"T₀ = 2π√(m/k)."],
 ["La période du pendule simple dépend :",["de la masse","de la longueur et de g","de l'amplitude seulement","de la couleur"],1,"T₀ = 2π√(L/g)."],
 ["Constante de temps d'un dipôle RC :",["R/C","RC","1/RC","R + C"],1,"τ = RC."],
 ["Période propre d'un circuit LC :",["2π√(LC)","2π√(L/C)","LC","1/(LC)"],0,"T₀ = 2π√(LC)."],
 ["Interfrange :",["i = aD/λ","i = λD/a","i = λa/D","i = D/λ"],1,"i = λD/a."],
 ["L'effet photoélectrique prouve :",["la nature ondulatoire de la lumière","la nature corpusculaire (photons)","la gravitation","la radioactivité"],1,"E = hν."],
 ["Une particule α est :",["un électron","un noyau d'hélium","un photon","un neutron"],1,"⁴₂He."],
 ["Demi-vie :",["t½ = λ ln 2","t½ = ln 2 / λ","t½ = 1/λ","t½ = λ/2"],1,"Loi de décroissance."],
 ["Oxydation ménagée d'un alcool secondaire :",["aldéhyde","cétone","acide","rien"],1,"Cétone."],
 ["L'estérification est :",["rapide et totale","lente et limitée","impossible","explosive"],1,"Équilibre."],
 ["La saponification produit :",["un ester","un savon et un alcool","de l'eau seule","un acide fort"],1,"Totale."],
 ["Un catalyseur :",["est consommé","accélère sans être consommé","change l'état final","ralentit la réaction"],1,"Facteur cinétique."],
 ["pH d'une solution de HCl à 10⁻² mol/L :",["2","12","7","1"],0,"pH = −log C."],
 ["À la demi-équivalence d'un acide faible par une base forte :",["pH = 7","pH = pKa","pH = 14","pH = 0"],1,"[A⁻] = [AH]."]
],
'Tle|Informatique':[
 ["Une boucle dont on connaît le nombre de tours :",["TANT QUE","POUR","SI","LIRE"],1,"POUR i DE 1 À n."],
 ["La recherche dichotomique nécessite un tableau :",["vide","trié","de chaînes","de taille paire"],1,"On coupe en deux."],
 ["En Python, les blocs sont définis par :",["des accolades","l'indentation","des points-virgules","des parenthèses"],1,"4 espaces."],
 ["En Python, == sert à :",["affecter","comparer","multiplier","commenter"],1,"Comparaison d'égalité."],
 ["range(1, 5) donne :",["1, 2, 3, 4, 5","1, 2, 3, 4","0, 1, 2, 3, 4","2, 3, 4"],1,"La borne de fin est exclue."],
 ["Une clé primaire :",["peut se répéter","identifie de façon unique un enregistrement","est toujours un nom","relie deux tables"],1,"Identifiant unique."],
 ["Requête SQL pour lire des données :",["INSERT","SELECT","DELETE","UPDATE"],1,"SELECT."],
 ["Le DNS sert à :",["traduire un nom de domaine en adresse IP","chiffrer les mots de passe","imprimer","créer des tables"],0,"Annuaire d'Internet."],
 ["Protocole des pages web sécurisées :",["SMTP","HTTPS","FTP","DNS"],1,"HTTPS."],
 ["Balise HTML d'un lien :",["<img>","<a>","<p>","<h1>"],1,"<a href=…>."],
 ["CSS sert à :",["structurer la page","mettre en forme la page","stocker des données","calculer"],1,"Le style."],
 ["Le tri par sélection :",["échange les voisins","place à chaque étape le plus petit élément restant","coupe le tableau en deux","ne trie pas"],1,"Sélection du minimum."]
]}
});
