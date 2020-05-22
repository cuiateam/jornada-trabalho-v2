import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './styles.css'

export default function Jornada() {

    const [jornada, setJornada] = useState("08:45")
    const [entrada1, setEntrada1] = useState()
    const [saida1, setSaida1] = useState()
    const [entrada2, setEntrada2] = useState()
    const [saida2, setSaida2] = useState()

    function handleClickCalcular(){
  
    }

    function handleClickLimpar() {
        setEntrada1("")
        setSaida1("")
        setEntrada2("")
        setSaida2("")
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
                            <Form.Control type="time" id="j" value={jornada} onChange={(e) => setJornada(e.target.value)} />
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
                            
                        <Form.Row>
                            <Col>
                                <Form.Control className="input" type="time" id="entrada1" value={entrada1} onChange={(e) => setEntrada1(e.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Control className="input" type="time" id="saida1" value={saida1} onChange={(e) => setSaida1(e.target.value)}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Control className="input" type="time" id="entradaFinal" value={entrada2} onChange={(e)=> setEntrada2(e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control className="input" type="time" id="saidaFinal" readOnly value={saida2} onChange={(e)=> setSaida2(e.target.value)} />
                            </Col>
                        </Form.Row>
                           
                    </Form>

                    <div className="button-group">
                        <Button className="button" variant="primary" onClick={() => handleClickCalcular()}>
                            Calcular
                        </Button>
                        <Button className="button" variant="danger" onClick={() => handleClickLimpar()}>
                            Limpar
                        </Button>
                    </div>
                </Card.Body>

            </div>
        </div>
    )
}