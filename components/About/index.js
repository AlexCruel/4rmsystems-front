import cn from "./styles.module.scss";
import Container from "react-bootstrap/Container";

const About = () => {
    return (
        <>
            <Container className={cn.container}>
                <h1>О компании</h1>
            </Container>
        </>
    );
}

export default About;