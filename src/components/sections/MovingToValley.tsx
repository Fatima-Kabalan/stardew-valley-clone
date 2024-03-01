import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import AddIcon from "../icons/AddIcon";

export default function MovingToValley() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-12 gap-4 lg:gap-6">
      <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8 p-2">
        <h3 className="text-dark_gray font-bold text-xl lg:text-2xl">
          You're moving to the valley...
        </h3>
        <p className="text-base lg:text-xl text-gray-500">
          You’ve inherited your grandfather’s old farm plot in Stardew Valley.
          Armed with hand-me-down tools and a few coins, you set out to begin
          your new life. Can you learn to live off the land and turn these
          overgrown fields into a thriving home? It won’t be easy. Ever since
          Joja Corporation came to town, the old ways of life have all but
          disappeared. The community center, once the town’s most vibrant hub of
          activity, now lies in shambles. But the valley seems full of
          opportunity. With a little dedication, you might just be the one to
          restore Stardew Valley to greatness!
        </p>
        <div className="flex flex-col justify-center  gap-4">
          <div className="flex gap-2 items-center hover-red cursor-pointer hover-rose">
            <div className="w-6 h-6 text-red">
              <AddIcon />
            </div>
            <h1 className="text-red text-base lg:text-2xl font-semibold ">
              Read More
            </h1>
          </div>
          <span className="text-lighter_gray text-sm">
            Software description provided by the publisher.
          </span>
          <div>
            <Button text={"Explore this game's official website"} />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <img
          src={require("../../assets/images/hero.avif")}
          alt="Image"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
