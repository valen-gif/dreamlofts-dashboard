import background1 from "../assets/background1.mp3";
import background2 from "../assets/background2.mp3";
import background3 from "../assets/background3.mp3";

function Home() {
    return (
        <center>
            <h1 style={{color:"white", fontSize:"5rem"}}>Welcome</h1>

            <h2>Audio Testing</h2>

            <h2>Cafe Ambience (Might Turn up Volume)</h2>
            <audio loop controls>
            <source src={background1} type="audio/mp3" />
            Your browser does not support the audio tag.
            </audio>

            <h2>Rain Ambience</h2>
            <audio loop controls>
            <source src={background2} type="audio/mp3" />
            Your browser does not support the audio tag.
            </audio>

            <h2>Nature Ambience (Birds Chirping)</h2>
            <audio loop controls>
            <source src={background3} type="audio/mp3" />
            Your browser does not support the audio tag.
            </audio>

        </center>
    );
}

export default Home;
