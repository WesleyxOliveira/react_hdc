const Challenge = ()=> {
    const a = 10;
    const b = 25;

    return (
        <>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={()=> console.log(a+b)}>Clique para ver a soma</button>
        </>
    )
}

export default Challenge; 