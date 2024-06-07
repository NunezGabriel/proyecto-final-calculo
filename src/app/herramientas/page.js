import NavBarComponent from "@/components/navBar";
import Link from "next/link";

const Herramintas = () => {
  return (
    <div className="max-w-[1600px] m-auto grid-duo ">
      <NavBarComponent />
      <div className="bg-[#e7e7e7] w-[100%] p-4">
        <div className="">
          <h1 className=" font-semibold text-6xl lg:text-7xl rainbow-text ">
            Herramientas
          </h1>
        </div>
        <Link
          href={"/herramientas/formula-general"}
          className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
        >
          <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
            <h1 className="text-2xl font-semibold text-[#e73492]">
              Formula General
            </h1>
            <p>Calcula las raices de una ecuacion cuadratica</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Herramintas;
