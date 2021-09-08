import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'On Sale' : ' Out of stock';
        var statusClass = product.status ? 'warning' : 'default'
        return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{procut.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <span className={`btn btn-${statusClass}`}>
                                {statusName}
                            </span>
                        </td>
                        <td>
                        <button type="button" className="btn btn-success mr-2">
                            Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                        </td>

                    </tr>
        );
    }
}

export default ProductItem;