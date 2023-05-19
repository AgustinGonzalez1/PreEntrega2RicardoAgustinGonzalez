import Img1 from "./images/header1.webp";
import Img2 from "./images/header2.webp";
import Img3 from "./images/header3.webp";
import Img4 from "./images/header4.webp";
import Img5 from "./images/header5.webp";

const Header = () => {
	return (
		<header className="w-full flex flex-col justify-center mt-[80px]">
			<section className=" flex flex-col container mx-auto bg-[#e0e1dd]">
				<div className="w-full flex justify-evenly">
					<div className="w-[30%]">
						<img className="object-cover" src={Img2} alt="" />
					</div>
					<div className="w-[30%]">
						<img className="object-cover" src={Img3} alt="" />
					</div>
					<div className="w-[30%]">
						<img className="object-cover" src={Img4} alt="" />
					</div>
				</div>
				<div className="flex justify-center overflow-hidden">
					<h1 className="text-[7vw] md:text-[50px] my-2 text-[var(--main)] animate-mover1 md:animate-mover relative">SPORTIFY</h1>
				</div>
				<div className="flex justify-between">
					<div className="w-[45%]">
						<img className="object-cover" src={Img1} alt="" />
					</div>
					<div className="w-[45%]">
						<img className="object-cover" src={Img5} alt="" />
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
