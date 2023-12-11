const ServiceCard = ({service}) => {
    const {icon,title, details} = service || {}
    return (
        <>
            <div className="border-4 mb-28 lg:mb-0 border-[#111] pt-16 pb-8 px-5 relative">
                {icon}
                <h4 className="text-2xl mb-3 font-bold text-white mt-5">{title}</h4>
                <p className='text-gray-400'>{details}</p>
            </div>   
        </>
    );
};

export default ServiceCard;