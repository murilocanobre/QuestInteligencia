import React from 'react';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const id = useSelector((state) => state.auth.user._id);

  return (
    <Nav>
      <Link to="/dashboard/">
        <FaHome size={24} />
      </Link>
      <Link to="/Login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
