
const TechCard = ({img, name }) => {

    return (
        <div className="p-1">
            <img className="w-20" src={img} alt={name} />
        </div>
    )
}

export default TechCard;