import logo_pagbank from "../assets/Logo_PagBank.png";
import { UserRoundSearch, Mail, TicketSlash } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-green-400 font-mono h-20 text-black p-4 flex items-center justify-between drop-shadow-lg">
      <img src={logo_pagbank} alt="Genosha Escudo 3D" className="h-10" />
      <h1 className="font-bold text-lg">DASHBOARD STATUS</h1>
      <section className="w-50 p-2 flex">
        <span className="m-2 hover:text-gray-200"><UserRoundSearch /></span>
        <span className="m-2 hover:text-gray-200"><TicketSlash /></span>
        <span className="m-2 hover:text-gray-200"><Mail /></span>
      </section>
    </header>
  );
}

export default Header;