let seriesMake = [];
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
			validation: (Rule) => Rule.required(),
		},
		// Header Details
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'price',
			title: 'Price (R)',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'make',
			title: 'Make',
			type: 'string',
			description: 'Options: Mercedes, BMW, Porsche, Ferrari.',
			options: {
				list: ['Mercedes', 'BMW', 'Porsche', 'Ferrari'],
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'series',
			title: 'Series',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'model',
			title: 'model',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		// Images
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		// 1st Body Details - Head
		{
			name: 'registrationYear',
			title: 'Registration Year',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'milage',
			title: 'Milage',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'transmission',
			title: 'Transmission',
			type: 'string',
			options: {
				list: ['Manual', 'Automatic'],
			},
			validation: (Rule) => Rule.required(),
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
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'bodyType',
			title: 'Body Type',
			type: 'string',
			options: {
				list: ['Sedan', 'Coupe', 'Sports Car', 'Hatchback', 'SUV', 'Bukkie'],
			},
			validation: (Rule) => Rule.required(),
		},
		// 2nd Body Details - Engine
		{
			name: 'engineDetail',
			title: 'Engine Detail',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'engineCapacity',
			title: 'Engine Capacity (Litre)',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'cylinderLayoutQuantity',
			title: 'Cylinder Layout and Quantity',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'fuelType',
			title: 'Fuel Type',
			type: 'string',

			options: {
				list: ['Petrol', 'Details'],
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'fuelCapacity',
			title: 'Fuel Capacity',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'acceleration',
			title: 'Acceleration (0-100 km/h)',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'maximumTopSpeed',
			title: 'Maximum / Top Speed',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
	],
};
