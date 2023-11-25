import Image from "next/image";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  //   <TooltipComponent content={title} position="BottomCenter">
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor, height: "5rem" }}
      className="absolute inline-flex rounded-full h-10 w-6 right-2 top-2"
    />
    {icon}
  </button>
);

export default NavButton;
