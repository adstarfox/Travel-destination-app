import './DestinationCard.css'


const DestinationCard = ({name, imageURL, notes, international}) => {
    return(
        <div className='dest-container'>
            <p>{name}</p>
            <p>{international}</p>
            <p>{notes}</p>
            <img src={imageURL} alt="Pic" />
        </div>
    )
}

export default DestinationCard