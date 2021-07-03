import React, {useEffect, useState} from "react";

export function Clock() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => {
            clearInterval(id);
        }
    }, [])

    function ClockTime(props) {
        return <span className="clockData">{props.date.toLocaleDateString()}</span>;
    }

    function ClockDate({date}) {
        return <span className="clockData">{date.toLocaleTimeString()}</span>;
    }

    return (
        <div className="clock">
            <ClockDate date={date}/>
            <ClockTime date={date}/>
        </div>
    )
}