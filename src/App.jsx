import React from 'react';

import './assets/scss/style.scss';

import Header from './components/Header';
import Schedules from './components/Schedules';
import LogEntries from './components/LogEntries';

function App() {
    return (
        <div className="app" data-testid="app">
            <Header />
            <main>
                <div className="container">
                    <Schedules />
                    <LogEntries />
                </div>
            </main>
        </div>
    );
}

export default App;
