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
        description="Massiva trägolv, lister och paneler i svenska lövträslag – specialtillverkat efter dina önskemål"
      />
      <List
        title="Golv"
        description="Ett golv är inte bara ett golv – det är en möbel. Massiva trägolv i svenskt lövträ är unika: varje tilja har sin egen karaktär. Känslan av att gå barfota på ett riktigt trägolv är något helt annat. Genom att vara med i hela förädlingsprocessen kan vi ursprungsgarantera ditt golv.Våra golv är beställningsvara. Leveranstid meddelas vid offert."
        list={Floors}
      />
      <SmallList showAdditionalProducts />
      <List
        title="Paneler"
        description="Vi specialtillverkar paneler enligt kundens önskemål. Vi rekommenderar bastupanel i al, vilket ger en varm och gemytlig känsla och har liknande egenskaper som asp. Vi hjälper dig gärna att förverkliga dina egna idéer kring panel och utformning"
        list={Panels}
      />
      <List
        title="Lister"
        description="Vi erbjuder lister och foder i alla möjliga former och dimensioner. Förutom våra standardlister kan vi även tillverka specialbeställda varianter helt enligt dina önskemål. Vid renovering av äldre hus kan vi reproducera gamla profiler – skicka gärna en bit av den befintliga listen eller fodret till oss för ett kostnadsförslag"
        list={Strips}
      />
    </>
  );
}

export default PlanedProducts;
