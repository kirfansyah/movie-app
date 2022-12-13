import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spiderman from "../assets/images/superhero/spiderman-cover.jpg"
import superman from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>

                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={antman} alt="Dune" className="images" />
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
                            <Image src={avenger} alt="Dune" className="images" />
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
                            <Image src={batman} alt="Dune" className="images" />
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
                            <Image src={robinhood} alt="Dune" className="images" />
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
                            <Image src={spiderman} alt="Dune" className="images" />
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
                            <Image src={superman} alt="Dune" className="images" />
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

export default SuperHero