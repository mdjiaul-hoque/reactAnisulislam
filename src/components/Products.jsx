import React from 'react';

const Products = (props) => {

    // console.log(props);

    const {category,description,image,price,title ,rating,count} = props;

    return (
        <div>
            <img src={image} alt="product image" />
            <p>{title}</p>
            <p>{category}</p>
            <p>${price}</p>
            <p>{rating} <span>{count}</span></p>
            {/* <p>{count}</p> */}
            <p>{description}</p>
        </div>
    );
};

export default Products;