/* Sunu Jàng — CI à CM1 · Sciences (IST), Histoire, Géographie, Éducation civique
   Curriculum de l'Éducation de Base (CEB), organisé par étapes :
   1re étape (CI–CP), 2e étape (CE1–CE2), 3e étape (CM1 ; le CM2 a son propre fichier). */
(function(){
const D={chapters:{},lessons:{},bank:{}};
function add(levels,subj,chap,les,bank){levels.forEach(lv=>{const k=lv+'|'+subj;D.chapters[k]=chap;les.forEach((h,i)=>{D.lessons[k+'|'+i]={dur:Math.max(3,Math.round(h.length/260)),html:h}});D.bank[k]=bank})}
const E1=['CI','CP'],E2=['CE1','CE2'],E3=['CM1'];

/* ---------- 1re étape : CI – CP ---------- */
add(E1,'Sciences (IST)',['Mon corps','Mes cinq sens','Les animaux autour de moi','Les plantes','L\'eau et la propreté'],[
`<p>Mon corps a une <b>tête</b>, un <b>tronc</b>, deux <b>bras</b> et deux <b>jambes</b>.</p><ul><li>Sur ma tête : les yeux, le nez, la bouche, les oreilles, les cheveux.</li><li>Au bout de mes bras : les mains et les doigts (5 doigts par main).</li><li>Au bout de mes jambes : les pieds.</li></ul><div class="box">Chante en touchant : tête, épaules, genoux, pieds !</div>`,
`<table class="table"><tr><th>Sens</th><th>Organe</th><th>Je peux…</th></tr><tr><td>la vue</td><td>les yeux</td><td>voir</td></tr><tr><td>l'ouïe</td><td>les oreilles</td><td>entendre</td></tr><tr><td>l'odorat</td><td>le nez</td><td>sentir</td></tr><tr><td>le goût</td><td>la langue</td><td>goûter</td></tr><tr><td>le toucher</td><td>la peau</td><td>toucher</td></tr></table>`,
`<ul><li><b>Animaux domestiques</b> : ils vivent avec l'homme — le mouton, la chèvre, la poule, le chat, l'âne, le cheval.</li><li><b>Animaux sauvages</b> : ils vivent dans la brousse — le lion, le singe, la hyène, le lièvre.</li></ul><p>Le mouton bêle, la vache meugle, le coq chante « cocorico ».</p>`,
`<p>Une plante a des <b>racines</b> (sous la terre), une <b>tige</b>, des <b>feuilles</b> vertes, parfois des <b>fleurs</b> et des <b>fruits</b>.</p><p>Pour vivre, la plante a besoin d'<b>eau</b>, de <b>lumière</b> et de <b>terre</b>.</p><div class="box">Arbres de chez nous : le baobab, le manguier, le neem, le flamboyant.</div>`,
`<ul><li>Je bois de l'eau propre.</li><li>Je me lave les mains avec du <b>savon</b> avant de manger et après les toilettes.</li><li>Je me lave le corps chaque jour et je me brosse les dents.</li><li>Je ne gaspille pas l'eau.</li></ul>`
],[
["Avec quoi voit-on ?",["les oreilles","les yeux","le nez","les mains"],1,"La vue : les yeux."],
["Combien de doigts sur une main ?",["4","5","6","10"],1,"5 doigts."],
["Un animal sauvage :",["la poule","le lion","le mouton","le chat"],1,"Il vit dans la brousse."],
["La partie de la plante sous la terre :",["la fleur","la feuille","la racine","le fruit"],2,"Les racines."],
["Avant de manger, je…",["joue","me lave les mains","dors","cours"],1,"Avec du savon."],
["On goûte avec :",["la langue","les yeux","les pieds","les cheveux"],0,"Le goût."]
]);
add(E1,'Histoire',['Ma famille','Hier, aujourd\'hui, demain','Les jours de la semaine','Les fêtes de chez nous'],[
`<p>Dans ma famille il y a : mon <b>père</b>, ma <b>mère</b>, mes <b>frères</b> et <b>sœurs</b>, mes <b>grands-parents</b>, mes oncles, mes tantes, mes cousins.</p><div class="box">Mon grand-père est le papa de mon papa ou de ma maman.</div>`,
`<ul><li><b>Hier</b> : le jour qui est passé.</li><li><b>Aujourd'hui</b> : le jour où nous sommes.</li><li><b>Demain</b> : le jour qui vient.</li></ul><div class="ex">Hier, j'étais à la maison. Aujourd'hui, je suis à l'école. Demain, j'irai au marché.</div>`,
`<p>Une semaine a <b>7 jours</b> : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.</p><p>Une année a <b>12 mois</b>, de janvier à décembre.</p>`,
`<ul><li>La <b>fête de l'Indépendance</b> : le 4 avril, avec le défilé.</li><li>Les fêtes religieuses : Tabaski, Korité, Tamkharit, Gamou, Noël, Pâques.</li></ul><p>Pendant les fêtes, on partage et on rend visite à la famille.</p>`
],[
["Le papa de mon papa est mon…",["oncle","grand-père","frère","cousin"],1,"Grand-père."],
["Le jour qui vient s'appelle :",["hier","aujourd'hui","demain","la nuit"],2,"Demain."],
["Combien de jours dans une semaine ?",["5","7","10","12"],1,"7 jours."],
["Le jour après lundi :",["dimanche","mardi","jeudi","samedi"],1,"Lundi, mardi."],
["Fête de l'Indépendance :",["4 avril","1er janvier","25 décembre","1er mai"],0,"4 avril."]
]);
add(E1,'Géographie',['Ma classe et mon école','Ma maison et mon quartier','Se repérer : devant, derrière, à droite, à gauche','Le jour et la nuit, les saisons'],[
`<p>Dans ma classe : le tableau, le bureau du maître, les tables-bancs, les cahiers. Mon école a une cour, des classes, des toilettes et parfois un jardin.</p>`,
`<p>Ma maison a des chambres, une cuisine, une cour. Dans mon quartier il y a : la boutique, la mosquée ou l'église, le marché, le poste de santé, l'école.</p>`,
`<ul><li>Le tableau est <b>devant</b> moi.</li><li>Le mur est <b>derrière</b> moi.</li><li>Ma main droite est à <b>droite</b>, ma main gauche à <b>gauche</b>.</li><li>Le cahier est <b>sur</b> la table, le cartable est <b>sous</b> la table.</li></ul>`,
`<p>Le <b>jour</b>, le soleil brille. La <b>nuit</b>, on voit la lune et les étoiles.</p><p>Chez nous il y a deux saisons : la <b>saison sèche</b> et la <b>saison des pluies</b> (l'hivernage).</p>`
],[
["Le cahier est … la table (dessus).",["sous","sur","derrière","devant"],1,"Sur."],
["Où va-t-on quand on est malade ?",["au marché","au poste de santé","à la boutique","au stade"],1,"Poste de santé."],
["La nuit on voit :",["le soleil","la lune et les étoiles","l'arc-en-ciel seulement","rien"],1,"La lune."],
["La saison des pluies s'appelle :",["l'harmattan","l'hivernage","la Tabaski","l'été"],1,"L'hivernage."],
["Le tableau est … moi (en face).",["derrière","devant","sous","dans"],1,"Devant."]
]);
add(E1,'Éducation civique',['Bonjour, merci, pardon','Respecter les autres','Ma classe propre','Le drapeau du Sénégal'],[
`<p>Les mots magiques : <b>Bonjour</b>, <b>S'il te plaît</b>, <b>Merci</b>, <b>Pardon</b>, <b>Au revoir</b>.</p><div class="box">Je salue mes parents, mon maître et mes camarades.</div>`,
`<ul><li>J'écoute quand quelqu'un parle.</li><li>Je ne frappe pas mes camarades.</li><li>Je partage mes jouets.</li><li>Je respecte les personnes âgées.</li></ul>`,
`<p>Je jette les papiers dans la poubelle. Je range mes affaires. Je n'écris pas sur les tables. Une classe propre, c'est agréable pour tous.</p>`,
`<p>Le drapeau du Sénégal a trois couleurs : <b>vert</b>, <b>or</b> (jaune) et <b>rouge</b>, avec une <b>étoile verte</b> au milieu.</p><p>Quand on lève le drapeau, on se tient debout, calme.</p>`
],[
["Quand quelqu'un me donne quelque chose, je dis :",["Pardon","Merci","Bonne nuit","Non"],1,"Merci."],
["Les papiers, je les jette…",["par terre","dans la poubelle","dans la classe","dans la rue"],1,"Poubelle."],
["Couleurs du drapeau :",["vert, or, rouge","bleu, blanc, rouge","noir, rouge","vert, blanc"],0,"Vert, or, rouge."],
["Au milieu du drapeau il y a :",["un lion","une étoile verte","un baobab","une lune"],1,"Étoile verte."],
["Pour demander poliment, je dis :",["Donne !","S'il te plaît","Vite !","Non"],1,"S'il te plaît."]
]);

/* ---------- 2e étape : CE1 – CE2 ---------- */
add(E2,'Sciences (IST)',['Le squelette et les muscles','Les dents','La nourriture','Les animaux : nourriture et déplacement','La plante qui pousse','Le paludisme'],[
`<p>Le <b>squelette</b> est l'ensemble des os ; il soutient et protège le corps. Le crâne protège le cerveau ; les côtes protègent le cœur et les poumons.</p><p>Les <b>muscles</b> font bouger les os. Les <b>articulations</b> (coude, genou, épaule) permettent de plier.</p>`,
`<ul><li>Les <b>incisives</b> coupent, les <b>canines</b> déchirent, les <b>molaires</b> broient.</li><li>L'enfant a 20 dents de lait ; l'adulte a 32 dents.</li><li>Le sucre et les restes d'aliments causent les <b>caries</b>.</li></ul><div class="box">Brosse tes dents après chaque repas, surtout le soir.</div>`,
`<p>On a besoin d'aliments variés :</p><ul><li>pour <b>grandir</b> : poisson, viande, œufs, lait, niébé ;</li><li>pour avoir de la <b>force</b> : riz, mil, maïs, pain ;</li><li>pour être en <b>bonne santé</b> : fruits et légumes.</li></ul>`,
`<ul><li>Herbivores (herbe), carnivores (viande), omnivores (de tout).</li><li>Déplacements : marcher (chèvre), voler (oiseau), nager (poisson), ramper (serpent), sauter (grenouille).</li></ul>`,
`<p>Expérience : on met des graines de niébé sur du coton mouillé. Après quelques jours, une petite racine sort, puis une tige et des feuilles : la graine a <b>germé</b>.</p><p>Sans eau, la graine ne germe pas.</p>`,
`<p>Le <b>paludisme</b> est transmis par la piqûre d'un moustique. Il donne de la fièvre et peut être grave chez l'enfant.</p><ul><li>Dormir sous une moustiquaire.</li><li>Vider les eaux qui stagnent.</li><li>Aller au poste de santé dès qu'on a de la fièvre.</li></ul>`
],[
["Les os forment :",["les muscles","le squelette","la peau","le sang"],1,"Le squelette."],
["Les dents qui broient :",["incisives","canines","molaires","dents de lait"],2,"Molaires."],
["Un adulte a … dents.",["20","28","32","40"],2,"32 dents."],
["La chèvre est :",["carnivore","herbivore","omnivore","insecte"],1,"Elle mange de l'herbe."],
["Le serpent se déplace en :",["volant","rampant","sautant","nageant seulement"],1,"Il rampe."],
["Pour germer, une graine a besoin :",["d'eau","de sel","de sucre","d'huile"],0,"D'eau."],
["Le paludisme est transmis par :",["la mouche","le moustique","le chat","l'eau propre"],1,"Le moustique."]
]);
add(E2,'Histoire',['La frise du temps','Mon village ou ma ville autrefois','Les métiers d\'hier et d\'aujourd\'hui','Les grands personnages du Sénégal'],[
`<p>On range les événements sur une <b>frise</b>, du plus ancien au plus récent.</p><ul><li>1 siècle = 100 ans.</li><li>Nous sommes au <b>XXIe siècle</b> (les années 2000).</li></ul>`,
`<p>Autrefois, il n'y avait ni électricité ni téléphone. On s'éclairait à la lampe tempête, on puisait l'eau au puits, on voyageait à pied, à cheval ou en charrette.</p><div class="box">Demande à tes grands-parents comment était leur enfance.</div>`,
`<p>Métiers anciens : forgeron, tisserand, potière, griot, cordonnier, pêcheur en pirogue à rames.</p><p>Métiers d'aujourd'hui : mécanicien, informaticien, infirmier, chauffeur de bus, enseignant.</p>`,
`<ul><li><b>Lat Dior</b> : roi du Cayor, il a résisté aux colons.</li><li><b>Aline Sitoé Diatta</b> : héroïne de Casamance.</li><li><b>Cheikh Ahmadou Bamba</b> : guide religieux, résistance pacifique.</li><li><b>Léopold Sédar Senghor</b> : poète et premier président.</li></ul>`
],[
["1 siècle = ",["10 ans","100 ans","1 000 ans","50 ans"],1,"100 ans."],
["Autrefois on s'éclairait avec :",["l'ampoule","la lampe tempête","le téléphone","la télé"],1,"Lampe tempête."],
["Un métier ancien :",["informaticien","forgeron","pilote","programmeur"],1,"Forgeron."],
["Premier président du Sénégal :",["Senghor","Lat Dior","Macky Sall","Wade"],0,"Senghor."],
["Héroïne de Casamance :",["Aline Sitoé Diatta","Mariama Bâ","Ndaté Yalla","Aminata"],0,"Aline Sitoé Diatta."]
]);
add(E2,'Géographie',['Le plan de la classe','Les points cardinaux','Ma région','Les paysages du Sénégal','Les métiers de la campagne et de la ville'],[
`<p>Un <b>plan</b> représente un lieu vu d'en haut, en plus petit. On dessine les tables, le bureau, la porte, les fenêtres.</p>`,
`<p>Les quatre <b>points cardinaux</b> : <b>Nord</b>, <b>Sud</b>, <b>Est</b>, <b>Ouest</b>.</p><ul><li>Le soleil se lève à l'<b>Est</b> et se couche à l'<b>Ouest</b>.</li><li>Sur une carte, le Nord est en haut.</li></ul>`,
`<p>Le Sénégal compte 14 régions. Chaque région a un chef-lieu (ex. : région de Thiès → ville de Thiès). Apprends le nom de ta région et de son chef-lieu.</p>`,
`<ul><li>La <b>côte</b> et les plages (Dakar, Mbour, Saint-Louis).</li><li>La <b>savane</b> avec les baobabs.</li><li>Les <b>fleuves</b> (Sénégal, Gambie, Casamance).</li><li>La <b>forêt</b> en Casamance.</li></ul>`,
`<p>À la campagne : agriculteur, éleveur, pêcheur. En ville : commerçant, mécanicien, fonctionnaire, chauffeur. Tous ces métiers dépendent les uns des autres.</p>`
],[
["Le soleil se lève à :",["l'Ouest","l'Est","le Nord","le Sud"],1,"À l'Est."],
["Sur une carte, le Nord est :",["en bas","en haut","à gauche","à droite"],1,"En haut."],
["Combien de régions au Sénégal ?",["10","12","14","16"],2,"14 régions."],
["Un métier de la campagne :",["éleveur","banquier","pilote","informaticien"],0,"Éleveur."],
["Un plan montre un lieu vu :",["de côté","d'en haut","de loin","de dessous"],1,"D'en haut."]
]);
add(E2,'Éducation civique',['Les règles de la classe','Les droits de l\'enfant','Sur la route','Protéger la nature'],[
`<p>Les règles permettent de bien vivre ensemble : arriver à l'heure, lever le doigt pour parler, respecter le matériel, ne pas se battre.</p>`,
`<p>Tout enfant a droit à : un nom, une famille, l'école, les soins, les jeux, la protection contre la violence.</p><div class="box">Si un enfant est en danger, il peut en parler à un adulte de confiance.</div>`,
`<ul><li>Je marche sur le trottoir.</li><li>Je traverse au passage piéton, quand le feu des piétons est vert.</li><li>Je regarde à gauche, à droite, puis à gauche.</li></ul>`,
`<p>Je ne casse pas les branches des arbres. J'arrose les plantes de l'école. Je ne jette pas de sachets plastiques par terre.</p>`
],[
["Pour parler en classe, je…",["crie","lève le doigt","sors","tape"],1,"Je lève le doigt."],
["Un droit de l'enfant :",["aller à l'école","travailler à la mine","conduire","fumer"],0,"L'éducation."],
["Je traverse :",["n'importe où","au passage piéton","en courant sans regarder","derrière un bus"],1,"Passage piéton."],
["Les sachets plastiques…",["je les jette par terre","je les mets à la poubelle","je les brûle en classe","je les mange"],1,"Poubelle."],
["Avant de traverser, je regarde :",["seulement devant","à gauche, à droite, puis à gauche","le ciel","mes chaussures"],1,"Gauche, droite, gauche."]
]);

/* ---------- 3e étape : CM1 ---------- */
add(E3,'Sciences (IST)',['La digestion','La respiration','Les aliments','Les maladies hydriques','Les états de l\'eau','Le circuit électrique'],[
`<p>Les aliments passent par : bouche → œsophage → estomac → intestin grêle → gros intestin. Dans l'intestin grêle, les éléments utiles passent dans le <b>sang</b>.</p>`,
`<p>On inspire l'air par le nez ; il va dans les <b>poumons</b>. Le corps prend l'<b>oxygène</b> et rejette le <b>gaz carbonique</b> à l'expiration. Après une course, on respire plus vite.</p>`,
`<p>Aliments de construction (protéines), énergétiques (riz, mil, huile), de protection (fruits, légumes). Un repas équilibré contient les trois groupes.</p>`,
`<p>Les maladies hydriques viennent de l'eau sale : <b>diarrhée</b>, <b>choléra</b>, <b>bilharziose</b>. Pour les éviter : boire de l'eau potable, se laver les mains, ne pas se baigner dans les marigots.</p>`,
`<p>L'eau est <b>solide</b> (glace), <b>liquide</b> ou <b>gazeuse</b> (vapeur). La glace fond, l'eau bout à 100 °C et s'évapore ; la vapeur se condense en gouttelettes.</p>`,
`<p>Pile + fils + ampoule + interrupteur. Circuit fermé : l'ampoule brille. Circuit ouvert : elle s'éteint. Les métaux sont <b>conducteurs</b>, le plastique est <b>isolant</b>.</p>`
],[
["Les éléments utiles passent dans le sang au niveau :",["de l'estomac","de l'intestin grêle","de la bouche","du nez"],1,"Intestin grêle."],
["On rejette en expirant :",["l'oxygène","le gaz carbonique","l'eau seulement","la nourriture"],1,"Gaz carbonique."],
["Le choléra vient souvent :",["de l'eau sale","du soleil","du sport","des fruits lavés"],0,"Maladie hydrique."],
["La glace est de l'eau à l'état :",["liquide","solide","gazeux","chaud"],1,"Solide."],
["Matériau isolant :",["le fer","le cuivre","le plastique","l'aluminium"],2,"Le plastique."],
["Aliment énergétique :",["le riz","la mangue","le poisson","la salade"],0,"Le riz donne la force."]
]);
add(E3,'Histoire',['Les sources de l\'histoire','Les premiers hommes','Les grands empires','La traite négrière','Les royaumes du Sénégal'],[
`<p>Pour connaître le passé, on utilise des <b>sources</b> : les récits des griots (tradition orale), les écrits anciens, les objets et ruines découverts par les archéologues, les photos.</p>`,
`<p>Les premiers hommes vivaient de la chasse, de la pêche et de la cueillette. Ils fabriquaient des outils en pierre, puis découvrirent le feu, l'agriculture et l'élevage. Au Sénégal, les <b>cercles mégalithiques</b> de Sine Ngayène et Wanar sont très anciens.</p>`,
`<p>L'empire du <b>Ghana</b> (capitale Koumbi Saleh), l'empire du <b>Mali</b> (Soundiata Keïta, Kankou Moussa), l'empire <b>songhaï</b> (Gao). Ils étaient riches grâce au commerce de l'or et du sel.</p>`,
`<p>Du XVIe au XIXe siècle, des millions d'Africains furent capturés et vendus comme esclaves en Amérique. L'île de <b>Gorée</b> rappelle ce drame.</p>`,
`<p>Le Djolof, le Cayor, le Baol, le Walo, le Sine, le Saloum, le Fouta Toro… Chaque royaume avait son roi : Damel au Cayor, Bour au Sine, Brak au Walo.</p>`
],[
["Les griots conservent l'histoire par :",["l'écriture","la tradition orale","la télévision","internet"],1,"Tradition orale."],
["Cercles mégalithiques du Sénégal :",["Sine Ngayène","Gorée","Saint-Louis","Kédougou"],0,"Sine Ngayène et Wanar."],
["Fondateur de l'empire du Mali :",["Soundiata Keïta","Lat Dior","Sonni Ali","Faidherbe"],0,"Soundiata."],
["Île symbole de la traite :",["Gorée","Ngor","Carabane","Madagascar"],0,"Gorée."],
["Roi du Cayor :",["Bour","Damel","Brak","Teigne"],1,"Damel."]
]);
add(E3,'Géographie',['Lire une carte','Le Sénégal et ses voisins','Le relief et les fleuves','Le climat','Les activités économiques'],[
`<p>Une carte a un <b>titre</b>, une <b>légende</b> (signification des couleurs et symboles), une <b>échelle</b> et l'orientation (le Nord).</p>`,
`<p>Voisins : Mauritanie (nord), Mali (est), Guinée et Guinée-Bissau (sud) ; la Gambie est à l'intérieur du Sénégal. À l'ouest, l'océan Atlantique.</p>`,
`<p>Le Sénégal est plat. Quelques hauteurs au sud-est (Kédougou). Fleuves : Sénégal, Gambie, Casamance, Saloum.</p>`,
`<p>Climat tropical : saison sèche (novembre à juin) et saison des pluies (juillet à octobre). Il pleut plus au sud qu'au nord.</p>`,
`<p>Agriculture (arachide, mil, riz), élevage, pêche, commerce, tourisme, mines (phosphates, or).</p>`
],[
["Ce qui explique les symboles d'une carte :",["le titre","la légende","l'échelle","la boussole"],1,"La légende."],
["Pays au nord du Sénégal :",["Mali","Mauritanie","Guinée","Gambie"],1,"Mauritanie."],
["Fleuve du sud du Sénégal :",["Casamance","Niger","Nil","Congo"],0,"Casamance."],
["Il pleut plus :",["au nord","au sud","partout pareil","jamais"],1,"Au sud."],
["Culture importante du Sénégal :",["arachide","café","cacao","blé"],0,"Arachide."]
]);
add(E3,'Éducation civique',['La famille et la communauté','L\'école, lieu de vie','La commune','Les symboles de la République','La santé de tous'],[
`<p>Dans la famille, chacun a un rôle : les parents protègent et éduquent, les enfants respectent et aident. La solidarité unit la communauté (entraide, visites aux malades).</p>`,
`<p>L'école est un lieu d'apprentissage. Le directeur, les maîtres et les élèves respectent le règlement intérieur. On participe au nettoyage et au jardin scolaire.</p>`,
`<p>La commune est dirigée par le <b>maire</b> et le conseil municipal, élus par les habitants. Elle s'occupe de l'état civil, des marchés, de la propreté.</p>`,
`<p>Drapeau vert-or-rouge avec étoile verte ; devise « Un Peuple – Un But – Une Foi » ; hymne « Le Lion rouge » ; fête nationale le 4 avril.</p>`,
`<p>Vaccination, moustiquaires, latrines, propreté de l'eau : protéger sa santé, c'est aussi protéger celle des autres.</p>`
],[
["La commune est dirigée par :",["le maire","le préfet","le directeur d'école","le chef de famille"],0,"Le maire."],
["Devise du Sénégal :",["Un Peuple – Un But – Une Foi","Liberté – Égalité","Paix – Travail","Unité – Progrès"],0,"Un Peuple – Un But – Une Foi."],
["Hymne national :",["Le Lion rouge","La Marseillaise","Ndiaye","Le Baobab"],0,"Le Lion rouge."],
["La fête nationale :",["4 avril","20 août","1er mai","14 juillet"],0,"4 avril."],
["Protéger la santé de tous :",["se vacciner","jeter les ordures dans la rue","boire l'eau du marigot","ne jamais se laver"],0,"La vaccination."]
]);

(window.SJ_CONTENT=window.SJ_CONTENT||[]).push(D);
})();
