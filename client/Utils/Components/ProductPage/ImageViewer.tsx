// NEXT & React
import Image from 'next/image';
import { useState } from 'react';
import type { NextPage } from 'next';

// MUI
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

interface props {
	images: string[];
}

export const ImageViewer: NextPage<props> = ({ images }) => {
	const [index, setIndex] = useState<number>(0);

	return (
		//   Display slideshow info (3/5)
		// Preloader on downloading images
		<Grid container>
			<Grid item>
				<Image
					src={images[index]}
					alt="main"
					width={800}
					height={600}
					objectFit="cover"
				/>
			</Grid>
			<Grid
				item
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item>
					<IconButton
						sx={{
							height: '2em',
							width: '2em',
							borderRadius: '0px',
							fontSize: '1em',
							bgcolor: '#F47920',
						}}
						onClick={() =>
							setIndex(index - 1 <= 0 ? images.length - 1 : index - 1)
						}
					>
						<ChevronLeft fontSize="large" />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton
						sx={{
							height: '2em',
							width: '2em',
							borderRadius: '0px',
							fontSize: '1em',
							bgcolor: '#F47920',
						}}
						onClick={() => setIndex(index + 1 >= images.length ? 0 : index + 1)}
					>
						<ChevronRight fontSize="large" />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ImageViewer;
