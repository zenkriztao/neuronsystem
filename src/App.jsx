import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Information,
  Banner,
  SectionImage,
  Hero,
  Cs,
  Promo,
  Kelas,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="bg-[#052f85] w-full border- overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Billing />
          <Stats />
        </div>
      </div>
    </div>

    <div className={`bg-[#f4f7fe] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Banner />
        <Promo />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
      </div>
    </div>

    <div className={`bg-[#ffffff] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Information />
        <Kelas />
      </div>
    </div>

    <div className={`bg-[#fefcd9] ${styles.paddingX} ${styles.flexCenter} rounded-tl-[500px] rounded-br-[500px]`}>
      <div className={`${styles.boxWidth}`}>
        <SectionImage />
      </div>
    </div>

    <div className={`bg-[#f4f7fa] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`$styles.boxWidth`}>
        <Testimonials />
        <Clients />
        <Cs />
      </div>
    </div>
    <div className={`bg-[#2645ad] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`$styles.boxWidth`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
