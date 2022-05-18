import Layout from "../components/layouts/Layout";
import MaxWLayout from "../components/layouts/MaxWLayout";

// Components
import ImageMarquee from "../components/utils/ImageMarquee";
import TopGradient from "../components/utils/TopGradient";
import Header from "../components/utils/Header";

export default function Home() {
  return (
    <>
      {/* Top Gradient */}
      <TopGradient />
      <Layout>
        {/* Dark Portion */}
        <div className="bg-black pb-10">
          <MaxWLayout>
            {/* Header */}
            <div className="py-20">
              <Header />
            </div>
          </MaxWLayout>

          {/* Marquee */}
          <ImageMarquee />
        </div>
      </Layout>
    </>
  );
}
