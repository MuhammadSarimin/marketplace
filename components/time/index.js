import { useState, useEffect } from 'react';
export function StringTime(props){

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <p className={props.className}>
            {dateState.toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}, {dateState.toLocaleString('id-ID', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second:'numeric',
                        hour12: false,
                    })}
        </p>
    )

}