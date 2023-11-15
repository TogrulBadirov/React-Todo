import React, { useState } from 'react'
import "./index.css"
const ImgSlider = () => {
    const [mainImg, setMainImg] = useState("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")
  return (
    <>
    <div className="slider-container">
        <div className="main-img">
            <img src={mainImg} alt="" />
        </div>
        <div className="imgs">
            <img src="https://i.pinimg.com/736x/73/84/eb/7384eb896c87f613f4d36bba5a24108b.jpg" onClick={(e)=>setMainImg(e.target.src)} alt="" />
            <img src="https://st5.depositphotos.com/16122460/65195/i/450/depositphotos_651951020-stock-photo-texture-bright-violet-brick-wall.jpg"  onClick={(e)=>setMainImg(e.target.src)} alt="" />
            <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"  onClick={(e)=>setMainImg(e.target.src)} alt="" />
        </div>
    </div>
    </>
  )
}

export default ImgSlider