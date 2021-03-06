import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Layout() {
	return (
		<Navbar bg="light" variant="light" expand="lg">
			<Navbar.Brand href="/">Holidaze</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/hotels/">Hotels</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Layout;