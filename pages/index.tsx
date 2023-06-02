import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Benvingut al mon Web3!
        </h1>

        <p className={styles.description}>
          Entra a formar part de la comunitat més gran descentralitzada!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <div  className={styles.card}>
            <h2>Comunitat &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Promocions &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Continguts &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
