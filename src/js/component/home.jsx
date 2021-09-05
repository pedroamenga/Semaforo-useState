import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState({
		color1: false,
		color2: false,
		color3: false
	});

	return (
		<div className="text-center mt-5">
			<div className="marcoSemaforo">
				<div
					className={color.color1 ? "color1-luz" : "color1"}
					onClick={() =>
						setColor({ color1: true, color2: false, color3: false })
					}></div>
				<div
					className={color.color2 ? "color2-luz" : "color2"}
					onClick={() =>
						setColor({ color1: false, color2: true, color3: false })
					}></div>
				<div
					className={color.color3 ? "color3-luz" : "color3"}
					onClick={() =>
						setColor({
							color1: false,
							color2: false,
							color3: true
						})
					}></div>
			</div>
		</div>
	);
};

export default Home;
