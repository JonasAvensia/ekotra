import Hero from '../Feature/Components/Hero';
import HeroLumber from '../Assets/HeroLumber.jpg';
import useProductsList from '../Lists/Products';
import List from '../Feature/Components/Lits';

function ImageArchive() {
  const { products } = useProductsList();

  return (
    <>
      <Hero src={HeroLumber} alt="Galleri image" title="Galleri" description="" />
      <List
        title="Våra Projekt i Verkligheten"
        description="Upptäck våra kunders imponerande projekt med våra material"
        list={products}
      />
    </>
  );
}

export default ImageArchive;
