import React from "react";
import "./Home.css"


export default function Home(){
    return(
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
                <div className="px-2" style={{backgroundColor:"white", height:"100%", borderRadius:".5rem"}}>
                    <h3 className="px-2 py-2 mb-0">Top News</h3>
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
                    <hr/>
                    
                </div>
            </div>
            
        </div>
        
    );
} 