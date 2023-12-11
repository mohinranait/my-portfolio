/* eslint-disable react/prop-types */


const EducationCard = ({education}) => {
    const { title, date, description} = education || {};
    return (
        <div className='mb-8'>
            <div className='mb-3'>
                <span className='py-3 px-5 inline-block border-primary border bg-transparent text-primary'>{date}</span>
            </div>
            <h4 className='text-2xl md:text-3xl font-bold text-white mb-3'>{title}</h4>
            <p className='text-gray-400'>{description}</p>
        </div>
    );
};

export default EducationCard;