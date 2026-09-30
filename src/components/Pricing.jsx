import { CheckCircle2, SpaceIcon } from "lucide-react";
import {pricingOptions} from "../constants"

function Pricing() {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
                Pricing
            </h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((item, index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-900 rounded-xl">
                            <p className="text-4xl mb-8">
                                {item.title}
                                {item.title === "Pro" && <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{item.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {item.features.map((feature, index) =>(
                                   <li key={index} className="mt-8 flex items-center">
                                        <CheckCircle2/>
                                        <span className="ml-2">{feature}</span>
                                   </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-15 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
}

export default Pricing;