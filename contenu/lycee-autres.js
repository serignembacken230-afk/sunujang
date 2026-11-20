/* Sunu Jàng — 2nde, 1ère · SVT, Sciences physiques, Histoire-Géo, Anglais, Informatique
   Programmes du second cycle (Sénégal), niveau des séries scientifiques pour SVT et PC. */
(function(){
const D={chapters:{},lessons:{},bank:{}};
function add(levels,subj,chap,les,bank){levels.forEach(lv=>{const k=lv+'|'+subj;D.chapters[k]=chap;les.forEach((h,i)=>{D.lessons[k+'|'+i]={dur:Math.max(5,Math.round(h.length/220)),html:h}});D.bank[k]=bank})}

/* ================= SVT ================= */
add(['2nde'],'SVT',['La cellule, unité du vivant','L\'écosystème','Flux de matière et d\'énergie','La photosynthèse','La structure du globe terrestre','La tectonique des plaques'],[
`<p>La <b>théorie cellulaire</b> : tout être vivant est formé de cellules, et toute cellule provient d'une autre cellule. Cellule animale : membrane, cytoplasme, noyau, mitochondries. Cellule végétale : en plus, paroi pectocellulosique, vacuole, chloroplastes. Les bactéries (procaryotes) n'ont pas de vrai noyau.</p>`,
`<p>Un <b>écosystème</b> = un milieu (biotope) + les êtres vivants qui l'habitent (biocénose). Facteurs abiotiques : lumière, eau, température, sol. Relations : prédation, compétition, symbiose (lichens), parasitisme. Exemples sénégalais : mangrove du Saloum, savane du Niokolo-Koba, Niayes.</p>`,
`<p><b>Producteurs</b> (végétaux chlorophylliens) → <b>consommateurs</b> primaires, secondaires… → <b>décomposeurs</b> (bactéries, champignons) qui recyclent la matière. L'énergie diminue à chaque niveau : pyramide des biomasses. Le cycle du carbone relie photosynthèse, respiration et combustion.</p>`,
`<div class="box">6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (à la lumière, dans les chloroplastes)</div><p>Mise en évidence : production d'O₂ (élodée), d'amidon (eau iodée sur une feuille éclairée). Facteurs : lumière, CO₂, température, eau.</p>`,
`<p>Croûte (océanique, basaltique ; continentale, granitique), manteau (péridotite), noyau (fer et nickel ; externe liquide, interne solide). Les ondes sismiques révèlent ces couches (discontinuités de Moho et de Gutenberg).</p>`,
`<p>La lithosphère est découpée en <b>plaques</b> qui se déplacent sur l'asthénosphère. Limites : divergentes (dorsales, accrétion), convergentes (subduction, collision : Himalaya), coulissantes (failles transformantes). Séismes et volcans se concentrent sur ces limites.</p>`
],[
["Organite de la photosynthèse :",["mitochondrie","chloroplaste","noyau","vacuole"],1,"Chloroplaste."],
["Une bactérie est :",["eucaryote","procaryote","un virus","une plante"],1,"Pas de vrai noyau."],
["Biotope + biocénose = ",["écosystème","population","espèce","cellule"],0,"Écosystème."],
["Les décomposeurs :",["fabriquent de la matière à la lumière","recyclent la matière morte","sont des herbivores","sont des carnivores"],1,"Recyclage."],
["La photosynthèse rejette :",["CO₂","O₂","H₂","N₂"],1,"Dioxygène."],
["Noyau terrestre composé surtout de :",["granite","fer et nickel","basalte","sable"],1,"Fer et nickel."],
["Zone où une plaque plonge sous une autre :",["dorsale","subduction","faille transformante","rift"],1,"Subduction."]
]);
add(['1ère'],'SVT',['Digestion et absorption','La respiration cellulaire et la fermentation','Le milieu intérieur et le sang','La reproduction des plantes à fleurs','Les roches sédimentaires et les fossiles','La datation et l\'histoire de la Terre'],[
`<p>Les <b>enzymes</b> digestives (amylase, pepsine, lipase, trypsine) simplifient les aliments : amidon → glucose, protéines → acides aminés, lipides → acides gras + glycérol. Absorption par les <b>villosités</b> de l'intestin grêle vers le sang et la lymphe.</p>`,
`<p>Respiration (aérobie) : glucose + O₂ → CO₂ + H₂O + beaucoup d'énergie (ATP), dans les mitochondries. Fermentation (anaérobie) : peu d'ATP ; alcoolique (levures : pain, bissap fermenté) ou lactique (muscle, lait caillé).</p>`,
`<p>Le <b>milieu intérieur</b> (plasma, lymphe, liquide interstitiel) baigne les cellules. Le sang : plasma + hématies (transport O₂ grâce à l'hémoglobine), leucocytes (défense), plaquettes (coagulation). Groupes sanguins ABO et rhésus.</p>`,
`<p>Fleur : sépales, pétales, étamines (pollen), pistil (ovaire, ovules). Pollinisation, double fécondation chez les angiospermes → graine (embryon + réserves) et fruit. Germination : conditions d'eau, d'air, de température.</p>`,
`<p>Les roches sédimentaires se forment par érosion, transport, dépôt, puis diagenèse (compaction, cimentation). Elles se disposent en <b>strates</b> et contiennent des <b>fossiles</b>, témoins des milieux anciens.</p>`,
`<p>Datation relative : principe de superposition (la couche du dessous est plus ancienne), de recoupement, d'identité paléontologique (fossiles stratigraphiques). Datation absolue : radioactivité. Ères géologiques : Primaire, Secondaire, Tertiaire, Quaternaire.</p>`
],[
["L'amidon est transformé en :",["acides aminés","glucose","acides gras","urée"],1,"Par l'amylase."],
["Lieu de la respiration cellulaire :",["chloroplaste","mitochondrie","noyau","ribosome"],1,"Mitochondrie."],
["La fermentation lactique se fait :",["avec O₂","sans O₂","seulement chez les plantes","dans les reins"],1,"Anaérobie."],
["Les hématies transportent l'O₂ grâce à :",["l'insuline","l'hémoglobine","la lymphe","les anticorps"],1,"Hémoglobine."],
["Le pistil contient :",["le pollen","les ovules","les sépales","les pétales"],1,"L'ovaire et les ovules."],
["Principe de superposition : la couche du dessous est",["plus récente","plus ancienne","de même âge","toujours volcanique"],1,"Plus ancienne."]
]);

/* ================= Sciences physiques ================= */
add(['2nde'],'Sciences physiques',['Mouvement et vitesse','Forces et équilibre','Le courant électrique continu','Dipôles passifs et loi d\'Ohm','L\'atome et la classification périodique','La mole et les solutions'],[
`<p>Le mouvement est relatif à un <b>référentiel</b>. Trajectoire rectiligne, circulaire, curviligne. Vitesse moyenne v = d / t (m/s ; 1 m/s = 3,6 km/h). Mouvement uniforme : v constante.</p>`,
`<p>Une force : point d'application, direction, sens, intensité (N). Poids P = m g. Équilibre d'un solide soumis à deux forces : même droite d'action, sens opposés, même intensité ; à trois forces : somme vectorielle nulle, droites concourantes.</p>`,
`<p>Le courant électrique est un déplacement d'électrons (dans les métaux) ou d'ions (dans les solutions). Sens conventionnel : de + vers − à l'extérieur du générateur. Quantité d'électricité Q = I × t (coulombs).</p>`,
`<div class="box">Loi d'Ohm : U = R I ; Puissance : P = U I = R I²</div><p>Associations : série R = R₁ + R₂ ; parallèle 1/R = 1/R₁ + 1/R₂. Caractéristique d'un dipôle : courbe U = f(I).</p>`,
`<p>Atome : noyau (Z protons, N neutrons ; A = Z + N) et électrons. Répartition en couches K (2), L (8), M (8 pour les premiers éléments). Classification de Mendeleïev : lignes (périodes) = nombre de couches ; colonnes (groupes) = électrons de la couche externe. Ions : Na⁺, Cl⁻.</p>`,
`<p>1 mole = 6,02 × 10²³ entités (nombre d'Avogadro). n = m / M. Concentration molaire C = n / V (mol/L). Dilution : C₁V₁ = C₂V₂.</p><div class="ex">5,85 g de NaCl (M = 58,5 g/mol) dans 0,5 L : n = 0,1 mol ; C = 0,2 mol/L.</div>`
],[
["72 km/h = ",["20 m/s","72 m/s","7,2 m/s","259 m/s"],0,"72 ÷ 3,6."],
["Poids d'une masse de 2 kg (g = 10 N/kg) :",["2 N","20 N","0,2 N","200 N"],1,"P = mg."],
["Q = I × t avec I = 2 A, t = 10 s :",["5 C","20 C","12 C","0,2 C"],1,"20 coulombs."],
["R = 50 Ω, I = 0,2 A : U = ",["10 V","250 V","0,004 V","50,2 V"],0,"U = RI."],
["Couche K contient au maximum :",["2 électrons","8","18","32"],0,"2."],
["n pour 5,85 g de NaCl (M = 58,5) :",["0,1 mol","1 mol","10 mol","0,01 mol"],0,"n = m/M."]
]);
add(['1ère'],'Sciences physiques',['Travail et puissance','Énergie cinétique et potentielle','Le champ électrostatique','Le condensateur','Les hydrocarbures : alcanes, alcènes, alcynes','L\'oxydoréduction'],[
`<p>W = F · AB · cos α (J). Travail du poids : W = m g (z_A − z_B). Puissance moyenne P = W / t ; puissance instantanée P = F · v.</p>`,
`<p>Ec = ½ m v². Théorème de l'énergie cinétique : ΔEc = ΣW. Énergie potentielle de pesanteur Ep = m g z. Énergie mécanique Em = Ec + Ep, conservée en l'absence de frottements.</p>`,
`<p>Loi de Coulomb : F = k |q q'| / d² (k = 9 × 10⁹). Champ E = F / q (V/m). Entre deux plaques parallèles : champ uniforme E = U / d. Travail de la force électrique : W = q U_AB.</p>`,
`<p>Q = C U (C en farads). Capacité d'un condensateur plan : C = ε S / e. Énergie stockée : E = ½ C U². Associations : parallèle C = C₁ + C₂ ; série 1/C = 1/C₁ + 1/C₂.</p>`,
`<p>Alcanes CₙH₂ₙ₊₂ (liaisons simples, réactions de substitution) ; alcènes CₙH₂ₙ (double liaison, réactions d'addition, polymérisation : polyéthylène) ; alcynes CₙH₂ₙ₋₂ (triple liaison). Nomenclature : chaîne la plus longue, numérotation, ramifications.</p>`,
`<p>Oxydation = perte d'électrons ; réduction = gain d'électrons. Couple oxydant/réducteur : Cu²⁺/Cu, Zn²⁺/Zn. Classification électrochimique : un métal plus réducteur déplace un autre de ses ions (Zn + Cu²⁺ → Zn²⁺ + Cu). Piles, corrosion.</p>`
],[
["Ec d'une masse de 2 kg à 3 m/s :",["3 J","9 J","6 J","18 J"],1,"½ × 2 × 9."],
["Sans frottements, l'énergie mécanique :",["augmente","diminue","se conserve","s'annule"],2,"Conservation."],
["Champ entre deux plaques : E = ",["U × d","U / d","d / U","q U"],1,"Champ uniforme."],
["Énergie d'un condensateur :",["C U","½ C U²","Q / C","C / U"],1,"½CU²."],
["Les alcènes ont :",["une double liaison","que des liaisons simples","une triple liaison","pas de carbone"],0,"C=C."],
["Oxydation = ",["gain d'électrons","perte d'électrons","gain de protons","perte de neutrons"],1,"Perte d'électrons."]
]);

/* ================= Histoire-Géo ================= */
add(['2nde'],'Histoire-Géo',['L\'Afrique, berceau de l\'humanité','L\'Égypte et la Nubie','Les grands empires africains','L\'islam et la civilisation arabo-musulmane','Renaissance et grandes découvertes','La Terre : climats et grands milieux','La population mondiale','Les ressources et l\'environnement'],[
`<p>Les plus anciens fossiles d'hominidés sont africains (Toumaï au Tchad, Lucy en Éthiopie). Homo sapiens est apparu en Afrique avant de peupler le monde.</p>`,
`<p>L'Égypte pharaonique (vers 3000 av. J.-C.) et les royaumes de Nubie (Kerma, Napata, Méroé) : écriture, architecture, médecine, astronomie. Thèses de Cheikh Anta Diop sur l'antériorité des civilisations nègres.</p>`,
`<p>Ghana, Mali, Songhaï, Kanem-Bornou, royaumes haoussa, Monomotapa, Éthiopie chrétienne. Organisation politique, commerce transsaharien, rôle de l'islam et des lettrés.</p>`,
`<p>Né en Arabie au VIIe siècle, l'islam s'étend de l'Espagne à l'Inde. Apports : mathématiques (algèbre, chiffres), médecine (Avicenne), philosophie (Averroès), géographie (Ibn Battuta).</p>`,
`<p>XVe–XVIe siècles : imprimerie, humanisme, réforme religieuse en Europe ; voyages des Portugais et Espagnols ; début de la traite atlantique et de la domination européenne.</p>`,
`<p>Zones climatiques : équatoriale, tropicale, désertique, tempérée, polaire. Milieux : forêt dense, savane, steppe, désert, mangrove. Le Sénégal est en zone tropicale (sahélienne au nord, soudanienne, subguinéenne au sud).</p>`,
`<p>Plus de 8 milliards d'habitants. Transition démographique : baisse de la mortalité puis de la natalité. Foyers : Asie de l'Est et du Sud, Europe. Migrations et urbanisation.</p>`,
`<p>Eau, sols, forêts, énergie, minerais. Menaces : désertification, réchauffement climatique, pollution. Développement durable : concilier croissance, équité sociale et protection de l'environnement.</p>`
],[
["Fossile d'hominidé découvert au Tchad :",["Lucy","Toumaï","Cro-Magnon","Néandertal"],1,"Toumaï."],
["Royaume de Nubie :",["Méroé","Ghana","Cayor","Rome"],0,"Méroé."],
["Voyageur et géographe musulman :",["Ibn Battuta","Colomb","Magellan","Vasco de Gama"],0,"Ibn Battuta."],
["Invention clé de la Renaissance :",["l'imprimerie","l'électricité","internet","l'avion"],0,"Imprimerie."],
["Population mondiale actuelle :",["environ 2 milliards","plus de 8 milliards","environ 500 millions","20 milliards"],1,"Plus de 8 milliards."],
["Zone climatique du nord du Sénégal :",["équatoriale","sahélienne","polaire","tempérée"],1,"Sahélienne."]
]);
add(['1ère'],'Histoire-Géo',['Les révolutions industrielles','L\'impérialisme européen','La Première Guerre mondiale','L\'entre-deux-guerres et les totalitarismes','La Seconde Guerre mondiale','Le Sénégal : population et territoire','L\'économie du Sénégal','L\'intégration régionale africaine'],[
`<p>1re révolution industrielle (fin XVIIIe, Angleterre) : vapeur, charbon, textile, chemin de fer. 2e (fin XIXe) : électricité, pétrole, chimie, automobile. Naissance de la classe ouvrière et des syndicats.</p>`,
`<p>Causes : économiques (matières premières, débouchés), politiques (prestige), idéologiques (« mission civilisatrice »). Conférence de Berlin (1884–1885). Empires coloniaux français et britannique.</p>`,
`<p>1914–1918. Causes : rivalités impérialistes, nationalismes, alliances. Guerre de tranchées, guerre totale. Participation des tirailleurs sénégalais (recrutement de Blaise Diagne, 1918). Traité de Versailles (1919), SDN.</p>`,
`<p>Crise de 1929, montée du fascisme (Mussolini), du nazisme (Hitler, 1933), du stalinisme. Régimes totalitaires : parti unique, culte du chef, propagande, terreur.</p>`,
`<p>1939–1945. Victoires de l'Axe puis des Alliés. Génocide des Juifs. Rôle de l'Afrique : soldats, ressources ; massacre de Thiaroye (1944). Création de l'ONU (1945).</p>`,
`<p>Environ 18 millions d'habitants (2023), population jeune, croissance rapide, forte concentration à l'ouest (Dakar, Thiès), exode rural, émigration. Régions et aménagement du territoire (pôles urbains, Diamniadio).</p>`,
`<p>Secteur primaire (agriculture, pêche, élevage), secondaire (phosphates, ciment, agro-industrie, hydrocarbures depuis 2024), tertiaire (commerce, transports, télécommunications, tourisme). Défis : emploi des jeunes, transformation locale.</p>`,
`<p>CEDEAO (1975, libre circulation), UEMOA (1994, franc CFA), OMVS (fleuve Sénégal), Union africaine, ZLECAf. Obstacles : frontières, infrastructures, instabilité politique.</p>`
],[
["La 1re révolution industrielle repose sur :",["la vapeur et le charbon","internet","le nucléaire","le pétrole seul"],0,"Vapeur."],
["Traité qui termine la Première Guerre mondiale :",["Versailles","Rome","Berlin","Maastricht"],0,"1919."],
["Hitler arrive au pouvoir en :",["1919","1929","1933","1945"],2,"1933."],
["Massacre de Thiaroye :",["1944","1914","1960","1968"],0,"1er décembre 1944."],
["Monnaie de l'UEMOA :",["le franc CFA","l'euro","le dollar","le naira"],0,"Franc CFA."],
["L'OMVS gère :",["le fleuve Sénégal","le port de Dakar","le pétrole","l'aéroport"],0,"Le fleuve."]
]);

/* ================= Anglais ================= */
add(['2nde'],'Anglais',['Present perfect vs simple past','Modal verbs','The passive voice','Relative clauses','Question tags','Writing a paragraph'],[
`<p>Present perfect: link with now, unfinished time (<i>I have lived here since 2018</i>). Simple past: finished time (<i>I lived in Thiès in 2015</i>).</p>`,
`<p>can (ability), may/might (possibility), must (obligation, deduction), should (advice), could (past ability, polite request).</p>`,
`<p>be + past participle. <i>English is spoken all over the world. The bridge was built in 1897.</i></p>`,
`<p>who (people), which (things), that, whose (possession), where (place), when (time). <i>The girl who won the prize is my cousin.</i></p>`,
`<p><i>You are Senegalese, aren't you? She doesn't like fish, does she?</i> Positive sentence → negative tag ; negative → positive.</p>`,
`<p>Topic sentence → supporting ideas with examples → concluding sentence. Use linking words: first, moreover, however, therefore, finally.</p>`
],[
["I ___ here since 2018.",["live","have lived","lived","am living"],1,"since → present perfect."],
["English ___ all over the world.",["speaks","is spoken","spoke","speaking"],1,"Passive."],
["The girl ___ won the prize…",["which","who","whose","where"],1,"People → who."],
["She doesn't like fish, ___?",["doesn't she","does she","is she","isn't she"],1,"Negative → positive tag."],
["You ___ see a doctor. (advice)",["should","mustn't","can't","might not"],0,"should."]
]);
add(['1ère'],'Anglais',['Conditionals 0, 1, 2, 3','Reported speech','Gerund and infinitive','Linking words for essays','Reading comprehension','Topics: youth, work and society'],[
`<p>0: If you heat ice, it melts. 1: If it rains, I will stay. 2: If I were rich, I would build a school. 3: If I had studied, I would have passed.</p>`,
`<p>Tenses go back one step: am → was, will → would, have done → had done. Questions: He asked if I was ready. Orders: She told me to sit down.</p>`,
`<p>-ing after enjoy, avoid, finish, look forward to ; to + verb after want, decide, hope, refuse. Stop doing / stop to do.</p>`,
`<p>Adding: moreover, furthermore. Contrast: however, whereas, although. Cause: because of, due to. Result: therefore, consequently. Conclusion: to sum up.</p>`,
`<p>Skim for the main idea, scan for details, guess words from context, answer in full sentences, justify with the text.</p>`,
`<p>Vocabulary: unemployment, entrepreneurship, vocational training, internship, social media, peer pressure, volunteering, civic engagement.</p>`
],[
["If I ___ rich, I would build a school.",["am","were","will be","had"],1,"Type 2."],
["If I had studied, I ___ passed.",["will have","would have","would","had"],1,"Type 3."],
["He said he ___ tired. (« I am tired »)",["is","was","be","has been"],1,"Backshift."],
["She told me ___ down.",["sit","to sit","sitting","sat"],1,"tell + to."],
["I enjoy ___.",["to read","reading","read","reads"],1,"enjoy + -ing."],
["A word of contrast:",["moreover","however","therefore","because"],1,"however."]
]);

/* ================= Informatique (2nde – 1ère) ================= */
add(['2nde','1ère'],'Informatique',['Architecture d\'un ordinateur','Représentation de l\'information','Le tableur avancé','Algorithmique','Programmer en Python','Internet, le Web et la sécurité'],[
`<p>Modèle de von Neumann : processeur (unité de calcul + unité de contrôle), mémoire, entrées-sorties, bus. Mémoire vive (RAM, volatile) et mémoire de stockage (SSD, disque dur).</p>`,
`<p>Tout est codé en <b>binaire</b> (0 et 1). 1 octet = 8 bits. Conversion : 13 = 1101 en base 2. Texte (ASCII, Unicode), images (pixels RVB), sons (échantillonnage).</p>`,
`<p>Références relatives (A1) et absolues ($A$1), fonctions SOMME, MOYENNE, SI, NB.SI, RECHERCHEV, tri et filtres, graphiques.</p><div class="ex">=SI(B2>=10;"Admis";"Ajourné")</div>`,
`<p>Variables, affectation, conditions (SI…ALORS…SINON), boucles (POUR, TANT QUE), fonctions. On teste un algorithme avec un tableau de suivi.</p>`,
`<p><code>for i in range(1, 6): print(i * i)</code> affiche 1, 4, 9, 16, 25. Listes, fonctions (<code>def</code>), conditions (<code>if/elif/else</code>), indentation obligatoire.</p>`,
`<p>Internet (réseau) ≠ Web (pages reliées par des liens). Adresse IP, DNS, HTTP/HTTPS. Sécurité : mots de passe forts, double authentification, méfiance face à l'hameçonnage, mises à jour.</p>`
],[
["13 en binaire :",["1101","1011","1110","1001"],0,"8 + 4 + 1."],
["1 octet = ",["4 bits","8 bits","16 bits","1 000 bits"],1,"8 bits."],
["Une référence absolue s'écrit :",["A1","$A$1","#A1","A:1"],1,"Avec $."],
["La RAM est :",["permanente","volatile","un écran","un logiciel"],1,"Effacée à l'extinction."],
["for i in range(1, 4): affiche i =",["1, 2, 3","1, 2, 3, 4","0, 1, 2, 3","2, 3, 4"],0,"4 exclu."],
["Le DNS traduit :",["un nom de domaine en adresse IP","du texte en binaire","une image en son","une langue en une autre"],0,"Annuaire."]
]);

(window.SJ_CONTENT=window.SJ_CONTENT||[]).push(D);
})();
