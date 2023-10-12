import "./BestSeller.scss"
import { formatPrice } from "../../../../utils/formatPrice";
import { bestSellerArr } from "../../../../../data";


export default function BestSeller() {

    const productArr = [...bestSellerArr]

    return (
        <div className="w-full lg:px-[150px] md:px-[20px] sm:px-[10px] xl:py-[50px] lg:py-[30px]">
            <div className="h-[80px] lg:px-[40px] md:px-0 py-[20px] md:text-2xl sm:text-xl font-medium text-black flex justify-between">
                <p>Best Seller</p>
            </div>
            <div className="w-full flex flex-wrap gap-[20px] lg:pl-[30px] md:pl-0">
                <div className="rounded-2xl overflow-hidden cursor-pointer xl:w-[calc(50%_-_20px)] lg:w-[calc(100%)]">
                    <img src="/src/assets/SliderImg/MatchaPoster.webp"></img>
                </div>
                {
                    productArr && productArr.length > 0 &&
                    productArr.map((item, index) => {
                        return (
                            <div className="xl:w-[calc(25%_-_20px)] lg:w-[calc(31.33%)] md:w-[48.5%] sm:w-[46.5%] cursor-pointer" key={index} >
                                <div className="overflow-hidden rounded-2xl w-full h-auto" style={{ 'boxShadow': '0px 0px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                    <img className="" src={(item.image)}></img>
                                </div>
                                <div className="w-full h-[60px] text-black font-medium mt-2">
                                    <label className="font-medium text-base hover:text-[#f68122] cursor-pointer" onClick={() => handleDetail(item)}>{item.name}</label><br></br>
                                    <div className="flex justify-between">
                                        <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                        <label className="font-normal text-sm text-[#666]">Sold: {item.quantitySold}</label>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}