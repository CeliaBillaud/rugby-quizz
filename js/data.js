const data = [
    [
        "ALDEGHERI Dorian",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/aldegheri_dorian--768x985.jpg"
    ],
    [
        "ATONIO Uini",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/atonio_uini-768x978.jpg"
    ],
    [
        "BAILLE Cyril",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/baille_cyril-1-768x979.jpg"
    ],
    [
        "BAMBA Demba",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/BAMBA_Demba-768x991.jpg"
    ],
    [
        "COLOMBE Georges-Henri",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2024/03/colombe_georges-henri-768x941.jpg"
    ],
    [
        "FALATEA Sipili",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2021/06/falatea-sipili-768x1074.jpg"
    ],
    [
        "GROS Jean-Baptiste",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/GROS_Jean-Baptiste-768x938.jpg"
    ],
    [
        "LACLAYAT Thomas",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2023/08/laclayat-thomas1-768x1024.jpeg"
    ],
    [
        "TAOFIFENUA Sébastien",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/taofifenua_sebastien--768x996.jpg"
    ],
    [
        "WARDI Reda",
        "Pilier",
        "https://api.www.ffr.fr/wp-content/uploads/2022/11/wardi_reda-1-768x948.jpg"
    ],
    [
        "BOURGARIT  Pierre",
        "Talonneur",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/bourgarit-pierre-768x915.jpeg"
    ],
    [
        "MARCHAND Julien",
        "Talonneur",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/marchand_julien-768x981.jpg"
    ],
    [
        "MAUVAKA Peato",
        "Talonneur",
        "https://api.www.ffr.fr/wp-content/uploads/2019/07/mauvaka_peato-768x993.jpg"
    ],
    [
        "CHALUREAU Bastien",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2022/11/chalureau_bastien-1-768x1108.jpg"
    ],
    [
        "FLAMENT Thibaud",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2021/10/flament-thibaud-768x1123.jpg"
    ],
    [
        "GABRILLAGUES Paul",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/paul_gabrillagues-1-768x1070.jpg"
    ],
    [
        "MEAFOU Emmanuel",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2024/03/meafou_emmanuel-768x939.jpg"
    ],
    [
        "TAOFIFENUA Romain",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/taofifenua_romain-1-768x967.jpg"
    ],
    [
        "TUILAGI Posolo",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2023/03/tuilagi_posolo-768x946.jpg"
    ],
    [
        "VERHAEGHE Florian",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2021/10/florent-verhaeghe-768x969.jpg"
    ],
    [
        "WILLEMSE Paul",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/willemse_paul-768x1027.jpg"
    ],
    [
        "WOKI Cameron",
        "Deuxième ligne",
        "https://api.www.ffr.fr/wp-content/uploads/2019/03/woki_cameron-768x923.jpg"
    ],
    [
        "ABADIE Esteban",
        "Troisième ligne Aile",
        "https://api.www.ffr.fr/wp-content/uploads/2024/02/abadie_esteban-768x1003.jpg"
    ],
    [
        "BOUDEHENT Paul",
        "Troisième ligne Aile",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/boudehent_paul-768x1129.jpg"
    ],
    [
        "CRETIN Dylan",
        "Troisième ligne Aile",
        "https://api.www.ffr.fr/wp-content/uploads/2020/02/CRETIN_Dylan-1-768x1095.jpg"
    ],
    [
        "CROS François",
        "Troisième ligne Aile",
        "https://api.www.ffr.fr/wp-content/uploads/2019/07/cros_francois-2-768x1090.jpg"
    ],
    [
        "MACALOU Sekou",
        "Troisième ligne Aile",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/macalou-sekou-2-768x1113.jpg"
    ],
    [
        "OLLIVON Charles",
        "Troisième ligne Aile",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/ollivon_charles-768x1137.jpg"
    ],
    [
        "ALLDRITT Grégory",
        "Troisième ligne Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/alldritt_gregory-768x1060.jpg"
    ],
    [
        "ROUMAT Alexandre",
        "Troisième ligne Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2024/02/roumat_alexandre-768x1067.jpg"
    ],
    [
        "TANGA Yoan",
        "Troisième ligne Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2022/06/webp-net-resizeimage-768x962.jpg"
    ],
    [
        "COUILLOUD Baptiste",
        "Demi de mêlée",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/couilloud_baptiste-768x1193.jpg"
    ],
    [
        "DUPONT Antoine",
        "Demi de mêlée",
        "https://equipe-france.s3.eu-west-3.amazonaws.com/img/personne/rugby-antoine-dupont-1.jpg"
    ],
    [
        "LE GARREC  Nolann",
        "Demi de mêlée",
        "https://api.www.ffr.fr/wp-content/uploads/2020/01/le-garrec_nolan-768x1146.jpg"
    ],
    [
        "LUCU Maxime",
        "Demi de mêlée",
        "https://api.www.ffr.fr/wp-content/uploads/2021/11/lucu_maxime--768x1227.jpg"
    ],
    [
        "SERIN Baptiste",
        "Demi de mêlée",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/SERIN_Baptiste-768x1039.jpg"
    ],
    [
        "HASTOY  Antoine",
        "Demi d'ouverture",
        "https://api.www.ffr.fr/wp-content/uploads/2021/06/HASTOY_Antoine-768x1262.jpg"
    ],
    [
        "JALIBERT Matthieu",
        "Demi d'ouverture",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/jalibert_matthieu--768x1123.jpg"
    ],
    [
        "NTAMACK Romain",
        "Demi d'ouverture",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/ntamack-romain-1-768x1222.jpg"
    ],
    [
        "DANTY Jonathan",
        "Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/danty_jonathan-1-768x979.jpg"
    ],
    [
        "DEPOORTERE Nicolas",
        "Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2022/06/depoortere_nicolas--768x1068.jpg"
    ],
    [
        "FICKOU Gaël",
        "Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/fickou_gael-768x1043.jpg"
    ],
    [
        "GAILLETON Emilien",
        "Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2021/06/gailleton_emilien-1-768x1116.jpg"
    ],
    [
        "VINCENT Arthur",
        "Centre",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/VINCENT_Arthur-768x1046.jpg"
    ],
    [
        "DUMORTIER Ethan",
        "Ailier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/03/dumortier_ethan-768x1184.jpg"
    ],
    [
        "LEBEL Matthis",
        "Ailier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/lebel_mathis-2-768x768.jpeg"
    ],
    [
        "MOEFANA Yoram",
        "Ailier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/moefana_yoram-768x1088.jpg"
    ],
    [
        "PENAUD Damian",
        "Ailier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/penaud_damian-1-768x1075.jpg"
    ],
    [
        "VILLIÈRE Gabin",
        "Ailier",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/VILLIERE_Gabin-1-768x1031.jpg"
    ],
    [
        "BARRÉ Léo",
        "Arrière",
        "https://api.www.ffr.fr/wp-content/uploads/2021/06/barre_leo--768x1179.jpg"
    ],
    [
        "BIELLE BIARREY Louis",
        "Arrière",
        "https://api.www.ffr.fr/wp-content/uploads/2021/06/bielle-biarrey_louis-768x1133.jpg"
    ],
    [
        "DULIN Brice",
        "Arrière",
        "https://api.www.ffr.fr/wp-content/uploads/2019/01/DULIN_Brice-768x986.jpeg"
    ],
    [
        "JAMINET Melvyn",
        "Arrière",
        "https://api.www.ffr.fr/wp-content/uploads/2021/06/jaminet_melvin-768x1100.jpg"
    ],
    [
        "RAMOS Thomas",
        "Arrière",
        "https://api.www.ffr.fr/wp-content/uploads/2019/02/ramos_thomas-768x1106.jpg"
    ]
]

export default data;