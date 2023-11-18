import { Icon  } from "@mui/material"
import { useState } from "react"

export const ImageSlider = ({ images }) => {
    const [ currentImg, setCurrentImg ] = useState(0);

    const nextImg = () => {
        const newImg = (currentImg === images?.length-1 ) ? 0 : currentImg+1;
        setCurrentImg(newImg);
      }
  
      const prevImg = () => {
        const newImg = (currentImg === 0) ? images?.length-1 : currentImg-1;
        setCurrentImg(newImg);
      } 

  return (
    <div className='img-container' >
         { 
            images?.map((img, id) => ( 
                <div key={id} className='image' style={{ backgroundImage: `url(${img})`, flex:  id===currentImg ? 2 : 0 }}/>
             ))
         }
        <div className='arrow-btn-container'>
          <div className="arrow-btn left" onClick={() => prevImg()}><Icon sx={{fontSize: '1rem', '&:hover': { fontSize: '1.3rem'}}}>arrow_back_ios</Icon></div>
          <div className="arrow-btn right" onClick={() => nextImg()}><Icon sx={{fontSize: '1rem', '&:hover': { fontSize: '1.3rem'}}}>arrow_forward_ios</Icon></div>
        </div>
    </div>
  )
}
