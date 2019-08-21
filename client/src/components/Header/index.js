import React, { Component } from "react";
// import cn from "classnames";
import Container from "../Container";
import Logo from "../Logo";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import NavLinkDrpodown from "./NavLinkDrpodown";
import DropdownContent from "./DropdownContent";
import dropKrka from "./Images/dropKrka.jpg";
import dropPlitvice from "./Images/dropPlitvice.jpg";
import dropDubrovnik from "./Images/dropDubrovnik.jpg";
import dropMostar from "./Images/dropMostar.jpg";

import dropRafting from "./Images/dropRafting.jpg";
import dropZip from "./Images/dropZip.jpg";
import dropCanyoning from "./Images/dropCanyoning.jpg";
import dropDiving from "./Images/dropDiving.jpg";

import dropBlueCave from "./Images/dropBlueCave.jpg";
import dropBrac from "./Images/dropBrac.jpg";
import dropHvar from "./Images/dropHvar.jpg";
import dropSailing from "./Images/dropSailing.jpg";

import classNames from "classnames"; // ne triba i cn i classNames ?????
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {
    isAuthenticated: false
  };

  render() {
    const { isAuthenticated } = this.state;

    library.add(faAngleDoubleDown);

    return (
      <header className={styles.Header}>
        <Container className={styles.Container}>
          <div className={styles.Logo}>
            <Logo />
          </div>
          <div className={styles.MobileDropdown}>
            <button className={styles.MobileDropbtn}>
              Menu
              <FontAwesomeIcon
                icon="angle-double-down"
                className={styles.MenuArrow}
              />
            </button>
            <div className={styles.MobileDropdownContent}>
              <Link to="/" exact="true" className={styles.MobileLink}>
                Home
              </Link>
              <Link to="/land-tours" className={styles.MobileLink}>
                Land Tours
              </Link>
              <Link to="/sea-tours" className={styles.MobileLink}>
                Sea Tours
              </Link>
              <Link to="/adventures" className={styles.MobileLink}>
                Adventures
              </Link>
              <Link to="/my-trips" className={styles.MobileLink}>
                My Trips
              </Link>
              {isAuthenticated ? (
                <Link
                  to="/"
                  className={styles.MobileLink}
                  onClick={this.onLogoutClick}
                >
                  Log Out
                </Link>
              ) : (
                <Link to="/login" className={styles.MobileLink}>
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className={styles.Home}>
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          <div className={styles.TravelStories}>
            <NavLink to="/my-trips">My Trips</NavLink>
          </div>
          {isAuthenticated ? (
            <div className={styles.logIn} onClick={this.onLogoutClick}>
              <NavLink to="/">LOG OUT</NavLink>
            </div>
          ) : (
            <div className={styles.logIn}>
              <NavLink to="/login">LOG IN</NavLink>
            </div>
          )}

          <div
            className={classNames(styles.LandToursDropDown, styles.Dropdown)}
          >
            <NavLinkDrpodown to="/land-tours">
              Land Tours <FontAwesomeIcon icon="angle-double-down" />
            </NavLinkDrpodown>
            <DropdownContent>
              <Link to="/krka">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image1]: true
                  })}
                  src={dropKrka}
                  alt="dropKrka"
                />
              </Link>
              <Link to="/plitvice">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image2]: true
                  })}
                  src={dropPlitvice}
                  alt="dropPlitvice"
                />
              </Link>

              <Link to="/dubrovnik">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image5]: true
                  })}
                  src={dropDubrovnik}
                  alt="dropDubrovnik"
                />
              </Link>
              <Link to="/mostar">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image6]: true
                  })}
                  src={dropMostar}
                  alt="dropMostar"
                />
              </Link>
            </DropdownContent>
          </div>
          <div className={classNames(styles.SeaToursDropDown, styles.Dropdown)}>
            <NavLinkDrpodown to="/sea-tours">
              Sea Tours <FontAwesomeIcon icon="angle-double-down" />
            </NavLinkDrpodown>
            <DropdownContent>
              <Link to="/blue-cave">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image1]: true
                  })}
                  src={dropBlueCave}
                  alt="dropBlueCave"
                />
              </Link>

              <Link to="/brac">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image3]: true
                  })}
                  src={dropBrac}
                  alt="dropBrac"
                />
              </Link>
              <Link to="/brac">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image4]: true
                  })}
                  src={dropHvar}
                  alt="dropHvar"
                />
              </Link>
              <Link to="/sailing">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image5]: true
                  })}
                  src={dropSailing}
                  alt="dropSailing"
                />
              </Link>
            </DropdownContent>
          </div>
          <div
            className={classNames(styles.AdventuresDropDown, styles.Dropdown)}
          >
            <NavLinkDrpodown to="/adventures">
              Adventures <FontAwesomeIcon icon="angle-double-down" />
            </NavLinkDrpodown>
            <DropdownContent>
              <Link to="/rafting">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image1]: true
                  })}
                  src={dropRafting}
                  alt="dropRafting"
                />
              </Link>
              <Link to="/zip">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image2]: true
                  })}
                  src={dropZip}
                  alt="dropZip"
                />
              </Link>
              <Link to="/canyoning">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image3]: true
                  })}
                  src={dropCanyoning}
                  alt="dropCanyoning"
                />
              </Link>

              <Link to="/diving">
                <img
                  className={classNames({
                    [styles.DropImage]: true,
                    [styles.Image5]: true
                  })}
                  src={dropDiving}
                  alt="dropDiving"
                />
              </Link>
            </DropdownContent>
          </div>
          <div className={styles.searchBar} />
        </Container>
      </header>
    );
  }
}

export default Header;
