import styles, { layout } from "../style";

import { Fade } from "react-reveal";

const Item = () => (
  <section className="flex-auto m-8 p-1 justify-center items-center">
    <Fade bottom>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold xs:text-[60px] text-[40px] text-[#052f85] xs:leading-[76.8px] leading-[66.8px]">
          Udah Tanya soal belum hari ini?
        </h2>
        <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
          Kamu bisa tanyakan soal Matematika, fisika, kimia dan biologi di
          Neuron, fotokan saja soal yang ingin kamu tanyakan.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-10">
          <button
            type="button"
            className={`py-4 px-8 font-poppins font-medium text-[18px] text-[#ffffff] border-gray-800 bg-[#FF770B] rounded-[30px] outline-none ${styles} hover:bg-[#FF7749] hover:text-white`}
          >
            Matematika
          </button>
          <div className="px-12">
            <button
              type="button"
              className={`py-4 px-20 font-poppins font-medium text-[18px] text-[#052f85] border-gray-800 bg-[#ffffff] rounded-[25px] outline-none ${styles} hover:bg-[#dddd] hover:text-[#052f85]`}
            >
              Fisika
            </button>
          </div>
        </div>
      </div>
    </Fade>
  </section>
);

export default Item;
