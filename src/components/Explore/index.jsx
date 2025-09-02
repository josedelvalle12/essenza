import ExploreNavigator from "../Carousel/ExploreNavigator";
import Carrousel from "../Carousel/Carousel";

function ExploreSection({color= '#6D4D39'}) {

  return (
    <div className="flex flex-row h-[48rem] w-full px-40 py-32"
    style={{ backgroundColor: color }}>
      <ExploreNavigator></ExploreNavigator>
      <Carrousel></Carrousel>
    </div>
  );
}

export default ExploreSection;


