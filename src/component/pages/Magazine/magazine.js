import React from "react";
import "./magazine.css"

export default function magazine(){

      

    return(
        <div>
            <div style={{ backgroundColor:"#868e96"}}>
              <div className="row">
                <div style={{backgroundColor:"#dee2e6",fontSize:"40px"}} className="col-sm-2 d-none d-md-block">Google Ads</div>
                <div style={{backgroundColor:"#ffc107"}} className="col-sm-8 px-0">
                  {/* start carousel */}
                  <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active " >
                          <img src="./uploads/image/1622222472.jpg" className="d-block w-100 carousel-img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </div>
                        </div>
                        <div className="carousel-item " >
                          <img src="./uploads/image/1622222473.jpg" className="d-block w-100 carousel-img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                        </div>
                        <div className="carousel-item " >
                          <img src="./uploads/image/screen.JPG" className="d-block w-100 carousel-img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  {/* end carousel */}
                </div>
                <div style={{backgroundColor:"#dee2e6",fontSize:"40px"}} className="col-sm-2">Google Ads</div>
              </div>
            </div>
            {/* line 1 */}
            <div className="my-3 card-deck">
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/1622222473.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/screen.JPG" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            {/* line 2 */}
            <div className="my-3 card-deck">
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-hover border">
                <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              
              <div className="card card-hover border">
                <a href="#" style={{all:"unset"}}>
                  <img src="./uploads/image/1622222472.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </a>
              </div>
              
            </div>
            
        </div>
    );
}