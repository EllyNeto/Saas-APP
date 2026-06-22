'use client';

import React from 'react'
import Link from "next/link";
import {cn} from "@/lib/utils"
import { usePathname } from 'next/navigation';

const navItems = [
    {label:'Home', href: '/'},
    {label: 'Companios', href: '/companions'},
    {label: 'My Journey', href: '/dashjourney'},
]



const NavItems = () => {
    const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({label, href}) => (
            <Link 
                href={href} 
                key={label} 
                className={cn(pathname === href && 'text-primary font-semibold')}>
                {label}
            </Link>
        ))}
    </nav>
  )
}

// const NavItems = () => {
//     const pathname = usePathname();    
//     return (
//         <nav className="flex items-center gap-4">
//         {navItems.map(({ label, href }) => (
//             <Link
//                 key={label}
//                 href={href}
//                 className={`${
//                     pathname === href
//                     ? 'text-primary font-semibold'
//                     : 'text-gray-500'
//                 }`}
//                 >
//                 {label}
//             </Link>
//         ))}
//         </nav>
//     );
// };

export default NavItems