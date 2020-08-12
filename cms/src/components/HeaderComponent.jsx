import React, {Component} from 'react';

class HeaderComponent extends Component {

constructor() {
    super();
    this.state={

    }
}



    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://arjun-gautam.netlify.com" className="navbar-brand">Employee Management Syatem</a> </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;