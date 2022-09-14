import { apple, bill, google, kelas, live } from "../assets";
import styles, { layout } from "../style";

const Information = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={kelas}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Konsep Belajar dengan video animasi </h2>
      <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
        Konsep video interaktif dapat membantu mempermudah pemahaman dalam menyerap materi.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      </div>
    </div>
  </section>
);

export default Information;
