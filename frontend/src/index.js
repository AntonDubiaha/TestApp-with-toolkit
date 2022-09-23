import App from './components/App';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';


function CategoryApp() {
    useEffect(() => {
        console.log('rendered');
    });

    return <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CategoryApp />);
