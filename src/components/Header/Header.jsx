import video from "./images/header.mp4";

const Header = () => {
	return (
		<header className="w-full flex flex-col justify-center mt-[80px] bg-[#f8f8f8]">
			<section className="flex flex-col container mx-auto bg-transparent xl:w-[1280px]">
				<div className="flex justify-center">
					<div className="w-full mt-[60px]">
						<video src={video} className="w-full" autoPlay loop muted></video>
					</div>
				</div>
				<div className="flex justify-center items-center overflow-hidden h-[60px]">
					<h1 className="text-[7vw] md:text-[50px] text-black animate-mover1 md:animate-mover relative font-bold">SPORTIFY</h1>
				</div>
			</section>
		</header>
	);
};

export default Header;
