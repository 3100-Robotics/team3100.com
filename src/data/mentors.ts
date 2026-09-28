import BergquistEric from "../assets/mentors/bergquist-eric.jpg";
import BollingerBrownPaige from "../assets/mentors/bollinger-brown-paige.jpg";
import JohnsonHarry from "../assets/mentors/johnson-harry.png";
import KelleyEsme from "../assets/mentors/kelley-esme.png";
import KelseyPhillip from "../assets/mentors/kelsey-phillip.jpg";
import KoletarJoe from "../assets/mentors/koletar-joe.png";
import MonroeMike from "../assets/mentors/monroe-mike.png";
import RomineKaren from "../assets/mentors/romine-karen.png";
import SpurgatNate from "../assets/mentors/spurgat-nate.jpg";
import type { ImageMetadata } from "astro";

export interface MentorProfileData {
    name: string;
    title: string;
    role: "coach" | "mentor";
    yearsInFirst?: [start: number | null, end?: number];
    photoAlt: string;
    imageSrc: ImageMetadata;
    bio: string[];
    tags: string[];
}

export const mentors: Record<string, MentorProfileData> = {
    Bergquist: {
        name: "Eric Bergquist",
        title: "Head Coach",
        role: "coach",
        yearsInFirst: [2018],
        photoAlt: "Eric Bergquist photo",
        imageSrc: BergquistEric,
        bio: [
            "Eric Bergquist holds a BS in Mechanical Engineering and has 5 years of experience in mechanical design and industrial automation systems for electrical connectors. He is a Certified SOLIDWORKS Associate and has 5 years of experience with Onshape, the most common CAD software used in FIRST Robotics Competition.",
            "He has 8 total years of FIRST experience as both a student and mentor. He leads CAD and the mechanical design curriculum and is responsible for the quality and maintenance of the LIGHTNING TURTLES CAD work during the FRC season.",
        ],
        tags: ["Head coach", "CAD instruction", "Alum"],
    },
    Johnson: {
        name: "Harry Johnson",
        title: "Electrical Mentor and Team IT Infrastructure",
        role: "mentor",
        yearsInFirst: [2021],
        photoAlt: "Harry Johnson photo",
        imageSrc: JohnsonHarry,
        bio: [
            "Harry Johnson has a BS in Electrical Engineering. He has 10 years of experience as a hardware engineer specializing in embedded systems and high-performance computing.",
            "He brings 5 years of FIRST experience and supports the team's electrical systems and IT infrastructure.",
        ],
        tags: ["Electrical systems", "Embedded systems"],
    },
    Kelsey: {
        name: "Phillip Kelsey",
        title: "Lead Mentor",
        role: "mentor",
        yearsInFirst: [2006],
        photoAlt: "Phillip Kelsey photo",
        imageSrc: KelseyPhillip,
        bio: [
            "Phillip Kelsey holds a BS in Mechanical Engineering and brings experience in CAD, robot design, project management, and manufacturing.",
            "He mentors students on strategy, design, build, and business responsibilities and has 20 combined years of FIRST experience as a student and mentor.",
        ],
        tags: ["Robot design", "Project management", "Alum"],
    },
    Kelley: {
        name: "Esmé Kelley",
        title: "Programming Mentor",
        role: "mentor",
        photoAlt: "Esme Kelley photo",
        imageSrc: KelleyEsme,
        bio: [
            "Esme Kelley holds a BS in Software Engineering, an MS in Computer Engineering, and an MS in Human-Computer Interaction. They have experience in interface development, user study, and software engineering.",
            "They work across TypeScript, React, Java, and Python and mentor students engaged in the software development of the robot.",
        ],
        tags: [
            "Software engineering",
            "TypeScript and React",
            "Robot software",
        ],
    },
    Romine: {
        name: "Karen Romine",
        title: "Electrical Mentor and Team Organization",
        role: "mentor",
        photoAlt: "Karen Romine photo",
        imageSrc: RomineKaren,
        bio: [
            "Karen Romine has a BS in Mechanical Engineering and an MBA. Her background includes automotive wiring design, electrical work for Formula SAE, and systems engineering.",
            "She currently works as a finance manager and supports both electrical mentoring and team organization.",
        ],
        tags: ["Team organization", "Automotive wiring", "Systems engineering"],
    },
    "Bollinger-Brown": {
        name: "Paige Bollinger-Brown",
        title: "Build and Scouting Mentor",
        role: "mentor",
        yearsInFirst: [2013],
        photoAlt: "Paige Bollinger-Brown photo",
        imageSrc: BollingerBrownPaige,
        bio: [
            "Paige Bollinger-Brown holds a BS in Mechanical Engineering and uses SOLIDWORKS CAD expertise in designing fire truck chassis.",
            "She has 13 combined years of FIRST experience as a student and mentor and supports both build and scouting work on the team.",
        ],
        tags: ["Scouting", "SOLIDWORKS", "Alum"],
    },
    Spurgat: {
        name: "Nate Spurgat",
        title: "Build Mentor",
        role: "mentor",
        yearsInFirst: [2020],
        photoAlt: "Nate Spurgat photo",
        imageSrc: SpurgatNate,
        bio: [
            "Nathan Spurgat holds a BS in Mechanical Engineering and brings experience in SOLIDWORKS CAD, ANSYS finite element analysis, computer-aided machining, and static and dynamic mechanical analysis.",
            "He has 6 combined years of FIRST experience as a student and mentor and also handles robot transportation with his truck and trailer.",
        ],
        tags: ["Mechanical analysis", "CAM", "Robot transport"],
    },
    Koletar: {
        name: "Joe Koletar",
        title: "Programming and Build Mentor",
        role: "mentor",
        yearsInFirst: [2015, 2025],
        photoAlt: "Joe Koletar photo",
        imageSrc: KoletarJoe,
        bio: [
            "Joe Koletar holds a BS in Computer Science and concluded a 32-year career as a software architect in 2021 after consulting on dozens of projects. He uses that experience to teach both technology and critical analysis and planning skills.",
            "He focuses on the strategy, design, and build aspects of robotics competition and is now in his 11th year coaching FIRST teams. Current head coach Eric Bergquist was one of his former students.",
        ],
        tags: ["Software architecture", "Build strategy"],
    },
    Monroe: {
        name: "Mike Monroe",
        title: "Business Mentor",
        role: "mentor",
        yearsInFirst: [null, 2025],
        photoAlt: "Mike Monroe photo",
        imageSrc: MonroeMike,
        bio: [
            "Mike Monroe has a BS in Computer Science and Engineering and experience in enterprise architecture, solution architecture, Agile project management, software design, and leading technology teams.",
            "He helps the LIGHTNING TURTLES set goals and fundraise.",
        ],
        tags: ["Fundraising", "Goal setting", "Technology leadership"],
    },
};
