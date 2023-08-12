export const NavBar = () => {
  return (
    <>
      <nav className="py-5 w-full">
        <ul className="w-full flex flex-row align-middle items-center">
          <li>
            <img
              src="https://w7.pngwing.com/pngs/363/696/png-transparent-pokemon-go-computer-icons-psyduck-pokemon-go.png"
              className="h-10 mr-3"
              alt="AlexDex Logo"
            />
          </li>
          <li>
            <a>
              <span className="text-red-500 font-medium">Alex</span>
              <span>Dex</span>
            </a>
          </li>
          <li>Home</li>
          <li>About</li>
          <li className="flex-1">Repository</li>
          <li>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="🔍 Charizard"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
