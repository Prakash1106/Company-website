import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { SiBookstack } from "react-icons/si";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  //defining:-

  const reasoning = useCategory();
  const aptitude = useCategory();
  const company = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <SiBookstack /> CAPEGEMINI
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>

              


              

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/services"}
                  data-bs-toggle="dropdown"
                >
                  SERVICES
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/cloud" className="dropdown-item">
                      CLOUD
                    </a>
                    <a href="/cybersecurity" className="dropdown-item">
                      CYBERSECURITY
                    </a>

                   

      

                    {/*<Link className="dropdown-item" to={"/reasoning"}>
                      <Link to="/nonverbal"> NON VERBAL REASONING</Link>
  </Link>*/}
                  </li>
                  {reasoning?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/reasoning/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>


              

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/industry"}
                  data-bs-toggle="dropdown"
                >
                  INDUSTRY
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/logical/" className="dropdown-item">
                      AEROSPACE AND DEFENCE
                    </a>

                    <a href="/verbal/" className="dropdown-item">
                      BANKING AND CAPITAL MARKETS
                    </a>

      

                    {/*<Link className="dropdown-item" to={"/reasoning"}>
                      <Link to="/nonverbal"> NON VERBAL REASONING</Link>
  </Link>*/}
                  </li>
                  {reasoning?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/reasoning/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/services"}
                  data-bs-toggle="dropdown"
                >
                  Careers
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/whycapgemini" className="dropdown-item">
                      WHY CAPEGEMINI
                    </a>
                    <a href="/lifeatcapgemini" className="dropdown-item">
                      LIFE AT CAPEGEMINI
                    </a>

                   

      

                    {/*<Link className="dropdown-item" to={"/reasoning"}>
                      <Link to="/nonverbal"> NON VERBAL REASONING</Link>
  </Link>*/}
                  </li>
                  {reasoning?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/reasoning/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/services"}
                  data-bs-toggle="dropdown"
                >
                  About us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/whoweare" className="dropdown-item">
                      WHO WE ARE
                    </a>
                    <a href="/technologypartners" className="dropdown-item">
                      TECHNOLOGY PARTNERS
                    </a>

                   

      

                    {/*<Link className="dropdown-item" to={"/reasoning"}>
                      <Link to="/nonverbal"> NON VERBAL REASONING</Link>
  </Link>*/}
                  </li>
                  {reasoning?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/reasoning/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>


              


             

              

              {/*<li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/company"}
                  data-bs-toggle="dropdown"
                >
                  COMPANY
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/company"}>
                      ACCENTURE
                    </Link>

                    <Link className="dropdown-item" to={"/company"}>
                      CAPEGEMINI
                    </Link>

                    <Link className="dropdown-item" to={"/company"}>
                      INFOSYS
                    </Link>

                    <Link className="dropdown-item" to={"/company"}>
                      WIPRO
                    </Link>

                    <Link className="dropdown-item" to={"/company"}>
                      DELOITTE
                    </Link>
                  </li>
                  {company?.map((c) => (
                    <li>
                      <Link className="dropdown-item" to={`/company/${c.slug}`}>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                  </li>*/}

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    {/*<ul className="dropdown-menu">
                       <li>
                        <NavLink
                          to={`/prem/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          QUESTION PAPERS
                        </NavLink>
                        </li>
                        <li>*/}

                    <ul className="dropdown-menu">
                      <li>
                        <a href="/prem/" className="dropdown-item">
                          Q.P.
                        </a>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                {/* <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                        </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
