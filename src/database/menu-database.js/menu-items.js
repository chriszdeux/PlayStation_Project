import game from '../../images/icons/control.png';
import hardware from '../../images/icons/hardware.svg';
import mediaPlayer from '../../images/icons/player.svg';
import news from '../../images/icons/text.svg';
import shop from '../../images/icons/shop.svg';
import help from '../../images/icons/question.svg';
import myAccount from '../../images/icons/face.svg';


export const menuDB = [
  {
    key: 1,
    icon: game,
    section: 'games',
    content: [{
      icon: game,
      name: 'PS5'
    }]
  },
  {
    key: 2,
    icon: hardware,
    section: 'hardware',
  },
  {
    key: 3,
    icon: mediaPlayer,
    section: 'services',
  },
  {
    key: 4,
    icon: news,
    section: 'news',
  },
  {
    key: 5,
    icon: shop,
    section: 'shop',
  },
  {
    key: 6,
    icon: help,
    section: 'help',
  },
  {
    key: 7,
    icon: myAccount,
    section: 'my playStation',
  },
]