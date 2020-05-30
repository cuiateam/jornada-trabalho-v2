import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default function LinhaDinamica({ index, item, handleFieldChange }) {
    return(
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
    )
}