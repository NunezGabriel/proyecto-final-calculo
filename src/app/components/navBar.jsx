import Image from "next/image";

const NavBarComponent = () => {
  return (
    <nav className="bg-[#ffffff] h-[100vh] drop-shadow-xl grid-nav">
      <div className="grid items-center justify-center">
        <Image src={"/logo.png"} width={190} height={90} />
      </div>
      <div className="grid-mid">
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
      </div>
      <div className="grid-bot">
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between">
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-[#e73492] hidden hardtag"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
