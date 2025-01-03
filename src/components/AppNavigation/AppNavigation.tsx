import React from 'react';
import { Link } from 'react-router-dom';
import AppSwitch from '@components/AppSwitch';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 justify-between text-white">
        <li>
          Home
        </li>
        <div className='flex gap-6'>
            <li className='flex gap-2'>
                Admin
                <AppSwitch />
                User
            </li>
            <li>
            <Link to="/contact" className="hover:text-gray-400">
                Contact
            </Link>
            </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
