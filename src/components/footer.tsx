import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <div className="relative mx-auto flex h-lvh w-[90%] flex-col items-center justify-evenly">
      <div className="flex w-full flex-col items-center gap-4">
        <p>
          Only contact me if you're a{" "}
          <span className="font-bold capitalize">#Moyai moment</span>
        </p>
        <h2 className="font-header text-8xl font-bold uppercase">contact ME</h2>
        <h3 className="flex flex-col items-center gap-2 font-header text-7xl font-bold after:h-1 after:w-[120%] after:bg-white after:content-['']">
          dhruv@dhruvrayat.com
        </h3>
      </div>

      <footer className="flex w-full gap-12">
        <div className="flex-1 space-y-1">
          <h2 className="flex w-full flex-col font-header font-bold after:h-1 after:w-full after:bg-white after:content-['']">
            Navigation
          </h2>

          <ul className="flex flex-col gap-1 font-header">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Selected Works</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 space-y-1">
          <h2 className="flex w-full flex-col font-header font-bold after:h-1 after:w-full after:bg-white after:content-['']">
            Socials
          </h2>

          <ul className="flex flex-col gap-1 font-header">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} />
              <a href="">Github</a>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTwitter} />
              <a href="">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faInstagram} />
              <a href="">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedin} />
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="absolute bottom-0 flex w-full justify-between">
        <p>Made with 🗿</p>
        <p>Powered by 🤓</p>
      </div>
    </div>
  );
};
