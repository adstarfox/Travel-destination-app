import { useState } from "react"



const AddDestination = () => {
    const [name, setName] = useState('')
    const [notes, setNotes] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [international, setInternational] = useState(false)

    return(
        <>
            <form>
                <input placeholder="name" onChange={e => setName(e.target.value)} />
                <input placeholder="notes" onChange={e => setNotes(e.target.value)} />
                <input type="checkbox" checked={international} onChange={e => setInternational(!international)}/>
                <input placeholder="Image URL" onChange={e => setImageURL(e.target.value)} />
            </form>
        </>
    )
}

export default AddDestination