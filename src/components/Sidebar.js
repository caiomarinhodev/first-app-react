import Row from "react-bootstrap/esm/Row";
import { SidebarItem } from "./SidebarItem";
import Nav from "react-bootstrap/esm/Nav";
import Col from "react-bootstrap/esm/Col";

export function Sidebar({ sections }) {
    return (
        <Row>
            <Col md={12}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    {sections.map(section => (
                        <Nav.Link href="/home">
                            <SidebarItem key={section.id} href={section.href}>
                                {section.title}
                            </SidebarItem>
                        </Nav.Link>
                    ))}
                </Nav>
            </Col>
        </Row>
    );
}