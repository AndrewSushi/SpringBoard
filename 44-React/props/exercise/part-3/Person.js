const Person = (prop) => {
    let voteText = prop.age >= 18 ? "please go vote" : "you must be 18"
    let hobbies = prop.hobbies.map(hobby => <li>{hobby}</li>)
    return (
    <div>
        <p>Learn some information about this person</p>
        <h1>Name: {prop.name.slice(0, 6)}</h1>
        <h2>Age: {prop.age}</h2>
        <ul>
            Hobbies:
            {hobbies}
        </ul>
        <h3>{voteText}</h3>
    </div>
    )
}