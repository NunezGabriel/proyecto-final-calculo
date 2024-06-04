const HomeComponent = () => {
  return (
    <div className="bg-[#e7e7e7] w-[100%] p-4">
      <div className="">
        <h1 className=" font-semibold text-6xl rainbow-text">
          Hola, Bienvenido a WisdomMath
        </h1>
      </div>
      <div className="w-100% flex flex-wrap gap-10 justify-around">
        <div className="bg-white max-w-[350px] p-3 rounded-2xl gap-3 grid home-card drop-shadow-xl">
          <h1 className="text-2xl font-semibold text-[#e73492]">
            ¿Que es WisdomMath?
          </h1>
          <p className="text-sm text-gray-800">
            WisomMath es una aplicacion que te ayudara a mejorar com estudiante
            en el area de matematicas brindandote{" "}
            <span className="text-[#8107ee] font-semibold">infomacion</span>{" "}
            sobre temas importantes en calculo, tambien brindara{" "}
            <span className="text-[#8107ee] font-semibold">
              recursos visuales
            </span>
            para que entiendas de mejor manera los temas planteados, tambien
            contamos con un apartado de{" "}
            <span className="text-[#8107ee] font-semibold">ejercicios</span> con
            los que consolidaras tus conocimientos y un parte de{" "}
            <span className="text-[#8107ee] font-semibold">herramientas</span>{" "}
            para resolucion de ejercicios
          </p>
        </div>

        <div className="bg-white max-w-[350px] px-3 py-6 rounded-2xl grid gap-1 home-card drop-shadow-xl">
          <h1 className="text-2xl font-semibold text-[#e73492]">
            Numero de Estudiantes
          </h1>
          <h1 className="text-6xl font-semibold text-center rainbow-text">
            +100K
          </h1>
        </div>

        <div className="bg-white max-w-[750px] px-3 py-6 rounded-2xl grid gap-3 home-card drop-shadow-xl">
          <h1 className="text-2xl font-semibold text-[#e73492]">
            Nuestros patrocinadores
          </h1>
          <div className="flex flex-wrap gap-4 patro">
            <img
              //   className="grayscale"
              src={
                "https://seeklogo.com/images/M/MIT-logo-73A348B3DB-seeklogo.com.png"
              }
            />
            <img
              className="grayscale opacity-30"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_oficial_de_Universitario.png/640px-Logo_oficial_de_Universitario.png"
              }
            />
            <img
              //   className="grayscale"
              src={
                "https://seeklogo.com/images/H/harvard-university-logo-63E7093ACF-seeklogo.com.png"
              }
            />
            <img
              //   className="grayscale"
              src={
                "https://universidadsideralcarrion.com/storage/img/icons/usc.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
