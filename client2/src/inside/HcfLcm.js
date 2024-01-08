import React from "react";
import Layout from "./../components/Layout/Layout";

const HcfLcm = () => {
  return (
    <Layout title={"HCF and LCM"}>
      <div className="Quantitative Aptitude">
        {/*<div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>*/}

        <div className="hcf">
          <p className="hcfandlcmp">
            <br />
            <br />
            <br />
            <h1>HCF and LCM</h1>
            <br />
            Highest Common Factor (HCF) is defined as the Highest Common Factor
            found in two or more numbers. Similarly, the lowest number is a
            Least Common Multiple (LCM) of the given numbers.
            <br />
            <br />
            <h3>
              You can now understand the fundamental concepts of HCF and LCM.
              Listed below are the different HCF and LCM concepts:
            </h3>
            <br />
            <br />
            <h3>1. Highest Common Factor (HCF)</h3>
            <br />
            The Highest Common Factor (HCF) of two or more given numbers is the
            largest number which divides each given number without leaving any
            remainder. For example, the HCF of 24 and 36 is 12 because 12 is the
            largest number which can divide the numbers altogether.
            <br />
            <br />
            <h3>2. How to Find the HCF of the given numbers?</h3>
            <br />
            There are multiple methods to find the HCF of the given numbers.
            Prime factorisation method, L-Division method, and Normal Division
            method.
            <br />
            <br />
            <h3>2.1 Prime Factorisation method</h3>
            <br />
            To find the HCF of the given numbers by prime factorisation,
            <br />
            We find the prime factors of those numbers.
            <br />
            After finding the factors, we see the product of the prime factors
            common to each given number.
            <br />
            Example Problem
            <br />
            Let us find the HCF of 45 and 60 by the prime factorisation method.
            <br />
            The prime factors of 45 = 3 × 3 × 5
            <br />
            The prime factors of 60 = 2 × 5 × 2 x 3
            <br />
            The common factors of 60 and 75 are 3 × 5.
            <br />
            Thus, HCF of (45, 60) = 15.
          </p>

          <br />
        </div>
      </div>
    </Layout>
  );
};

export default HcfLcm;
