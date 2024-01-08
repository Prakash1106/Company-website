import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p> privacy policy 1: DATA COLLECTION AND USAGE</p>
          <p> privacy policy 2: COOKIES AND TRACKING</p>
          <p> privacy policy 3: THIRD PARTY SHARING</p>
          <p> privacy policy 4: USER RIGHTS AND CHOICES</p>
          <p> privacy policy 5: SECURITY MEASURES</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
