function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
         <h1 className="text-center  "> People</h1>
      </div>

      <div className="row p-3  text-muted "  style={{fontSize:"19px",lineHeight:"1.8"}}>
        
        <div className="col-6  p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg" alt="nithin"
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h4 className=" fs-5  mb-3 mt-3">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>

        <div className="col-6 p-3">
          
          <p className="pt-5 " style={{ fontSize: "17px" }}>
            
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p style={{ fontSize: "17px" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p style={{ fontSize: "17px" }}>Playing basketball is his zen.</p>
          <p style={{ fontSize: "17px" }}>Connect on
            <a href="/" style={{ textDecoration: "none" }}>Homepage</a>/
            <a href="/" style={{ textDecoration: "none" }}>TradingQnA</a> /
            <a href="/" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
