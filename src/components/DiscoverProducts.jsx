import { CheckCircle } from 'lucide-react'
import React from 'react'

function DiscoverProducts() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
           {/* Text Section */}
           <div className="flex flex-col justify-center">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
               <span className="text-orange-500">Who Makes</span> Your Food?
             </h2>
             <p className="mt-4 text-lg text-gray-700 font-semibold">
               Our mission is to help grow the{" "}
               <span className="text-orange-500">local food ecosystem</span> in
               BC and across Canada. Why?
             </p>
             <ul className="mt-6 space-y-3">
               {[
                 "Because it connects us to the land we live on, and to the people who live here.",
                 "Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation.",
                 "Because good local food makes our corner of the world a better place to live.",
                 "Because it supports local jobs.",
                 "Because it makes more sense for the environment.",
               ].map((text, index) => (
                 <li key={index} className="flex items-start space-x-3">
                   <CheckCircle className="text-orange-500 w-6 h-6 flex-shrink-0" />
                   <span className="text-gray-800 text-lg">{text}</span>
                 </li>
               ))}
             </ul>
             <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
               Discover our Producers
             </button>
           </div>
 
           {/* Image Section */}
           <div className="flex justify-center lg:justify-end h-full min-h-[400px] md:min-h-[500px]">
             <img
               src="/side-banner.png"
               alt="Picking fresh blueberries"
               className="rounded-lg shadow-md w-full max-w-lg h-full object-cover"
             />
           </div>
         </div>
       </section>
  )
}

export default DiscoverProducts