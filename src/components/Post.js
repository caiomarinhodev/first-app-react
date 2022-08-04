import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

export function Post(props) {
    return (
        <>
            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                <Image src={props.image} thumbnail />
                            </Col>
                            <Col md={9}>
                                <h1>{props.title}</h1>
                                <p>{props.content}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

            </Row>
            <br />
        </>


    );
}