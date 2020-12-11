const SHOP_DATA = {
    ussr: {
      id: 1,
      title: 'U.S.S.R',
      routeName: 'ussr',
      items: [
        {
          id: 1,
          name: 'K-91',
          imageUrl: 'https://i.ibb.co/p12pF3r/K-91.png',
          price: 25
        },
        {
          id: 2,
          name: 'Object 430U',
          imageUrl: 'https://i.ibb.co/grPgC4P/Object-430-U.png',
          price: 18
        },
        {
          id: 3,
          name: 'T-54',
          imageUrl: 'https://i.ibb.co/cvbfnq1/T-54.png',
          price: 35
        },
        {
          id: 4,
          name: 'T-62A',
          imageUrl: 'https://i.ibb.co/71LBgkB/T-62A.png',
          price: 25
        },
        {
          id: 5,
          name: 'Guardian-STG',
          imageUrl: 'https://i.ibb.co/y8FRXJ8/Guardian-STG.png',
          price: 18
        },
        {
          id: 6,
          name: 'T44-100-Volk',
          imageUrl: 'https://i.ibb.co/4WrRBSV/T44-100-VOLK.png',
          price: 14
        },
        {
          id: 7,
          name: 'T54-Motherland',
          imageUrl: 'https://i.ibb.co/wpCTJJK/T54-Motherland.png',
          price: 18
        },
        {
          id: 8,
          name: 'T-34-88',
          imageUrl: 'https://i.ibb.co/xMjrQmF/T-34-88.png',
          price: 14
        },
        {
          id: 9,
          name: 'T-44',
          imageUrl: 'https://i.ibb.co/9qXZqBQ/T-44.png',
          price: 16
        }
      ]
    },
    germany: {
      id: 2,
      title: 'Germany',
      routeName: 'germany',
      items: [
        {
          id: 10,
          name: 'E-75',
          imageUrl: 'https://i.ibb.co/pxdcr1N/E-75.png',
          price: 220
        },
        {
          id: 11,
          name: 'Grille-15',
          imageUrl: 'https://i.ibb.co/BNXvPs8/Grille-15.png',
          price: 280
        },
        {
          id: 12,
          name: 'Jagd-Pzanzer-E100',
          imageUrl: 'https://i.ibb.co/jbDQTFF/Jagd-Pzanzer-E100.png',
          price: 110
        },
        {
          id: 13,
          name: 'Lowe-Black',
          imageUrl: 'https://i.ibb.co/THt6P6G/Lowe-Black.png',
          price: 160
        },
        {
          id: 14,
          name: 'Rhm-Borsig-Waffentrager',
          imageUrl: 'https://i.ibb.co/mTf5mLd/Rhm-Borsig-Waffentrager.png',
          price: 160
        },
        {
          id: 15,
          name: 'Tiger-131',
          imageUrl: 'https://i.ibb.co/980SCBf/Tiger-131.png',
          price: 160
        },
        {
          id: 16,
          name: 'Waffentrager-E100',
          imageUrl: 'https://i.ibb.co/qWQZ06p/Waffentrager-E100.png',
          price: 190
        },
        {
          id: 17,
          name: 'Maus',
          imageUrl: 'https://i.ibb.co/5GQXf07/Maus.png',
          price: 200
        }
      ]
    },
    uk: {
      id: 3,
      title: 'U.K',
      routeName: 'uk',
      items: [
        {
          id: 18,
          name: 'Centurion-Action-X',
          imageUrl: 'https://i.ibb.co/0QhQjvJ/Centurion-Action-X.png',
          price: 125
        },
        {
          id: 19,
          name: 'Churchill-I',
          imageUrl: 'https://i.ibb.co/Xb2D6Pf/Churchill-I.png',
          price: 90
        },
        {
          id: 20,
          name: 'Cromwell-Knight',
          imageUrl: 'https://i.ibb.co/x3fkk7V/Cromwell-Knight.png',
          price: 90
        },
        {
          id: 21,
          name: 'FV215b',
          imageUrl: 'https://i.ibb.co/vkYMWcT/FV215b.png',
          price: 165
        },
        {
          id: 22,
          name: 'Super-Conqueror',
          imageUrl: 'https://i.ibb.co/JBvgzNp/Super-Conqueror.png',
          price: 185
        }
      ]
    },
    usa: {
      id: 4,
      title: 'U.S.A',
      routeName: 'usa',
      items: [
        {
          id: 23,
          name: 'AE-Phase-1',
          imageUrl: 'https://i.ibb.co/80jTw9V/AE-Phase-1.png',
          price: 25
        },
        {
          id: 24,
          name: 'M41-Bulldog',
          imageUrl: 'https://i.ibb.co/0c3tkVj/M41-Bulldog.png',
          price: 20
        },
        {
          id: 25,
          name: 'M46-Patton',
          imageUrl: 'https://i.ibb.co/0Q5dMsn/M46-Patton.png',
          price: 80
        },
        {
          id: 26,
          name: 'M48-A2-Patton',
          imageUrl: 'https://i.ibb.co/1sMnvCp/M48-A2-Patton.png',
          price: 80
        },
        {
          id: 27,
          name: 'T28',
          imageUrl: 'https://i.ibb.co/hXHC1Q6/T28.png',
          price: 45
        },
        {
          id: 28,
          name: 'T69',
          imageUrl: 'https://i.ibb.co/VHf16vj/T69.png',
          price: 135
        },
        {
          id: 29,
          name: 'T95-E6',
          imageUrl: 'https://i.ibb.co/YXFjkmn/T95-E6.png',
          price: 20
        }
      ]
    },
    france: {
      id: 5,
      title: 'France',
      routeName: 'france',
      items: [
        {
          id: 30,
          name: 'AMX-13-105',
          imageUrl: 'https://i.ibb.co/4j5w1Vn/AMX-13-105.png',
          price: 325
        },
        {
          id: 31,
          name: 'AMX-30',
          imageUrl: 'https://i.ibb.co/rGzMF9J/AMX-30.png',
          price: 20
        },
        {
          id: 32,
          name: 'AMX-Chasseur-de-char-46',
          imageUrl: 'https://i.ibb.co/dK0Lr5R/AMX-Chasseur-de-char-46.png',
          price: 25
        },
        {
          id: 33,
          name: 'AMX50-Foch',
          imageUrl: 'https://i.ibb.co/0hjcnch/AMX50-Foch.png',
          price: 25
        },
        {
          id: 34,
          name: 'Batignolles-Chatillon-12t',
          imageUrl: 'https://i.ibb.co/X8SXPpz/Batignolles-Chatillon-12t.png',
          price: 40
        },
        {
          id: 35,
          name: 'Char-de-65t',
          imageUrl: 'https://i.ibb.co/fGVzXk3/Char-de-65t.png',
          price: 25
        }
      ]
    }
}
  export default SHOP_DATA;