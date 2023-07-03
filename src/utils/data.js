import moon from "../assets/images/moon.png";
import mars from "../assets/images/mars.png";
import europa from "../assets/images/europa.png";
import titan from "../assets/images/titan.png";
import crew1 from "../assets/images/crew1.png";
import crew2 from "../assets/images/crew2.png";
import crew3 from "../assets/images/crew3.png";
import crew4 from "../assets/images/crew4.png";
export const navBarData = [
  {
    id: 1,
    name: "HOME",
    path: "/home",
  },
  {
    id: 2,
    name: "DESTINATION",
    path: "/destination",
  },
  {
    id: 3,
    name: "CREW",
    path: "/crew",
  },
  {
    id: 4,
    name: "TECHNOLOGY",
    path: "/technology",
  },
];

export const destinationSlider = [
  {
    id: 1,
    name: "MOON",
    pera: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
    image: moon,
  },
  {
    id: 2,
    name: "MARS",
    pera: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
    image: mars,
  },
  {
    id: 3,
    name: "EUROPA",
    pera: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
    image: europa,
  },
  {
    id: 4,
    name: "TITAN",
    pera: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
    image: titan,
  },
];

export const crewSlider = [
  {
    id: 1,
    name: "Commander",
    title: "Douglas Hurley",
    pera: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",

    image: crew1,
  },
  {
    id: 2,
    name: "Mission Specialist",
    title: "MARK SHUTTLEWORTH",
    pera: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: crew2,
  },
  {
    id: 3,
    name: "PILOT",
    title: "Victor Glover",
    pera: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: crew3,
  },
  {
    id: 4,
    name: "Flight Engineer",
    title: "Anousheh Ansari",
    pera: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    image: crew4,
  },
];
