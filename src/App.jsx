import React from 'react';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropdownMenu from './components/DropdownMenu';

function App() {
  return (
    <Navbar>
      <NavItem icon="^">  {/* Replacing SVG with a simple caret symbol */}
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
