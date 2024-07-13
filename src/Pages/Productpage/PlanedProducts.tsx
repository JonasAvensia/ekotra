import Hero from '../../Feature/Components/Hero';
import List from '../../Feature/Components/Lits';
import useProductsList from '../../Lists/Products';
import Trees from '../../Assets/trees.jpg';
import SmallList from '../../Feature/Components/SmallList';

function PlanedProducts() {
  const { Panels, Strips, Floors } = useProductsList();
  return (
    <>
      <Hero
        src={Trees}
        alt="Hero image Hyvlade produkter."
        title="Hyvlade Produkter"
        description="Golv och lister, samt paneler i olika lövträslag."
      />
      <List
        title="Golv"
        description="Golv är inte bara ett golv, det är en möbel. Riktiga massiva trägolv är unika, varje tilja är unik och finns inte att uppbringa någon annanstans. Även känslan av att sätta foten på ett massivt golv är unik. Genom att ha nöjet att delta i hela förädlingsprocessen kan vi ursprungsgarantera ert golv. Golven är beställningsvara och leveranstid meddelas vid offerering"
        list={Floors}
      />
      <SmallList showAdditionalProducts />
      <List
        title="Paneler"
        description="Vi specialtillverkar paneler enligt kundens önskemål. Vi rekommenderar bastupanel i al, vilket ger en varm och gemytlig känsla och har liknande egenskaper som asp. Vi erbjuder även hjälp med att förverkliga kundens egna idéer"
        list={Panels}
      />
      <List
        title="Lister"
        description="Vi erbjuder lister och foder i alla möjliga former och dimensioner. Vi har standardlister men kan även tillverka specialbeställda lister och foder. För renovering av äldre hus kan vi reproducera gamla profiler om du skickar en bit av den gamla listen eller fodret till dem för ett kostnadsförslag"
        list={Strips}
      />
    </>
  );
}

export default PlanedProducts;
