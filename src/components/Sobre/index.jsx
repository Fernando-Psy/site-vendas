import {Container, Row, Col} from 'react-bootstrap';
import './styles.css';

const Sobre = () => {

    return (
        <div>
            <Container fluid>
                <Row className='justify-content-center align-items-center paddingTop'>
                    <Col xs={12} md={8} lg={10} className='text-center'>
                        <h2>Bem vindos à loja tem tudo</h2>
                        <p className='fs-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae amet quasi inventore similique. Maiores quidem a ipsa quasi recusandae, esse commodi, exercitationem officia reprehenderit quas cum dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sobre;