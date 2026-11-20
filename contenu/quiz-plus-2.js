/* Sunu Jàng — Questions de quiz supplémentaires : sciences, histoire-géo, anglais,
   éducation civique et informatique des classes intermédiaires, et maths des séries L. */
(function(){
const X={};
function A(levels,subj,qs){levels.forEach(lv=>{const k=lv+'|'+subj;X[k]=(X[k]||[]).concat(qs)})}
const E1=['CI','CP'],E2=['CE1','CE2'];

/* ----- CI – CP ----- */
A(E1,'Sciences (IST)',[
 ["On entend avec :",["les yeux","les oreilles","la langue","les pieds"],1,"L'ouïe."],
 ["On sent les odeurs avec :",["le nez","la main","l'oreille","le genou"],0,"L'odorat."],
 ["Un animal domestique :",["la chèvre","le lion","l'éléphant","la girafe"],0,"Il vit avec l'homme."],
 ["La plante a besoin de :",["sel","eau et lumière","sucre","huile"],1,"Eau, lumière, terre."],
 ["Un grand arbre de chez nous :",["le baobab","le sapin","le chêne","le pommier"],0,"Le baobab."],
 ["Je me brosse :",["les cheveux seulement","les dents","les pieds","les yeux"],1,"Chaque jour."]
]);
A(E1,'Histoire',[
 ["La maman de ma maman est ma…",["tante","grand-mère","sœur","cousine"],1,"Grand-mère."],
 ["Le jour qui est passé :",["demain","hier","aujourd'hui","ce soir"],1,"Hier."],
 ["Le dernier jour de la semaine :",["lundi","samedi","dimanche","vendredi"],2,"Dimanche."],
 ["Combien de mois dans une année ?",["7","10","12","30"],2,"12 mois."],
 ["Le premier mois de l'année :",["janvier","mars","décembre","juin"],0,"Janvier."]
]);
A(E1,'Géographie',[
 ["Le maître écrit sur :",["le tableau","le sol","la porte","la fenêtre"],0,"Le tableau."],
 ["On achète du pain à :",["la boutique","la mosquée","l'école","la plage"],0,"La boutique."],
 ["Le soleil brille :",["la nuit","le jour","jamais","sous la terre"],1,"Le jour."],
 ["La main qui n'est pas la droite :",["la gauche","le haut","le bas","le milieu"],0,"La gauche."],
 ["Le cartable est … la table (en dessous).",["sur","sous","dans","devant"],1,"Sous."]
]);
A(E1,'Éducation civique',[
 ["Quand je bouscule quelqu'un, je dis :",["Merci","Pardon","Bravo","Bonjour"],1,"Pardon."],
 ["Avec mes camarades, je…",["partage","frappe","crie","vole"],0,"Je partage."],
 ["Mes affaires, je les…",["jette","range","casse","perds"],1,"Je range."],
 ["Pendant la levée du drapeau, je suis :",["debout et calme","en train de courir","assis par terre","en train de crier"],0,"Respect."],
 ["Je salue :",["seulement mes amis","mes parents, mon maître et mes camarades","personne","les animaux seulement"],1,"Tout le monde."]
]);

/* ----- CE1 – CE2 ----- */
A(E2,'Sciences (IST)',[
 ["Le crâne protège :",["le cœur","le cerveau","l'estomac","les pieds"],1,"Le cerveau."],
 ["Les dents qui coupent :",["incisives","molaires","canines","prémolaires"],0,"Incisives."],
 ["Un aliment pour grandir :",["le poisson","le sucre","l'huile","le thé"],0,"Protéines."],
 ["L'oiseau se déplace en :",["rampant","volant","nageant","creusant"],1,"Il vole."],
 ["Pour éviter le paludisme, on dort :",["dehors","sous une moustiquaire","sans drap","au soleil"],1,"Moustiquaire."],
 ["Les caries sont causées surtout par :",["l'eau","le sucre et les restes d'aliments","le savon","le sport"],1,"Brosser ses dents."]
]);
A(E2,'Histoire',[
 ["Nous vivons au :",["XIXe siècle","XXe siècle","XXIe siècle","Xe siècle"],2,"Années 2000."],
 ["Autrefois on puisait l'eau :",["au robinet","au puits","au frigo","à la pharmacie"],1,"Au puits."],
 ["Métier qui travaille le fer :",["forgeron","tisserand","griot","pêcheur"],0,"Forgeron."],
 ["Roi du Cayor qui résista aux colons :",["Lat Dior","Senghor","Wade","Faidherbe"],0,"Lat Dior."],
 ["Guide religieux, résistance pacifique :",["Cheikh Ahmadou Bamba","Lat Dior","Alboury","Faidherbe"],0,"Cheikh Ahmadou Bamba."],
 ["On range les événements sur :",["une frise","une carte","un plan","un thermomètre"],0,"La frise du temps."]
]);
A(E2,'Géographie',[
 ["Le soleil se couche à :",["l'Est","l'Ouest","le Nord","le Sud"],1,"À l'Ouest."],
 ["Le contraire du Nord :",["l'Est","l'Ouest","le Sud","le haut"],2,"Le Sud."],
 ["La capitale du Sénégal :",["Thiès","Dakar","Saint-Louis","Kaolack"],1,"Dakar."],
 ["Un fleuve du Sénégal :",["la Gambie","le Nil","le Congo","l'Amazone"],0,"La Gambie."],
 ["Un métier de la ville :",["éleveur","mécanicien","berger","cultivateur"],1,"Mécanicien."],
 ["Un plan représente un lieu :",["plus grand","plus petit, vu d'en haut","de côté","en 3D seulement"],1,"Vu d'en haut."]
]);
A(E2,'Éducation civique',[
 ["Arriver à l'heure à l'école, c'est :",["la ponctualité","la paresse","le désordre","la colère"],0,"Ponctualité."],
 ["Un enfant a droit :",["aux soins","au travail forcé","aux coups","à rien"],0,"Droit à la santé."],
 ["Si un adulte me fait du mal, je…",["me tais","en parle à un adulte de confiance","pleure seul","fuis la maison"],1,"Je demande de l'aide."],
 ["Je marche :",["sur la chaussée","sur le trottoir","au milieu de la route","sur les rails"],1,"Trottoir."],
 ["Les arbres de l'école, je les…",["casse","arrose","brûle","coupe"],1,"J'en prends soin."]
]);

/* ----- CM1 ----- */
A(['CM1'],'Sciences (IST)',[
 ["Après une course, on respire :",["moins vite","plus vite","pas du tout","pareil"],1,"Besoin d'oxygène."],
 ["La bilharziose s'attrape :",["dans les marigots","en mangeant des fruits lavés","au soleil","en dormant"],0,"Eaux douces infestées."],
 ["L'eau bout à :",["0 °C","100 °C","50 °C","37 °C"],1,"100 °C."],
 ["Un repas équilibré contient :",["un seul aliment","les trois groupes d'aliments","seulement du sucre","seulement de la viande"],1,"Construction, énergie, protection."],
 ["Circuit fermé :",["l'ampoule brille","l'ampoule s'éteint","la pile disparaît","rien"],0,"Le courant passe."],
 ["La vapeur qui redevient liquide :",["fusion","condensation","solidification","évaporation"],1,"Condensation."]
]);
A(['CM1'],'Histoire',[
 ["Les archéologues étudient :",["les objets et ruines anciens","les étoiles","les maladies","les nuages"],0,"Sources archéologiques."],
 ["Les premiers hommes vivaient de :",["l'industrie","la chasse et la cueillette","internet","l'usine"],1,"Paléolithique."],
 ["Kankou Moussa était empereur du :",["Mali","Ghana","Songhaï","Cayor"],0,"Mali."],
 ["La richesse des empires venait de :",["l'or et du sel","du pétrole","du café","du coton seulement"],0,"Commerce transsaharien."],
 ["Roi du Sine :",["Bour","Damel","Brak","Teigne"],0,"Bour."],
 ["Capitale de l'empire songhaï :",["Gao","Koumbi Saleh","Tombouctou","Dakar"],0,"Gao."]
]);
A(['CM1'],'Géographie',[
 ["L'échelle d'une carte indique :",["les couleurs","le rapport des distances","le titre","la date"],1,"Échelle."],
 ["Pays à l'est du Sénégal :",["Mali","Mauritanie","Gambie","Guinée-Bissau"],0,"Mali."],
 ["Océan à l'ouest du Sénégal :",["Indien","Atlantique","Pacifique","Arctique"],1,"Atlantique."],
 ["La saison sèche va environ :",["de novembre à juin","de juillet à octobre","toute l'année","en août seulement"],0,"Novembre à juin."],
 ["Minerai exploité au Sénégal :",["phosphates","diamants","uranium","cuivre"],0,"Phosphates."],
 ["Les hauteurs du Sénégal sont vers :",["Kédougou","Dakar","Louga","Saint-Louis"],0,"Sud-est."]
]);
A(['CM1'],'Éducation civique',[
 ["Le conseil municipal est :",["élu par les habitants","nommé par l'école","choisi par le maître","tiré au sort"],0,"Élu."],
 ["Le règlement intérieur s'applique :",["à l'école","au marché","au stade","à la plage"],0,"À l'école."],
 ["Visiter un malade, c'est :",["de la solidarité","de la paresse","interdit","inutile"],0,"Solidarité."],
 ["Les armoiries du Sénégal montrent :",["un lion et un baobab","un aigle","un éléphant seulement","une étoile rouge"],0,"Lion et baobab."],
 ["Se faire vacciner protège :",["soi et les autres","seulement les adultes","personne","seulement les animaux"],0,"Santé collective."]
]);

/* ----- 6e – 4e ----- */
A(['6e'],'SVT',[
 ["Un vertébré :",["l'escargot","le poisson","le ver","l'araignée"],1,"Squelette interne."],
 ["Une araignée a :",["6 pattes","8 pattes","4 pattes","10 pattes"],1,"8 pattes."],
 ["La cellule végétale possède en plus :",["une paroi","un noyau","une membrane","un cytoplasme"],0,"Paroi."],
 ["Le pollen est produit par :",["les étamines","le pistil","les racines","les feuilles"],0,"Étamines."],
 ["En saison sèche, certains oiseaux :",["migrent","dorment toujours","deviennent des poissons","disparaissent pour toujours"],0,"Migration."],
 ["On observe les cellules avec :",["une loupe simple","un microscope","un télescope","des lunettes"],1,"Microscope."]
]);
A(['5e'],'SVT',[
 ["La photosynthèse produit :",["de l'amidon","du sel","du pétrole","du sable"],0,"Matière organique."],
 ["Les insectes respirent avec :",["des trachées","des poumons","des branchies","la peau seulement"],0,"Trachées."],
 ["Les enzymes servent à :",["digérer","respirer","voir","courir"],0,"Transformer les aliments."],
 ["Le sang va du cœur aux organes par :",["les artères","les veines","les nerfs","les os"],0,"Artères."],
 ["La sueur est éliminée par :",["la peau","le rein","le foie","le cœur"],0,"Glandes sudoripares."],
 ["Pour conserver les aliments :",["au frais et couverts","au soleil","découverts","par terre"],0,"Hygiène."]
]);
A(['4e'],'SVT',[
 ["La greffe est utilisée pour :",["le manguier","le mil","le riz","l'arachide"],0,"Multiplication végétative."],
 ["Les nerfs transmettent les messages :",["au cerveau","à l'estomac","aux os","aux cheveux"],0,"Système nerveux."],
 ["Le vaccin :",["prépare l'organisme à se défendre","guérit tout de suite","tue l'homme","n'a aucun effet"],0,"Prévention."],
 ["Or exploité au Sénégal à :",["Sabodala","Taïba","Mbour","Louga"],0,"Sabodala."],
 ["Une cause de pollution :",["les sachets plastiques","le reboisement","le tri","les parcs"],0,"Plastiques."],
 ["La fécondation forme :",["une cellule-œuf","un ovule","un spermatozoïde","un fruit"],0,"Cellule-œuf."]
]);
A(['6e','5e'],'Sciences physiques',[
 ["Un gaz :",["occupe tout l'espace disponible","a une forme propre","ne se mélange jamais","est toujours visible"],0,"Gaz."],
 ["On mesure la masse avec :",["une balance","une règle","un thermomètre","une éprouvette"],0,"Balance."],
 ["Eau sucrée : mélange",["homogène","hétérogène","solide","gazeux"],0,"Une seule phase."],
 ["Pour récupérer le sel de l'eau salée :",["évaporation","filtration","aimant","décantation"],0,"L'eau s'évapore."],
 ["Matériau conducteur :",["le cuivre","le bois sec","le plastique","le verre"],0,"Métal."],
 ["La lune :",["diffuse la lumière du soleil","produit sa propre lumière","est une étoile","est un soleil"],0,"Objet diffusant."]
]);
A(['4e'],'Sciences physiques',[
 ["Le voltmètre se branche :",["en dérivation","en série","hors du circuit","au sol"],0,"En dérivation."],
 ["Unité de l'intensité :",["volt","ampère","ohm","watt"],1,"Ampère."],
 ["En dérivation, la tension :",["est la même aux bornes de chaque branche","s'additionne","est nulle","double"],0,"Même tension."],
 ["Formule du dioxygène :",["O","O₂","CO₂","H₂O"],1,"O₂."],
 ["Triangle du feu : combustible, comburant et",["eau","chaleur","sable","sel"],1,"Source de chaleur."],
 ["Un objet de masse volumique 0,8 g/cm³ dans l'eau :",["coule","flotte","fond","explose"],1,"Moins dense que l'eau."]
]);
A(['6e'],'Histoire-Géo',[
 ["Les hiéroglyphes sont l'écriture de :",["l'Égypte ancienne","Rome","la Chine","le Mali"],0,"Égypte."],
 ["Le chef de l'Égypte ancienne :",["le pharaon","l'empereur romain","le Damel","le roi de Sparte"],0,"Pharaon."],
 ["Langue de Rome :",["le grec","le latin","l'arabe","le wolof"],1,"Latin."],
 ["La Terre tourne autour du Soleil en :",["24 h","environ 365 jours","1 mois","10 ans"],1,"Une année."],
 ["Ligne qui partage la Terre en deux hémisphères Nord et Sud :",["méridien de Greenwich","équateur","tropique","cercle polaire"],1,"Équateur."],
 ["Continent le plus froid :",["Antarctique","Afrique","Asie","Océanie"],0,"Antarctique."]
]);
A(['5e'],'Histoire-Géo',[
 ["Ville sainte de l'islam :",["La Mecque","Rome","Jérusalem seulement","Tombouctou"],0,"La Mecque."],
 ["Au Moyen Âge en Europe, le seigneur vit dans :",["un château","une usine","un gratte-ciel","une case"],0,"Château fort."],
 ["La Charte du Manden date de l'empire du :",["Mali","Ghana","Songhaï","Cayor"],0,"Mali."],
 ["Le plus long fleuve d'Afrique :",["Nil","Niger","Congo","Sénégal"],0,"Le Nil."],
 ["Plus grande ville d'Afrique de l'Ouest :",["Lagos","Dakar","Bamako","Accra"],0,"Lagos."],
 ["Climat au centre de l'Afrique (Congo) :",["équatorial","désertique","polaire","méditerranéen"],0,"Équatorial."]
]);
A(['4e'],'Histoire-Géo',[
 ["Vasco de Gama atteint l'Inde en :",["1498","1492","1789","1885"],0,"Par le cap de Bonne-Espérance."],
 ["La Révolution française date de :",["1789","1848","1914","1960"],0,"1789."],
 ["Capitale de l'AOF à partir de 1902 :",["Dakar","Saint-Louis","Bamako","Conakry"],0,"Dakar."],
 ["Résistant du Dahomey (Bénin) :",["Béhanzin","Lat Dior","Samory","Alboury"],0,"Béhanzin."],
 ["Pays le plus peuplé d'Asie (avec l'Inde) :",["Chine","Japon","Corée","Vietnam"],0,"Chine."],
 ["Nombre de pays de l'Union européenne :",["12","27","50","6"],1,"27."]
]);
A(['6e'],'Anglais',[
 ["« Good ___! » (le soir)",["morning","evening","night day","noon"],1,"Good evening."],
 ["Ten + five = ",["fifteen","fifty","twelve","five"],0,"15."],
 ["My father's brother is my…",["uncle","aunt","cousin","grandfather"],0,"Uncle."],
 ["The colour of the sky:",["blue","green","red","black"],0,"Blue."],
 ["I ___ a pupil.",["is","am","are","be"],1,"I am."],
 ["« Cahier » in English:",["exercise book","pen","ruler","bag"],0,"Exercise book."]
]);
A(['5e'],'Anglais',[
 ["___ he play football? (question)",["Do","Does","Is","Are"],1,"Does he…?"],
 ["She ___ not like milk.",["do","does","is","are"],1,"doesn't."],
 ["The bag is ___ the door. (à côté)",["next to","under","in","on"],0,"Next to."],
 ["___ there a school in your village?",["Is","Are","Do","Has"],0,"Is there…?"],
 ["Can you ___?",["swim","to swim","swims","swimming"],0,"can + verb."],
 ["« Riz » in English:",["rice","bread","meat","milk"],0,"Rice."]
]);
A(['4e'],'Anglais',[
 ["Past of « see »:",["seed","saw","seen","sees"],1,"see–saw–seen."],
 ["They ___ playing when it started to rain.",["was","were","are","did"],1,"they were."],
 ["The most beautiful = superlative of",["beautiful","beauty","beautifully","more"],0,"Long adjective."],
 ["Prediction: It ___ rain tomorrow.",["will","is","did","has"],0,"will."],
 ["I ___ to wake up early. (obligation)",["have","has","must to","can"],0,"have to."],
 ["Opening of an informal letter:",["Dear Ousmane,","Yours faithfully","To whom it may concern","Sir,"],0,"Informal."]
]);
A(['6e','5e','4e'],'Éducation civique',[
 ["Le droit de s'exprimer librement :",["la liberté d'expression","l'impôt","le devoir","la sanction"],0,"Droit fondamental."],
 ["Ce qui fixe les règles du collège :",["le règlement intérieur","la constitution du club","le menu","l'emploi du temps seul"],0,"Règlement intérieur."],
 ["Les communes sont dirigées par :",["des élus","des élèves","des entreprises","l'étranger"],0,"Élus locaux."],
 ["En moto, on porte :",["un casque","une casquette","rien","des lunettes seulement"],0,"Casque."],
 ["Le set setal sert à :",["nettoyer le quartier","faire la fête","voter","jouer au football"],0,"Propreté."],
 ["Protéger les biens publics, c'est :",["un devoir du citoyen","inutile","interdit","l'affaire des autres"],0,"Civisme."]
]);
A(['6e','5e','4e'],'Informatique',[
 ["Le double-clic sert souvent à :",["ouvrir un fichier","éteindre l'écran","imprimer","effacer le disque"],0,"Ouvrir."],
 ["La touche pour aller à la ligne :",["Entrée","Espace","Échap","Maj"],0,"Entrée."],
 ["Mettre un texte en gras dans Word (français) :",["Ctrl+G","Ctrl+V","Ctrl+P","Ctrl+Q"],0,"Ctrl+G."],
 ["Un moteur de recherche :",["sert à trouver des pages web","est une pièce de l'ordinateur","est un virus","est une imprimante"],0,"Recherche."],
 ["Une pièce jointe est :",["un fichier joint à un e-mail","une partie de la souris","un mot de passe","un câble"],0,"Fichier attaché."],
 ["Système d'exploitation :",["Windows","Word","Chrome","Gmail"],0,"Windows."]
]);

/* ----- 2nde – 1ère ----- */
A(['2nde'],'SVT',[
 ["Les procaryotes n'ont pas :",["de membrane","de vrai noyau","d'ADN","de cytoplasme"],1,"Pas de noyau."],
 ["Relation où deux êtres vivants s'aident :",["symbiose","prédation","parasitisme","compétition"],0,"Symbiose."],
 ["Mise en évidence de l'amidon :",["eau iodée","eau de chaux","eau salée","eau sucrée"],0,"Coloration bleu-violet."],
 ["Discontinuité entre croûte et manteau :",["Moho","Gutenberg","Lehmann","Richter"],0,"Moho."],
 ["Dans une dorsale, les plaques :",["s'écartent","se rapprochent","coulissent","ne bougent pas"],0,"Divergence."],
 ["Exemple d'écosystème sénégalais :",["la mangrove du Saloum","la toundra","la banquise","la taïga"],0,"Mangrove."]
]);
A(['1ère'],'SVT',[
 ["Les protéines sont transformées en :",["acides aminés","glucose","acides gras","amidon"],0,"Par les protéases."],
 ["Les villosités se trouvent dans :",["l'intestin grêle","l'estomac","le foie","la bouche"],0,"Absorption."],
 ["Les levures font une fermentation :",["alcoolique","lactique","aérobie","photosynthétique"],0,"Alcoolique."],
 ["Les plaquettes servent à :",["la coagulation","transporter O₂","produire des anticorps","digérer"],0,"Coagulation."],
 ["Un fossile caractéristique d'une période :",["fossile stratigraphique","roche magmatique","minéral","cristal"],0,"Datation relative."],
 ["La datation absolue utilise :",["la radioactivité","la couleur des roches","la taille des fossiles","la superposition"],0,"Radiochronologie."]
]);
A(['2nde'],'Sciences physiques',[
 ["Le mouvement dépend du :",["référentiel","poids","volume","temps seulement"],0,"Relativité du mouvement."],
 ["Distance 100 m en 20 s : vitesse",["5 m/s","2 000 m/s","0,2 m/s","120 m/s"],0,"100 ÷ 20."],
 ["Dans les métaux, le courant est dû aux :",["électrons","protons","neutrons","ions positifs seulement"],0,"Électrons libres."],
 ["Puissance d'un dipôle : P = ",["U I","U / I","R / I","I / U"],0,"P = UI."],
 ["Un atome de chlore gagne 1 électron : il devient",["Cl⁻","Cl⁺","Cl²⁺","Cl"],0,"Anion."],
 ["Dilution : C₁V₁ = ",["C₂V₂","C₂/V₂","V₁/C₂","C₁ + V₂"],0,"Conservation de la quantité de matière."]
]);
A(['1ère'],'Sciences physiques',[
 ["Ep de pesanteur = ",["m g z","½ m v²","m v","F d"],0,"Ep = mgz."],
 ["Unité de l'énergie :",["joule","watt","newton","volt"],0,"Joule."],
 ["Loi de Coulomb : F proportionnelle à",["1/d²","d","d²","1/d"],0,"Inverse du carré."],
 ["Unité de capacité :",["farad","henry","ohm","tesla"],0,"Farad."],
 ["Polymère obtenu à partir de l'éthylène :",["polyéthylène","nylon","PVC seulement","verre"],0,"Polyéthylène."],
 ["Zn + Cu²⁺ → Zn²⁺ + Cu : le zinc est",["oxydé","réduit","inchangé","un ion"],0,"Il perd des électrons."]
]);
A(['2nde'],'Histoire-Géo',[
 ["Lucy a été découverte en :",["Éthiopie","Tchad","Sénégal","Égypte"],0,"Éthiopie."],
 ["Historien sénégalais de l'Égypte nègre :",["Cheikh Anta Diop","Senghor","Lat Dior","Mamadou Dia"],0,"Cheikh Anta Diop."],
 ["Médecin et philosophe musulman :",["Avicenne","Colomb","Gutenberg","Luther"],0,"Ibn Sina."],
 ["Inventeur de l'imprimerie en Europe :",["Gutenberg","Galilée","Copernic","Newton"],0,"Gutenberg."],
 ["Transition démographique : d'abord baisse de",["la mortalité","la natalité","la superficie","l'eau"],0,"Puis de la natalité."],
 ["Milieu à la végétation très dense :",["forêt équatoriale","steppe","désert","toundra"],0,"Forêt dense."]
]);
A(['1ère'],'Histoire-Géo',[
 ["2e révolution industrielle :",["électricité et pétrole","vapeur seulement","internet","agriculture manuelle"],0,"Fin XIXe."],
 ["Fin de la Première Guerre mondiale :",["1918","1914","1939","1945"],0,"11 novembre 1918."],
 ["Organisation créée après 1918 :",["SDN","ONU","OTAN","UA"],0,"Société des Nations."],
 ["Régime de Mussolini :",["fascisme","démocratie","monarchie absolue","communisme"],0,"Fascisme."],
 ["Pôle urbain nouveau près de Dakar :",["Diamniadio","Matam","Kolda","Bakel"],0,"Diamniadio."],
 ["La CEDEAO est créée en :",["1975","1960","1994","2002"],0,"1975."]
]);
A(['2nde'],'Anglais',[
 ["I ___ in Thiès in 2015.",["lived","have lived","live","am living"],0,"Finished time."],
 ["You ___ be tired after the trip. (deduction)",["must","mustn't","can't to","should to"],0,"must."],
 ["The book ___ by many students.",["is read","reads","read","reading"],0,"Passive."],
 ["The town ___ I was born…",["where","who","which","whose"],0,"Place."],
 ["You are Senegalese, ___?",["aren't you","are you","don't you","isn't it"],0,"Positive → negative tag."],
 ["A linking word of result:",["therefore","however","although","besides"],0,"therefore."]
]);
A(['1ère'],'Anglais',[
 ["If you heat ice, it ___.",["melts","melted","will melted","melting"],0,"Type 0."],
 ["He asked if I ___ ready.",["am","was","be","were being"],1,"Backshift."],
 ["I look forward to ___ you.",["see","seeing","saw","to see"],1,"to + -ing."],
 ["She refused ___.",["to come","coming","come","came"],0,"refuse + to."],
 ["« Skim » means:",["read quickly for the main idea","read every word slowly","translate","copy"],0,"Gist."],
 ["Unemployment means:",["having no job","having two jobs","being a student","retirement"],0,"Chômage."]
]);
A(['2nde','1ère'],'Informatique',[
 ["Base du système binaire :",["2","10","8","16"],0,"0 et 1."],
 ["Une image numérique est faite de :",["pixels","atomes","octaves","lignes de code seulement"],0,"Pixels."],
 ["=MOYENNE(B2:B10) calcule :",["la moyenne de B2 à B10","la somme","le maximum","le nombre"],0,"Moyenne."],
 ["Python : pour tester une condition on utilise",["if","for","print","def"],0,"if."],
 ["Python : définir une fonction",["def","func","function","fn"],0,"def."],
 ["Internet et le Web sont :",["différents (réseau vs pages)","exactement la même chose","deux logiciels","deux ordinateurs"],0,"Internet est le réseau."]
]);

/* ----- Séries L ----- */
A(['2nde-L'],'Mathématiques',[
 ["Taux d'évolution de 2 000 à 2 500 :",["25 %","20 %","50 %","5 %"],0,"500 ÷ 2 000."],
 ["(x − 2)(x + 5) = 0 :",["2 et −5","−2 et 5","2 et 5","−10"],0,"Produit nul."],
 ["2 × 10³ = ",["200","2 000","20 000","6"],1,"2 × 1 000."],
 ["f(x) = 3x − 1 est :",["croissante","décroissante","constante","nulle"],0,"a = 3 > 0."],
 ["Médiane de 3, 7, 9 :",["7","6,3","9","3"],0,"Valeur du milieu."],
 ["1/2 + 1/3 = ",["2/5","5/6","1/6","1/5"],1,"3/6 + 2/6."]
]);
A(['1ère-L'],'Mathématiques',[
 ["Δ de x² − 4x + 4 :",["0","8","16","−4"],0,"16 − 16."],
 ["Minimum de f(x) = x² − 4x + 1 :",["−3","1","0","−4"],0,"f(2) = −3."],
 ["Somme 1 + 2 + … + 10 :",["55","50","100","45"],0,"10 × 11 ÷ 2."],
 ["Suite géométrique : uₙ₊₁ = ",["uₙ + q","q × uₙ","uₙ − q","uₙ / n"],1,"Raison q."],
 ["Écart-type d'une série où toutes les valeurs sont égales :",["0","1","la moyenne","infini"],0,"Aucune dispersion."],
 ["4! = ",["24","16","10","4"],0,"4 × 3 × 2 × 1."]
]);
A(['Tle-L'],'Mathématiques',[
 ["ln(e²) = ",["2","e","e²","1/2"],0,"ln(eˣ) = x."],
 ["ln(a³) = ",["3 ln a","ln 3a","(ln a)³","a ln 3"],0,"n ln a."],
 ["eᵃ × eᵇ = ",["eᵃ⁺ᵇ","eᵃᵇ","e^(a−b)","2e"],0,"Propriété."],
 ["Dérivée de 3x² + 2x :",["6x + 2","3x + 2","6x","x² + 2"],0,"Somme des dérivées."],
 ["Le point moyen d'un nuage :",["G(x̄ ; ȳ)","O(0 ; 0)","le premier point","le plus haut point"],0,"Point moyen."],
 ["Deux pièces : P(deux piles) = ",["1/4","1/2","1/3","3/4"],0,"1/2 × 1/2."]
]);

(window.SJ_CONTENT=window.SJ_CONTENT||[]).push({bankAdd:X});
})();
