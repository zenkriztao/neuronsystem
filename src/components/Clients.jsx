import { clients } from "../constants";
import styles from "../style";

import { Fade } from "react-reveal";

const Clients = () => (
  <Fade bottom>
    <section className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] p-10">
      <h2 className={` ${styles.heading2} align-bottom`}>Pembayaran</h2>{" "}
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  </Fade>
);

export default Clients;
