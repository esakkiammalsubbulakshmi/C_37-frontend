import React, { useEffect, useState } from 'react';

function UE() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`; // Corrected template literal syntax
        console.log(count);
    }, [count]); // Adding count as a dependency to the useEffect hook

    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Change Click</button>
        </div>
    );
}

export default UE;
