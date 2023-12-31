const users = [
    {
        first_name: "Emily",
        last_name: "Jonhson",
        email: "emily@example.com",
        password: "securepass",
        admin: "true",
    },
    {
        first_name: "Lui",
        last_name: "Wei",
        email: "liu@example.com",
        password: "strongpass",
        admin: "false",
    },
    {
        first_name: "Isabella",
        last_name: "Garcia",
        email: "bella@example.com",
        password: "pass1234",
        admin: "false",
    },
    {
        first_name: "Hamilton",
        last_name: "Foulger",
        email: "hfoulger0@live.com",
        password: "iA9~%",
        admin: "false",
    },
    {
        first_name: "Linnet",
        last_name: "Fetteplace",
        email: "lfetteplace1@360.cn",
        password: "sQ6+B",
        admin: "false",
    },
    {
        first_name: "Stepha",
        last_name: "Greenhowe",
        email: "sgreenhowe2@netvibes.com",
        password: "mI9+%dy",
        admin: "false",
    },
    {
        first_name: "Nickie",
        last_name: "McKibbin",
        email: "nmckibbin3@goo.ne.jp",
        password: "sT1`BcpVw7",
        admin: "true",
    },
    {
        first_name: "Christoper",
        last_name: "Corkish",
        email: "ccorkish4@weibo.com",
        password: "wB8|bB\\@O$",
        admin: "true",
    },
];

