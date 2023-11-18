import Link from 'next/link';
import React from 'react';
import { edu_tas_beginner } from '@/font';

interface ButtonProps {
  title: string;
  link?: string;
  icon?: React.ReactNode; // Optional icon prop accepting JSX icons
}

const Button: React.FC<ButtonProps> = ({ title, link, icon }) => {
  if (link) {
    return (
      <Link href={link}>
        <div className={`${edu_tas_beginner.className} button`}>
          <div className='relative flex justify-center items-center gap-2'>
            {title}
            {icon && (
              <div className='transform transition-transform hover:translate-x-3'>
                {icon}
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <button className='button'>
        {title}
        {icon && <span className=''>{icon}</span>}
      </button>
    );
  }
};

export default Button;
