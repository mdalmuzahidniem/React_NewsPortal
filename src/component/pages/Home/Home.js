import React from "react";
import "./Home.css"


export default function Home(){
    return(
        <div>
            <div className="row px-2" style={{backgroundColor:"#e6e7e8", marginInline:"auto"}}>
                
                <div className="col-sm-7 py-3 my-2">
                    <div style={{backgroundColor:"white", height:"100%", borderRadius:".5rem"}}>
                        <div className="row py-3 image-container mx-auto">
                            <img src="./uploads/image/1622222472.jpg" alt="world time" style={{maxWidth:"-webkit-fill-available"}}/>
                        </div>
                        <div className="row news-title mx-auto">
                            <h3>Shakib al hasan becomes no. 1 all rounder in the one day international cricket.</h3>
                        </div>
                    </div>
                </div>

                <div className="col-sm-5 py-3 my-2" >
                    <div className="px-2 align-items-center" style={{backgroundColor:"white", height:"100%", borderRadius:".5rem"}}>
                        <h3 className="px-2 pt-4 pb-2 mb-0">Top News</h3>
                        < hr className="my-auto"/>

                        {/* top news news list */}
                        <div className="row mx-auto hoverEffect mt-2" style={{backgroundColor:"#95baf140"}}>
                            
                            <div className="col-sm-4 px-0">
                                <div className="image-container mx-auto">
                                    <img className="top-news-image" src="./uploads/image/1622222473.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <p>Bangladesh won the one-day cricket world cup 2023</p>
                            </div>
                        </div>
                        <hr/>
                        {/* 2nd row */}

                        <div className="row mx-auto hoverEffect mt-2" style={{backgroundColor:"#95baf140"}}>
                            
                            <div className="col-sm-4 px-0">
                                <div className="image-container mx-auto">
                                    <img className="top-news-image" src="./uploads/image/1622222472.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <p>Bangladesh won the one-day cricket world cup 2023</p>
                            </div>
                        </div>
                        <hr/>

                        {/* 3rd row */}
                        <div className="row mx-auto hoverEffect mt-2" style={{backgroundColor:"#95baf140"}}>
                            
                            <div className="col-sm-4 px-0">
                                <div className="image-container mx-auto">
                                    <img className="top-news-image" src="./uploads/image/screen.JPG" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <p>Bangladesh won the one-day cricket world cup 2023</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>

            {/*--banner for promotion of a brand section*/}
            <div className="row mx-0">
                <div className="col-md-5 px-0 " style={{fontSize:"30px", backgroundColor:"#dee2e6",minHeight:"200px"}}>
                    Google Ads
                </div>

                <div className="col-md-7 px-0">
                    <div className="my-3 card-deck">
                        <div className="card card-hover border" style={{minWidth:"100px"}}>
                            <img src="./uploads/image/1622222473.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body" >
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div className="card card-hover border" >
                            <img src="./uploads/image/1622222473.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body" >
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card card-hover border" >
                            <img src="./uploads/image/1622222473.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body" >
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            {/* end of banner for promotion of a brand section */}

            {/* news cart */}
            <div className="my-3 py-3 card-deck" style={{backgroundColor:"#e6e7e8"}}>
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
            {/* news cart end */}
        </div>
    
        
    );
} 