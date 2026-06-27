
function Hero() {
    return ( 
        <section className="container-fluid " style={{backgroundColor:"rgb(43, 108, 209)",color:"white"}} >
            <div className=" p-3 ml-3 mr-3" style={{display:"flex",justifyContent:"space-between",margin:"0 150px"}}>
                <h4 >Support Portal </h4>
                <a href="/" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className=" row p-3  " style={{margin:"0px 130px"}}>
                <div className="col-6 p-3" >
                    <h1 className="fs-3">Search for an answer or browse help topics <br />to create a ticket</h1><br />
                    <input style={{padding:"20px 50px",width:"100%",fontSize:"15px",borderRadius:"10px",border:"none"}} 
                    placeholder="Eg:how do i activate F&O, why is my order getting rejected.." /> <br /> <br />
                      <div  >
                      <a href="/" style={{color:"white"}}>Track account opening</a>
                      <a href="/" style={{color:"white" ,marginLeft:"20px"}}>Track segment activation</a>
                      <a href="/" style={{color:"white" ,marginLeft:"20px"}}>Intraday</a> <br />
                      <a href="/" style={{color:"white" ,marginLeft:"0px"}}> margins</a>
                      <a href="/" style={{color:"white" ,marginLeft:"20px"}}>Kite user manual</a>
                      </div>
                </div>
                <div className="col-2 p-3 "></div>
                <div className="col-4 p-3 " style={{lineHeight:"30px"}}>
                    <h1 className="fs-3">Featured</h1>
                    <ol type="number">
                        <li><a href="/" style={{color:"white"}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="/" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;