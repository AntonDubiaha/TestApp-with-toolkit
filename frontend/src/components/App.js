import React, { Component, Fragment } from 'react';
import { CategoryList } from './subList';
import { AddForm } from './Form';


function App() {
    return (
        <div className='container'>
            <h1>Test App</h1>
            <AddForm />
            <CategoryList />
        </div>
    );
}

export default App;
