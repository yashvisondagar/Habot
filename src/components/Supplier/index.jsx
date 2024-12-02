import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./Supplier.css"; // Assuming styles are defined here

const SupplierSection = () => {
  return (
    <div className="container-fluid container-supplier">
      <Row className="align-items-center">
        {/* Left Section */}
        <Col xs={12} md={6}>
          <h3 className="SupplierIntro">
            Let Suppliers <span className="findyou"> Find You</span>
          </h3>
        </Col>

        <Col xs={12} md={6}>
          <Button variant="primary" className="supplierbtn">
            Get Verified
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SupplierSection;
