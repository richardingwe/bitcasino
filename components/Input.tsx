import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const Input = styled(TextField)({
	"& label.Mui-focused": {
		color: "black",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "black",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "black",
		},
		"&:hover fieldset": {
			borderColor: "black",
		},
		"&.Mui-focused fieldset": {
			borderColor: "black",
		},
	},
});
