import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[200px] h-[60px] rounded-sm bg-[#ffffff] p-[2px] cursor-pointer`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-semibold text-[18px] leading-[23.4px]">
          <span className="text-blue">Cobain kelas Gratis</span>
        </p>
      </div>
    </div>
);

export default GetStarted;
