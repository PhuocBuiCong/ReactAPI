import React, { Component } from 'react';
class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary mt-3">
                <div className="panel-heading">
                    <h3 className="panel-title">List Products</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Code Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                       {this.props.children} 
                       {/* //productitem */}
                    </tbody>
                </table>
                </div>
          </div>
        );
    }
}

export default ProductList;