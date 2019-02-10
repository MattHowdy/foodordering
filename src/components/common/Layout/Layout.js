import React, {Component,Fragment} from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

class Layout extends Component{
    render() {
        return (
            <Fragment>
                <Navbar/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Fragment>
        );
    }
};

export default Layout;
