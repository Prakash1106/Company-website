import React from "react";
import Layout from "./../components/Layout/Layout";

const TechnologyPartners = () => {
  return (
    <Layout title={"TechnologyPartners"}>
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
            <h1> TECHNOLOGY PARTNERS </h1>
            We work with leading technology companies to help our clients deliver exceptional personalized experiences to their customers, to harness the potential of data, and to optimize the operation of their systems and processes. Find out more about the partnerships that power business transformation.            

          </p>
          &nbsp; &nbsp; &nbsp;
          <a href="/a-d-b/" className="cad">
          Adobe </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;
          <a href="/a-w-s/" className="cad">
          Aws </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;
          <a href="/i-b-m/" className="cad">
          Ibm </a>
          <br />
          <br />
          
         
          
        </div>
      </div>
    </Layout>
  );
};

export default TechnologyPartners;
