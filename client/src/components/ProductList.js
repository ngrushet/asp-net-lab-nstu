import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import ProductItem from "./ProductItem";

const ProductList = observer( () => {
    const {product} = useContext(Context)
    return (
        <Row className="d-flex">
            {product.products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </Row>
    );
})

export default ProductList;