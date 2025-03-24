"use client"

import { useState, useEffect, useRef } from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import "./Navbar.css"

const ModernNavbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [state, setState] =useState("Login")
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expanded])

  // Close navbar when menu item is clicked in mobile view
  const handleNavItemClick = () => {
    if (window.innerWidth < 992) {
      setExpanded(false)
    }
  }

  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      expanded={expanded}
      className={`modern-navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <span className="brand-text fs-4">Information Technology</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center">
          <div className="login-button-container d-lg-none">
            <Button className="login-button btn btn-primary px-4 py-1">
              {state}
            </Button>
          </div>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="custom-toggler"
          >
            <div className={`hamburger ${expanded ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="mx-auto">
            <Nav.Link href="#home" onClick={handleNavItemClick} className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavItemClick} className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#services" onClick={handleNavItemClick} className="nav-link">
              Placement
            </Nav.Link>
            <Nav.Link href="#portfolio" onClick={handleNavItemClick} className="nav-link">
              Facilities
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavItemClick} className="nav-link">
              Association
            </Nav.Link>
          </Nav>

          <div className="d-none d-lg-block">
            <Button className="login-button btn btn-primary px-4 py-1">
              {state}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ModernNavbar

