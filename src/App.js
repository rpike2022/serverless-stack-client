import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import './App.css';
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { onError } from "./libs/errorLib";


function App() {
  const historyObj = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  async function handleLogOut() {
    await Auth.signOut();
    userHasAuthenticated( false );
    historyObj.push("/login");
  }

  useEffect(() => {
    onLoad();
  }, []);
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
        historyObj.push("/login");
      }
    }
    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            { isAuthenticated ? (
                <>
                  <LinkContainer to="/settings">
                    <Nav.Link>Settings</Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                </>
            ) : (
              <>
                <LinkContainer to="/signup">
                  {/*<Nav.Link href="/signup">Signup</Nav.Link>*/}
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  {/*<Nav.Link href="/login">Login</Nav.Link>*/}
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer> 
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
    )
  );
}

export default App;
