import { useNavigate } from 'react-router-dom';
import '../Modalforerror/Error.css'
import { TiTick } from "react-icons/ti";



function PublishModal(){
      const navigate = useNavigate();
    return(
        <>
        <div className="publishModalfull">
            <span className='bar'></span>
            <TiTick className='Icon' />
        <p className="Publishcontent"> Successfully Published Your Product  </p>
        <div className='buttonscontinue_add'>
            <button className="Continue"  onClick={()=>navigate(`/`)}>Continue</button>

        </div>

        </div>
        
        </>
    );
}

export default PublishModal;