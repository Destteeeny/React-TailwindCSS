function Header() {
    return(
        <div id="header" className="w-full h-14 bg-slate-700  flex justify-center text-center">
            <ul className="text-gray-50 flex justify-center gap-3 content-center w-auto h-auto">
                <li className="">
                    Home
                </li>

                <li>
                    Sobre Nós
                </li>

                <li>
                    Servicos
                </li>
            </ul>
        </div>
    );
}

export default Header