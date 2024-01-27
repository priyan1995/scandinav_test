import React from "react";
import { Form } from "react-bootstrap";

export const UiInput = (props) => {
return(
    <>
      <Form.Group className={props.className} >
        <Form.Control type={props.type} placeholder={props.placeholder}  onChange={props.onChange} value={props.value}/>
      </Form.Group>
    </>
)
}