const products = [
    {
        name: "Cloud Monster",
        description: "Featuring our biggest CloudTec® ever for massive cushioning and max energy. A monster of a ride on the road.",
        price: "102.99",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1451567028/photo/picture-of-blue-canvas-sneaker.jpg?s=612x612&w=0&k=20&c=5qaG3kLC1cTRFY7Fc_JO4THuXi3bnEV1HlqujU8xVZM=",
    },

    {
        name: "The Mav",
        description:
            "The Mav is a nod to innovation. Its cutting-edge features and futuristic design make it a conversation starter, capturing attention and admiration wherever you go. Elevate your footwear game with the Mav where style, comfort, and innovation converge to create a shoe that stands out in a crowd.",
        price: "199.99",
        size: "",
        image_url: "https://www.andysowards.com/blog/assets/cg-video-cool-shoes-animation.jpeg",
    },

    {
        name: "Rapture Radiance",
        description: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        price: "185.98",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/623270836/photo/modern-sport-shoes.jpg?s=612x612&w=0&k=20&c=D7xOiyV3TMQgUuIqlVvutPo49gyMG9f5U82mcvuDc0Y=",
    },
    {
        name: "Cosmos Cascade",
        description: "Donec ut mauris eget massa tempor convallis.",
        price: "53.17",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1170284219/photo/sneakers-blue-sport-shoes-top-view.jpg?s=612x612&w=0&k=20&c=AaRy1iSdVVyus7ncKszGoi3OMy2v0Yu-KysGcmP1Tls=",
    },
    {
        name: "Infiniti Incline",
        description: "Suspendisse potenti.",
        price: "553.36",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=BdklqnfGUvf02-2CxYsw-AnrbE3e-B5zhE9JQILEEW4=",
    },

    {
        name: "Velvet Verve",
        description: "Praesent id massa id nisl venenatis lacinia.",
        price: "107.74",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1660273400/photo/white-sneaker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lXNdhQ2mtLRgMAbBZw9ar_2TbCeS4DlnlE8K-UL_VFQ=",
    },
    {
        name: "Radiance Rhapsody",
        description: "In eleifend quam a odio.",
        price: "119.28",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/520838835/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=8OFyHpqFAvgjX9XI7T_H3-GgtgXV3BUXufjfCBjKnHI=",
    },
    {
        name: "Velvet Verve",
        description: "Etiam justo.",
        price: "284.91",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1200416005/photo/blue-running-shoes-on-isolated-white-background-closed-up-side-view.jpg?s=612x612&w=0&k=20&c=HlWpVqCNPn6s2eYF0OQnZjPxhZ-WB2g6D8D_7EmGFGc=",
    },
    {
        name: "Quantum Quest",
        description: "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        price: "139.85",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1166315142/photo/shoelaceless-running-shoes-on-isolated-white-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=AMv73NGdO4NNGlAeI7O6Clev6RyXZ8VfZedpEfbcno4=",
    },
    {
        name: "Velvet Verve",
        description: "Nam nulla.",
        price: "200.06",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/120627677/photo/pair-of-sport-shoe.jpg?s=612x612&w=0&k=20&c=ewhqsGn2qcGcYIBvxq5jKjgbgeLBcTW59GHkbnX3f-A=",
    },
    {
        name: "Quasar Quilts",
        description: "Suspendisse potenti.",
        price: "232.96",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1723786515/photo/a-pair-of-new-blue-gray-womens-sneakers-running-shoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Eyp9tQQAR6L3VOprDC_xeuGRwgD-_Nzs2Vpi6_BOojw=",
    },
    {
        name: "Echo Enigma",
        description: "Donec ut mauris eget massa tempor convallis.",
        price: "276.18",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/177643985/photo/cute-baby-sneakers.jpg?s=612x612&w=0&k=20&c=Uzuf4pctmSO4thqbfooY-JADiTYWjIpap3mtPR95aeM=",
    },
    {
        name: "Rapture Radiance",
        description: "In blandit ultrices enim.",
        price: "193.61",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1146671101/photo/running-sport-shoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=EpcDRhnLM0ZDiLojmPqgwIWsopJx9AvoxcJGwiInCrg=",
    },
    {
        name: "Nebulous Nexus",
        description: "Aliquam augue quam, sollicitudin vitae, consectetuer eget.",
        price: "131.39",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1146482363/photo/sneakers-isolated-on-white.jpg?s=612x612&w=0&k=20&c=1XEN0FHQ60cv8S5DaCXCwJ-5IW1WJd-3D-zEuZT_slQ=",
    },
    {
        name: "Zephyr Zen",
        description: "Nulla nisl.",
        price: "262.94",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1470481488/photo/a-pair-of-new-youth-sneakers-on-a-white-background.jpg?s=612x612&w=0&k=20&c=ji_51D7uviAzLldC_Tzs-uWT5bprieH3YeVZNj90Q1g=",
    },
    {
        name: "Cosmos Cascade",
        description: "Curabitur gravida nisi at nibh.",
        price: "212.64",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1147262946/photo/sneakers-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=J-5m7Q6nAcOL-jItTMH5NOgQ1WaXhDdwYXFUCTxA9MM=",
    },
    {
        name: "Prism Prowess",
        description: "Maecenas tristique, est et tempus semper, est quam.",
        price: "260.36",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1326437479/photo/pair-of-sneakers-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=l-oFAl_xu4pE_SQ-Y8EWQOYi4RhUbp3CaIQeltp7wyo=",
    },
    {
        name: "Celestial Charms",
        description: "Integer ac leo.",
        price: "143.71",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/183753962/photo/white-sport-shoes.jpg?s=612x612&w=0&k=20&c=inp_M-GZgbS3pYPquytuXZGU8BLhFCKJOX2csuSeHbQ=",
    },
    {
        name: "Verve Veil",
        description: "Aliquam sit amet diam in magna bibendum imperdiet.",
        price: "229.36",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1453479152/photo/view-from-above-of-old-dirty-running-shoes-on-the-white-background.jpg?s=612x612&w=0&k=20&c=VIWuL5g5cVoOFvTVnZ7QFY_kdWC6P9t-1kjSDY37xAE=",
    },
    {
        name: "Velour Voyage",
        description: "Morbi ut odio.",
        price: "619.94",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/670051526/photo/unbranded-modern-sneaker.jpg?s=612x612&w=0&k=20&c=Fn4ZmRX-CQyNAfUIxuQVl0yl-2b3nGxtggRsDTrrDX4=",
    },
    {
        name: "Solaris Silhouette",
        description: "Suspendisse ornare consequat lectus.",
        price: "301.77",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1157755032/photo/a-pair-of-hiker-green-mountain-sport-boots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=S0o0VriSFbzWe7OFK3k1db34tH0r_ukPG6zkb35_F38=",
    },
    {
        name: "Elysian Echoes",
        description: "Praesent blandit lacinia erat.",
        price: "106.10",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1156387131/photo/tennis-shoes-in-studio.jpg?s=612x612&w=0&k=20&c=UogbzPK1XVqJuiFCNgv3WLq_zwglt2vN4FtJqGgLA2k=",
    },
    {
        name: "Radiance Rhapsody",
        description: "Suspendisse ornare consequat lectus.",
        price: "141.11",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1160801118/photo/sport-shoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=e5j1mUHarxF6fPmhztkpdZ9AYlk5c7hqLX5SLPnHPUs=",
    },
    {
        name: "Rapture Radiance",
        description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        price: "234.33",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1217386858/photo/women-sports-shoes.jpg?s=612x612&w=0&k=20&c=yFdVwR1NLZ6YiURZa2Vi8t6DHdZUISoxDFGwXsiz1fs=",
    },
    {
        name: "Midnight Mirage",
        description: "In hac habitasse platea dictumst.",
        price: "142.84",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1258111645/photo/indian-made-mens-sports-shoes-on-wooden-table.jpg?s=612x612&w=0&k=20&c=yQ_g2XPpJ0Y1_i20RDqNW2jnxRVPfOT_OERWur_kH9E=",
    },
    {
        name: "Prism Prowess",
        description: "Cras non velit nec nisi vulputate nonummy.",
        price: "248.48",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/175182166/photo/canvas-shoes.jpg?s=612x612&w=0&k=20&c=bpSg6vfUZwCIno-J4oP2zUuxKknamsX290vRSuoyfiA=",
    },
    {
        name: "Cosmos Cascade",
        description: "Morbi a ipsum.",
        price: "166.84",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1322472292/photo/pair-of-stylish-sneakers-on-light-blue-background.jpg?s=612x612&w=0&k=20&c=7ZgkV_EpYINPkewYzoSRw6sI10pQ4AabAtmqHX8M2p0=",
    },
    {
        name: "Infiniti Incline",
        description: "Vestibulum sed magna at nunc commodo placerat.",
        price: "158.04",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1166092475/photo/pair-of-male-white-sneakers-on-a-blue-background-sport-shoe-close-up.jpg?s=612x612&w=0&k=20&c=8KVWbAB-UJzxL5kUVaYpYz-y551HoPCbskwJhcLHQ0o=",
    },
    {
        name: "Radiant Soles",
        description: "Nulla tellus.",
        price: "234.78",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/636550346/photo/sport-colorful-sneakers-on-white-background.jpg?s=612x612&w=0&k=20&c=3th5YVhfkftmx8c1YSWcWu7lqsIpo_rsRxIaHzSOCXQ=",
    },
    {
        name: "Ethereal Enigma",
        description: "Integer non velit.",
        price: "226.91",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/871577700/photo/pair-of-new-modern-sport-shoes.jpg?s=612x612&w=0&k=20&c=BohdC7DGGan86UjCEBQ2kdtqskvMjRrPKBGAOKQD8vI=",
    },
    {
        name: "Ethereal Essence",
        description: "Mauris lacinia sapien quis libero.",
        price: "201.10",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1453810805/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=kMXWxhaXOhJ8pzA_Ntis6D6QoAH4jHbV6DOkOggVIUM=",
    },
    {
        name: "Verve Veil",
        description: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        price: "100.63",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/481214767/photo/child-shoes.jpg?s=612x612&w=0&k=20&c=DCkywVcahHyn4XjjILIqT070qDIKme2zV9gz5eIhls8=",
    },
    {
        name: "Quantum Quest",
        description: "Donec vitae nisi.",
        price: "388.02",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/171300523/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=nw1FtJGn3ZrORgkUYgU8ThzopHX8rmX4P_y9fWU0bcg=",
    },
    {
        name: "Midnight Mirage",
        description: "Vestibulum ante ipsum primis in faucibus orci",
        price: "173.55",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1077267494/photo/sport-shoes-pair.jpg?s=612x612&w=0&k=20&c=WaKf6r9QPjfuYNO1NnxnCRZazeWXwieyWQ-kBYL4XV4=",
    },
    {
        name: "Solaris Silhouette",
        description: "Cum sociis natoque penatibus et magnis dis",
        price: "264.89",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/119704413/photo/modern-sneakers.jpg?s=612x612&w=0&k=20&c=2DZdDovuvLi8tpZRhiQ7O__dpcwVDHws85bodh5Qro0=",
    },
    {
        name: "Nebulous Nexus",
        description: "Praesent id massa id nisl venenatis lacinia.",
        price: "91.51",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/184271614/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=NToENgRxUqmLeENcrFhEQBec3TgpR38W5-4dYzkTNDo=",
    },
    {
        name: "Velvet Velocity",
        description: "In congue.",
        price: "240.67",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1146482363/photo/sneakers-isolated-on-white.jpg?s=612x612&w=0&k=20&c=1XEN0FHQ60cv8S5DaCXCwJ-5IW1WJd-3D-zEuZT_slQ=",
    },
    {
        name: "Zephyr Zen",
        description: "Praesent lectus.",
        price: "608.94",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/506197376/photo/fashionable-bright-easy-sports-shoes.jpg?s=612x612&w=0&k=20&c=DbI_qXmQEfUDhhI6iojaLu6qee1WMoCu7E0k7ztMzmw=",
    },
    {
        name: "Velocity Vista",
        description: "Curabitur at ipsum ac tellus semper interdum.",
        price: "189.68",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1143118075/photo/yellow-orange-women-shoes.jpg?s=612x612&w=0&k=20&c=b501JiWfdoJLsNvXNK0XyPtvuagysetKizopSQpTnVM=",
    },
    {
        name: "Cosmos Cascade",
        description: "Nullam sit amet turpis elementum ligula vehicula consequat.",
        price: "215.02",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1279285540/photo/canvas-shoes-on-white.jpg?s=612x612&w=0&k=20&c=1elVkarNMpzRHISeV8K4KJjVD1pd81nml_L4TYqjynU=",
    },
    {
        name: "Enchant Eclipses",
        description: "Nullam molestie nibh in lectus.",
        price: "10.34",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/466610037/photo/womens-athletic-shoes.jpg?s=612x612&w=0&k=20&c=awLfyh9XNXALVL2dnrACXPvY9hX9tXDC4KgMbKvQYn0=",
    },
    {
        name: "Nebula Nectar",
        description: "Duis at velit eu est congue elementum.",
        price: "258.06",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1646378170/photo/yellow-sneakers-on-white-background-with-copy-space-youth-shoes.jpg?s=612x612&w=0&k=20&c=zUi3XxxHBZGvbk3n-bpUY9Lpr4WwNRP4iZP2DtV-jgA=",
    },
    {
        name: "Solaris Silhouette",
        description: "Cum sociis natoque penatibus et magnis dis",
        price: "128.53",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1392732649/photo/white-sneakers-isolated-close-up-of-a-pair-white-elegant-stylish-leather-sport-shoes-isolated.jpg?s=612x612&w=0&k=20&c=yrwGqiq7efe-iLrTRUivdZXh5s7jyjl1EsjshzuEL4k=",
    },
    {
        name: "Echo Enigma",
        description: "In blandit ultrices enim.",
        price: "135.91",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/590582552/photo/casual-man-shoes.jpg?s=612x612&w=0&k=20&c=8xsf3J6uTyyrK5km_hBUOSg-JZOrC0opxI23o4Nk200=",
    },
    {
        name: "Velocity Vista",
        description: "Quisque ut erat.",
        price: "271.35",
        size: "",
        image_url: "https://media.istockphoto.com/id/1143344509/photo/blue-women-shoes-with-little-holes.jpg?s=612x612&w=0&k=20&c=IAfeAew6C9cLCpkx_oQ3WRocFAHGDJ-b3fZnCcmV22o=",
    },
    {
        name: "Celestial Cipher",
        description: "Praesent id massa id nisl venenatis lacinia.",
        price: "242.06",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/486431438/photo/stylish-sneakers.jpg?s=612x612&w=0&k=20&c=FWn-QqTehx8DjDpJwD5T35ed8QeE0cjhjeFAwiZ9j34=",
    },
    {
        name: "Nebulous Nexus",
        description: "Integer non velit.",
        price: "197.91",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1258110937/photo/indian-made-mens-sports-shoes-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=CdpM8l1PNU3g7x6ZQuTBajdOOpoAmcB2_aJMkiOcdjc=",
    },
    {
        name: "Nebula Nectar",
        description: "Nam ultrices, libero non mattis pulvinar",
        price: "299.27",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/817018912/photo/grey-sport-male-pair-shoes-isolated.jpg?s=612x612&w=0&k=20&c=ANUmZZM8a7txIFdF6JGGLaDTgQPIO_qALlISrquBMFs=",
    },
    {
        name: "Zenith Zephyrs",
        description: "Nulla nisl.",
        price: "47.45",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/172785227/photo/blue-sneakers-w-clipping-path.jpg?s=612x612&w=0&k=20&c=xuAuC9wZk2o5qsnjzEFxrpig83XawDcFkGYwEllLuA4=",
    },
    {
        name: "Mirage Mingle",
        description: "Nam ultrices, libero non mattis pulvinar",
        price: "37.53",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/1404068126/photo/new-brown-leather-casual-sneakers-isolated-on-white.jpg?s=612x612&w=0&k=20&c=vvTTJKGAOkxNHUFYyIku3Dui_E0G7U6MqN4GvJpBw44=",
    },
    {
        name: "Nebula Nectar",
        description: "In hac habitasse platea dictumst.",
        price: "270.46",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/469557809/photo/sports-shoes.jpg?s=612x612&w=0&k=20&c=7aflMOwggfmUL6SteEDBHtmPE3AN6qRA7giKnDpI7No=",
    },
    {
        name: "Luxe Looms",
        description: "Aenean auctor gravida sem.",
        price: "92.76",
        size: "",
        image_url:
            "https://media.istockphoto.com/id/525523849/photo/men-sport-shoes.jpg?s=612x612&w=0&k=20&c=wlmD57PCYly8fYrgawnQU7w-XcHXZwp17WX1ul1m_Cs=",
    },
];

module.exports = {
    users,
    products,
};
