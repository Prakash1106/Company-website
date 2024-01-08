import React from "react";
import Layout from "./../components/Layout/Layout";

const Premium = () => {
  return (
    <Layout title={"Premium"}>
      <div className="Premium">
        {/*<div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>*/}

        <div className="prem">
          <p className="premiump">
            <br />
            <br />
            <br />

            <h1 className="text-center ">QUESTION PAPERS</h1>
            <div className="text-center ">
              <br />
              <br />

              <a href="/accenture/" className="acc2">
                <b>ACCENTURE QUESTION PAPERS</b>
              </a>
              <br />
              <br />
              <a href="/wipro/" className="wip2">
                <b>WIPRO QUESTION PAPERS</b>
              </a>
              <br />
              <br />
              <a href="/cisco/" className="cis2">
                <b>CISCO QUESTION PAPERS</b>
              </a>
              <br />
              <br />
            </div>
          </p>

          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Premium;
