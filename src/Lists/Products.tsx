import alpanelImage from '../Assets/products/Alpanel.jpg'; // Importing the image
import Bastu from '../Assets/products/Bastu.jpg';
import Ekpanel1 from '../Assets/products/Ekpanel1.jpg';
import Altanek from '../Assets/products/Altanek.jpg';
import algolv2 from '../Assets/products/algolv2.jpg';
import Ekgolv from '../Assets/products/Ekgolv.jpg';
import Ekpanelparllang from '../Assets/products/Ekpanelparllang.jpg';
import ExtrembreddTrall from '../Assets/products/ExtrembreddTrall.jpg';
import Smyg from '../Assets/products/Smyg.jpg';
import VHus1 from '../Assets/products/VHus1.jpg';

export const products = [
  {
    name: 'Alpanel 15*90 (Bangsund)',
    description: 'Panel för liggande montering i naturkvalitet.',
    price: '29 kr/lpm',
    image: alpanelImage,
  },
  {
    name: 'Bastupanel softline 15*95',
    description: 'Den klassiska profilen. Naturkvalitet',
    price: '29 kr/lpm',
    image: Bastu,
  },
  {
    name: 'Ekpanel 15*90 (Bandsund liggande montering)',
    description: 'Panel som ger ett exklusivt intryck.',
    price: '56 kr/lpm',
    image: Ekpanel1,
  },
  {
    name: 'Ektrall 28*120 Rustik',
    description: 'Svensk ek med rustikt utseende.',
    price: '42 kr/lpm',
    image: Altanek,
  },
  {
    name: 'Massivt algolv 26*150',
    description: 'Trevlig färg som ger en varm och ombonad känsla.',
    price: '795 kr/m2',
    image: algolv2,
  },
  {
    name: 'Golvet med stort G Ek 21*205',
    description: 'Unika golv efter beställning',
    price: 'enl ök',
    image: Ekgolv,
  },
  {
    name: 'Pärlspont i ek 15*68',
    description: 'Fin panel med mycket djup.',
    price: '46 kr/lpm',
    image: Ekpanelparllang,
  },
  {
    name: 'Ektrall 28*195',
    description: 'En extrem tilja av massiv ek.',
    price: 'enl ök',
    image: ExtrembreddTrall,
  },
  {
    name: 'Smyg 16*205 och Foder 14*63',
    description: 'Fin inramning/salning av fönster.',
    price: 'smyg: 155 kr/lpm foder: 37 kr/lpm',
    image: Smyg,
  },
  {
    name: 'Utvändig ekpanel 21*145',
    description: 'Panelen som ger utsidan det exklusiva intrycket.',
    price: '64 kr/lpm',
    image: VHus1,
  },
];

const useProductsList = () => {
  return { products };
};

export default useProductsList;
