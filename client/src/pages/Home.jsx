import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

import products from '../products';

export default function Home() {
    return (
        <div>
            <h1>Latest Paintings</h1>
            <Row>
                {products.map((product, i) => (
                    <Col key={i} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
