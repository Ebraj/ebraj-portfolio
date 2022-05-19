import Layout from "../components/layouts/Layout";
import MaxWLayout from "../components/layouts/MaxWLayout";

// Components
import TopGradient from "../components/utils/TopGradient";
import Header from "../components/sections/main-page/Header";

//Datas
import { datas } from "../components/datas";

export default function Home() {
  return (
    <>
      {/* Top Gradient */}
      <TopGradient />
      <Layout>
        {/* Dark Portion */}
        <MaxWLayout>
          {/* Header */}
          <div>
            <Header datas={datas} />
          </div>
        </MaxWLayout>
      </Layout>
    </>
  );
}
