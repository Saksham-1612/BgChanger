function BottomBar({ setColor }) {
  return (
    <div className="w-full text flex justify-center">
      <div className="border w-min absolute bottom-10  px-10 rounded-xl border-white p-4 flex space-x-5 ">
        <div onClick={() => setColor("black")}>Black</div>
        <div
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </div>
        <div
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </div>
        <div
          onClick={() => {
            setColor("orange");
          }}
        >
          Orange
        </div>
        <div
          onClick={() => {
            setColor("magenta");
          }}
        >
          Magenta
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
