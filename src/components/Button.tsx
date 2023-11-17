import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'iconsax-react';


interface ButtonProps {
  title: string;
  link?: string; // Making the link parameter optional by using the "?" symbol
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  if (link) {
    return (
      <Link href={link}>
        <div className='button flex justify-center items-center'>
          {title}
          <div className='hover:translate-x-3 ease-out delay-100'>
            <ArrowRight size="24" color="#fff"/>
          </div>
        </div>
      </Link>
    );
  } else {
    return <button className='button'>{title}</button>;
  }
};

export default Button;
