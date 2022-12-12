export const dynamicResponses: { [idQuestion: number]: number }[] = [];
export const appName = "Test Pottermore";
export const resultButtonContent = "Your Howards's house is"
export const questionsAnswers = [
    {

        content: "Sous quel nom préférerais-tu entrer dans l'histoire ?",
        answers:
            [
                "Le Sage",
                "Le Bon",
                "Le Grand",
                "L'Audacieux"
            ],
    },
    {

        content: "Tu détesterais le plus qu'on te qualifie de...",

        answers:
            [
                "Banal",
                "Ignorant",
                "Lâche",
                "D'égoiste"
            ],
    },
    {

        content: "S'il te fallait faire un choix, tu préférerais inventer une potion te garantissant...",
        answers:
            [
                "L'amour",
                "La gloire",
                "La sagesse",
                "Le pouvoir"
            ],
    },
    {

        content: "De quelle manière préférerais-tu que les gens se souviennent de toi après ta mort ?",
        answers:
            [
                "En se disant que tu leur manques, mais en gardant tout de même le sourire quand ils pensent à toi",
                "En se racontant inlassablement les récits de tes aventures",
                "En éprouvant de l'admiration quand ils pensent à tous tes exploits",
                "Peu importe ce que les gens penseront de moi une fois que je serai mort(e), ce qui compte, c'est ce qu'ils pensent de moi tant que je suis vivant(e)"
            ],
    },
    {

        content: "Une fois tous les cent ans, la plante à Pipaillon produit des fleurs qui changent de parfum pour plaire à l'imprudent qu'elle souhaite attirer. Si cette plante souhaitait t'appâter, quelle odeur devrait-elle dégager ?",
        answers:
            [
                "L'odeur d'un feu de bois crépitant",
                "L'odeur de la mer",
                "L'odeur d'un parchemin neuf",
                "L'odeur de ta maison"
            ],
    },
    {

        content: "Il y a quatre boîtes devant toi. Laquelle essaies-tu d'ouvrir ?",
        answers:
            [
                "La petite boîte en écailles de tortue dorée à l'or fin qui semble contenir une minuscule créature qui couine.",
                "La boîte d'un noir brillant dotée d'une serrure et d'une clé en argent et qui porte une mystérieuse inscription en runes que tu identifies immédiatement comme étant la signature de Merlin",
                "Le coffret en or sculpté, posé sur deux pieds pourvus de griffes, dont l'inscription te prévient qu'il renferme des connaissances secrètes et une tentation irrésistible",
                "La petite boîte en étain, simple et sans prétention, sur laquelle on peut lire une inscription rayée qui dit : 'Je ne m'ouvre que pour celui ou celle qui le mérite'"
            ],
    },
    {

        content: "Quel instrument de musique aimes-tu le plus entendre ?",
        answers:
            [
                "Le violon",
                "La trompette",
                "Le piano",
                "Le tambour"
            ],
    },
    {

        content: "Quatre coupes remplies d'un liquide mystérieux sont placées devant toi. Laquelle choisis-tu de boire ?",
        answers:
            [
                "Celle qui contient un liquide argenté et mousseux qui scintille comme s'il renfermait de la poudre de diamant",
                "Celle qui contient une boisson violette, onctueuse et épaisse, qui dégage un délicieux parfum de chocolat et de prunes",
                "Celle qui contient un liquide doré et brillant qui fait mal aux yeux et fait voir des taches lumineuses partout",
                "Celle qui contient un étrange liquide noir qui brille comme de l'encre et dégage des vapeurs provoquant d'étranges hallucinations"
            ],
    },
    {

        content: "Tu entres dans un jardin enchanté rempli de choses mystérieuses. Laquelle seras-tu le plus curieux d'examiner en premier lieu ?",
        answers:
            [
                " L'arbre à feuilles argentées chargé de pommes d'or",
                "Celle qui contient une boisson violette, onctueuse et épaisse, qui dégage un délicieux parfum de chocolat et de prunes",
                "Celle qui contient un liquide doré et brillant qui fait mal aux yeux et fait voir des taches lumineuses partout",
                "Celle qui contient un étrange liquide noir qui brille comme de l'encre et dégage des vapeurs provoquant d'étranges hallucinations"
            ],
    },
    {

        content: "Un troll a fait irruption dans le bureau du directeur de Poudlard. Il est sur le point de pulvériser, écraser et déchirer plusieurs objets et trésors irremplaçables, dont notamment un remède contre la Dragoncelle que le directeur a pratiquement fini de mettre au point, les carnets scolaires de tous les élèves de Poudlard depuis 1 000 ans et un mystérieux livre écrit à la main, comportant d'étranges textes en runes, qui a très probablement appartenu à Merlin. Dans quel ordre tentes-tu de sauver ces objets de la massue du troll si tu en as la possibilité ?",
        answers:
            [
                "1) Le livre 2) Les carnets 3) Le remède",
                "1) Le livre 2) Le remède 3) Les carnets",
                "1) Les carnets 2) Le livre 3) Le remède",
                "1) Les carnets 2) Le remède 3) Le livre",
                "1) Le remède 2) Le livre 3) Les carnets",
                "1) Le remède 2) Les carnets 3) Le livre"
            ],
    },
    {

        content: "Tu préférerais que les autres...",
        answers:
            [
                "t'envient",
                "t'imitent",
                "te fassent confiance",
                "t'admirent",
                "t'aiment",
                "te craignent"
            ],
    },
    {

        content: "Qu'est-ce que tu as le plus de mal à supporter ?",
        answers:
            [
                "La faim",
                "Le froid",
                "La solitude",
                "L'ennui",
                "Être ignoré",
            ],
    },
    {

        content: "Qu'est-ce que tu as le plus hâte d'apprendre à Poudlard ?",
        answers:
            [
                "L'Apparition et la Disparition (la capacité à te matérialiser ou te dématérialiser comme bon te semble)",
                "La métamorphose (l'art de transformer un objet en un autre)",
                "Le vol sur un balai",
                "Tout ce qu'il faut savoir sur les créatures magiques et comment les apprivoiser et s'en occuper",
                "Tous les secrets du château",
                "Tous les domaines de la magie que l'on me permettra d'étudier"
            ],
    },
    {

        content: "Qu'est-ce que tu as le plus hâte d'apprendre à Poudlard ?",
        answers:
            [
                "Le pouvoir de lire dans les pensées des gens",
                "Le pouvoir de devenir invisible",
                "Le pouvoir d'être doté(e) d'une force surnaturelle",
                "Le pouvoir de parler aux animaux",
                "Le pouvoir de changer le passé",
                "Le pouvoir de modifier ton apparence comme bon te semble"
            ],
    },
    {

        content: "Quelle créature aimerais-tu le plus étudier ?",
        answers:
            [
                "Les centaures",
                "Les gobelins",
                "Les sirènes",
                "Les fantômes",
                "Les vampires",
                "Les loups-garous",
                "Les trolls"
            ],
    },
    {

        content: "Un élève de ta maison a triché pendant les examens de Poudlard en se servant d'une plume ensorcelée. Grâce à son stratagème, il se retrouve premier de la classe en Sortilèges et tu n'es que deuxième. Le professeur Flitwick soupçonne quelque chose de louche. Il te prend à part à la fin du cours pour te demander si ton camarade a utilisé ou non une plume interdite. Que fais-tu ?",
        answers:
            [
                "Tu mens au professeur en lui disant que tu ignores la vérité (mais en espérant secrètement que quelqu'un d'autre lui dira la vérité)",
                "Tu réponds au professeur Flitwick qu'il vaudrait mieux qu'il pose directement la question à ton camarade de classe (et tu as déjà prévenu celui-ci que s'il ne dit pas la vérité au professeur, tu le feras à sa place)",
                "Tu dis la vérité au professeur Flitwick. Après tout, si ton camarade est prêt à tricher pour être premier, il mérite d'être dénoncé. Et de toute manière, comme vous appartenez tous les deux à la même maison, tu récupéreras les points qu'il perdra en lui prenant la première place",
                "Tu n'attendrais pas que l'on t'interroge pour dire la vérité au professeur Flitwick. Si tu savais que quelqu'un allait se servir d'une plume interdite, tu le dirais immédiatement au professeur, avant même que l'examen ne commence",
            ],
    },
    {

        content: "Quel chemin te tente le plus ?",
        answers:
            [
                "La grande allée d'herbe baignée de soleil",
                "L'étroite ruelle sombre, éclairée à la lanterne",
                "Le petit sentier tortueux jonché de feuilles mortes qui s'enfonce à travers le bois",
                "La rue pavée bordée d'anciens bâtiments",
            ],
    },
    {

        content: "Un Moldu t'aborde en pleine rue en te lançant qu'il est persuadé que tu es un sorcier ou une sorcière. Que fais-tu ?",
        answers:
            [
                "Tu lui demandes pourquoi il pense une chose pareille ?",
                "Tu en conviens et tu lui demandes s'il veut que tu lui jettes gratuitement un petit maléfice pour en être sûr ?",
                "Tu en conviens, puis tu t'en vas nonchalamment en le laissant se demander si tu bluffes ou pas ?",
                "Tu lui réponds que sa santé mentale t'inquiète et tu lui proposes d'appeler immédiatement un médecin.",
            ],
    },
    {

        content: "Un Moldu t'aborde en pleine rue en te lançant qu'il est persuadé que tu es un sorcier ou une sorcière. Que fais-tu ?",
        answers:
            [
                "Tu poursuis ton chemin avec prudence, en gardant la main sur ta baguette magique dissimulée sous ton manteau et en restant très vigilant(e) au moindre signe de danger",
                "Tu brandis ta baguette magique et tu tentes de découvrir d'où vient ce bruit",
                "Tu brandis ta baguette magique pour te défendre sans te laisser impressionner",
                "Tu te glisses silencieusement dans la pénombre en attendant la suite des événements et en faisant une liste mentale de tous les sortilèges de défense et d'attaque dont tu pourrais te servir, s'il le fallait",
            ],
    },
    {

        content: "Deux de tes amis et toi devez traverser un pont gardé par un troll des rivières. Avant de vous laisser passer, celui-ci insiste pour se battre avec l'un de vous. Que fais-tu ?",
        answers:
            [
                "Tu tentes de détourner l'attention du troll pour qu'il vous laisse passer tous les trois sans que vous ayez à l'affronter",
                "Tu proposes à tes amis de jouer à la courte paille pour décider lequel de vous trois combattra",
                "Tu proposes à tes amis de l'affronter tous les trois à la fois (sans prévenir le troll)",
                "Tu te portes immédiatement volontaire pour l'affronter",
            ],
    },
    {

        content: "Quel cauchemar te ferait le plus peur ?",
        answers:
            [
                "Celui où tu te tiens au sommet de quelque chose de très, très haut et tu te rends subitement compte que tu n'as aucun point d'appui ni aucune barrière pour t'empêcher de tomber dans le vide",
                "Celui où tu es enfermé(e) dans une pièce sombre et sans fenêtre et où un œil mystérieux t'observe à travers le trou de la serrure",
                "Celui où tu découvres, en te réveillant un beau matin, que tes amis et tes proches ne te reconnaissent plus",
                "Celui où tu parles avec une voix tellement ridicule que personne ne te comprend et tout le monde se moque de toi",
            ],
    },
    {

        content: "Quel cauchemar te ferait le plus peur ?",
        answers:
            [
                "Lune",
                "Etoiles",
            ],
    },
    {

        content: "Forêt ou rivière ?",
        answers:
            [
                "Forêt",
                "Rivière",
            ],
    },
    {

        content: "Aube ou crépuscule ?",
        answers:
            [
                "Aube",
                "Crèpuscule",
            ],
    },
    {

        content: "Noir ou blanc",
        answers:
            [
                "Noir",
                "Blanc",
            ],
    },
    {

        content: "Gauche ou droite",
        answers:
            [
                "Gauche",
                "Droite",
            ],
    },
    {

        content: "Pile ou face",
        answers:
            [
                "Pile",
                "Face",
            ],
    },
    {

        content: "Si tu étais accepté à Poudlard, quel animal de compagnie choisirais-tu de prendre avec toi ?",
        answers: [
            "Un chat tigré",
            "Un chat siamois, roux, noir ou blanc",
            "Une chouette hulotte, un petit duc ou une chouette effraie",
            "Une chouette harfang des neiges",
            "Un crapeau commun, calamite ou arlequin",
            "Un crapeau dragon",
            "Un crapaud arboricole à trois doigts"
        ]
    }
]