function MainContent() {
    return (
        <ul><li>A</li><li>B</li><li>C</li><li>Do</li></ul>
    )
}

const header = (
    <nav>
        <h1>Phoenix</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

console.log(header)

ReactDOM.render(
    header,
    // <MainContent />,
    document.getElementById("root"))

// const html = document.createElement("h1")
// html.textContent = "Imperative way"
// document.getElementById('root').append(html);