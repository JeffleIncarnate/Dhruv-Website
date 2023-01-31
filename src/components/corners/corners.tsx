import "./corners.css";

export default function Corners() {
  return (
    <>
      <div className="DHR__Corners-Div DHR__Corners-TOP_LEFT_TOP"></div>
      <div className="DHR__Corners-Div DHR__Corners-TOP_LEFT_SIDE"></div>
      <div className="DHR__Corners-Div DHR__Corners-BOTTOM_RIGHT_BOTTOM"></div>
      <div className="DHR__Corners-Div DHR__Corners-BOTTOM_RIGHT_SIDE"></div>

      <div className="DHR__Corners-Div_Time">
        <h2>{new Date().toLocaleDateString() + ""}</h2>
      </div>
    </>
  );
}
