import Row from "react-bootstrap/esm/Row";
import { Post } from "./Post";
import Col from "react-bootstrap/esm/Col";

export function ListPosts({ posts }) {
    return (
        <Row>
            <Col md={12}>
                {posts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </Col>
        </Row>
    )
}