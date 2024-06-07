import Image from "next/image";
import Link from "next/link";

const NavBarComponent = () => {
  return (
    <nav className="bg-[#ffffff] h-[100vh] drop-shadow-xl grid-nav">
      <div className="grid items-center justify-center">
        <Image alt="image" src={"/logo.png"} width={190} height={90} />
      </div>
      <div className="grid-mid">
        <Link
          href={"/"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/casa.png"} width={20} height={20} />
          <p>Inicio</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>

        <Link
          href={"/herramientas"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/edit-tools.png"} width={20} height={20} />
          <p>Herramientas</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>

        <Link
          href={"/informacion"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/agenda.png"} width={20} height={20} />
          <p>Informacion</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>

        <Link
          href={"/videos"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/play.png"} width={20} height={20} />
          <p>Videos</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>
        <Link
          href={"/ejercicios"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/pesa.png"} width={20} height={20} />
          <p>Ejercicios</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>
      </div>

      <div className="grid-bot">
        <Link
          href={"/desarrolladores"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/grupo.png"} width={20} height={20} />
          <p>Desarrolladores</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>
        <Link
          href={"/curso"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/graduacion.png"} width={20} height={20} />
          <p>Curso</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>
        <Link
          href={"/tema"}
          className="flex border-b-[1px] navOption justify-between items-center pl-2"
        >
          <Image alt="image" src={"/theme.png"} width={20} height={20} />
          <p>Tema</p>
          <div className="h-[100%] w-2 bg-transparent hardtag"></div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBarComponent;
