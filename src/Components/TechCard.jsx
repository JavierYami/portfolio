
const TechCard = ({img, name }) => {

    return (
        <div className="flex justify-start p-5 bg-slate-600">
            <img className="w-20" src={img} alt={name} />
        </div>
    )
}

export default TechCard;