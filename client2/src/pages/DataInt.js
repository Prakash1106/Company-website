import React from "react";
import Layout from "./../components/Layout/Layout";

const DataInt = () => {
  return (
    <Layout title={"Data Interpretation"}>
      <div className="Aptitude">
        {/*<div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>*/}

        <div className="datai">
          <p className="text-justify mt-2">
            <br />
            <br />
            <br />
            <h1>Data Interpretation</h1>
            Data interpretation topics evaluate a candidate's analytical and
            critical thinking abilities. Mastering them involves understanding
            concepts, formulas, tips, and tricks. Additionally, practicing
            questions and answers is vital for achieving high scores in
            placement exams, where they carry significant weightage.
          </p>
          &nbsp; &nbsp; &nbsp;
          <a href="/bar-graphs/" className="bg">
            Bar Graphs
          </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;
          <a href="/line-graphs/" className="lg">
            Line Graphs
          </a>
          <br />
          <br />
          &nbsp; &nbsp; &nbsp;{" "}
          <a href="/pie-charts/" className="pc">
            Pie Charts
          </a>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default DataInt;
