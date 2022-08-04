import { Search } from "./Search";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="http://placehold.it/300x300" alt="Logo" />
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="#">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Option 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Option 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Search />
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}