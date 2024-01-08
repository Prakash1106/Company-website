import React from "react";
import Layout from "./../components/Layout/Layout";

const WhoweAre = () => {
  return (
    <Layout title={"WhoweAre"}>
      <div className="About us">
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
            <h1> WHO WE ARE </h1>
            At Capgemini, we are driven by a shared purpose: Unleashing human energy through technology for an inclusive and sustainable future.
            <h2>WHAT WE DO</h2>

          </p>
          &nbsp; &nbsp; &nbsp;
          <a href="/g-t-f/" className="cad">
          Get The Future </a>
          <br />
          <br />
          
         
          
        </div>
      </div>
    </Layout>
  );
};

export default WhoweAre;
