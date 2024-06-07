import NavBarComponent from "@/components/navBar";

const FormulaGeneral = () => {
  return (
    <div className="max-w-[1600px] m-auto grid-duo ">
      <NavBarComponent />
      <div className="bg-[#e7e7e7] w-[100%] p-4">
        <div className="grid justify-center">
          <h1 className=" font-semibold text-6xl lg:text-7xl rainbow-text ">
            Formula General
          </h1>
          <div className="bg-white min-w-[500px] lg:min-w-[800px] px-3 py-6 rounded-2xl grid gap-10 drop-shadow-xl">
            <h1 className="text-2xl font-semibold text-[#e73492]">
              Formula General
            </h1>
            <p>Calcula las raices de una ecuacion cuadratica</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaGeneral;
