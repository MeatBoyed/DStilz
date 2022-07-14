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
			name: 'serviceHistory',
			title: 'Service History',
			type: 'string',
			validation: (Rule) =>
				Rule.custom((serviceHistory) => {
					if (serviceHistory !== 'Full' || serviceHistory !== 'None') {
						return false;
					}
					return true;
				}).error('This is an error'),
		},
		{
			name: 'bodyType',
			title: 'Body Type',
			type: 'string',
		},
		// 2nd Body Details - General
		{
			name: 'endDate',
			title: 'End Date',
			type: 'date',
		},
		{
			name: 'serviceIntervalDistance',
			title: 'Service Interval Distance',
			type: 'string',
		},
		// 2nd Body Details - Engine
		{
			name: 'enginePosition',
			title: 'Engine Position',
			type: 'string',
		},
		{
			name: 'engineDetails',
			title: 'Engine Details',
			type: 'number',
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
			name: 'fuelConsumption',
			title: 'Fuel Consumptio (per 100km)',
			type: 'number',
		},
		{
			name: 'fuelRange',
			title: 'Fuel Range (km)',
			type: 'number',
		},
		{
			name: 'powerMaximum',
			title: 'Power Maximum (kW)',
			type: 'number',
		},
		{
			name: 'torqueMaximum',
			title: 'Torque Maximum (Nm)',
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
		{
			name: 'co2Emissions',
			title: 'CO2 Emissions (g/km)',
			type: 'number',
		},
	],
};
