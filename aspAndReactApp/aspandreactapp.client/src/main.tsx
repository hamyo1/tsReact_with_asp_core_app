import App from './App'
import './index.css'


//import * as React from 'react';
import * as React from 'react';
import * as DOM from 'react-dom';

const root = document.getElementById('root');

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
}

DOM.render(<Main />, root);