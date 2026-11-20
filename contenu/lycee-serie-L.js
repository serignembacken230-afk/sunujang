/* Sunu Jàng — Mathématiques des séries littéraires (L) : 2nde L, 1ère L, Terminale L.
   Programme allégé, centré sur le calcul, les fonctions simples, les suites,
   les statistiques et les probabilités. Clés « niveau-L|matière ». */
(function(){
const D={chapters:{},lessons:{},bank:{}};
function add(lv,subj,chap,les,bank){const k=lv+'|'+subj;D.chapters[k]=chap;les.forEach((h,i)=>{D.lessons[k+'|'+i]={dur:Math.max(5,Math.round(h.length/220)),html:h}});D.bank[k]=bank}

add('2nde-L','Mathématiques',['Calcul numérique et puissances','Pourcentages et proportionnalité','Équations et inéquations du 1er degré','Systèmes de deux équations','Fonctions affines','Statistiques'],[
`<ul><li>Priorités : parenthèses, puissances, × et ÷, puis + et −.</li><li>Fractions : a/b + c/d = (ad + bc)/(bd) ; a/b × c/d = ac/(bd).</li><li>Puissances : aᵐ × aⁿ = aᵐ⁺ⁿ ; 10⁻³ = 0,001.</li><li>Racines : √(ab) = √a × √b ; √50 = 5√2.</li></ul>`,
`<div class="box">Prendre t % : × t/100 ; augmenter de t % : × (1 + t/100) ; diminuer de t % : × (1 − t/100)</div><div class="ex">Un pagne à 8 000 F augmente de 15 % : 8 000 × 1,15 = 9 200 F.<br>Soldé de 25 % : 8 000 × 0,75 = 6 000 F.</div><p>Taux d'évolution = (valeur finale − valeur initiale) ÷ valeur initiale.</p>`,
`<div class="ex">4x − 7 = 2x + 5 ⇔ 2x = 12 ⇔ x = 6.<br>−3x + 2 ≤ 11 ⇔ −3x ≤ 9 ⇔ x ≥ −3 (on change le sens en divisant par −3).</div><p>Équation produit nul : (x − 2)(x + 5) = 0 ⇔ x = 2 ou x = −5.</p>`,
`<p>Méthodes : substitution ou combinaison.</p><div class="ex">Billets de 1 000 F et 2 000 F : 7 billets pour 10 000 F.<br>x + y = 7 et x + 2y = 10 → y = 3, x = 4.</div>`,
`<p>f(x) = ax + b : droite de coefficient directeur a et d'ordonnée à l'origine b. Croissante si a &gt; 0. a = (f(x₂) − f(x₁)) / (x₂ − x₁).</p><div class="ex">Forfait téléphone : 2 000 F + 50 F la minute → f(x) = 50x + 2 000.</div>`,
`<p>Effectif, fréquence, moyenne, médiane, mode, étendue. Diagrammes en bâtons, circulaires, histogrammes. Moyenne d'une série regroupée en classes : on utilise le centre des classes.</p>`
],[
["8 000 F augmenté de 15 % :",["8 150 F","9 200 F","9 500 F","6 800 F"],1,"× 1,15."],
["Soldé de 25 % : on multiplie par",["0,25","0,75","1,25","25"],1,"1 − 0,25."],
["4x − 7 = 2x + 5 donne x = ",["6","1","−6","12"],0,"2x = 12."],
["−3x ≤ 9 ⇔",["x ≤ −3","x ≥ −3","x ≥ 3","x ≤ 3"],1,"On change le sens."],
["√50 = ",["25","5√2","2√5","10√5"],1,"√(25 × 2)."],
["f(x) = 50x + 2 000 pour 10 minutes :",["2 500 F","2 050 F","7 000 F","500 F"],0,"500 + 2 000."]
]);

add('1ère-L','Mathématiques',['Le second degré','Fonctions polynômes et tableaux de variation','Suites arithmétiques','Suites géométriques','Statistiques : moyenne et écart-type','Dénombrement'],[
`<div class="box">ax² + bx + c = 0 ; Δ = b² − 4ac<br>Δ &gt; 0 : deux solutions (−b ± √Δ)/(2a) ; Δ = 0 : une solution −b/(2a) ; Δ &lt; 0 : aucune</div><div class="ex">x² − 3x − 10 = 0 : Δ = 49 → x = 5 ou x = −2.</div>`,
`<p>Dérivée d'un polynôme : (xⁿ)' = n xⁿ⁻¹. Le signe de f' donne le sens de variation : f' &gt; 0 → f croissante. On résume dans un tableau de variation.</p><div class="ex">f(x) = x² − 4x + 1 : f'(x) = 2x − 4, nulle en 2 ; minimum f(2) = −3.</div>`,
`<p>uₙ₊₁ = uₙ + r. Terme général : uₙ = u₀ + n r. Somme de termes consécutifs = nombre de termes × (premier + dernier) ÷ 2.</p><div class="ex">Un élève économise 500 F de plus chaque semaine : 1 000, 1 500, 2 000… (r = 500).</div>`,
`<p>uₙ₊₁ = q × uₙ. Terme général : uₙ = u₀ × qⁿ. Intérêts composés : un capital C placé à t % par an devient C × (1 + t/100)ⁿ après n ans.</p><div class="ex">100 000 F à 5 % pendant 3 ans : 100 000 × 1,05³ ≈ 115 763 F.</div>`,
`<p>Moyenne x̄ ; variance V = moyenne des carrés − carré de la moyenne ; écart-type σ = √V. Plus σ est grand, plus la série est dispersée.</p>`,
`<p>Principe multiplicatif : 3 chemises × 4 pantalons = 12 tenues. Permutations n! ; arrangements ; combinaisons Cₙᵖ (choix sans ordre).</p><div class="ex">Choisir 2 délégués parmi 5 : C₅² = 10.</div>`
],[
["x² − 3x − 10 = 0 : solutions",["5 et −2","−5 et 2","10 et 1","pas de solution"],0,"Δ = 49."],
["Si Δ < 0 :",["deux solutions","une solution","aucune solution réelle","trois solutions"],2,"Pas de racine."],
["Dérivée de x² :",["x","2x","x²","2"],1,"n xⁿ⁻¹."],
["Suite arithmétique u₀ = 1 000, r = 500 : u₄ = ",["2 500","3 000","3 500","2 000"],1,"1 000 + 4 × 500."],
["100 000 F à 5 % pendant 3 ans ≈",["115 000 F","115 763 F","105 000 F","150 000 F"],1,"× 1,05³."],
["3 chemises et 4 pantalons : nombre de tenues",["7","12","34","1"],1,"3 × 4."],
["C₅² = ",["10","20","25","5"],0,"5 × 4 ÷ 2."]
]);

add('Tle-L','Mathématiques',['Suites et mathématiques financières','Fonctions : limites et dérivées','Fonction logarithme népérien','Fonction exponentielle','Statistiques à deux variables','Probabilités','Réussir l\'épreuve du bac (série L)'],[
`<p>Suites arithmétiques (croissance linéaire : salaire avec augmentation fixe) et géométriques (croissance en pourcentage : population, intérêts composés). Seuil : chercher n tel que uₙ dépasse une valeur (calculatrice ou logarithme).</p><div class="ex">Une population de 2 000 habitants croît de 3 % par an : uₙ = 2 000 × 1,03ⁿ.</div>`,
`<p>Limites des polynômes en ±∞ (terme de plus haut degré). Dérivées : (xⁿ)' = n xⁿ⁻¹, (u + v)' = u' + v', (k u)' = k u'. Tangente : y = f'(a)(x − a) + f(a). Tableau de variation et extremums.</p>`,
`<p>ln est définie sur ]0 ; +∞[ ; ln 1 = 0 ; ln e = 1 ; ln(ab) = ln a + ln b ; ln(aⁿ) = n ln a. ln est croissante. Utile pour résoudre qⁿ = k : n = ln k / ln q.</p><div class="ex">1,03ⁿ = 2 ⇔ n = ln 2 / ln 1,03 ≈ 23,4 : la population double en environ 24 ans.</div>`,
`<p>eˣ est toujours positive et croissante ; e⁰ = 1 ; eᵃ × eᵇ = eᵃ⁺ᵇ ; ln(eˣ) = x. (eˣ)' = eˣ. Modèle de croissance ou de décroissance continue.</p>`,
`<p>Nuage de points (xᵢ ; yᵢ), point moyen G(x̄ ; ȳ). Ajustement affine par la méthode de Mayer (deux points moyens) ou des moindres carrés. Prévision à l'aide de la droite d'ajustement.</p>`,
`<p>Équiprobabilité : P(A) = cas favorables / cas possibles. P(Ā) = 1 − P(A). P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Arbres de probabilités, variable aléatoire et espérance.</p><div class="ex">Un dé équilibré : P(nombre pair) = 3/6 = 1/2.</div>`,
`<ul><li>Lire tout le sujet, commencer par l'exercice le mieux maîtrisé.</li><li>Écrire les formules utilisées, puis les calculs.</li><li>Arrondir comme demandé, donner l'unité (F, habitants, années).</li><li>Rédiger une phrase de conclusion pour chaque question.</li></ul>`
],[
["Population 2 000, +3 % par an : uₙ = ",["2 000 + 3n","2 000 × 1,03ⁿ","2 000 × 3ⁿ","2 000 × 0,03ⁿ"],1,"Suite géométrique."],
["ln 1 = ",["0","1","e","−1"],0,"ln 1 = 0."],
["ln(ab) = ",["ln a × ln b","ln a + ln b","a ln b","ln a − ln b"],1,"Propriété."],
["1,03ⁿ = 2 ⇔ n = ",["2 / 1,03","ln 2 / ln 1,03","ln 1,03 / ln 2","2 × 1,03"],1,"On applique ln."],
["e⁰ = ",["0","1","e","∞"],1,"e⁰ = 1."],
["Dé équilibré : P(pair) = ",["1/6","1/3","1/2","2/3"],2,"3 cas sur 6."],
["Si P(A) = 0,3, P(Ā) = ",["0,3","0,7","1,3","0"],1,"1 − 0,3."]
]);

(window.SJ_CONTENT=window.SJ_CONTENT||[]).push(D);
})();
