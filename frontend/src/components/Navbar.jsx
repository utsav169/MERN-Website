import { Link } from "react-router-dom"
import { pageData } from "./pageData"

export function Navbar() {
    return (
        <div className="navbar">
            {pageData.map((page) => {
                return (
                    <Link to={page.path} className="navitem">
                        <button>
                            {page.name}
                        </button>

                    </Link>
                )
            })}
        </div>
    )
}