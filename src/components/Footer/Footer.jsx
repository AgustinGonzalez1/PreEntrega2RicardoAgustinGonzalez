import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="flex flex-col gap-3 py-3 items-center bg-[#7753E6]">
			<p className="text-white text-sm">Copyright © 2023 - SPORTIFY</p>
			<div className="flex content-center flex-wrap">
				<Link className="redSocial red-in" to="https://www.linkedin.com/in/ricardoagustingonzalez/" target="_blank">
					<i className="fa-brands fa-linkedin"></i>
				</Link>
				<Link className="redSocial red-gh" to="https://github.com/AgustinGonzalez1" target="_blank">
					<i className="fa-brands fa-github"></i>
				</Link>
				<Link className="redSocial red-ig" to="https://www.instagram.com/cementoooo/?next=%2F" target="_blank">
					<i className="fa-brands fa-instagram"></i>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
