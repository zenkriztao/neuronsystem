import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex-row justify-start items-center m-3 p-10`} >
        <p className="font-poppins font-bold xs:text-[26.89px] text-[15.89px] xs:leading-[26.16px] leading-[21.16px] text-[#ffff] p-3">
          {stat.title}
        </p>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[30.45px] xs:leading-[30.58px] leading-[33.58px] text-[#c0bfbf] ml-3">
          {stat.value}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
