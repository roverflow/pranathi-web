import React from "react";
import Layout from "Layout/Layout";
import PageHeader from "components/PageHeader/PageHeader";

const Home = () => {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <div>
      <Layout>
        <PageHeader></PageHeader>
      </Layout>
    </div>
  );
};

export default Home;
