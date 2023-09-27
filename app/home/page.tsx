import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/homesections/hero/Hero";
import Numsection from "../components/homesections/numsection/Numsection";
import Purchase from "../components/homesections/purchase/Purchase";
import Quality from "../components/homesections/quality/Quality";
import Restaurant from "../components/homesections/restaurant/Restaurant";
import Reviews from "../components/homesections/Reviews/Reviews";
import Subscribe from "../components/homesections/Subscribe/Subscribe";
import Pagination from "../components/pagination/Pagination";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Numsection />
        <Quality />
        <Restaurant />
        <Pagination />
        <Purchase />
        <Reviews />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
