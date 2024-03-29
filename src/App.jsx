import styles from "./style";
import {
  HeroSection,
  Item,
  Payment,
  Footer,
  Navbar,
  User,
  Testimonials,
  Information,
  Product,
  SectionImage,
  Hero,
  Cs,
  Promo,
  Kelas,
} from "./components";

const App = () => (
    <div className="w-full overflow-hidden">
      <div className={`bg-[#052f85] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <HeroSection />
          <User />
        </div>
      </div>

    <div className={`bg-[#f4f7fe] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Product />
        <Promo />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Item />
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
        <Payment />
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
