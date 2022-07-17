export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 90,
			},
		},
		// Header Details
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'price',
			title: 'Price (R)',
			type: 'number',
		},
		{
			name: 'make',
			title: 'Make',
			type: 'string',
		},
		{
			name: 'series',
			title: 'Series',
			type: 'string',
		},
		{
			name: 'model',
			title: 'model',
			type: 'string',
		},
		// Images
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotspot: true,
			},
		},
		// 1st Body Details - Head
		{
			name: 'registrationYear',
			title: 'Registration Year',
			type: 'date',
		},
		{
			name: 'milage',
			title: 'Milage',
			type: 'number',
		},
		{
			name: 'transmission',
			title: 'Transmission',
			type: 'string',
		},
		{
			name: 'sellersComment',
			title: 'Sellers Comment',
			type: 'text',
		},
		// 1st Body Details - Vehicle Details
		{
			name: 'previousOwners',
			title: 'Previous Owners',
			type: 'number',
		},
		{
			name: 'bodyType',
			title: 'Body Type',
			type: 'string',
		},
		// 2nd Body Details - Engine
		{
			name: 'engineDetail',
			title: 'Engine Detail',
			type: 'string',
		},
		{
			name: 'engineCapacity',
			title: 'Engine Capacity (Litre)',
			type: 'number',
		},
		{
			name: 'cylinderLayoutQuantity',
			title: 'Cylinder Layout and Quantity',
			type: 'string',
		},
		{
			name: 'fuelType',
			title: 'Fuel Type',
			type: 'string',
		},
		{
			name: 'fuelCapacity',
			title: 'Fuel Capacity',
			type: 'number',
		},
		{
			name: 'acceleration',
			title: 'Acceleration (0-100 km/h)',
			type: 'number',
		},
		{
			name: 'maximumTopSpeed',
			title: 'Maximum / Top Speed',
			type: 'number',
		},
	],
};
