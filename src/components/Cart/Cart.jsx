import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css"
// ban dau co de [{}] nen mac dinh la rong, arr[0]
const Cart=()=>{
    // làm rõ biến nào cần sử dụng 
    const {myCart, total, setTotal,addToCart}= useContext(CartContext)
    const navigate=useNavigate();// chuyên hướng trang sang 1 trang khác 
    const handleCheckout=()=>{
        // set total =0, all of the dogs= none nên ta dùng slice bắt đầu 
        // từ vị trí thứ nhất 
        setTotal(0),
        addToCart([{}])
    }
    const handleHome=()=>{
        navigate("/")
    }
    return(
    <>
       <section className="cart-container">
           <div className="cart-header">CHECKOUT:</div>
           <div className="cart-items">
               {myCart.slice(1).map((item)=>{
                return(
                    <div className="cart-item">
                        <img src={item.imageUrl}
                         className="cart-item-img"alt="error" />
                        {item.name}:{item.price}$
                    </div>
                )})
               }
               <div className="cart-total">TOTAL: {total}</div>
               <button className="cart-checkout" onClick={handleCheckout}>DONE</button>
               <button className="cart-gohome" onClick={handleHome}>RETURN HOME</button>
           </div>
       </section>
    </>)
}
export default Cart;