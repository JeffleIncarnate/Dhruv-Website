import "./splashOthers.css";

export default function SplashOthers(props: any) {
  return (
    <div className="DHR__SplashOthers">
      <h1>{`<!-- ${props.h1} -->`}</h1>
      <div className="DHR__SplashOthers-Arrow DHR__SplashOthers-Bounce">
        <strong>
          <i className="fa fa-arrow-down"></i>
        </strong>
      </div>
    </div>
  );
}
