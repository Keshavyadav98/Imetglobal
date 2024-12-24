const Card10Page = ({imag,heading}) => {
    return (
        <div className="flex items-center bg-[#E5A632] p-6 rounded-lg shadow-md space-x-4">
            {imag}
            <div>
                <h3 className="text-white font-bold text-xl">{heading}</h3>
            </div>
        </div>
    )
}

export default Card10Page;