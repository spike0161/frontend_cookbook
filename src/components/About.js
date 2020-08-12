import React from 'react'


const About = props => {
    return(
        <div className="about">
            <h1>About CookBook</h1>
            <p>Are you a food enthusiast and love to cook? Try out recipes from all <br/>
                around the world? Then this is a perfect app for you! Share and save<br/>
                your favorite recipes, test your culinary skills and show us the <br/>
                picture
                of your dish!
            </p>
            <div className="about-created">
                <footer>
                <h6>Created by:</h6>
                <p>Dean Hildebrand </p>
                <a href="https://www.linkedin.com/in/hildebranddean/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/spike0161"><i class="fab fa-github"></i></a>
                <p>Marija Stojanovic</p>
                <a href="https://www.linkedin.com/in/marijastojanovic1987/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/marijastojanovic5"><i class="fab fa-github" style={{font: 24}}></i></a>
                <p>&#169; 2020</p>
                </footer>
            </div>
        </div>
    )
}
export default About
