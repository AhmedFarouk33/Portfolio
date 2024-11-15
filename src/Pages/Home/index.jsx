import "./index.css";
export default function index() {
  const userName = "Everyone";
  return (
    <div className="Home">
      <h2 className="hello">Hello {userName},</h2>
      <h1 className="myName pt-1">
        I`m, Ahmed <br /> Farouk
      </h1>
      <button className="homeBtn">Front-End Develober</button>
    </div>
  );
}
