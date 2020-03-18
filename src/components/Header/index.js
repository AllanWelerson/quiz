import React from 'react';
import { Link } from 'react-router-dom';

import { Containter } from './styles';

export default function Header() {
  return (
    <>
      <Containter>
        <div className="link">
          <Link to="/">Discordias Quiz</Link>
        </div>
        
      </Containter>
    </>
  );
}
