const Navbar = () => {
    return (  
        <nav className="Navbar">
            <h1>ALI MOBILES</h1>
            <div className="link">
                <a href="/">
                    Home
                </a>
                <a href="/create" style={
                    {
                        color:"white",
                        backgroundColor:'#f1356d',
                        borderRadius:"8px"
                    }
                    

                }>
                    Products
                    </a>
                    <a href="/" style={
                    {
                        color:"white",
                        backgroundColor:'Blue',
                        borderRadius:"8px"
                    }
                    

                }>
                     About
                    </a>
                    <a href="/create">
                        Contact_us
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;