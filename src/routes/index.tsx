export default function Root(){
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
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li><a href={`contacts/1`}>Your Name</a></li>
                        <li><a href={`contacts/2`}>Your Friends</a></li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    )
}