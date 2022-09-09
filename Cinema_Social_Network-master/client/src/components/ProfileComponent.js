import React, {Component} from "react";

class Profile extends Component{
    constructor(props) {
        super(props);    

        this.state={
            username:"Ramtej",
            password: "dhd",
            noOfReviews: 100,
            noOfLists: 2
        }  
    }

    render(){

        return(
            <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                  <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000', height: '200px'}}>
                      <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
                        <img src="/assets/images/logo.png" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: '150px', zIndex: 1}} />
                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
                          Edit profile
                        </button>
                      </div>
                      <div className="ms-3" style={{marginTop: '130px'}}>
                        <h5>Andy Horwitz</h5>
                        <p>New York</p>
                      </div>
                    </div>
                    <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                      <div className="d-flex justify-content-end text-center py-1">
                        <div>
                          <p className="mb-1 h5">{this.state.noOfReviews}</p>
                          <p className="small text-muted mb-0">Reviews</p>
                        </div>
                        <div className="px-3">
                          <p className="mb-1 h5">{this.state.noOfLists}</p>
                          <p className="small text-muted mb-0">Lists</p>
                        </div>
                       
                      </div>
                    </div>
                    <div className="card-body p-4 text-black">
                      <div className="mb-5">
                        <p className="lead fw-normal mb-1">Watchlist</p>
                       {/* insert some cars in here */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0">Recent Reviews</p>
                      </div>
                      <div className="row g-2">
                        <div className="col mb-2">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="image 1" className="w-100 rounded-3" />
                        </div>
                        <div className="col mb-2">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 1" className="w-100 rounded-3" />
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className="col">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 1" className="w-100 rounded-3" />
                        </div>
                        <div className="col">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 1" className="w-100 rounded-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
           
        );
    }


}
export default Profile;