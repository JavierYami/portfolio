import MyStack from "./MyStack"

const About  = () => {

    return (
        <section id="about" className="container grid grid-cols-2 mx-auto w-5/6 mb-20">
            <div >
            <h1 className="text-cyan-500 text-5xl font-black text-center mb-12">{'<About me />'}</h1>
            <p className="text-justify text-s mb-12">I am an empathetic and communicative individual who loves working in teams. I view mistakes as opportunities for growth and am always willing to face them, find solutions, and learn from them. I also enjoy learning new technologies and staying updated on the ones I am already familiar with. Currently, I am seeking my first professional opportunity as a Full Stack, Front End, or Back End Developer. I am excited to apply my skills in a work environment and am always eager to learn. I would be extremely grateful if given the opportunity.
            Outside of work, I have a passion for video games, particularly Halo. I am a big fan of Billie Eilish, and I absolutely adore turtles. I currently have three turtles whom I love dearly. 🐢</p>
            </div>
            <div>
                <MyStack/>
            </div>
        </section>
    ) 
}

export default About