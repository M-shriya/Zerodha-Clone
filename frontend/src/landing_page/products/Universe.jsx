function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>


        <div className="col-4 p-3  mt-5 ">
          <img src="/media/images/zerodhaFundhouse.png" alt ="fg"  style={{width:"180px"}} />
          <p className="text-muted mt-3" style={{fontSize:"12px"}}>
            Our asset management venture <br /> that is creating simple and transparent
            index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="/media/images/sensibullLogo.svg" alt ="fg"  style={{width:"200px"}}/>
          <p className="text-small text-muted mt-4" style={{fontSize:"12px"}}>
            Options trading platform that lets you <br /> create strategies, analyze
            positions, and examine <br /> data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="/media/images/goldenpiLogo.png" alt ="fg" style={{width:"180px"}} />
          <p className="text-small text-muted mt-2"style={{fontSize:"12px"}}>
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>


        <div className="col-4 p-3 mt-5">
          <img src="/media/images/streakLogo.png" alt ="fg"  style={{width:"180px"}} />
           <p className="text-small text-muted mt-3" style={{fontSize:"12px"}}>
            Systematic trading platform <br />that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="/media/images/smallcaseLogo.png" alt ="fg"  style={{width:"180px"}}/>
         <p className="text-small text-muted mt-3" style={{fontSize:"12px"}}>
            Thematic investing platform <br /> that helps you invest in diversified <br />
            baskets of stocks on ETFs.
        </p>
        </div>
        <div className="col-4 p-3  mt-5">
        <img src="/media/images/dittoLogo.png"  alt ="fg" style={{width:"150px"}}/>
        <p className="text-small text-muted mt-3" style={{fontSize:"12px"}}>
            Personalized advice on life <br /> and health insurance. No spam <br /> and no
            mis-selling. Sign up for free
        </p>
        </div>
        <button
            className=" p-2 btn btn-primary fs-5 mt-5 mb-5"
            style={{ width: "14%",height:"50px", margin: "0  auto" }}
        >
            Sign up for free
        </button>
    </div>
    </div>
    );
}

export default Universe;
