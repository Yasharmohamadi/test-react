import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main/Main'


// FIRST WAY TO USE REACT
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main />
);