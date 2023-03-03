import React from "react";

export const Collection = ({name , images}) => {
    const [img , setImg] = React.useState(-1);
    const [imgOverSize , setImgOverSize] = React.useState(false);

    const arrImg = [images[1] , images[2] , images[3]];

    const body = document.querySelector('body').classList;

    function fullSizeImg(index){
        if(img === index){
            setImg(-1);
            body.remove("lock");
            return
        }
        setImg(index);
        body.add("lock");
    }

    function fullSizeBigImg(){
        if(!imgOverSize){
            body.add("lock");
        }
        else{
            body.remove("lock");
        }
        setImgOverSize(!imgOverSize);
    }
    return (
        <div className="collection">
            <div 
                onClick={() => fullSizeBigImg()} 
                className={imgOverSize ? "img-big-body active" : "img-big-body"}>
                <img src={images[0]} className="img-big" alt="" />
            </div>
            <div className="collection-bottom">
                {arrImg.map((index) => {
                    return(
                        <div 
                            key={index} onClick={()=> fullSizeImg(index)} 
                            className={img === index ? "img-body active" : "img-body"}>
                            <img src={index} className="img-mini" alt="" />
                        </div>
                    )
                })}
            </div>
            <p>{name}</p>
        </div>
    )
}