import './Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selector"
// import { AppSlice } from '../../../redux/Slice/AppSlice';


export default function Header() {
    const cart = useSelector(cartSelector)
    const dispatch = useDispatch()
    const isHidden = useSelector((state) => state.app.isHiddenNavbar)

    const toggleNavbarMobile = () => {
        dispatch(AppSlice.actions.toggleNavbar())
    }

    return (
        <div className="header-container w-full">
            <div className='icon-bars'>
                {
                    isHidden ?
                        <i class="fa-solid fa-xmark fa-xl cursor-pointer" onClick={toggleNavbarMobile}></i>
                        :
                        <i className="fa-solid fa-bars fa-xl cursor-pointer" onClick={toggleNavbarMobile} ></i>
                }
            </div>

            <Link className='logo' to="/">
                <img className="logo-image" src="/src/assets/LogoImg/The-Coffee-House-Logo-PNG-2.png" alt="Logo" />
            </Link>

            <div className="navbar xl:text-sm lg:text-xs">
                <div className="nav">
                    <div className="dropbtn text-center"><Link className='text-base font-medium' to="/collections/all">Menu<i className="fa-solid fa-caret-down ml-1 xl:fa-2xs lg:fa-xl"></i></Link></div>
                    <div className="dropdown-content">
                        <div className='nav'><Link className='text-base font-medium' to="/collections/coffee">Coffee</Link></div>
                        <div className='nav'><Link className='text-base font-medium' to="/collections/tea">Tea</Link></div>
                        <div className='nav'><Link className='text-base font-medium' to="/collections/frosty">Frosty</Link></div>
                        <div className='nav'><Link className='text-base font-medium' to="/collections/cakesnack">Snack</Link></div>
                    </div>
                </div>
                <div className='nav'><Link className='text-base font-medium' to="/stores/HCM">Stores</Link></div>
                <div className='nav'><Link className='text-base font-medium' to="/cloudfee">CloudFee</Link></div>
                <div className='nav'><Link className='text-base font-medium' to="/recruit">Recruit</Link></div>
            </div>
            <div className='cart flex justify-end'>
                <div className='nav md:block sm:hidden'>
                    <Link className='text-base font-medium' to="/login"><i className="fa-solid fa-user fa-xl text-black hover:text-[#f68122]"></i></Link>
                </div>
                <div className='nav relative'>
                    <Link className='text-base font-medium' to="/shopping-cart"><i className="fa-solid fa-cart-shopping fa-xl text-black hover:text-[#f68122]"></i></Link>
                    <span className='absolute left-5 top-[-10px] bg-[#f68122] rounded-full px-2 text-white'>{cart.cartTotalQuantity}</span>
                </div>
            </div>
        </div>
    )
}