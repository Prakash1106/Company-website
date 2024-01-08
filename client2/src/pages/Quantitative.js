import React from "react";
import Layout from "./../components/Layout/Layout";
import { NavLink, Link } from "react-router-dom";
const Quantitative = () => {
  return (
    <Layout title={"Quantitative Aptitude"}>
      <div className="Aptitude ">
        {/*<div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>*/}

        <div className="qa">
          <p className="pq">
            <br />
            <br />
            <br />
            <h1>Quantitative Aptitude</h1>
            Quantitative aptitude assesses a candidate's numerical and
            analytical abilities. Mastering them involves understanding
            concepts, formulas, tips, and tricks. Additionally, practicing
            questions and answers is vital for achieving high scores in
            placement exams, where they carry significant weightage.
          </p>
          &nbsp; &nbsp; &nbsp;
          <a href="/number-system/" className="no">
            Number System
          </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;
          <a href="/hcf-lcm/" className="hcf">
            HCF and LCM
          </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;
          <a href="/a-v-g/" className="avg">
            Average
          </a>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Quantitative;
