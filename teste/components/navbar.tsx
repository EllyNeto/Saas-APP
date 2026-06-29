import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { Show, UserButton, SignInButton, SignUpButton, SignedIn, SignedOut} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar"> 
     <Link href="/">
        <div className="flex items-center grap-2.5 cursor-pointer">
            <Image
                src="./images/logo.svg"
                alt="Logo"
                width={46}
                height={44}
            />
        </div>
     </Link>
     <div className="flex items-center gap-8">
       <NavItems/>
        <Show when="signed-out">
          <div className="flex gap-4">
            <SignInButton />
            <SignUpButton />
          </div>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
     </div>
       </nav>
  )
}

export default Navbar