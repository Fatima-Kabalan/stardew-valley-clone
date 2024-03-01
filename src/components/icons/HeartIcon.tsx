import Heart from "../svg/Heart";

export default function HeartIcon() {
  return (
    <div className="hover-rose cursor-pointer">
      <div className="parent">
        <div className="row one">
          <div className="line tl"></div>
          <div className="line"></div>
          <div className="line tr"></div>
        </div>
        <div className="row two">
          <div className="line horizontal"></div>
          <div className="flex items-center justify-center heart text-red">
            <Heart />
          </div>
          <div className="line horizontal"></div>
        </div>
        <div className="row three">
          <div className="line bl"></div>
          <div className="line"></div>
          <div className="line br"></div>
        </div>
      </div>
    </div>
  );
}
