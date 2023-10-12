import SliderSection from "./SliderSection";
import { allProductArr } from "../../../../data";

export default function CoffeeSlider({ settings }) {
    const productArr = [...allProductArr]
    return (
        <SliderSection productArr={productArr} settings={settings} />

    )
}
