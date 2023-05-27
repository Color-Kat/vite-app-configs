import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { store } from "@/store";
import './index.scss';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
);
