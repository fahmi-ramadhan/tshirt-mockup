import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
	const snap = useSnapshot(state);

	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={snap.color}
				disableAlpha
				presetColors={[
					"#F5F5DC", // Beige
					"#FFE4C4", // Bisque
					"#DEB887", // BurlyWood
					"#D2B48C", // Tan
					"#BC8F8F", // RosyBrown
					"#F4A460", // SandyBrown
					"#D2691E", // Chocolate
					"#8B4513", // SaddleBrown
					"#A0522D", // Sienna
				]}
				onChange={(color) => (state.color = color.hex)}
			/>
		</div>
	);
};

export default ColorPicker;
