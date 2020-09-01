import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardImg from "react-bootstrap/CardImg";
import burger from "./img/burger.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import Button from "react-bootstrap/Button";

const Menu = () => {
  return (
    <section class="menu">
      <div class="container ">
        <div class="st-menu">
          <h2>
            Our <span class="st-our">Menu</span>{" "}
          </h2>
        </div>

        <div>
          <Tabs
            class="text-center"
            defaultActiveKey="Breakfast"
            id="uncontrolled-tab-example"
           
          >
          
            <Tab eventKey="Breakfast" title="Breakfast" class="active">
              <div>
                <br />
                <div>
                  <CardDeck>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={burger} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & BURGER </Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img2} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & PLANTAIN</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img3} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & CHIPS</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </div>
                <div>
                  <CardDeck>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img4} />
                      <Card.Body>
                        <Card.Title>CHICKEN WITH PLANTAIN </Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img5} />
                      <Card.Body>
                        <Card.Title>FULL CHICKEN</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img6} />
                      <Card.Body>
                        <Card.Title>CHICKEN WRAP WITH CHIPS</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Lunch" title="Lunch">
              <div>
                <br />
                <div>
                  <CardDeck>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={burger} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & BURGER </Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img2} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & PLANTAIN</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img3} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & CHIPS</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </div>
                <div>
                  <CardDeck>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img4} />
                      <Card.Body>
                        <Card.Title>CHICKEN WITH PLANTAIN </Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img5} />
                      <Card.Body>
                        <Card.Title>FULL CHICKEN</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img6} />
                      <Card.Body>
                        <Card.Title>CHICKEN WRAP WITH CHIPS</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Dinner" title="Dinner">
              <div>
                <div>
                  <CardDeck>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={burger} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & BURGER </Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img2} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & PLANTAIN</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img3} />
                      <Card.Body>
                        <Card.Title>TASTY BITES & CHIPS</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </div>
                <div>
                  <CardDeck>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img4} />
                      <Card.Body>
                        <Card.Title>CHICKEN WITH PLANTAIN </Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card class="st-card mb-3">
                      <Card.Img variant="top" src={img5} />
                      <Card.Body>
                        <Card.Title>FULL CHICKEN</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={img6} />
                      <Card.Body>
                        <Card.Title>CHICKEN WRAP WITH CHIPS</Card.Title>
                        <Button variant="outline-dark">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Menu;
