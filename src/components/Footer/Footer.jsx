const Footer = () => {
	return (
		<footer className="flex flex-col gap-3 py-3 items-center bg-[#7753E6]">
			<p className="text-white text-sm">Copyright © 2023 - Desarrollado por Agustin Gonzalez</p>
			<div className="flex content-center flex-wrap">
				<a className="redSocial red-in" href="https://www.linkedin.com/in/ricardoagustingonzalez/" target="_blank">
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a className="redSocial red-gh" href="https://github.com/AgustinGonzalez1" target="_blank">
					<i className="fa-brands fa-github"></i>
				</a>
				<a className="redSocial red-ig" href="https://www.instagram.com/cementoooo/?next=%2F" target="_blank">
					<i className="fa-brands fa-instagram"></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
