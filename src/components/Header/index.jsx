import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#home">Início</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#produtos">Destques</Nav.Link>
                        <Nav.Link href="#sobre">Mais para você</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header