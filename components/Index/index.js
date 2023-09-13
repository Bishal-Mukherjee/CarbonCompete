import HomeComponent from "./Home";
import MissionComponent from "./Mission";
import FeaturesComponent from "./Features";
import GoalsComponent from "./Goals";
import CarbonEmissionsComponent from "./Emissions";
import GetInTouchComponent from "./GetInTouch";

export default function Index() {
  return (
    <>
      <HomeComponent />
      <MissionComponent />
      <FeaturesComponent />
      <GoalsComponent />
      <CarbonEmissionsComponent />
      <GetInTouchComponent />
    </>
  );
}
