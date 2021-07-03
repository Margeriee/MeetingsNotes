import React from 'react';
import { Clock } from './Clock'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <span>Culture & Performance</span>
                <Clock />
            </div>
        </header>
    )
}