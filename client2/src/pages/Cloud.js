import React from "react";
import Layout from "./../components/Layout/Layout";

const Cloud = () => {
  return (
    <Layout title={"Cloud"}>
      <div className="Services">
        {/*<div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>*/}

        <div className="ve">
          <p className="pv">
            <br />
            <br />
            <br />
            <h1> CLOUD </h1>
            Start your journey to adventure
Business transformation is an exhilarating experience for your whole organization. But the real excitement comes when you arrive at your cloud destination and discover a world where you can dream bigger, move faster, and fly higher than ever before.
<h2>WHAT WE DO</h2>

          </p>
          &nbsp; &nbsp; &nbsp;
          <a href="/c-w-a/" className="cad">
          Cloud with AWS </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;
          <a href="/c-w-g/" className="sa">
          Cloud with Google     </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;{" "}
          <a href="/c-w-m/" className="syl">
          Cloud with Microsoft          </a>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Cloud;
