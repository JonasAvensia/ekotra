import alpanelImage from '../Assets/products/Alpanel.jpg'; // Importing the image
import Bastu from '../Assets/products/Bastu.jpg';
import Ekpanel1 from '../Assets/products/Ekpanel1.jpg';
import Altanek from '../Assets/products/Altanek.jpg';
import algolv2 from '../Assets/products/algolv2.jpg';
import Ekgolv from '../Assets/products/Ekgolv.jpg';
import AlGolv from '../Assets/products/Algolv.jpg';
import Ekpanelparllang from '../Assets/products/Ekpanelparllang.jpg';
import ExtrembreddTrall from '../Assets/products/ExtrembreddTrall.jpg';
import Smyg from '../Assets/products/Smyg.jpg';
import VHus1 from '../Assets/products/VHus1.jpg';
import FasPanel from '../Assets/products/fas-panel.jpg';
import TaklistAl from '../Assets/products/TaklistAl.jpg';
import Askfoder from '../Assets/products/Askfoder.jpg';
import TaklistEk from '../Assets/products/TaklistEk.jpg';
import GolvEkList from '../Assets/products/GolvEkList.jpg';

const Floors = [
  {
    name: 'Massivt Ek golv',
    description: 'Ek 19*205 (täckande 195 m.m).',
    price: 'Se tabell för pris per kvm inkl moms',
    image: Ekgolv,
  },
  {
    name: 'Algolv',
    description:
      'Al passar inte i utrymmen med hårt slitage, men fungerar utmärkt i t.ex. sovrum. Det är ett mjukt träslag – likt furu.',
    price: 'Se tabell för pris per kvm inkl moms',
    image: AlGolv,
  },
];

const Strips = [
  {
    name: 'Taklist Al 19*67',
    description: 'Vacker taklist som passar till Bastupanel i Al.',
    price: '45 kr lpm inkl moms',
    image: TaklistAl,
  },
  {
    name: 'Askfoder 22*120',
    description: 'Ett 1800-tals foder med sitt ursprung i skåne.',
    price: '87 kr lpm inkl moms',
    image: Askfoder,
  },
  {
    name: 'Smyg och Foder i Ek',
    description: 'Smyg 16*195. Foder 12*62 ',
    price: 'Smyg: 186 kr lpm. Foder: 36kr lmp ink moms',
    image: Smyg,
  },
  {
    name: 'Taklist Ek',
    description: 'Taklist 22*67',
    price: '56 kr lpm inkl moms',
    image: TaklistEk,
  },
  {
    name: 'Golvlist 22*145 Ek',
    description: 'Ett vackert 1800tals foder här i massiv Ek',
    price: '148 kr lpm inkl moms',
    image: GolvEkList,
  },
];

const Panels = [
  {
    name: 'Bastupanel 15*70(63) Obehandlad',
    description: '(svensk al i naturkvalitet) Varm och gemytlig med egenskaper som lämpar sig i bastumilö.',
    price: 'enl ök',
    image: FasPanel,
  },
  {
    name: 'Fas Panel 15*70(63) Obehandlad',
    description: '(svensk al i naturkvalitet) Vacker panel som lämpar sig för både Bastu och vanliga utrymme',
    price: 'enl ök',
    image: FasPanel,
  },
  {
    name: 'Alpanel 15*95',
    description: 'Kvistfri alpanel, kapad efter önskemål',
    price: '39 kr/lpm inkl moms',
    image: FasPanel,
  },
];

const products = [
  {
    name: 'Alpanel 15*90 (Bangsund)',
    description: 'Panel för liggande montering i naturkvalitet.',
    price: '29 kr/lpm inkl moms',
    image: alpanelImage,
  },
  {
    name: 'Bastupanel softline 15*95',
    description: 'Den klassiska profilen. Naturkvalitet',
    price: '29 kr/lpm inkl moms',
    image: Bastu,
  },
  {
    name: 'Ekpanel 15*90 (Bandsund liggande montering)',
    description: 'Panel som ger ett exklusivt intryck.',
    price: '56 kr/lpm inkl moms',
    image: Ekpanel1,
  },
  {
    name: 'Ektrall 28*120 Rustik',
    description: 'Svensk ek med rustikt utseende.',
    price: '42 kr/lpm inkl moms',
    image: Altanek,
  },
  {
    name: 'Massivt algolv 26*150',
    description: 'Trevlig färg som ger en varm och ombonad känsla.',
    price: '795 kr/m2 inkl moms',
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
    price: '46 kr/lpm inkl moms',
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
    price: 'smyg: 155 kr/lpm foder: 37 kr/lpm inkl moms',
    image: Smyg,
  },
  {
    name: 'Utvändig ekpanel 21*145',
    description: 'Panelen som ger utsidan det exklusiva intrycket.',
    price: '64 kr/lpm inkl moms',
    image: VHus1,
  },
];

const useProductsList = () => {
  return { products, Panels, Strips, Floors };
};

export default useProductsList;
