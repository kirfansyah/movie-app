import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>

                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id='trending'>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={duneImage} alt="Dune" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title>Dune</Card.Title>
                                <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>

                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={everything} alt="Dune" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title>Dune</Card.Title>
                                <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>

                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={infinite} alt="Dune" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title>Dune</Card.Title>
                                <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>

                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={joker} alt="Dune" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title>Dune</Card.Title>
                                <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>

                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={lightyear} alt="Dune" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title>Dune</Card.Title>
                                <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>

                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={morbius} alt="Dune" className="images" />
                            <div className="p-2 m-1">
                                <Card.Title>Dune</Card.Title>
                                <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending