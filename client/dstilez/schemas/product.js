export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'price',
			title: 'Price (R)',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'category',
			title: 'Category',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'dateOfFirstLicensing',
			title: 'Date of First Licensing',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'milage',
			title: 'Milage (Km)',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'colour',
			title: 'Colour',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'location',
			title: 'Location',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'spareKey',
			title: 'Spare Key',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
};
