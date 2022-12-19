import { observer } from "mobx-react-lite";
import { Card, Col } from "react-bootstrap";


const ProductItem = observer( ({product}) => {
    return (
        <Col md={3}>
            <div>hui</div>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <div>
                    <div>product.title</div>
                    <div>
                        <div>{product.rating}</div>
                    </div>
                </div>
            </Card>
        </Col>
    );
})

export default ProductItem;