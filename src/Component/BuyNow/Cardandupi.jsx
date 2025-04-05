import './BuuyNow.css'
import Qr_image from '../BuyNow/Upi Qr.png';

export function CardPayment(){
    return(
        <>
        <div className="whole_divcard_payment">
            <h3 className="card_details_heading">Card Details</h3>
            <input type="Number" className="Card_Number" placeholder="XXXX XXXX XXXX XXXX" />
            <div className="year_and_cvv">
                <input type="number" className="validYear" placeholder="MM/YY" />
                <input type="number" className="cvvNumber" placeholder="CVV" />
            </div>
        </div>
        </>
    );
}

export function UPIPayment(){
    return(
        <>
        <div className='whole_div_upi'>
            <h3 className='upi_heading'>UPI Payment</h3>
            <img src={Qr_image}  className='QrImage'/>
        </div>
        </>
    );
}

