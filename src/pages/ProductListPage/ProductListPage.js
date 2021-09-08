import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';


class ProductListPage extends Component {
    render() {
        var product =[];
        return (
                <div className="col-sm-12">
                    <button className="btn btn-info">Add Product</button>
                    <ProductList>
                        {this.showProducts(product)}
                    </ProductList>
                </div>        
        );
    }
    showProducts(product) {
        var result=null;
        if(product.length>0){
            result = product.map((product,index)=>{
                return(
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />

                )
            })
        }
        return result;
    }
}

export default ProductListPage;