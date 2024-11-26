import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-black text-white p-4">
            <nav className="flex justify-between items-center">
                <div className="logo">
                    <Link href="/">
                        <Image
                            className="w-auto h-[30px]"
                            src="/Netflix_2015_logo.svg.png"
                            alt="logo"
                            width={100}
                            height={30}
                        />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
