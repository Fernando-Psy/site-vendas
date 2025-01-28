import 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles.css';
import PropTypes from 'prop-types';

const Cards = () => {
    const produtos = [
        {
            id: 1,
            cor: 'primary',
            produto: 'Produto 1',
            descricao: 'Descrição do Produto 1',
            nomeBotao: 'Comprar',
            link: 'https://dhumano.com.br/'
        }
    ];
    return (
        <section id="produtos" className="py-5">
            <Container>
                <h2 className='text-center'>Seus Produtos</h2>
                <Row className="g-4">
                    {produtos.map((produto) => (
                        <Col key={produto.id} className="col-12 col-md-6 col-sm-6 col-lg-3 mb-4">
                            <Card className="card h-100 shadow-sm">
                                <div className={`card-header ${produto.cor} text-center`}>
                                    <h3>Produto {produto.produto}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{produto.descricao}</p>
                                </div>
                                <div className='card-footer text-center'>
                                    <a href={`${produto.link}`} className={`btn btn-outline-${produto.cor}`} target='_blank'>{produto.nomeBotao}</a>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

Cards.propTypes = {
    produtos: PropTypes.object.isRequired
}

export default Cards;