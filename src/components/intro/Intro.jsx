import "./intro.css"

export const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">

        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello My Name is</h2>
          <h1 className="i-name">Emma</h1>


          <div className="i-title">

            <div className="i-title-wrapper">
              <div className="i-title-item">Backend Dev</div>
            </div>
          </div>

          <div className="i-desc">
            I design and develop hardware and software solutions for companies and markets, im specializaded
            in backend languages and infrastrucure solutions.
          </div>
        </div>
      </div>


      <div className="i-right">
      </div>
    </div>
  );
};
export default Intro
