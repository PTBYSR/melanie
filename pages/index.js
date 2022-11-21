import Footer from '../components/common/Footer';
import TopNav from '../components/common/TopNav' 
import Banner from '../components/landing/banner/Banner';
import Discover from '../components/landing/discover/Discover';
import Hero from '../components/landing/hero/Hero';
import ShowRoom from '../components/landing/showroom/ShowRoom';

export default function Home() {

  return (
    <>
      <TopNav />
      <Hero />
      <ShowRoom 
        title="Minisque's Featured Products"
        subtitle="Check out our best sellers + Latest drops"
        />
      <Banner variant="black"/>
      <ShowRoom
        variant="second" 
        title="Chosen For You"
        subtitle="Powerful Sets To Save Your Time"
        />
      <Banner variant="pink" />
      <Discover />
      <Footer />
    </>
  );
}
