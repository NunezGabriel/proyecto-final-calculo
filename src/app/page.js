import NavBarComponent from "./components/navBar";
import HomeComponent from "./components/home";
export default function Home() {
  return (
    <div className="max-w-[1400px] m-auto grid-duo ">
      <NavBarComponent />
      <HomeComponent />
    </div>
  );
}
