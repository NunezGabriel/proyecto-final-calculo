import NavBarComponent from "@/components/navBar";
import Link from "next/link";

const Herramintas = () => {
  return (
    <div className="max-w-[1600px] m-auto grid-duo ">
      <NavBarComponent />
      <div className="bg-[#e7e7e7] w-[100%] p-4">
        <div className="">
          <h1 className=" font-semibold text-5xl lg:text-7xl rainbow-text ">
            Ejercicios
          </h1>
        </div>
        <div className="w-[100%] flex flex-wrap gap-x-7 gap-y-10 justify-center">
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                Ecuaciones lineales
              </h1>
              <p>
                Resuelve ejercicios de ecuaciones lineales y supera tus limites
              </p>
            </div>
          </Link>
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                Ecuaciones cuadraticas
              </h1>
              <p>
                Pon en practica tus conocimientos sobre ecuaciones cuadraticas y
                demuestra que dominas el tema{" "}
              </p>
            </div>
          </Link>
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                Sistema de Ecuaciones
              </h1>
              <p>
                Pon en practica tus conocimientos sobre Sistema de Ecuaciones
              </p>
            </div>
          </Link>
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                Geometria en el Espacio
              </h1>
              <p>
                Pon en practica tus conocimientos sobre Geometria en el Espacio
              </p>
            </div>
          </Link>
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                La Recta
              </h1>
              <p>Pon en practica tus conocimientos sobre la recta</p>
            </div>
          </Link>
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                Proporcionalidad
              </h1>
              <p>Pon en practica tus conocimientos sobre Proporcionalidad</p>
            </div>
          </Link>
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                Razones Trigornometricas
              </h1>
              <p>
                Pon en practica tus conocimientos Sobre Razones Trigonometricas{" "}
              </p>
            </div>
          </Link>
          <Link
            href={"/ejercicios"}
            className="w-100% flex flex-wrap gap-x-2 gap-y-8 justify-around lg:mt-[50px]"
          >
            <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
              <h1 className="text-2xl font-semibold text-[#e73492]">
                Volumenes
              </h1>
              <p>Pon en practica tus conocimientos Sobre Razones Volumenes </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herramintas;
