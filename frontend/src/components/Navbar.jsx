import TemporaryDrawer, { Drawer } from "./TemporaryDrawer";

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: '80%', position: "fixed", margin: "50px", borderRadius: "30px" }}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/images/logo.png" alt="" style={{ height: "5vh" }} />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <span className="navbar-toggler-icon" /> */}
                        <TemporaryDrawer />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMenu">

                        {/* Centered search input with button */}
                        <form className="d-flex mx-auto" role="search" style={{
                            flexGrow: 1,
                            maxWidth: '500px',
                            '@media (max-width: 500px)': {
                                display: 'none'
                            }
                        }}>
                            <input
                                className="form-control me-1"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ borderBlockColor: "black", border: "2px solid black" }}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>

                        </form>
                        <TemporaryDrawer />
                    </div>


                </div>
            </nav>
        </div>
    );
};

export default Navbar;
