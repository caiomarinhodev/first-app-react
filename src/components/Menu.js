import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export function Menu() {
    return (
        <>
            <Row>
                <Col md={12}>
                    <Nav variant="pills" className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="link-1">Section 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="link-2">Section 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="link-3">Section 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="link-4">Section 4</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>

            <br />
        </>

    );
}