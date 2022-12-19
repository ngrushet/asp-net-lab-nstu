import React, { useContext } from 'react'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup'
import { observer } from 'mobx-react-lite'

const CategoryBar = observer(() => {
    const { product } = useContext(Context);
    console.log(product);
    return (
        <ListGroup>
            {product.categories.map(category =>
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={category.id === product.selectedCategory.id}
                    onClick={() => product.setSelectedCategory(category)}
                    key={ category.id }
                >
                    { category.name }
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default CategoryBar
