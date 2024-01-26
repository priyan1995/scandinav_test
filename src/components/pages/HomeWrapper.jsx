import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../common/Sidebar";

export const HomeWrapper = () => {
    return (
        <>
            <div className="pd-h-w">
                <Container>
                    <Row>
                        <Col lg="4">
                            <Sidebar />
                        </Col>
                        <Col lg="8">

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}