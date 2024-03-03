import Card from "../atoms/Card";
import ModesCard from "../atoms/ModesCard";

export default function RatingSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 m-4">
      <Card />
      <ModesCard />
    </div>
  );
}
