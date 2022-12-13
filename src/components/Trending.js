import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="movieImage">
                        <Card className="text-dark text-center movieImage">
                            <Image src={duneImage} alt="Dune" />
                            <Card.Title>Dune</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending