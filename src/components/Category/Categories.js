import React, {Component,Fragment} from 'react';


class Categories extends Component{
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
};

export default Categories;
