import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Service() {
    const services = [
        {pachIcon:'themewagon/services/icon1.png', title:'Send Texts Instantly', description:'Financial planning, forecasting and adjusting rapidly with customer demands and budgets.'},
        {pachIcon:'themewagon/services/icon2.png', title:'Better Organized', description:'Latest technology and experienced guidance, trained HR specialists to keep updated.'},
        {pachIcon:'themewagon/services/icon3.png', title:'Analytical Statistics', description:'Messages, real-time reminders, memos, and many more will keep your team in sync.'},
        
    ];
    return (
        <div className="flex flex-col justify-center items-center w-full py-8  gap-8 lg:px-50
         bg-[url('/themewagon/services/illustration1.png')] bg-no-repeat bg-[length:15%] bg-[position:15%_15%]">
            <div className="flex flex-col text-center  gap-4 ">
                <h1 className="text-gray-700 text-lg md:text-4xl ">Service</h1>
                <p className="w-full md:w-140 px-4 text-gray-400 text-xs">We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-20 ">

                {
                    services.map((service, index)=>{
                       return <div key={index} className={`flex flex-col justify-center  items-center gap-6 border border-white rounded-xl px-6 py-14  h-50  
                        md:h-80  lg:h-90  ${index%2==0 ? 'bg-white/10 backdrop-blur-md': 'bg-white/40 backdrop-blur-md'}`}>
                            <img src={service.pachIcon} alt={service.title} className="w-10 h-16 md:14 md:h-20 lg:w-18 lg:h-24 object-contain" />
                            <div className="flex flex-col gap-5">
                                <h1 className="w-full text-left text-gray-600">{service.title}</h1>
                                <p className="w-50 text-left text-gray-400 text-xs">{service.description}</p>
                            </div>
                            
                            <a className="text-[#4E92F9] w-full text-left text-xs flex items-center gap-2">Learn More  <ArrowRightIcon className="w-5 h-5" /> </a>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Service;