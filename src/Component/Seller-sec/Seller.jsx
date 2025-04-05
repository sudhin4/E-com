import "../Seller-sec/Seller.css";


function Sellersec({ img,headphone,trainimg,watchImg }) {
  return (
    <>
      <div className="center_sec">
        <div className="Whole_content">
          <div className="first_ctn">
              <h1 className="Heading">
                "Your One-Stop Shop for Unbeatable Deals and Quality Products!"
              </h1>
          </div>
          <div className="sec_ctn">
              <img src={img} alt="" className="sellerimg" />
          </div>
          <div className="thrid_ctn">
              <p className="para">
                "Boost your sales and reach more customers by listing your
                products on where opportunity meets visibility!"
              </p>
          </div>            
        </div>
              <div className="MovingItems">
                <img src={watchImg} alt="watch" className="Watchclipart" />
              <img src={trainimg} alt="train" className="trainclipart" />
              <img src={headphone} alt="headphone" className="Headphoneclipart" />
              </div>
              
      </div>
    </>
  );
}

export default Sellersec;
