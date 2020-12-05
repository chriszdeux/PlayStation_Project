import game from '../../images/icons/control.png';
import hardware from '../../images/icons/hardware.svg';
import mediaPlayer from '../../images/icons/player.svg';
import news from '../../images/icons/text.svg';
import shop from '../../images/icons/shop.svg';
import help from '../../images/icons/question.svg';
import myAccount from '../../images/icons/face.svg';
import ps3 from '../../images/icons/ps3-blue.svg';
import psVr from '../../images/icons/vr-blue.svg';
import psPlus from '../../images/icons/plus-blue.svg';
import psLogo from '../../images/icons/playstation-logo.svg';
import shopBag from '../../images/icons/shop-bag.svg';
import headphones from '../../images/icons/headphones.svg';
import blueMediaPlayer from '../../images/icons/media-player-blue.svg';
import newsBlog from '../../images/icons/news.svg';
import psShirt from '../../images/icons/ps-shirt.svg';
import library from '../../images/icons/library.svg';
import chat from '../../images/icons/chat.svg';
import face from '../../images/icons/face.svg';
import support from '../../images/icons/support.svg';
import trophy from '../../images/icons/trophy.svg';


export const menuDB = [
  //GAMES
  {
    key: 1,
    icon: game,
    section: 'games',
    content: [{
        id: 1,
        icon: game,
        name: 'PS5',
      },

      {
        id: 2,
        icon: ps3,
        name: 'PS4',
      },

      {
        id: 3,
        icon: psVr,
        name: 'PS VR',
      },

      {
        id: 4,
        icon: psPlus,
        name: 'PS Plus',
      },

      {
        id: 5,
        icon: psLogo,
        name: 'PS Now',
      },

      {
        id: 6,
        icon: shopBag,
        name: 'Buy Games',
      },
    ],
    more: [
      'PlayStation Indies',
      'PS3 Games',
      'Ps Vita Games',
      'Docs for PlayStation',
      'Competition Center',
    ]
  },

  //HARDWARE
  {
    key: 2,
    icon: hardware,
    section: 'hardware',
    content: [
      {
        id: 1,
        icon: console,
        name: 'PS5'
      },

      {
        id: 2,
        icon: console,
        name: 'PS4'
      },

      {
        id: 3,
        icon: ps3,
        name: 'PS4'
      },

      {
        id: 4,
        icon: psVr,
        name: 'PS VR',
      },

      {
        id: 5,
        icon: headphones,
        name: 'Accesories',
      }
    ],
    more: [
      'DUALSHOCK 4 wireless controller',
      'PlayStation Move motion controller',
      'Gold Wireless Headset',
    ]
  },

  //SERVICES
  {
    key: 3,
    icon: mediaPlayer,
    section: 'services',
    content: [
      {
        id: 1,
        icon: psPlus,
        name: 'PS Plus',
      },
      
      {
        id: 2,
        icon: psLogo,
        name: 'PS Now',
      },

      {
        id: 3,
        icon: blueMediaPlayer,
        name: 'PS Plus',
      },

      {
        id: 4,
        icon: headphones,
        name: 'PS Music',
      },
    ],
  },

  //NEWS
  {
    key: 4,
    icon: news,
    section: 'news',
    content: [
      {
        id: 1,
        icon: newsBlog,
        name: 'PS Blog',
      }
    ]
  },

  //SHOP
  {
    key: 5,
    icon: shop,
    section: 'shop',
    content: [
      {
        id: 1,
        icon: console,
        name: 'Hardware and Disc',
      },
      
      {
        id: 2,
        icon: shopBag,
        name: 'Digital Games and Services',
      },

      {
        id: 3,
        icon: psShirt,
        name: 'Official Merchandise',
      },
    ],
    more: [
      'Buy PS4 Games',
      'Buy PlayStation Plus',
      'Deals & Offers',
      'Buy PS4',
      'Buy PS VR',
    ]
    
  },
  {
    key: 6,
    icon: help,
    section: 'help',
    content: [
      {
        id: 1,
        icon: support,
        name: 'Help & Support',
      },

      {
        id: 2,
        icon: psLogo,
        name: 'PSN Status',
      }
    ],
    more: [
      'Account',
      'Store',
      'Suscriptions',
      'Games',
      'Hardware',
    ]
  },
  {
    key: 7,
    icon: myAccount,
    section: 'my playStation',
    content: [
      {
        id: 1,
        icon: library,
        name: 'Game Library',
      },
      
      {
        id: 2,
        icon: chat,
        name: 'Parties',
      },

      {
        id: 3,
        icon: face,
        name: 'Friends',
      },

      {
        id: 4,
        icon: trophy,
        name: 'Trophies',
      },

      {
        id: 5,
        icon: face,
        name: 'Profile',
      },
    ]
  },
]