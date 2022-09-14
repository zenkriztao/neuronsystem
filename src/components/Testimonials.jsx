import { feedback } from "../constants";
import styles from "../style";
import Card from "./Card";

import { Fade } from "react-reveal";

const Testimonials = () => (
  <Fade right>
    <section
      id="testimoni"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative p-6`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] p-10">
        <h2 className={styles.heading}>
          Apa saja sih kata mereka tentang Neuron system?
        </h2>{" "}
        <p className={` ${styles.paragraph2} justify-center `}>
          Lebih dari 10 ribu pelajar di Indonesia yang merasakan manfaat dan
          dorongan semangat belajar di Neuron,.
        </p>{" "}
      </div>{" "}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] px-10">
        {" "}
        {feedback.map((card) => (
          <Card key={card.id} {...card} />
        ))}{" "}
      </div>{" "}
    </section>
  </Fade>
);

export default Testimonials;
