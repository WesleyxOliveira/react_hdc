const TemplateExpressions = ()=> {
    
    const data = {
        name: 'Wesley',
        age: 33,
        job: 'Programmer'
    }

    return (
        <>
            <h1>Hello {data.name} how are you?</h1>
            <p>You are {data.age} years old and work as a {data.job}.</p>
            <p>{4+5}</p>
            <>{console.log('Hello World')}</>
        </>
    )
}

export default TemplateExpressions;