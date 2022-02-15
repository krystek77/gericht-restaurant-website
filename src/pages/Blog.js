import React from "react";
import Layout from "../components/Layout/Layout";
import { Footer } from "../containers";

function Blog() {
  return (
    <div className='page page_blog'>
      <Layout>
        <h2 className='temporary'>Blog Page 😄</h2>
        <Footer />
      </Layout>
    </div>
  );
}

export default Blog;
