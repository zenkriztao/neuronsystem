import { card, cs } from "../assets";
import styles, { layout } from "../style";

const Cs = () => (
  <section className={`${styles.padding} ${styles.flexCenter} flex-col relative cursor-pointer`}>
     <h2 className={` ${styles.heading2} align-bottom`}>
          Kamu bingung tentang paket? Yuk tanya Cs kami
      </h2>{" "}
    <div className={layout.sectionImgBanner}>
      <img src={cs} alt="billing" className="w-auto h-[300px] bg-white rounded-r-[30px] rounded-l-[10px]" />
    </div>
  </section>
);

export default Cs;  
