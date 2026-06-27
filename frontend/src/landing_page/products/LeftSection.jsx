function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 "> 
                    <img src={imageURL} alt="section"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{textDecoration:"none" ,marginLeft:"50px"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                     <div className="mt-4"> 
                    <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" alt="gh" /></a>
                    <a href={appStore} style={{marginLeft:"25px"}} ><img src="/media/images/appstoreBadge.svg"  alt="appstore"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;