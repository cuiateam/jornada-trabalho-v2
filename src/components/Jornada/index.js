import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './styles.css'

export default function Jornada() {

    const valorPadraoFormulario = [

        {
            id:1, 
            linha:
                <Form.Row>
                    <Col>
                        <Form.Control className="input" type="time" id="entrada1" />
                    </Col>
                    <Col>
                        <Form.Control className="input" type="time" id="saida1" />
                    </Col>
                </Form.Row>
        },
        {
            id:2, 
            linha:
                <Form.Row>
                    <Col>
                        <Form.Control className="input" type="time" id="entrada2" />
                    </Col>
                    <Col>
                        <Form.Control className="input" type="time" id="saida2" readOnly />
                    </Col>
                </Form.Row>
        },

    ]



    const [adicionaEntradaSaida, setEntradaSaida] = useState(valorPadraoFormulario)

   
    

    function handleClickCalcular(){
  
    }

    function handleClickAdicionar() {

        setEntradaSaida([
            {
                id:Math.random(), 
                linha:
                    <Form.Row>
                        <Col>
                            <Form.Control className="input" type="time" />
                        </Col>
                        <Col>
                            <Form.Control className="input" type="time" />
                        </Col>
                    </Form.Row>
            },
            ...adicionaEntradaSaida,
        ])

    }

   


    return (
        <div className="jornada">
            <div className="card">
                <Card.Header className="text-center">
                    <Form.Row>
                        <Col>
                            <strong>JORNADA:</strong>
                        </Col>
                        <Col>
                            <Form.Control type="time" id="j"/>
                        </Col>
                    </Form.Row>

                </Card.Header>
                <Card.Body>
                    <Form>

                        <Form.Row>
                            <Col className="text-center">
                                Entrada
                            </Col>
                            <Col className="text-center">
                                Saída
                            </Col>
                            
                        </Form.Row>
                            
                        {adicionaEntradaSaida.map(input => (
                            <div key={input.id}>{input.linha}</div>
                        ))}
                           
                    </Form>




                    <div className="button-group">
                        <Button className="button" variant="primary" onClick={() => handleClickCalcular()}>
                            Calcular
                        </Button>
                        <Button className="button" variant="secondary" onClick={() => handleClickAdicionar()}>
                            Adicionar
                        </Button>
                        <Button className="button" variant="danger" onClick={() => setEntradaSaida(valorPadraoFormulario)}>
                            Limpar
                        </Button>
                    </div>
                    

                </Card.Body>

            </div>
        </div>
    )
}