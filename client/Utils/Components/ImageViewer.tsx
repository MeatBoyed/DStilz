import type { NextPage } from 'next';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import { ImageViewerProps } from '../../Utils/Interfaces';
import { useState } from 'react';
import { imageBuilder } from '../../Utils';

export const ImageViewer: NextPage<ImageViewerProps> = ({ images }) => {
	const [index, setIndex] = useState<number>(0);

	return (
		<Grid container direction="column" wrap="nowrap" spacing={1}>
			<Grid item>
				<Image
					src={imageBuilder(images[index], 800, 600)}
					alt="main"
					width={800}
					height={600}
				/>
			</Grid>
			<Grid
				item
				container
				justifyContent="space-between"
				alignItems="center"
				direction="row"
			>
				{/* If Mobile, render different component with smaller size */}
				{images.map((image, i) => (
					<Grid item key={i} sx={{ cursor: 'pointer' }}>
						<Image
							key={i}
							src={imageBuilder(image, 132, 105)}
							width={132}
							height={105}
							alt="small image"
							onMouseEnter={() => setIndex(i)}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default ImageViewer;
