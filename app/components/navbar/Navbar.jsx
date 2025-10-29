import Image from "next/image";
import Link from "next/link";
import SearchFlters from "./SearchFlters";

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-5">
<div className="flex justify-between items-center">
    <Link href='/'>
    <Image src='/logo.png' alt="DjangoBNB" width={180} height={38}/></Link>
<div className="flex space-x-6">
    <SearchFlters/>
</div>

<div className="flex items-center space-x-6">
    Add Property
</div>

</div>
            </div>
        </nav>
    );
}

export default Navbar;