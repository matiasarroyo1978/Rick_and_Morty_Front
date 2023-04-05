import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () =>{
    return(
        <Container fluid className="about d-grid">
            <Row>   
                <h2>About Page</h2>
            </Row>
            <Row>
                <Col sm={9} >
                    <h3> Welcome to the about page of Rick and Morty, the beloved animated series that has captured the hearts of fans all over the world! Here, you'll find everything you need to know about the show, its creators, and the amazing universe they've built.

                    First and foremost, Rick and Morty is the brainchild of Justin Roiland and Dan Harmon. The show first premiered on Adult Swim in 2013, and has since become one of the most popular animated shows on television. The series follows the adventures of a brilliant but alcoholic scientist named Rick Sanchez and his well-meaning but often bumbling grandson, Morty Smith. Together, they explore other dimensions and encounter all kinds of strange and fascinating creatures.

                    At its core, Rick and Morty is a show about family, science, and the absurdity of life. It's a show that blends high-concept science fiction with irreverent humor and a healthy dose of heart. Fans love the show for its clever writing, unforgettable characters, and the way it constantly subverts expectations.

                    Over the years, Rick and Morty has become a cultural phenomenon, inspiring countless memes, merchandise, and even a popular video game. The show has also been praised for its inclusivity and willingness to take risks, tackling everything from mental health to existential dread.

                    So if you're looking for a show that will make you laugh, make you think, and maybe even make you question the nature of reality itself, then Rick and Morty is the show for you. Join us on our interdimensional adventures, and discover why this show has become a modern classic.

                    </h3>
                </Col>
                <Col sm={3} >
                    <img src="img/text_area.png" alt=""/>
                </Col>    
            
            </Row>
        </Container>
        )
}
export default About