import React from 'react';
import { Clock } from './Clock'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Culture & Performance</h1>
                <Clock />
            </div>
        </header>
    )
}