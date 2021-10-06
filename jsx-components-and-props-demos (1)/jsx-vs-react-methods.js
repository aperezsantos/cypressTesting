const NoJSX = () => {
    return ( // Sans JSX:
        React.createElement("div", { className: "book" },
            React.createElement("h2", { className: "title" }, "Title here"),
            React.createElement("h3", { className: "author" }, "Author here"),
            React.createElement("ul", { className: "stats" },
                React.createElement("li", { className: "rating" }, "5 stars"),
                React.createElement("li", { className: "isbn" }, "12-345678-910")
            )
        )
    )
}

const JSX = () => {
    return ( // Makes you appreciate JSX, yeah?
        <div className="book">
            <h2 className="title">Title here</h2>
            <h3 className="author">Author here</h3>
            <ul className="stats">
                <li className="rating">5 stars</li>
                <li className="isbn">12-345678-910</li>
            </ul>
        </div>
    )
}