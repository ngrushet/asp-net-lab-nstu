import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import CategoryBar from '../components/CategoryBar'
import { observer } from 'mobx-react-lite'
import { fetchCategories, fetchProducts } from '../http/productAPI'
import { Context } from '../index'

const Shop = observer(() => {
    const { product } = useContext(Context);

    // useEffect(() => {
    //     fetchCategories().then(data => product.setCategories(data))
    //     fetchProducts(null).then(data => {
    //         product.setProducts(data.rows)
    //         product.setTotalCount(data.count)
    //     })
    // }, [])

    // хуйня какая то со страницами этими просто весь список выдать и всё
    useEffect(() => {
        fetchCategories().then(data => product.setCategories(data))
        fetchProducts(product.selectedCategory.id, product.page, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType, product.selectedBrand,])
    
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>
                    <ProductList />
                </Col>
            </Row>
        </Container>
    )
});

export default Shop
