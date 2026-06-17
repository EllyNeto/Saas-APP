const Navbar = () => {
  return (
    <nav className="navbar"> 
     <link href="/">
        <div className="flex items-center grap-2.5 cursor-pointer">
            <Image>
                src="/logo.png"
                alt="Logo"
                width={46}
                height={44}
            </Image>
        </div>
     </link>
     <div className="flex items-center grap-8">
        <p>Home</p>
        <p>Companions</p>
        <p>My journey</p>
        <p>Sign In</p>
     </div>
       </nav>
  )
}

export default Navbar