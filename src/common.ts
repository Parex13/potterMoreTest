export const dynamicResponses: {
    idQuestion: number,
    housesScore: {
        name: string,
        gryffindor: number,
        ravenclaw: number,
        hufflepuff: number,
        slytherin: number
    }
}[] = [];
export const appName = "Test Pottermore";
export const resultButtonContent = "Ta maison dans poudlard est... "
export const questionsAnswers: {
    content: string,
    answersAndHouseScore: {
        name: string,
        gryffindor: number,
        ravenclaw: number,
        hufflepuff: number,
        slytherin: number,
    }[]
}[] = [
        {
            content: "Sous quel nom préférerais-tu entrer dans l'histoire ?",
            answersAndHouseScore:
                [
                    { name: "Le Sage", gryffindor: 19, ravenclaw: 46, hufflepuff: 19, slytherin: 16 },
                    { name: "Le Bon", gryffindor: 17, ravenclaw: 16, hufflepuff: 44, slytherin: 16 },
                    { name: "Le Grand", gryffindor: 2, ravenclaw: 22, hufflepuff: 2, slytherin: 44 },
                    { name: "L'Audacieux", gryffindor: 44, ravenclaw: 17, hufflepuff: 16, slytherin: 23 }
                ],
        },
        {
            content: "Tu détesterais le plus qu'on te qualifie de...",
            answersAndHouseScore:
                [
                    { name: "Banal", gryffindor: 17, ravenclaw: 18, hufflepuff: 19, slytherin: 45 },
                    { name: "Ignorant", gryffindor: 19, ravenclaw: 50, hufflepuff: 19, slytherin: 17 },
                    { name: "Lâche", gryffindor: 47, ravenclaw: 17, hufflepuff: 18, slytherin: 20 },
                    { name: "D'égoiste", gryffindor: 17, ravenclaw: 15, hufflepuff: 44, slytherin: 18 }
                ],
        },
        {
            content: "S'il te fallait faire un choix, tu préférerais inventer une potion te garantissant...",
            answersAndHouseScore:
                [
                    { name: "L'amour", gryffindor: 19, ravenclaw: 18, hufflepuff: 44, slytherin: 20 },
                    { name: "La gloire", gryffindor: 47, ravenclaw: 19, hufflepuff: 17, slytherin: 17 },
                    { name: "La sagesse", gryffindor: 18, ravenclaw: 43, hufflepuff: 20, slytherin: 18 },
                    { name: "Le pouvoir", gryffindor: 16, ravenclaw: 20, hufflepuff: 20, slytherin: 45 }
                ],
        },
        {
            content: "De quelle manière préférerais-tu que les gens se souviennent de toi après ta mort ?",
            answersAndHouseScore:
                [
                    { name: "En se disant que tu leur manques, mais en gardant tout de même le sourire quand ils pensent à toi", gryffindor: 18, ravenclaw: 16, hufflepuff: 42, slytherin: 19 },
                    { name: "En se racontant inlassablement les récits de tes aventures", gryffindor: 46, ravenclaw: 19, hufflepuff: 14, slytherin: 19 },
                    { name: "En éprouvant de l'admiration quand ils pensent à tous tes exploits", gryffindor: 18, ravenclaw: 45, hufflepuff: 22, slytherin: 17 },
                    { name: "Peu importe ce que les gens penseront de moi une fois que je serai mort(e), ce qui compte, c'est ce qu'ils pensent de moi tant que je suis vivant(e)", gryffindor: 18, ravenclaw: 20, hufflepuff: 22, slytherin: 45 },
                ],
        },
        {
            content: "Une fois tous les cent ans, la plante à Pipaillon produit des fleurs qui changent de parfum pour plaire à l'imprudent qu'elle souhaite attirer. Si cette plante souhaitait t'appâter, quelle odeur devrait-elle dégager ?",
            answersAndHouseScore:
                [
                    { name: "L'odeur d'un feu de bois crépitant", gryffindor: 44, ravenclaw: 17, hufflepuff: 16, slytherin: 21 },
                    { name: "L'odeur de la mer", gryffindor: 21, ravenclaw: 22, hufflepuff: 16, slytherin: 21 },
                    { name: "L'odeur d'un parchemin neuf", gryffindor: 16, ravenclaw: 45, hufflepuff: 22, slytherin: 15 },
                    { name: "L'odeur de ta maison", gryffindor: 19, ravenclaw: 15, hufflepuff: 43, slytherin: 18 }
                ],
        },
        {
            content: "Il y a quatre boîtes devant toi. Laquelle essaies-tu d'ouvrir ?",
            answersAndHouseScore:
                [
                    { name: "La petite boîte en écailles de tortue dorée à l'or fin qui semble contenir une minuscule créature qui couine.", gryffindor: 14, ravenclaw: 18, hufflepuff: 46, slytherin: 18 },
                    { name: "La boîte d'un noir brillant dotée d'une serrure et d'une clé en argent et qui porte une mystérieuse inscription en runes que tu identifies immédiatement comme étant la signature de Merlin", gryffindor: 18, ravenclaw: 20, hufflepuff: 16, slytherin: 46 },
                    { name: "Le coffret en or sculpté, posé sur deux pieds pourvus de griffes, dont l'inscription te prévient qu'il renferme des connaissances secrètes et une tentation irrésistible", gryffindor: 19, ravenclaw: 44, hufflepuff: 21, slytherin: 19 },
                    { name: "La petite boîte en étain, simple et sans prétention, sur laquelle on peut lire une inscription rayée qui dit : 'Je ne m'ouvre que pour celui ou celle qui le mérite'", gryffindor: 49, ravenclaw: 19, hufflepuff: 17, slytherin: 17 }
                ],
        },
        {

            content: "Quel instrument de musique aimes-tu le plus entendre ?",
            answersAndHouseScore:
                [
                    { name: "Le violon", gryffindor: 17, ravenclaw: 20, hufflepuff: 20, slytherin: 48 },
                    { name: "La trompette", gryffindor: 18, ravenclaw: 17, hufflepuff: 44, slytherin: 18 },
                    { name: "Le piano", gryffindor: 21, ravenclaw: 46, hufflepuff: 19, slytherin: 18 },
                    { name: "Le tambour", gryffindor: 44, ravenclaw: 17, hufflepuff: 17, slytherin: 16 }
                ],
        },
        {
            content: "Quatre coupes remplies d'un liquide mystérieux sont placées devant toi. Laquelle choisis-tu de boire ?",
            answersAndHouseScore:
                [
                    { name: "Celle qui contient un liquide argenté et mousseux qui scintille comme s'il renfermait de la poudre de diamant", gryffindor: 21, ravenclaw: 44, hufflepuff: 19, slytherin: 18 },
                    { name: "Celle qui contient une boisson violette, onctueuse et épaisse, qui dégage un délicieux parfum de chocolat et de prunes", gryffindor: 19, ravenclaw: 19, hufflepuff: 43, slytherin: 20 },
                    { name: "Celle qui contient un liquide doré et brillant qui fait mal aux yeux et fait voir des taches lumineuses partout", gryffindor: 41, ravenclaw: 18, hufflepuff: 19, slytherin: 19 },
                    { name: "Celle qui contient un étrange liquide noir qui brille comme de l'encre et dégage des vapeurs provoquant d'étranges hallucinations", gryffindor: 18, ravenclaw: 19, hufflepuff: 19, slytherin: 43 }
                ],
        },
        {
            content: "Tu entres dans un jardin enchanté rempli de choses mystérieuses. Laquelle seras-tu le plus curieux d'examiner en premier lieu ?",
            answersAndHouseScore:
                [
                    { name: " L'arbre à feuilles argentées chargé de pommes d'or", gryffindor: 17, ravenclaw: 45, hufflepuff: 18, slytherin: 16 },
                    { name: "Celle qui contient une boisson violette, onctueuse et épaisse, qui dégage un délicieux parfum de chocolat et de prunes", gryffindor: 18, ravenclaw: 15, hufflepuff: 42, slytherin: 17 },
                    { name: "Celle qui contient un liquide doré et brillant qui fait mal aux yeux et fait voir des taches lumineuses partout", gryffindor: 16, ravenclaw: 22, hufflepuff: 21, slytherin: 46 },
                    { name: "Celle qui contient un étrange liquide noir qui brille comme de l'encre et dégage des vapeurs provoquant d'étranges hallucinations", gryffindor: 49, ravenclaw: 18, hufflepuff: 19, slytherin: 21 }
                ],
        },
        {

            content: "Un troll a fait irruption dans le bureau du directeur de Poudlard. Il est sur le point de pulvériser, écraser et déchirer plusieurs objets et trésors irremplaçables, dont notamment un remède contre la Dragoncelle que le directeur a pratiquement fini de mettre au point, les carnets scolaires de tous les élèves de Poudlard depuis 1 000 ans et un mystérieux livre écrit à la main, comportant d'étranges textes en runes, qui a très probablement appartenu à Merlin. Dans quel ordre tentes-tu de sauver ces objets de la massue du troll si tu en as la possibilité ?",
            answersAndHouseScore:
                [

                    { name: "1) Le remède 2) Les carnets 3) Le livre", gryffindor: 23, ravenclaw: 10, hufflepuff: 22, slytherin: 9 },
                    { name: "1) Les carnets 2) Le livre 3) Le remède", gryffindor: 14, ravenclaw: 11, hufflepuff: 14, slytherin: 31 },
                    { name: "1) Le livre 2) Le remède 3) Les carnets", gryffindor: 12, ravenclaw: 30, hufflepuff: 13, slytherin: 11 },
                    { name: "1) Le remède 2) Le livre 3) Les carnets", gryffindor: 29, ravenclaw: 12, hufflepuff: 12, slytherin: 13 },
                    { name: "1) Les carnets 2) Le remède 3) Le livre", gryffindor: 13, ravenclaw: 10, hufflepuff: 28, slytherin: 11 },
                    { name: "1) Le livre 2) Les carnets 3) Le remède", gryffindor: 9, ravenclaw: 27, hufflepuff: 11, slytherin: 24 }
                ],
        },
        {
            content: "Tu préférerais que les autres...",
            answersAndHouseScore:
                [
                    { name: "t'envient", gryffindor: 10, ravenclaw: 24, hufflepuff: 10, slytherin: 24 },
                    { name: "t'imitent", gryffindor: 16, ravenclaw: 31, hufflepuff: 13, slytherin: 9 },
                    { name: "te fassent confiance", gryffindor: 23, ravenclaw: 8, hufflepuff: 23, slytherin: 9 },
                    { name: "t'admirent", gryffindor: 24, ravenclaw: 11, hufflepuff: 23, slytherin: 9 },
                    { name: "t'aiment", gryffindor: 15, ravenclaw: 12, hufflepuff: 29, slytherin: 10 },
                    { name: "te craignent", gryffindor: 12, ravenclaw: 15, hufflepuff: 14, slytherin: 26 }
                ],
        },
        {
            content: "Qu'est-ce que tu as le plus de mal à supporter ?",
            answersAndHouseScore:
                [
                    { name: "La faim", gryffindor: 10, ravenclaw: 29, hufflepuff: 28, slytherin: 10 },
                    { name: "Le froid", gryffindor: 14, ravenclaw: 14, hufflepuff: 25, slytherin: 26 },
                    { name: "La solitude", gryffindor: 32, ravenclaw: 13, hufflepuff: 24, slytherin: 9 },
                    { name: "L'ennui", gryffindor: 32, ravenclaw: 13, hufflepuff: 10, slytherin: 28 },
                    { name: "Être ignoré", gryffindor: 11, ravenclaw: 32, hufflepuff: 12, slytherin: 27 }
                ],
        },
        {
            content: "Qu'est-ce que tu as le plus hâte d'apprendre à Poudlard ?",
            answersAndHouseScore:
                [
                    { name: "L'Apparition et la Disparition (la capacité à te matérialiser ou te dématérialiser comme bon te semble)", gryffindor: 19, ravenclaw: 6, hufflepuff: 9, slytherin: 23 },
                    { name: "La métamorphose (l'art de transformer un objet en un autre)", gryffindor: 9, ravenclaw: 27, hufflepuff: 13, slytherin: 12 },
                    { name: "Le vol sur un balai", gryffindor: 19, ravenclaw: 7, hufflepuff: 18, slytherin: 9 },
                    { name: "Tout ce qu'il faut savoir sur les créatures magiques et comment les apprivoiser et s'en occuper", gryffindor: 9, ravenclaw: 9, hufflepuff: 27, slytherin: 10 },
                    { name: " Les sortilèges et les maléfices", gryffindor: 10, ravenclaw: 11, hufflepuff: 11, slytherin: 28 },
                    { name: "Tous les secrets du château", gryffindor: 24, ravenclaw: 13, hufflepuff: 11, slytherin: 9 },
                    { name: "Tous les domaines de la magie que l'on me permettra d'étudier", gryffindor: 11, ravenclaw: 27, hufflepuff: 11, slytherin: 10 }
                ],
        },
        {
            content: "Si tu pouvais avoir un pouvoir magique, lequel choisirais-tu ?",
            answersAndHouseScore:
                [
                    { name: "Le pouvoir de lire dans les pensées des gens", gryffindor: 10, ravenclaw: 22, hufflepuff: 10, slytherin: 22 },
                    { name: "Le pouvoir de devenir invisible", gryffindor: 33, ravenclaw: 10, hufflepuff: 14, slytherin: 13 },
                    { name: "Le pouvoir d'être doté(e) d'une force surnaturelle", gryffindor: 13, ravenclaw: 9, hufflepuff: 26, slytherin: 9 },
                    { name: "Le pouvoir de parler aux animaux", gryffindor: 11, ravenclaw: 19, hufflepuff: 35, slytherin: 9 },
                    { name: "Le pouvoir de changer le passé", gryffindor: 18, ravenclaw: 13, hufflepuff: 13, slytherin: 28 },
                    { name: "Le pouvoir de modifier ton apparence comme bon te semble", gryffindor: 15, ravenclaw: 28, hufflepuff: 13, slytherin: 10 }
                ],
        },
        {
            content: "Quelle créature aimerais-tu le plus étudier ?",
            answersAndHouseScore:
                [
                    { name: "Les centaures", gryffindor: 20, ravenclaw: 19, hufflepuff: 8, slytherin: 8 },
                    { name: "Les gobelins", gryffindor: 10, ravenclaw: 23, hufflepuff: 9, slytherin: 16 },
                    { name: "Les sirènes", gryffindor: 9, ravenclaw: 8, hufflepuff: 20, slytherin: 20 },
                    { name: "Les fantômes", gryffindor: 24, ravenclaw: 23, hufflepuff: 8, slytherin: 6 },
                    { name: "Les vampires", gryffindor: 9, ravenclaw: 12, hufflepuff: 12, slytherin: 26 },
                    { name: "Les loups-garous", gryffindor: 22, ravenclaw: 8, hufflepuff: 20, slytherin: 6 },
                    { name: "Les trolls", gryffindor: 6, ravenclaw: 8, hufflepuff: 22, slytherin: 19 }
                ],
        },
        {
            content: "Un élève de ta maison a triché pendant les examens de Poudlard en se servant d'une plume ensorcelée. Grâce à son stratagème, il se retrouve premier de la classe en Sortilèges et tu n'es que deuxième. Le professeur Flitwick soupçonne quelque chose de louche. Il te prend à part à la fin du cours pour te demander si ton camarade a utilisé ou non une plume interdite. Que fais-tu ?",
            answersAndHouseScore:
                [
                    { name: "Tu mens au professeur en lui disant que tu ignores la vérité (mais en espérant secrètement que quelqu'un d'autre lui dira la vérité)", gryffindor: 17, ravenclaw: 14, hufflepuff: 43, slytherin: 18 },
                    { name: "Tu réponds au professeur Flitwick qu'il vaudrait mieux qu'il pose directement la question à ton camarade de classe (et tu as déjà prévenu celui-ci que s'il ne dit pas la vérité au professeur, tu le feras à sa place)", gryffindor: 43, ravenclaw: 16, hufflepuff: 22, slytherin: 14 },
                    { name: "Tu dis la vérité au professeur Flitwick. Après tout, si ton camarade est prêt à tricher pour être premier, il mérite d'être dénoncé. Et de toute manière, comme vous appartenez tous les deux à la même maison, tu récupéreras les points qu'il perdra en lui prenant la première place", gryffindor: 22, ravenclaw: 45, hufflepuff: 16, slytherin: 19 },
                    { name: "Tu n'attendrais pas que l'on t'interroge pour dire la vérité au professeur Flitwick. Si tu savais que quelqu'un allait se servir d'une plume interdite, tu le dirais immédiatement au professeur, avant même que l'examen ne commence", gryffindor: 18, ravenclaw: 25, hufflepuff: 19, slytherin: 49 },
                ],
        },
        {
            content: "Quel chemin te tente le plus ?",
            answersAndHouseScore:
                [
                    { name: "La grande allée d'herbe baignée de soleil", gryffindor: 18, ravenclaw: 14, hufflepuff: 41, slytherin: 18 },
                    { name: "L'étroite ruelle sombre, éclairée à la lanterne", gryffindor: 19, ravenclaw: 20, hufflepuff: 17, slytherin: 44 },
                    { name: "Le petit sentier tortueux jonché de feuilles mortes qui s'enfonce à travers le bois", gryffindor: 44, ravenclaw: 22, hufflepuff: 19, slytherin: 23 },
                    { name: "La rue pavée bordée d'anciens bâtiments", gryffindor: 19, ravenclaw: 43, hufflepuff: 23, slytherin: 14 }
                ],
        },
        {

            content: "Un Moldu t'aborde en pleine rue en te lançant qu'il est persuadé que tu es un sorcier ou une sorcière. Que fais-tu ?",
            answersAndHouseScore:
                [
                    { name: "Tu lui demandes pourquoi il pense une chose pareille ?", gryffindor: 17, ravenclaw: 45, hufflepuff: 20, slytherin: 17 },
                    { name: "Tu en conviens et tu lui demandes s'il veut que tu lui jettes gratuitement un petit maléfice pour en être sûr ?", gryffindor: 21, ravenclaw: 17, hufflepuff: 20, slytherin: 41 },
                    { name: "Tu en conviens, puis tu t'en vas nonchalamment en le laissant se demander si tu bluffes ou pas ?", gryffindor: 47, ravenclaw: 21, hufflepuff: 15, slytherin: 23 },
                    { name: "Tu lui réponds que sa santé mentale t'inquiète et tu lui proposes d'appeler immédiatement un médecin.", gryffindor: 16, ravenclaw: 17, hufflepuff: 45, slytherin: 20 },
                ],
        },
        {
            content: "Il fait nuit noire, tu marches seul(e) dans une rue mal éclairée. Soudain, tu entends un drôle de bruit dont la provenance semble magique. Que fais-tu ?",
            answersAndHouseScore:
                [
                    { name: "Tu poursuis ton chemin avec prudence, en gardant la main sur ta baguette magique dissimulée sous ton manteau et en restant très vigilant(e) au moindre signe de danger", gryffindor: 19, ravenclaw: 17, hufflepuff: 43, slytherin: 21 },
                    { name: "Tu brandis ta baguette magique et tu tentes de découvrir d'où vient ce bruit", gryffindor: 45, ravenclaw: 21, hufflepuff: 17, slytherin: 19 },
                    { name: "Tu brandis ta baguette magique pour te défendre sans te laisser impressionner", gryffindor: 17, ravenclaw: 19, hufflepuff: 19, slytherin: 42 },
                    { name: "Tu te glisses silencieusement dans la pénombre en attendant la suite des événements et en faisant une liste mentale de tous les sortilèges de défense et d'attaque dont tu pourrais te servir, s'il le fallait", gryffindor: 19, ravenclaw: 44, hufflepuff: 21, slytherin: 19 },
                ],
        },
        {
            content: "Deux de tes amis et toi devez traverser un pont gardé par un troll des rivières. Avant de vous laisser passer, celui-ci insiste pour se battre avec l'un de vous. Que fais-tu ?",
            answersAndHouseScore:
                [
                    { name: "Tu tentes de détourner l'attention du troll pour qu'il vous laisse passer tous les trois sans que vous ayez à l'affronter", gryffindor: 20, ravenclaw: 44, hufflepuff: 18, slytherin: 23 },
                    { name: "Tu proposes à tes amis de jouer à la courte paille pour décider lequel de vous trois combattra", gryffindor: 16, ravenclaw: 17, hufflepuff: 47, slytherin: 17 },
                    { name: "Tu proposes à tes amis de l'affronter tous les trois à la fois (sans prévenir le troll)", gryffindor: 18, ravenclaw: 19, hufflepuff: 16, slytherin: 42 },
                    { name: "Tu te portes immédiatement volontaire pour l'affronter", gryffindor: 46, ravenclaw: 19, hufflepuff: 19, slytherin: 18 },
                ],
        },
        {
            content: "Quel cauchemar te ferait le plus peur ?",
            answersAndHouseScore:
                [
                    { name: "Celui où tu te tiens au sommet de quelque chose de très, très haut et tu te rends subitement compte que tu n'as aucun point d'appui ni aucune barrière pour t'empêcher de tomber dans le vide", gryffindor: 20, ravenclaw: 46, hufflepuff: 18, slytherin: 20 },
                    { name: "Celui où tu es enfermé(e) dans une pièce sombre et sans fenêtre et où un œil mystérieux t'observe à travers le trou de la serrure", gryffindor: 45, ravenclaw: 18, hufflepuff: 17, slytherin: 18 },
                    { name: "Celui où tu découvres, en te réveillant un beau matin, que tes amis et tes proches ne te reconnaissent plus", gryffindor: 17, ravenclaw: 15, hufflepuff: 45, slytherin: 15 },
                    { name: "Celui où tu parles avec une voix tellement ridicule que personne ne te comprend et tout le monde se moque de toi", gryffindor: 18, ravenclaw: 21, hufflepuff: 20, slytherin: 47 }
                ],
        },
        {
            content: "Lune ou étoiles ?",
            answersAndHouseScore:
                [
                    { name: "Lune", gryffindor: 27, ravenclaw: 74, hufflepuff: 33, slytherin: 72 },
                    { name: "Etoiles", gryffindor: 73, ravenclaw: 26, hufflepuff: 67, slytherin: 26 }
                ],
        },
        {
            content: "Forêt ou rivière ?",
            answersAndHouseScore:
                [
                    { name: "Forêt", gryffindor: 74, ravenclaw: 73, hufflepuff: 26, slytherin: 28 },
                    { name: "Rivière", gryffindor: 27, ravenclaw: 27, hufflepuff: 70, slytherin: 74 },
                ],
        },
        {
            content: "Aube ou crépuscule ?",
            answersAndHouseScore:
                [
                    { name: "Aube", gryffindor: 73, ravenclaw: 73, hufflepuff: 26, slytherin: 28 },
                    { name: "Crèpuscule", gryffindor: 27, ravenclaw: 27, hufflepuff: 70, slytherin: 74 }
                ],
        },
        {
            content: "Noir ou blanc",
            answersAndHouseScore:
                [
                    { name: "Noir", gryffindor: 73, ravenclaw: 29, hufflepuff: 24, slytherin: 72 },
                    { name: "Blanc", gryffindor: 27, ravenclaw: 71, hufflepuff: 76, slytherin: 28 }
                ],
        },
        {
            content: "Gauche ou droite",
            answersAndHouseScore:
                [
                    { name: "Gauche", gryffindor: 29, ravenclaw: 70, hufflepuff: 29, slytherin: 73 },
                    { name: "Droite", gryffindor: 71, ravenclaw: 30, hufflepuff: 71, slytherin: 27 },
                ],
        },
        {
            content: "Pile ou face",
            answersAndHouseScore:
                [
                    { name: "Pile", gryffindor: 27, ravenclaw: 69, hufflepuff: 74, slytherin: 27 },
                    { name: "Face", gryffindor: 73, ravenclaw: 31, hufflepuff: 26, slytherin: 73 }
                ],
        },
        //TODO : repartir correctement les probas sur cette question 
        {
            content: "Si tu étais accepté à Poudlard, quel animal de compagnie choisirais-tu de prendre avec toi ?",
            answersAndHouseScore: [
                { name: "Un chat tigré", gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 },
                { name: "Un chat siamois, roux, noir ou blanc", gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 },
                { name: "Une chouette hulotte, un petit duc ou une chouette effraie", gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 },
                { name: "Une chouette harfang des neiges", gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 },
                { name: "Un crapeau commun, calamite ou arlequin", gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 },
                { name: "Un crapeau dragon", gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 },
                { name: "Un crapaud arboricole à trois doigts", gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 }
            ]
        }
    ]