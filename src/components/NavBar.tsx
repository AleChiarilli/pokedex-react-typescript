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
          <li className="flex-1">AlexDex</li>
          <li>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Charizard"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
