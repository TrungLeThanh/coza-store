import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="wrap-blog">
            <div className="banner-blog">
                <h1 style={{fontSize: '40px', lineHeight: '250px', color: '#fff'}}>| Blog</h1>
            </div>
            <div className="content">
                <div className="row">
                    <div id="blog-image" className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="image1">
                            <img className="hover-img" src="/images/blim1.webp" alt="" style={{width: '100%'}} />
                            <h2 style={{paddingTop: '30px'}}>8 Inspiring Ways to Wear Dresses in the Winter</h2> <br />
                            <p style={{fontSize: '16px'}}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <p style={{fontWeight: 'bold', color: 'black'}}>- By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
                        </div>
                        <div className="image2">
                            <img className="hover-img" src="/images/blim2.webp" alt="" style={{width: '100%'}} />
                            <h2 style={{paddingTop: '30px'}}>The Great Big List of Men’s Gifts for the Holidays</h2> <br />
                            <p style={{fontSize: '16px'}}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <p style={{fontWeight: 'bold', color: 'black'}}>- By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
                        </div>
                        <div className="image2">
                            <img className="hover-img" src="/images/blim3.webp" alt="" style={{width: '100%'}} />
                            <h2 style={{paddingTop: '30px'}}>5 Winter-to-Spring Fashion Trends to Try Now</h2> <br />
                            <p style={{fontSize: '16px'}}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <p style={{fontWeight: 'bold', color: 'black'}}>- By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
                        </div>
                    </div>
                    <div id="sub" className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="categories">
                            <h4>Categories</h4> <br />
                            <hr />
                            <p>Fashion</p> <hr />
                            <p>Buety</p> <hr />
                            <p>Street Style</p> <hr />
                            <p>Life Style</p> <hr />
                            <p>DIY & Cafts</p> <hr />
                        </div>
                        <div className="featured">
                            <h4>Featured Products</h4> <br />
                            <span>
                                <img src="/images/blog1.webp" style={{width: '25%'}} alt="" />
                                <span style={{position: 'absolute', paddingLeft: '20px'}}>White Shirt With  Pleat <br />Detail Back</span>
                                <span style={{position: 'absolute', paddingLeft: '20px', paddingTop: '60px'}}>$ 19.00</span>
                            </span> <br /> <br />
                            <span>
                                <img src="/images/blog2.webp" style={{width: '25%'}} alt="" />
                                <span style={{position: 'absolute', paddingLeft: '20px'}}>Converse All Star Hi <br /> Black Canvas</span>
                                <span style={{position: 'absolute', paddingLeft: '20px', paddingTop: '60px'}}>$ 39.00</span>
                            </span> <br /> <br />
                            <span>
                                <img src="/images/blog3.webp" style={{width: '25%'}} alt="" />
                                <span style={{position: 'absolute', paddingLeft: '20px'}}>Nixon Porter Leather Watch <br /> In Tan</span>
                                <span style={{position: 'absolute', paddingLeft: '20px', paddingTop: '60px'}}>$ 17.00</span>
                            </span>
                        </div>
                        <div className="archive">
                            <h4>Archive</h4> <br />
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>July 2021</p>
                                <p>(18)</p>
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>June 2021</p>
                                <p>(15)</p>
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>May 2021</p>
                                <p>(19)</p>
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>April 2021</p>
                                <p>(29)</p>
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>March 2021</p>
                                <p>(10)</p>
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>February 2021</p>
                                <p>(10)</p>
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>January 2021</p>
                                <p>(10)</p>
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-between', paddingRight: '50px', fontSize: '15px'}}>
                                <p>December 2021</p>
                                <p>(12)</p>
                            </section>
                        </div>
                        <div className="tags">
                            <h4>Tags</h4> <br />
                            <span>
                                <p className="ui label">
                                    Fashion
                                    <i className="delete icon"></i>
                                </p>
                                <p className="ui label">
                                    Life Style
                                    <i className="delete icon"></i>
                                </p>
                                <p className="ui label">
                                    Denim
                                    <i className="delete icon"></i>
                                </p>
                                
                            </span> <br /> <br />
                            <span>
                                <p className="ui label">
                                    Street Style
                                    <i className="delete icon"></i>
                                </p>
                                <p className="ui label">
                                    Craft
                                    <i className="delete icon"></i>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
