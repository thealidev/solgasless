import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Octane Demo</title>
        <meta
          name="description"
          content="Octane Demo"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
