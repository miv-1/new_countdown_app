import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";

function Header() {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Ivan's countdown</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
              <Nav className="mr-auto header;">
                <Nav.Link href="/HelloThere">Hello there</Nav.Link>
              </Nav>
              <Nav
                className="justify-content-end"
                style={{ width: "100%" }}
              ></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
