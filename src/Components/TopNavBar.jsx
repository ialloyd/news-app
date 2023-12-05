import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';
import { useState } from 'react';


const TopNavBar = ({ showSearchBar, onSearch }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {

    if (!searchQuery) {
      return
    }
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('')
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4" sticky='top' style={{ width: '100%' }}>
      <Container fluid>
        <Navbar.Brand to="#"><h2><Badge bg="danger">NewsNexuz</Badge></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', textDecoration: 'none' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to='/'><b>General</b></Nav.Link>
            <Nav.Link as={NavLink} to='/business'><b>Business</b></Nav.Link>
            <Nav.Link as={NavLink} to='/entertainment'><b>Entertainment</b></Nav.Link>
            <Nav.Link as={NavLink} to='/sports'><b>Sports</b></Nav.Link>
            <Nav.Link as={NavLink} to='/tech'><b>Technology</b></Nav.Link>
            <Nav.Link as={NavLink} to='/health'><b>Health</b></Nav.Link>
            <Nav.Link as={NavLink} to='/science'><b>Science</b></Nav.Link>
          </Nav>
          {showSearchBar && (
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="success" type="submit">Search</Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar