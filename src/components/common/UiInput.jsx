import React from "react";
import { Form } from "react-bootstrap";

export const UiInput = (props) => {
return(
    <>
      <Form.Group className={props.className} >
        <Form.Control type={props.type} placeholder={props.placeholder} />
      </Form.Group>
    </>
)
}