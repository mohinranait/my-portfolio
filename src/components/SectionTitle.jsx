/* eslint-disable react/prop-types */


const SectionTitle = ({title, subTitle,textAlign="left",margin}) => {
    return (
        <>
            <div className="" style={{margin: `0 ${margin}`}}>
                <p className="text-center text-2xl text-primary mb-5" style={{textAlign: textAlign}}>{title}</p>
                <p className="text-center text-2xl md:text-4xl text-white font-bold" style={{textAlign: textAlign}}>{subTitle}</p>
            </div>   
        </>
    );
};

export default SectionTitle;