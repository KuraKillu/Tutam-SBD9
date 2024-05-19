import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-[#F5B24D] text-black py-3 sticky top-0">
            <div className="mx-auto flex justify-between y- items-center px-3">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                    MENGadopsi
                </span>
                <div className="flex space-x-4">
                    <a href="http://localhost:5173/cats" className="bg-[#FFFDD0] text-black px-3 rounded">Home</a>
                    <a href="http://localhost:5173/cats/createcattos" className="bg-[#FFFDD0] text-black px-3 rounded">Add Cats</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;