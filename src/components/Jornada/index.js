import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './styles.css'


export default function Jornada() {

    const [jornada, setJornada] = useState("08:45")
    const [entrada1, setEntrada1] = useState("")
    const [saida1, setSaida1] = useState("")
    const [entrada2, setEntrada2] = useState("")
    const [saida2, setSaida2] = useState("")
    const [camposEntradaSaida, setCamposEntradaSaida] = useState([])

    const recordFromTotalMinutes = (total) => {

        let h = Math.floor(total / 60)
        let m = total - h * 60
        let desc = String(h).concat(":").concat(("00" + String(m)).slice(-2))

        return new record(h, m, total, desc)
    }

    function record(h, m, t, d) {

        this.hours = h
        this.minutes = m
        this.total = t
        this.desc = d

    }

    function newRecord(valor) {

        var h = parseInt(valor.split(":")[0])
        var m = parseInt(valor.split(":")[1])
        var t = h * 60 + m

        return new record(h, m, t, valor)
    }

    function validarPreenchimento(){
        return false
    }

    function handleClickCalcular() {

        if (validarPreenchimento()) {
            let minutosTrabalhado = 0
            let minutosATrabalhar = 0
            let totalCalculo = 0
            let horaSaida = 0
        
            let valorJornada = newRecord(jornada)
            let entradaInicial = newRecord(entrada1)
            let saidaInicial = newRecord(saida1)
            let entradaFinal = newRecord(entrada2)

            // Define o parâmetro de Jornada de Trabalho
            let parametroJornadaTrabalho = jornada == null ? recordFromTotalMinutes(525) : valorJornada

            // Carrega as entradas e saidas dinâmicas
            let listaEntrada = camposEntradaSaida.map((item) => (newRecord(item.horasEntrada)))
            let listaSaida = camposEntradaSaida.map((item) => (newRecord(item.horasSaida)))

            // Carrega minutos trabalhados na primeira linha
            minutosTrabalhado = saidaInicial.total - entradaInicial.total

            // Carrega minutos trabalhados na linhas dinâmicas
            listaSaida.forEach((item, index) => {
                minutosTrabalhado += item.total - listaEntrada[index].total
            })

            //formula
            minutosATrabalhar = parametroJornadaTrabalho.total - minutosTrabalhado
            totalCalculo = entradaFinal.total + minutosATrabalhar
            horaSaida = recordFromTotalMinutes(totalCalculo)

            setSaida2(horaSaida.desc)
        } else {
            alert('Preenche sapoha caralho!!!')
        }

    }

    function handleClickLimpar() {
        setEntrada1("")
        setSaida1("")
        setEntrada2("")
        setSaida2("")
        setCamposEntradaSaida([])
    }

    const handleFieldChange = (e) => {
        let tempFields = [...camposEntradaSaida]

        tempFields[e.target.dataset.id][e.target.name] = e.target.value

        setCamposEntradaSaida(tempFields)
    }

    function handleClickAdicionar() {
        if (entrada2) {
            setEntrada2("")
        }

        setCamposEntradaSaida(campos => [...campos, { horasEntrada: "", horasSaida: "" }])
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
                                    <Form.Control
                                        name="horasEntrada"
                                        className="input"
                                        type="time"
                                        value={entrada1}
                                        onChange={(e) => setEntrada1(e.target.value)} />
                                </Col>
                                <Col>   
                                    <Form.Control
                                        name="horasSaida"
                                        className="input"
                                        type="time"
                                        value={saida1}
                                        onChange={(e) => setSaida1(e.target.value)} />
                                </Col>
                            </Form.Row>

                        {camposEntradaSaida.length > 0 && camposEntradaSaida.map((item, index) => (

                            <Form.Row key={index}>
                                <Col>
                                    <Form.Control
                                        name="horasEntrada"
                                        className="input"
                                        type="time"
                                        data-id={index}
                                        value={item.horasEntrada}
                                        onChange={handleFieldChange} />
                                </Col>
                                <Col>   
                                    <Form.Control
                                        name="horasSaida"
                                        className="input"
                                        type="time"
                                        data-id={index}
                                        value={item.horasSaida}
                                        onChange={handleFieldChange} />
                                </Col>
                            </Form.Row>
                        ))}

                        <Form.Row>
                            <Col>
                                <Form.Control
                                    className="input"
                                    type="time"
                                    id="entradaFinal"
                                    value={entrada2}
                                    onChange={(e) => setEntrada2(e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="input"
                                    type="time"
                                    id="saidaFinal"
                                    readOnly
                                    value={saida2}
                                />
                            </Col>
                        </Form.Row>
                    </Form>

                    <div className="button-group">
                        <Button className="button" variant="primary" onClick={() => handleClickCalcular()}>
                            Calcular
                        </Button>
                        <Button className="button" variant="secondary" onClick={() => handleClickAdicionar()}>
                            Adicionar
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