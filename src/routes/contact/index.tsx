import { Form } from 'react-router-dom'
export type contactTypes = {
    first: string
    last: string
    avatar: string
    twitter: string
    notes: string
    favorite: boolean,
    id: string
}
export default function Contact(){
    const contact: contactTypes= {
        first: "Your",
        last: "name",
        avatar: "https://placekitten.com/g/200/200",
        twitter:"Yangkro",
        notes: "web developer",
        favorite: true,
        id:'1'
    }

    return (
        <div id="contact">
            <div>
                <img 
                    key={contact.avatar}
                    src={contact.avatar || ""}
                />
            </div>
            <div>
                <h1>
                    {
                        contact.first || contact.last ? (
                            <>
                            {
                                contact.first 
                            }
                            {
                                contact.last
                            }
                            </>
                        ):(
                            <i>No Name</i>
                        )
                    }{" "}
                </h1>
                {
                    contact.twitter && (
                        <p>
                            <a href={`https://twitter.com/${contact.twitter}`}>
                                {contact.twitter}
                            </a>
                        </p>
                    )
                }
            {
                contact.notes && <p>{contact.notes}</p>
            }
                <div>
                    <Form action='edit'>
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                        method='post'
                        action='destory'
                        onSubmit={(event)=>{
                            if(!window.confirm("Please confirm you want to delete this record")){
                                event.preventDefault()
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

function Favorite({contact}:{contact: contactTypes}){
    const favorite = contact.favorite
    return (
        <Form method='post'>
            <button 
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label = {
                    favorite ? "Remove from favorites":"Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </button>
        </Form>
    )
}