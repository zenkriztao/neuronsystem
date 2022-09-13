import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className="flex-auto m-10 justify-center items-center p-11">
    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[60px] text-[40px] text-[#052f85] xs:leading-[76.8px] leading-[66.8px] w-full">
      Udah Tanya soal belum hari ini?
      </h2>
      <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
        Kamu bisa tanyakan soal Matematika, fisika, kimia dan biologi di Neuron, fotokan saja soal yang ingin kamu tanyakan.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-10">
      <Button styles={`mt-10`} />
      <Button styles={`mt-10`} />
      <Button styles={`mt-10`} />
      </div>
    </div>
  </section>
);

export default CardDeal;
