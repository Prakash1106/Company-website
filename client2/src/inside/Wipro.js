import React from "react";
import Layout from "./../components/Layout/Layout";

const Wipro = () => {
  return (
    <Layout title={"Wipro"}>
      <div className="Question Papers">
        {/*<div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>*/}

        <div className="wip">
          <p className="wip">
            <br />
            <br />
            <br />
            <h1>Wipro Question Paper Links</h1>
            <br />
            Wipro Placement Papers and answers for the year 2023 are discussed
            below on this page. Here you can find all previous year's papers and
            solutions, sample papers of Wipro. This link provides Accenture
            Placement Papers and Question Paper.
            <a href="https://prepinsta.com/wipro/">
              <h3>Click here to view</h3>
            </a>
          </p>

          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Wipro;
