import { Outlet, Link, Form, useLoaderData } from 'react-router-dom'
import { createContact, getContact } from '../constants'
import { contactTypes } from './contact'
export async function action() {
    const contacts = await createContact()
    return { contacts }
}

export async function loader() {
    const contacts = await getContact()
    return { contacts }
}

export default function Root(){
    // const { contacts } = useLoaderData() as { contacts: Array<contactTypes>}
    const contacts=[{
        first: "Your",
        last: "name",
        avatar: "https://placekitten.com/g/200/200",
        twitter:"Yangkro",
        notes: "web developer",
        favorite: true,
    }]
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input 
                            type="search" 
                            id="q" 
                            aria-label="Search contacts"
                            placeholder="search"
                            name="q"
                        />
                        <div
                            id="search-spainner"
                            aria-hidden
                            hidden={true}
                        >
                        </div>
                        <div
                            className="sr-only"
                            aria-live="polite"
                        >
                        </div>
                    </form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {
                       contacts.length ? (
                        <ul>
                            {
                                contacts.map((contact:any)=>{
                                    return (
                                        <li>
                                        <Link to={`contacts/${contact.id}`}>
                                            {
                                                contact.first || contact.last ? (
                                                    <>
                                                        { contact.first } { contact.last }
                                                    </>
                                                ):(
                                                    <i>No Name</i>
                                                )
                                            }{ " " }
                                        </Link>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                       ) :(
                        <p>
                            <i>No contacts</i>
                        </p>
                       )
                    }
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}