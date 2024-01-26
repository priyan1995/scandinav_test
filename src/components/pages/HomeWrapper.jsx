import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../common/Sidebar";

export const HomeWrapper = () => {
    return (
        <>
            <div className="pd-h-w">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <Sidebar />
                        </Col>
                        <Col lg="9">

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}