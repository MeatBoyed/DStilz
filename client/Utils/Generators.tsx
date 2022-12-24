import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export const generatePrices = () => {
	let content = [];
	for (let i = 1; i < 20; i++) {
		content.push(
			<MenuItem key={i} value={50000 * i}>
				<Typography
					variant="h6"
					sx={{
						fontSize: '.9em',
						fontWeight: '500',
						padding: '4px 10px',
					}}
				>
					{(50000 * i).toLocaleString()}
				</Typography>
			</MenuItem>
		);
	}
	return content;
};

export const generateYears = (yearsBoundaries: [number, number]) => {
	let content = [];
	for (let i = yearsBoundaries[0]; i < yearsBoundaries[1]; i++) {
		content.push(
			<MenuItem key={i} value={i}>
				<Typography
					variant="h6"
					sx={{
						fontSize: '.9em',
						fontWeight: '500',
						padding: '4px 10px',
					}}
				>
					{i}
				</Typography>
			</MenuItem>
		);
	}
	return content;
};

export const generateMilages = () => {
	let content = [];
	for (let i = 0; i < 11; i++) {
		content.push(
			<MenuItem key={i} value={10000 * i + 2}>
				<Typography
					variant="h6"
					sx={{
						fontSize: '.9em',
						fontWeight: '500',
						padding: '4px 10px',
					}}
				>
					{(10000 * (i + 5)).toLocaleString()}
				</Typography>
			</MenuItem>
		);
	}
	return content;
};
