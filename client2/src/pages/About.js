import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            PLACEMENT PREPARATION is a platform which is used to boost
            Individual's Aptitude skills as well as Reasoning skills.
            <br />
            <br />
            We also provide Company Speific Previous Year Question Papers to our
            Registered members.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
