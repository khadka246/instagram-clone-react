// import image from "../../public/logo192.png"

function Profile(){
    return (
        <img src="/logo192.png"/>
    );
}

export default function Gallery() {
    return(
        <section>
            <h1>These are my profile pictures</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    );
}