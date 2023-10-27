import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Ruslan F. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Herzliya City, Ruslan F. Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Ruslan F Repairs<br />
                    555 Herzliya Drive<br />
                    Herzliya City, ZIP 5555555<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Ruslan F</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public