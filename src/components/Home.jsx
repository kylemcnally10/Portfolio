import React, { useState } from 'react';


const Projects = (props) => {
    const projects = [
        {
            name: "Picky",
            description:
                "A Full Stack Python/Flask app that allows two users to individually search for restaurants and then decide together on a place to eat with the goal of reducing time spent and frustration.",
            image: require("../static/images/SliderDemo.gif"),
            link: "https://github.com/kylemcnally10/Picky",
        },
        {
            name: "Auction House",
            description:
                "A Full Stack online auction app built using C#/.NET to facilitate the buying and selling of products online.",
            image: require("../static/images/AHLoginRegDemo.gif"),
            link: "https://github.com/SeanMcNamee86/AuctionHouse",
        },
        {
            name: "PokeMERN",
            description:
                "A Full Stack MERN app that allows users to battle Pokemon online. This project is not deployed for Copyright purposes and was built only for educational purposes!",
            image: require("../static/images/PokeMERN.gif"),
            link: "/",
        },
        {
            name: "NASDAQ Screener",
            description:
                "A Full Stack Python/Flask app that allows two users to individually search for restaurants and then decide together on a place to eat with the goal of reducing time spent and frustration.",
            image: require("../static/images/SliderDemo.gif"),
            link: "/",
        }

    ];

    return (
        <>
            <h1>My Projects</h1>
            {projects.map((project, i) => {
                return (
                    <div key={i}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src={project.image} alt="" />
                        </a>
                    </div>
                );
            })}
        </>
    );
};

export default Projects;