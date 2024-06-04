import Image from "next/image";

const NavBarComponent = () => {
  return (
    <nav className="bg-[#ffffff] h-[100vh] drop-shadow-xl grid-nav">
      <div className="grid items-center justify-center">
        <Image src={"/logo.png"} width={190} height={90} />
      </div>
      <div className="grid-mid">
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/casa.png"} width={20} height={20} />
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/edit-tools.png"} width={20} height={20} />
          <p>Herramientas</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/agenda.png"} width={20} height={20} />
          <p>Informacion</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/play.png"} width={20} height={20} />
          <p>Videos</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/pesa.png"} width={20} height={20} />
          <p>Ejercicios</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
      </div>

      <div className="grid-bot">
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/grupo.png"} width={20} height={20} />
          <p>Desarrolladores</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/graduacion.png"} width={20} height={20} />
          <p>Curso</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
        <div className="flex border-b-[1px] navOption justify-between items-center pl-2">
          <Image src={"/theme.png"} width={20} height={20} />
          <p>Tema</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
