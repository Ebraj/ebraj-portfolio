import Layout from "../layouts/Layout";
import MaxWLayout from "../layouts/MaxWLayout";

// Components
import TopGradient from "../components/common/TopGradient";
import Header from "../components/homepage/Header";

//Datas

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
            <Header />
          </div>
        </MaxWLayout>
      </Layout>
    </>
  );
}
