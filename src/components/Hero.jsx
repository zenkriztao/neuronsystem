import styles from "../style";
import { discount, heroEducation, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Semangat berjuang bersama <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Neuron system</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Neuron adalah Startup Pendidikan Pertama di Indonesia yang menerapkan
          live class (Tanya Tutor) yang berintegrasi langsung dengan tutor Neuron
          melalui akses platform zoom. Platform ini hadir untuk mendukung
          generasi muda di Indonesia meraih impian mereka di perguruan tinggi,
          kedinasan maupun ujian dalam negeri lainnya. Neuron mendorong setiap
          generasi muda Indonesia untuk kompetitif di level global  .
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={heroEducation}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
