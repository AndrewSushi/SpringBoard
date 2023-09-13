const Tweet = (prop) => {
    return (
        <div>
            <h1>Name: {prop.name}</h1>
            <h3>User: {prop.user}</h3>
            <h3>Date: {prop.date}</h3>
            <p>Message: {prop.message}</p>
        </div>
    )
}