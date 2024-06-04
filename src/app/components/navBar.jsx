import Image from "next/image";

const NavBarComponent = () => {
  return (
    <nav className="bg-[#ffffff] h-[100vh] drop-shadow-xl grid-nav">
      <div className="grid items-center justify-center">
        <Image src={"/logo.png"} width={190} height={90} />
      </div>
      <div className="bg-yellow-400 grid-mid">
        <div className="flex border-b-2"></div>
        <div className="flex border-b-2"></div>
        <div className="flex border-b-2"></div>
        <div className="flex border-b-2"></div>
        <div className="flex border-b-2"></div>
      </div>
      <div className="bg-black"></div>
    </nav>
  );
};

export default NavBarComponent;
