import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';

const Index = () => {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root')); 