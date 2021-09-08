import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
               <div className="alert alert-warning" role="alert">
                   <strong>404 Not Found</strong>
               </div>
            </div>
        );
    }
}

export default NotFound;