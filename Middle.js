function Middle (){
    return(
        <div className="Main-container">
            <div className="details">
                <div className="your-detail">
                    <h1>Laura Smith</h1>
                    <h3>Frontend Developer</h3>
                    <p>my.website</p>
                </div>
                <div className="social-media">
                    <button className="email">
                        <i class="fa-solid fa-envelope"></i>
                        <span>Email</span>
                    </button>
                    <button className="linkedin">
                        <i class="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </button>
                </div>
                <div className="your-ai">
                        <div className="about">
                            <h3>About</h3>
                            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        </div>
                        <div className="interest">
                            <h3>Interests</h3>
                            <p>ood expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Middle;