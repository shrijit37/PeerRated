const Homepage = () => {
    return (
      <div className="container-fluid" style={{ height: "fit-content", backgroundColor: "#003645", paddingTop:"10vh" }}>
        <div className="row h-100 align-items-center">
          {/* Left Section: Text */}
          <div className="col-12 col-md-6 text-center align-item-center" style={{marginTop:"10vh"}}>
            <h1 style={{ color: "orange",fontFamily:"Fjalla One" }}>Turning the impossible task of finding the right YouTube courses into a breeze, eliminating confusion with trusted user ratings.</h1>
          </div>
  
          {/* Right Section: Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img src="/images/confused.png" alt="no img" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Homepage;
  