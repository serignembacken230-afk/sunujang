/* Sunu Jàng — 6e, 5e, 4e · SVT, Sciences physiques, Histoire-Géo, Anglais,
   Éducation civique, Informatique. Programmes du cycle moyen (Sénégal). */
(function(){
const D={chapters:{},lessons:{},bank:{}};
function add(levels,subj,chap,les,bank){levels.forEach(lv=>{const k=lv+'|'+subj;D.chapters[k]=chap;les.forEach((h,i)=>{D.lessons[k+'|'+i]={dur:Math.max(4,Math.round(h.length/240)),html:h}});D.bank[k]=bank})}

/* ================= SVT ================= */
add(['6e'],'SVT',['Le vivant et le non-vivant','La cellule','Classer les êtres vivants','La plante à fleurs','Le peuplement d\'un milieu','Le sol, milieu de vie'],[
`<p>Un être vivant <b>naît</b>, <b>se nourrit</b>, <b>respire</b>, <b>grandit</b>, <b>se reproduit</b> et <b>meurt</b>. Un caillou ou l'eau sont non vivants.</p>`,
`<p>Tous les êtres vivants sont formés de <b>cellules</b>, visibles au microscope. Une cellule a une <b>membrane</b>, un <b>cytoplasme</b> et un <b>noyau</b>. Les cellules végétales ont en plus une paroi et souvent des chloroplastes (verts).</p>`,
`<p>On classe les êtres vivants selon les caractères qu'ils partagent :</p><ul><li><b>Vertébrés</b> (squelette interne) : poissons, amphibiens, reptiles, oiseaux, mammifères.</li><li><b>Invertébrés</b> : insectes (6 pattes), araignées (8 pattes), escargots, vers.</li></ul><div class="ex">Le mouton a des poils et des mamelles : c'est un mammifère.</div>`,
`<p>Racine, tige, feuilles, fleurs. La fleur contient les <b>étamines</b> (pollen) et le <b>pistil</b>. Après la pollinisation, le pistil devient un <b>fruit</b> qui contient les <b>graines</b>.</p><p>Dissémination des graines : par le vent, les animaux, l'eau.</p>`,
`<p>Un milieu (mare, savane, mangrove) est peuplé d'animaux et de végétaux qui varient selon les <b>saisons</b> : en hivernage, la savane reverdit et les animaux sont plus nombreux ; en saison sèche, certains migrent ou hibernent.</p>`,
`<p>Le sol contient du sable, de l'argile, de l'humus, de l'eau, de l'air et des êtres vivants (vers de terre, termites, bactéries) qui décomposent la matière morte.</p>`
],[
["Un être vivant :",["un caillou","un arbre","l'eau","le sable"],1,"Il naît, grandit, se reproduit."],
["Partie de la cellule qui contient l'information :",["le noyau","la membrane","le cytoplasme","la paroi"],0,"Le noyau."],
["Un insecte a :",["4 pattes","6 pattes","8 pattes","pas de pattes"],1,"6 pattes."],
["Un animal à poils et mamelles :",["oiseau","mammifère","reptile","poisson"],1,"Mammifère."],
["Le pistil devient :",["la racine","le fruit","la feuille","l'étamine"],1,"Le fruit."],
["Les vers de terre transforment la matière morte en :",["sable","humus","sel","pierre"],1,"Humus."]
]);
add(['5e'],'SVT',['La nutrition des végétaux verts','La respiration des êtres vivants','La digestion','La circulation du sang','L\'excrétion','Hygiène alimentaire'],[
`<p>La plante verte absorbe l'eau et les sels minéraux par ses racines. Dans les feuilles, à la lumière, elle fabrique de la matière (amidon) à partir du gaz carbonique : c'est la <b>photosynthèse</b>. Elle rejette du dioxygène.</p>`,
`<p>Tous les êtres vivants respirent : ils absorbent du <b>dioxygène</b> et rejettent du <b>dioxyde de carbone</b>. Organes : poumons (mammifères), branchies (poissons), trachées (insectes), peau (grenouille en partie).</p><p>Test de l'eau de chaux : elle se trouble en présence de CO₂.</p>`,
`<p>Tube digestif : bouche, œsophage, estomac, intestin grêle, gros intestin. Glandes : salivaires, foie, pancréas. Les <b>enzymes</b> des sucs digestifs transforment les aliments en <b>nutriments</b> absorbés dans l'intestin grêle.</p>`,
`<p>Le cœur a 4 cavités (2 oreillettes, 2 ventricules). Le sang circule dans les artères, les capillaires et les veines. Il transporte dioxygène, nutriments et déchets.</p>`,
`<p>Les <b>reins</b> filtrent le sang et éliminent les déchets dans l'<b>urine</b>. La peau élimine aussi de l'eau et des sels par la sueur. Boire assez d'eau protège les reins.</p>`,
`<p>Manger varié, à heures régulières ; limiter sucre, sel et graisses ; laver fruits et légumes ; conserver les aliments au frais et couverts.</p>`
],[
["La photosynthèse se fait :",["la nuit","à la lumière","sous terre","dans les racines"],1,"À la lumière, dans les feuilles."],
["L'eau de chaux se trouble avec :",["le dioxygène","le dioxyde de carbone","l'azote","l'eau"],1,"CO₂."],
["Les poissons respirent avec :",["des poumons","des branchies","des trachées","la langue"],1,"Branchies."],
["Les nutriments passent dans le sang au niveau :",["de l'estomac","de l'intestin grêle","du gros intestin","de la bouche"],1,"Intestin grêle."],
["Nombre de cavités du cœur :",["2","3","4","6"],2,"2 oreillettes, 2 ventricules."],
["Organe qui fabrique l'urine :",["le foie","le rein","le cœur","l'estomac"],1,"Le rein."]
]);
add(['4e'],'SVT',['La reproduction humaine et la puberté','Les plantes : reproduction sexuée et asexuée','La relation de l\'organisme avec le milieu','Le système immunitaire : premières notions','L\'environnement : pollution et protection','Les roches et le sous-sol du Sénégal'],[
`<p>À la <b>puberté</b> (vers 10–15 ans), le corps change : poils, voix (garçons), seins et règles (filles). Les organes reproducteurs deviennent fonctionnels : testicules (spermatozoïdes), ovaires (ovules). La fécondation forme une cellule-œuf qui se développe dans l'utérus.</p>`,
`<p>Reproduction <b>sexuée</b> : fleur → pollinisation → fécondation → graine. Reproduction <b>asexuée</b> (multiplication végétative) : bouture (manioc), tubercule (patate douce), marcotte, greffe (manguier).</p>`,
`<p>Les organes des sens captent les informations (stimuli) ; les nerfs les transmettent au cerveau qui commande les muscles. Le réflexe est une réponse rapide et involontaire.</p>`,
`<p>La peau et les muqueuses empêchent les microbes d'entrer. S'ils entrent, les globules blancs les combattent (phagocytose, anticorps). Le vaccin prépare l'organisme à se défendre.</p>`,
`<p>Pollutions : plastiques, eaux usées, fumées, pesticides. Conséquences : maladies, mort des poissons, sols abîmés. Protection : tri des déchets, reboisement, aires marines protégées.</p>`,
`<p>Roches sédimentaires (calcaire, grès, argile, latérite), roches volcaniques (basalte du Cap-Vert à Dakar), roches anciennes du Sénégal oriental. Ressources : phosphates (Taïba), or (Sabodala), calcaire (cimenteries), sel.</p>`
],[
["À la puberté, l'ovaire produit :",["des spermatozoïdes","des ovules","du lait","des anticorps"],1,"Les ovules."],
["Le manioc se reproduit souvent par :",["graines","bouture","greffe","marcotte"],1,"Bouture."],
["Une réponse rapide et involontaire :",["un réflexe","une pensée","une digestion","une respiration"],0,"Le réflexe."],
["Les globules blancs servent à :",["transporter l'oxygène","combattre les microbes","digérer","respirer"],1,"Défense."],
["Roche volcanique de Dakar :",["calcaire","basalte","grès","argile"],1,"Basalte."],
["Phosphates exploités à :",["Taïba","Saint-Louis","Ziguinchor","Kaolack"],0,"Taïba."]
]);

/* ================= Sciences physiques ================= */
add(['6e','5e'],'Sciences physiques',['Les états de la matière','Masse et volume','Les mélanges','La température','L\'électricité : circuit simple','La lumière et les ombres'],[
`<p>La matière existe sous trois états : <b>solide</b> (forme propre), <b>liquide</b> (prend la forme du récipient, surface libre horizontale), <b>gazeux</b> (occupe tout l'espace). Changements : fusion, solidification, vaporisation, liquéfaction.</p>`,
`<p>La <b>masse</b> se mesure avec une balance (en kg, g). Le <b>volume</b> se mesure avec une éprouvette graduée (en L, mL ; 1 mL = 1 cm³). On lit le volume au bas du ménisque.</p>`,
`<p>Mélange <b>homogène</b> (on ne distingue qu'une seule phase : eau sucrée) et <b>hétérogène</b> (eau + sable). Séparer : décantation, filtration, évaporation, distillation.</p>`,
`<p>La température se mesure en degrés Celsius (°C) avec un thermomètre. L'eau pure gèle à 0 °C et bout à 100 °C (au niveau de la mer).</p>`,
`<p>Un circuit simple : générateur (pile), récepteur (lampe), fils, interrupteur. Le courant circule dans une <b>boucle fermée</b>. Conducteurs : métaux ; isolants : plastique, bois sec, verre.</p>`,
`<p>La lumière se propage en <b>ligne droite</b>. Un objet opaque éclairé produit une <b>ombre</b>. Sources primaires (soleil, lampe) et objets diffusants (lune, murs).</p>`
],[
["Un liquide :",["a une forme propre","prend la forme du récipient","occupe tout l'espace","est toujours chaud"],1,"Forme du récipient."],
["1 mL = ",["1 cm³","10 cm³","1 L","1 g"],0,"1 cm³."],
["Eau + sable est un mélange :",["homogène","hétérogène","pur","gazeux"],1,"On voit deux phases."],
["Pour séparer l'eau et le sable :",["la filtration","la fusion","l'évaporation seule","la congélation"],0,"Filtration."],
["L'eau pure bout à :",["0 °C","50 °C","100 °C","37 °C"],2,"100 °C."],
["La lumière se propage :",["en zigzag","en ligne droite","en cercle","seulement la nuit"],1,"En ligne droite."]
]);
add(['4e'],'Sciences physiques',['Masse volumique','Intensité et tension électriques','Circuits en série et en dérivation','Atomes et molécules','Les combustions','Lentilles et lumière'],[
`<div class="box">ρ = m / V (en g/cm³ ou kg/m³)</div><p>Eau : 1 g/cm³. Un objet de masse volumique plus petite que celle de l'eau <b>flotte</b> (bois, huile).</p><div class="ex">m = 270 g, V = 100 cm³ → ρ = 2,7 g/cm³ (aluminium).</div>`,
`<p>L'<b>intensité</b> I se mesure en ampères (A) avec un ampèremètre branché <b>en série</b>. La <b>tension</b> U se mesure en volts (V) avec un voltmètre branché <b>en dérivation</b>.</p>`,
`<p><b>En série</b> : un seul chemin ; I est la même partout ; U = U₁ + U₂. Si une lampe grille, tout s'éteint.<br><b>En dérivation</b> : plusieurs branches ; I = I₁ + I₂ ; même tension aux bornes de chaque branche. Installation de la maison.</p>`,
`<p>La matière est formée d'<b>atomes</b> (H, O, C, N, Fe…). Les atomes s'assemblent en <b>molécules</b> : H₂O (eau), O₂ (dioxygène), CO₂ (dioxyde de carbone), CH₄ (méthane).</p>`,
`<p>Une combustion nécessite un <b>combustible</b>, un <b>comburant</b> (dioxygène) et une source de chaleur (triangle du feu). Combustion du carbone : C + O₂ → CO₂ (trouble l'eau de chaux).</p>`,
`<p>Lentille convergente (bords minces, loupe) et divergente (bords épais). Une lentille convergente concentre la lumière au <b>foyer</b>. L'œil, l'appareil photo et le projecteur utilisent des lentilles.</p>`
],[
["Masse volumique de l'eau :",["1 g/cm³","10 g/cm³","0,5 g/cm³","100 g/cm³"],0,"1 g/cm³."],
["m = 270 g, V = 100 cm³ : ρ = ",["2,7 g/cm³","27 g/cm³","0,37 g/cm³","370 g/cm³"],0,"270 ÷ 100."],
["L'ampèremètre se branche :",["en série","en dérivation","n'importe comment","hors du circuit"],0,"En série."],
["Dans un circuit en série, si une lampe grille :",["les autres brillent plus","tout s'éteint","rien ne change","la pile explose"],1,"Un seul chemin."],
["Formule de l'eau :",["CO₂","H₂O","O₂","CH₄"],1,"H₂O."],
["Le comburant d'une combustion :",["le bois","le dioxygène","l'eau","le sable"],1,"Le dioxygène."]
]);

/* ================= Histoire-Géo ================= */
add(['6e'],'Histoire-Géo',['L\'histoire et ses sources','La préhistoire','L\'Égypte ancienne','La Grèce antique','Rome','La Terre dans le système solaire','Se repérer sur la Terre','Les continents et les océans'],[
`<p>L'histoire étudie le passé grâce aux <b>sources</b> : écrites, orales (griots), archéologiques (objets, ruines), iconographiques (images). On compte les années avant et après Jésus-Christ (av. J.-C., apr. J.-C.).</p>`,
`<p>Les premiers hommes sont apparus en <b>Afrique</b> (Afrique de l'Est). Paléolithique : chasse, cueillette, outils en pierre taillée, maîtrise du feu. Néolithique : agriculture, élevage, poterie, villages sédentaires.</p>`,
`<p>Civilisation née le long du <b>Nil</b> vers 3000 av. J.-C. Le pharaon gouverne ; pyramides, hiéroglyphes, croyance en la vie après la mort. Cheikh Anta Diop a montré les liens de l'Égypte ancienne avec l'Afrique noire.</p>`,
`<p>Cités indépendantes (Athènes, Sparte). Athènes invente la <b>démocratie</b> au Ve siècle av. J.-C. Héritage : philosophie, théâtre, Jeux olympiques.</p>`,
`<p>Rome passe de la monarchie à la République, puis à l'Empire. L'empire romain domine la Méditerranée, y compris l'Afrique du Nord (Carthage). Héritage : le droit, le latin, les routes.</p>`,
`<p>La Terre est une planète du <b>système solaire</b>. Elle tourne sur elle-même en 24 h (jour et nuit) et autour du Soleil en 365 jours ¼ (saisons).</p>`,
`<p>Les <b>parallèles</b> (latitude, Nord ou Sud de l'équateur) et les <b>méridiens</b> (longitude, Est ou Ouest de Greenwich) permettent de situer un lieu. Dakar : environ 14° N, 17° O.</p>`,
`<p>Continents : Afrique, Amérique, Asie, Europe, Océanie, Antarctique. Océans : Atlantique, Pacifique, Indien, Arctique, Austral. L'Afrique est traversée par l'équateur.</p>`
],[
["Les premiers hommes sont apparus en :",["Europe","Afrique","Asie","Amérique"],1,"Afrique de l'Est."],
["Le Néolithique est marqué par :",["l'agriculture","internet","l'écriture seulement","l'avion"],0,"Agriculture et élevage."],
["Le fleuve de l'Égypte ancienne :",["Niger","Nil","Sénégal","Congo"],1,"Le Nil."],
["La démocratie est née à :",["Rome","Athènes","Sparte","Carthage"],1,"Athènes."],
["La Terre tourne sur elle-même en :",["24 h","365 jours","1 mois","12 h"],0,"Alternance jour/nuit."],
["Les lignes de latitude s'appellent :",["méridiens","parallèles","fuseaux","équateurs"],1,"Parallèles."],
["Le plus grand océan :",["Atlantique","Pacifique","Indien","Arctique"],1,"Pacifique."]
]);
add(['5e'],'Histoire-Géo',['L\'Afrique au Moyen Âge','La naissance et l\'expansion de l\'islam','L\'Europe féodale','Les grands empires du Soudan occidental','Les royaumes sénégambiens','L\'Afrique : relief et climat','La population africaine','Les ressources de l\'Afrique'],[
`<p>Entre le VIIe et le XVIe siècle, l'Afrique connaît de grands États : Ghana, Mali, Songhaï à l'ouest ; Éthiopie, Zimbabwe, royaumes swahilis à l'est. Le commerce transsaharien relie l'Afrique noire au Maghreb.</p>`,
`<p>L'islam naît en Arabie au VIIe siècle avec le prophète <b>Mohammed (PSL)</b>. Il se diffuse en Afrique du Nord, puis au sud du Sahara par les commerçants et les lettrés. Tombouctou devient un grand centre de savoir.</p>`,
`<p>En Europe, la société est dominée par les seigneurs (châteaux, vassaux) et l'Église. Les paysans travaillent la terre.</p>`,
`<p>Ghana (or et sel), Mali (Soundiata, Kankou Moussa, Charte du Manden), Songhaï (Sonni Ali Ber, Askia Mohammed ; fin en 1591).</p>`,
`<p>Tekrour, Djolof, Cayor, Baol, Walo, Sine, Saloum, Gabou, Fouta Toro. Organisation : roi, aristocratie, hommes libres, gens de caste, captifs.</p>`,
`<p>L'Afrique est un continent de plateaux, avec de hautes montagnes à l'est (Kilimandjaro). Grands fleuves : Nil, Congo, Niger. Climats : équatorial, tropical, désertique (Sahara), méditerranéen.</p>`,
`<p>Plus d'un milliard d'habitants, population jeune et en forte croissance, inégalement répartie (vallées, côtes, villes). Urbanisation rapide : Lagos, Le Caire, Kinshasa.</p>`,
`<p>Agriculture, pétrole et gaz (Nigeria, Sénégal…), minerais (or, cuivre, cobalt, phosphates), forêts, pêche. Défi : transformer ces ressources sur place.</p>`
],[
["L'islam naît au :",["VIIe siècle","XIe siècle","Ier siècle","XVe siècle"],0,"En Arabie."],
["Grand centre de savoir au Mali :",["Tombouctou","Dakar","Accra","Kano"],0,"Tombouctou."],
["Fin de l'empire songhaï :",["1591","1236","1324","1960"],0,"Bataille de Tondibi."],
["Plus haute montagne d'Afrique :",["Kilimandjaro","Fouta-Djalon","Atlas","Mont Cameroun"],0,"Kilimandjaro."],
["Le plus grand désert d'Afrique :",["Kalahari","Sahara","Namib","Ferlo"],1,"Sahara."],
["Fleuve qui traverse le Mali et le Niger :",["Niger","Nil","Congo","Zambèze"],0,"Le Niger."]
]);
add(['4e'],'Histoire-Géo',['Les grandes découvertes','La traite atlantique','Les révolutions (Angleterre, Amérique, France)','La révolution industrielle','La colonisation de l\'Afrique','Les résistances africaines','L\'Europe : un continent de puissances','L\'Amérique et l\'Asie'],[
`<p>Aux XVe–XVIe siècles, les Européens explorent les océans : les Portugais longent les côtes africaines (Cap-Vert 1444), Christophe Colomb atteint l'Amérique (1492), Vasco de Gama l'Inde (1498).</p>`,
`<p>Commerce triangulaire entre l'Europe, l'Afrique et l'Amérique. Des millions d'Africains déportés. Comptoirs : Gorée, Saint-Louis. Abolition par la France en 1848.</p>`,
`<p>Révolution anglaise (XVIIe), indépendance américaine (1776), Révolution française (1789) : Déclaration des droits de l'homme et du citoyen. Haïti devient la première république noire indépendante (1804).</p>`,
`<p>Au XIXe siècle, la machine à vapeur, le charbon, le chemin de fer transforment l'économie européenne. Les usines ont besoin de matières premières et de marchés : cela pousse à la colonisation.</p>`,
`<p>Conférence de Berlin (1884–1885) : partage de l'Afrique. Le Sénégal est colonisé par la France ; création de l'AOF (1895), capitale Dakar (1902).</p>`,
`<p>Lat Dior, Alboury Ndiaye, El Hadj Omar, Samory Touré, Cheikh Ahmadou Bamba, Aline Sitoé Diatta, Béhanzin… Résistances armées ou pacifiques.</p>`,
`<p>L'Europe, petit continent très peuplé et industrialisé ; grandes puissances : Allemagne, France, Royaume-Uni. L'Union européenne regroupe 27 pays.</p>`,
`<p>Amérique : États-Unis (première puissance mondiale), Brésil (puissance émergente). Asie : continent le plus peuplé ; Chine, Inde, Japon.</p>`
],[
["Christophe Colomb atteint l'Amérique en :",["1492","1789","1848","1444"],0,"1492."],
["Abolition de l'esclavage par la France :",["1789","1848","1960","1904"],1,"1848."],
["Première république noire indépendante :",["Haïti","Libéria","Ghana","Sénégal"],0,"Haïti, 1804."],
["La révolution industrielle repose sur :",["la machine à vapeur","internet","le pétrole seul","la poudre"],0,"Vapeur et charbon."],
["Partage de l'Afrique :",["Conférence de Berlin","Bandoeng","Yalta","Brazzaville"],0,"1884–1885."],
["Résistant de Guinée et du Mali actuel :",["Samory Touré","Lat Dior","Blaise Diagne","Senghor"],0,"Samory Touré."]
]);

/* ================= Anglais ================= */
add(['6e'],'Anglais',['Greetings and introductions','The alphabet and numbers','My family','Colours, days and months','My school','To be and to have got'],[
`<div class="ex">— Hello! What's your name?<br>— My name is Awa. How are you?<br>— I'm fine, thank you. Nice to meet you!</div><p>Good morning / good afternoon / good evening / goodbye.</p>`,
`<p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Numbers: one, two, three, four, five, six, seven, eight, nine, ten… twenty, thirty, a hundred.</p>`,
`<p>father, mother, brother, sister, grandfather, grandmother, uncle, aunt, cousin.</p><div class="ex">This is my mother. Her name is Fatou.</div>`,
`<p>Colours: red, blue, green, yellow, black, white. Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Months: January… December.</p>`,
`<p>classroom, teacher, pupil, desk, board, pen, pencil, ruler, schoolbag, book.</p><div class="ex">There is a board in my classroom. There are forty pupils.</div>`,
`<table class="table"><tr><th>to be</th><th>to have got</th></tr><tr><td>I am</td><td>I have got</td></tr><tr><td>you are</td><td>you have got</td></tr><tr><td>he/she/it is</td><td>he/she/it has got</td></tr><tr><td>we/they are</td><td>we/they have got</td></tr></table>`
],[
["« How are you? » — « I'm ___, thank you. »",["fine","name","old","good morning"],0,"I'm fine."],
["The sister of my father is my…",["uncle","aunt","cousin","mother"],1,"Aunt."],
["The day after Monday:",["Sunday","Tuesday","Friday","Thursday"],1,"Tuesday."],
["She ___ twelve years old.",["am","is","are","has"],1,"she is."],
["They ___ got a big house.",["has","have","is","are"],1,"they have got."],
["« Vert » in English:",["red","green","blue","yellow"],1,"Green."]
]);
add(['5e'],'Anglais',['Simple present','Present continuous','There is / there are','Prepositions of place','Can and can\'t','Food and drinks'],[
`<p>Habits: <i>I get up at six. She goes to school by bus.</i> He/she/it + s. Negative: don't / doesn't. Question: Do / Does…?</p>`,
`<p>Now: <i>I am reading. They are playing football.</i> be + verb-ing.</p>`,
`<p><i>There is a mango tree in the yard. There are three chairs.</i> Question: Is there…? Are there…?</p>`,
`<p>in, on, under, behind, in front of, next to, between.</p><div class="ex">The cat is under the table. The bag is next to the door.</div>`,
`<p><i>I can swim. She can't drive.</i> Can + verb (no « to », no « s »). Question: Can you…?</p>`,
`<p>rice, fish, meat, bread, milk, water, tea, juice, mango, banana. <i>I like fish. I don't like milk.</i> How much is it? It's 500 francs.</p>`
],[
["She ___ to school by bus.",["go","goes","going","is go"],1,"he/she/it + s."],
["Look! They ___ football.",["play","are playing","plays","played"],1,"Present continuous."],
["___ three chairs in the room.",["There is","There are","It is","They is"],1,"Plural: there are."],
["The cat is ___ the table. (sous)",["on","under","in","next"],1,"Under."],
["I ___ swim.",["can","cans","can to","am can"],0,"Can + verb."],
["« Poisson » in English:",["meat","fish","bread","rice"],1,"Fish."]
]);
add(['4e'],'Anglais',['Simple past','Past continuous','Comparatives and superlatives','The future (will / going to)','Must and have to','Writing a short letter'],[
`<p><i>Yesterday I visited my uncle. We went to the beach.</i> Regular verbs: -ed. Irregular: go/went, see/saw, eat/ate, buy/bought. Negative: didn't + verb.</p>`,
`<p><i>I was sleeping when the phone rang.</i> was/were + -ing.</p>`,
`<p>tall → taller → the tallest ; big → bigger → the biggest ; beautiful → more beautiful → the most beautiful ; good → better → the best.</p>`,
`<p><i>It will rain tomorrow.</i> (prediction) — <i>I am going to visit my grandmother.</i> (plan).</p>`,
`<p><i>You must respect your parents.</i> (rule) — <i>I have to wake up early.</i> (obligation). <i>You mustn't smoke.</i> (prohibition).</p>`,
`<p>Dear Ousmane,<br>How are you? I'm fine… Write soon!<br>Best wishes,<br>Awa</p>`
],[
["Yesterday we ___ to the beach.",["go","went","goes","going"],1,"Past of go."],
["I ___ sleeping when the phone rang.",["was","were","am","did"],0,"Past continuous."],
["Comparative of « big »:",["biger","bigger","more big","biggest"],1,"Double the consonant."],
["Superlative of « good »:",["the goodest","the best","the better","the most good"],1,"Irregular."],
["You ___ smoke here. (interdit)",["must","mustn't","have to","can"],1,"Prohibition."],
["Plan: I ___ visit my grandmother.",["am going to","going","will to","goes to"],0,"be going to."]
]);

/* ================= Éducation civique (6e – 4e) ================= */
add(['6e','5e','4e'],'Éducation civique',['Les symboles de la République','Les droits et devoirs du citoyen','L\'école et le règlement intérieur','La commune et la décentralisation','La santé et la sécurité','Le respect de l\'environnement'],[
`<p>Drapeau vert-or-rouge à étoile verte ; devise « Un Peuple – Un But – Une Foi » ; hymne <i>Le Lion rouge</i> ; armoiries (lion, baobab) ; fête nationale le 4 avril. Le respect des symboles exprime l'attachement à la nation.</p>`,
`<p>Droits : éducation, santé, liberté d'expression, égalité. Devoirs : respecter les lois, payer les impôts, défendre la patrie, voter, protéger les biens publics.</p>`,
`<p>Le règlement intérieur fixe les règles : ponctualité, tenue, respect des personnes et du matériel, sanctions. Les délégués de classe représentent les élèves.</p>`,
`<p>La <b>décentralisation</b> transfère des compétences de l'État aux <b>collectivités territoriales</b> (départements, communes) dirigées par des élus : éducation de base, santé, environnement, état civil.</p>`,
`<p>Prévention : vaccination, hygiène, refus des drogues, prudence sur la route (casque, ceinture), gestes de premiers secours, numéros d'urgence (sapeurs-pompiers : 18).</p>`,
`<p>Lutte contre les plastiques, les feux de brousse et le gaspillage de l'eau ; reboisement ; set setal ; protection des parcs et réserves.</p>`
],[
["Fête nationale du Sénégal :",["4 avril","20 août","1er mai","12 décembre"],0,"4 avril."],
["Un devoir du citoyen :",["payer ses impôts","voler","tricher","polluer"],0,"Impôts."],
["La décentralisation donne des compétences :",["aux collectivités territoriales","à l'étranger","aux entreprises seulement","aux élèves"],0,"Communes et départements."],
["Les représentants des élèves :",["les délégués","les surveillants","les parents","les maires"],0,"Délégués de classe."],
["Numéro des sapeurs-pompiers au Sénégal :",["18","17","15","112 seulement"],0,"18."]
]);

/* ================= Informatique (6e – 4e) ================= */
add(['6e','5e','4e'],'Informatique',['L\'ordinateur et ses parties','Le clavier et la souris','Fichiers et dossiers','Le traitement de texte','Internet et le courrier électronique','Les dangers d\'Internet'],[
`<p>Unité centrale (processeur, mémoire, disque), écran, clavier, souris, imprimante. Matériel et logiciels. Le système d'exploitation (Windows, Linux, Android) fait fonctionner l'appareil.</p>`,
`<p>Clavier : lettres, chiffres, Entrée, Espace, Retour arrière, Maj (majuscules). Souris : clic gauche, clic droit, double-clic, glisser-déposer.</p>`,
`<p>Un fichier contient un document ; un dossier range des fichiers. Créer, renommer, copier (Ctrl+C), coller (Ctrl+V), supprimer. Enregistrer souvent (Ctrl+S).</p>`,
`<p>Saisir un texte, le mettre en forme (gras, italique, taille, couleur, alignement), insérer une image, corriger les fautes, enregistrer et imprimer.</p>`,
`<p>Navigateur, adresse web, moteur de recherche. Adresse e-mail : nom@fournisseur.com. Écrire un message : destinataire, objet, texte, pièce jointe.</p>`,
`<p>Ne jamais donner son mot de passe ou son code. Se méfier des inconnus et des liens bizarres. Ne pas publier d'informations personnelles. En cas de harcèlement, en parler à un adulte.</p>`
],[
["La partie qui calcule :",["l'écran","le processeur","la souris","l'imprimante"],1,"Le processeur."],
["Raccourci pour enregistrer :",["Ctrl+S","Ctrl+P","Ctrl+Z","Ctrl+A"],0,"Ctrl+S."],
["Un dossier sert à :",["ranger des fichiers","imprimer","naviguer","calculer"],0,"Ranger."],
["Un inconnu te demande ton mot de passe :",["tu le donnes","tu refuses et tu en parles à un adulte","tu l'envoies par SMS","tu le publies"],1,"Jamais."],
["Exemple d'adresse e-mail :",["awa@exemple.com","www.awa","awa.sn","@awa"],0,"nom@domaine."]
]);

(window.SJ_CONTENT=window.SJ_CONTENT||[]).push(D);
})();
