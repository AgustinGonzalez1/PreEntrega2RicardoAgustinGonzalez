import Img1 from "./header1.webp";
import Img2 from "./header2.webp";
import Img3 from "./header3.webp";
import Img4 from "./header4.webp";
import Img5 from "./header5.webp";

const Header = () => {
	return (
		<header className="w-full md:max-w-[1200px] mx-auto flex flex-col bg-[var(--light)]">
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
				<h1 className="text-5xl my-2 text-[var(--main)] move">SPORTIFY</h1>
			</div>
			<div className="flex justify-between">
				<div className="w-[45%]">
					<img className="object-cover" src={Img1} alt="" />
				</div>
				<div className="w-[45%]">
					<img className="object-cover" src={Img5} alt="" />
				</div>
			</div>
		</header>
	);
};

export default Header;
