import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
// thêm vào cái giỏ, tính luôn cái giá 
import "./Dogs.css"
const DogsCard = (props) => {
    const{id, name, breed,description,price, imageUrl}=props;
    const {addToCart,setTotal}=useContext(CartContext);
    const [isAdded, setAdded]= useState(false);
    const handleClick=()=>{
        setAdded(true);
        const newItems={
            name:name,
            price: price,
            imageUrl:imageUrl
        };
        addToCart((item)=>[...item,newItems]);// cach de add 
        setTotal((total)=>total+= Number(price));// increase total 
    }
    // addto card ben ban cho an vao them vao my cart
    // dog-info: name, breed
    // dog-container : image, description, price
    // render conditional statement: no dog -> click added 
                                // have dog => add to cart 
    return ( 
        <>
        <section className="dogs">
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>
            <div className="dogs-img-container">
                <img className="dog-img" src={imageUrl} alt={`picture of ${name}`} />
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">{price }$</div>
            {isAdded ?(// redering conditional statement 
                 <button 
                 className="dogs-btn-disabled"
                 >ADDED</button>
            ):(
            <button 
            className="dogs-btn"
            onClick={handleClick}
            
            >ADD TO CART</button>
            )}
        </section>
        </>
    )
   
}
 
export default DogsCard;