import IntroContext from "./components/IntroContext";
import IntroPartner from "./components/IntroPartner";

export default function Introduction() {
  return (
    <div className="w-full text-white ">
      <IntroContext />
      <IntroPartner />
    </div>
  );
}
