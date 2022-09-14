import styles from "../style";

const ButtonSection = () => (
  <div
    className={`${styles.flexCenter} w-[300px] h-[60px] rounded-[10px] bg-[#ffffff] p-[2px] cursor-pointer hover:bg-[#dddd] hover:text-[#052f85]`}
  >
    <div className={`${styles.flexStart} flex-row`}>
      <p className="font-poppins font-semibold text-[18px] leading-[23.4px]">
        <span className="text-blue">Cobain kelas Sekarang</span>
      </p>
    </div>
  </div>
);

export default ButtonSection;
