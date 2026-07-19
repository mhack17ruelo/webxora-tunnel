import React from 'react';import{createRoot}from'react-dom/client';import{HashRouter}from'react-router-dom';import App from'./App';import'./styles.css';import'./styles-extra.css';import'./styles-ui.css';import'./registration.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><HashRouter><App/></HashRouter></React.StrictMode>);
