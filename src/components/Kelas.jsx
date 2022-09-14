import styles from "../style";
import {
  discount,
  robot,
  apple,
  bill,
  google,
  interaktif,
  book,
} from "../assets";

import style from "../style";

import { Fade } from "react-reveal";

const Kelas = () => {
  return (
    <Fade bottom>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-1000" />
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1
              className={`flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] ${style.heading2} ss:leading-[100.8px] leading-[75px]`}
            >
              Ribuan soal premium Gratis! <br className="sm:block hidden" />{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0"></div>
          </div>

          <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
            Dengan tutor dari lulusan terbaik, kelas interaktif online dapat
            membantu siswa/i dalam mencapai perguruan tinggi negeri favorit.
          </p>

          <div className="flex sm:mt-10 mt-6"></div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={book}
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
    </Fade>
  );
};

export default Kelas;
