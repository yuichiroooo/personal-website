import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { twitterUrl, githubUrl, email } from "@/app/_constants/urls";

export default function Footer() {
    return (
        <footer>
            <div className="flex justify-center m-6">
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="mr-6"><FaXTwitter size={35} /></a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub size={35} /></a>
            </div>
            <p className="flex justify-center mb-10">Email: {email}</p>
        </footer>
    )
}