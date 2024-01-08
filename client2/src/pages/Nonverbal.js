import React from "react";
import Layout from "./../components/Layout/Layout";

const Nonverbal = () => {
  return (
    <Layout title={"Non Verbal"}>
      <div className="Reasoning">
        {/*<div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>*/}

        <div className="nv">
          <p className="pn">
            <br />
            <br />
            <br />
            <h1>Nonverbal Reasoning</h1>
            Non verbal reasoning topics assess a candidate's spatial and visual
            understanding abilities. Mastering them involves understanding
            concepts, tips, and tricks. Additionally, practicing questions and
            answers is vital for achieving high scores in placement exams, where
            they carry significant weightage.
          </p>
          <a href="/nonverbal/f-m/" className="fm">
            Figure Matrix
          </a>

          <br />
          <br />
          <a href="/nonverbal/p-c/" className="pc">
            Pattern Completion
          </a>

          <br />
          <br />
          <a href="/nonverbal/s-e-r/" className="ser">
            Series
          </a>
          <br />

          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Nonverbal;
