export const airports = [
	{
		code: 'BOM',
		name: 'Chhatrapati Shivaji International Airport',
		city: 'Mumbai'
	},
	{
		code: 'DEL',
		name: 'Indira Gandhi International Airport',
		city: 'Delhi'
	},
	{
		code: 'MAA',
		name: 'Chennai International Airport',
		city: 'Chennai'
	},
	{
		code: 'BLR',
		name: 'Bengaluru International Airport',
		city: 'Bengaluru'
	},
	{
		code: 'CCU',
		name: 'Netaji Subhas Chandra Bose International Airport',
		city: 'Kolkata'
	}
];
export const carriers = [
	{
		code: '6E',
		name: 'Indigo'
	},
	{
		code: 'SG',
		name: 'SpiceJet'
	},
	{
		code: 'UK',
		name: 'Vistara'
	},
	{
		code: 'G8',
		name: 'Go Air'
	},
	{
		code: 'AI',
		name: 'Air India'
	},
	{
		code: '9W',
		name: 'Jet Airways'
	}
];

function toDateTime(str){
	let dateTime = str.split('|'),
		date = dateTime[0],
		dateDtl = date.split('+'),
		outDate = new Date();
	if(dateDtl[0] == 'TODAY'){
		var time = dateTime[1].split(':');
		outDate.setHours(time[0], time[1], 0, 0);
		outDate.setDate(outDate.getDate() + (dateDtl[1]|0));
	}
	return outDate;
}

export const flights = [
	{
		id: '1',
		name: '6E-001',
		carrier: '6E',
		src: 'BOM',
		dest: 'DEL',
		type: 'E',
		originDepartTime: toDateTime('TODAY|12:00'),
		destArrivalTime: toDateTime('TODAY|14:10'),
		route:[
			{
				routeSrc: 'BOM',
				routeDest: 'CCU',
				departTime: toDateTime('TODAY|12:00'),
				arrivalTime: toDateTime('TODAY|13:00'),
				fareDetails: {
					adult: 2300,
					child: 1500
				},
				availibility: {
					adult: 5,
					child: 2
				}
			},
			{
				routeSrc: 'CCU',
				routeDest: 'DEL',
				departTime: toDateTime('TODAY|13:00'),
				arrivalTime: toDateTime('TODAY|14:10'),
				fareDetails: {
					adult: 1500,
					child: 1300
				},
				availibility: {
					adult: 15,
					child: 0
				}
			},
			{
				routeSrc: 'BOM',
				routeDest: 'DEL',
				departTime: toDateTime('TODAY|12:00'),
				arrivalTime: toDateTime('TODAY|14:10'),
				fareDetails: {
					adult: 2500,
					child: 2000
				},
				availibility: {
					adult: 5,
					child: 2
				}
			}			
		]
	},
	{
		id: '2',
		name: 'SG-919',
		carrier: 'SG',
		src: 'BOM',
		dest: 'MAA',
		type: 'B',
		originDepartTime: toDateTime('TODAY|10:00'),
		destArrivalTime: toDateTime('TODAY|11:30'),
		route:[
			{
				routeSrc: 'BOM',
				routeDest: 'BLR',
				departTime: toDateTime('TODAY|10:00'),
				arrivalTime: toDateTime('TODAY|10:50'),
				fareDetails: {
					adult: 5000,
					child: 3000
				},
				availibility: {
					adult: 25,
					child: 20
				}
			},
			{
				routeSrc: 'BLR',
				routeDest: 'MAA',
				departTime: toDateTime('TODAY|10:55'),
				arrivalTime: toDateTime('TODAY|11:30'),
				fareDetails: {
					adult: 5000,
					child: 3500
				},
				availibility: {
					adult: 20,
					child: 15
				}
			},
			{
				routeSrc: 'BOM',
				routeDest: 'MAA',
				departTime: toDateTime('TODAY|10:00'),
				arrivalTime: toDateTime('TODAY|11:30'),
				fareDetails: {
					adult: 7500,
					child: 4500
				},
				availibility: {
					adult: 25,
					child: 12
				}
			}			
		]
	},
	{
		id: '3',
		name: '9W-516',
		carrier: '9W',
		src: 'MAA',
		dest: 'DEL',
		type: 'E',
		originDepartTime: toDateTime('TODAY+1|06:00'),
		destArrivalTime: toDateTime('TODAY+1|08:00'),
		route:[
			{
				routeSrc: 'MAA',
				routeDest: 'BOM',
				departTime: toDateTime('TODAY+1|06:00'),
				arrivalTime: toDateTime('TODAY|06:50'),
				fareDetails: {
					adult: 3500,
					child: 2000
				},
				availibility: {
					adult: 45,
					child: 25
				}
			},
			{
				routeSrc: 'BOM',
				routeDest: 'DEL',
				departTime: toDateTime('TODAY|07:05'),
				arrivalTime: toDateTime('TODAY+1|08:00'),
				fareDetails: {
					adult: 4000,
					child: 1500
				},
				availibility: {
					adult: 12,
					child: 25
				}
			},
			{
				routeSrc: 'MAA',
				routeDest: 'DEL',
				departTime: toDateTime('TODAY+1|06:00'),
				arrivalTime: toDateTime('TODAY+1|08:00'),
				fareDetails: {
					adult: 5500,
					child: 2500
				},
				availibility: {
					adult: 40,
					child: 12
				}
			}			
		]
	},
	{
		id: '4',
		name: 'AI-896',
		carrier: 'AI',
		src: 'BLR',
		dest: 'CCU',
		type: 'E',
		originDepartTime: toDateTime('TODAY|20:00'),
		destArrivalTime: toDateTime('TODAY|21:10'),
		route:[
			{
				routeSrc: 'BLR',
				routeDest: 'CCU',
				departTime: toDateTime('TODAY|20:00'),
				arrivalTime: toDateTime('TODAY|21:10'),
				fareDetails: {
					adult: 2320,
					child: 1800
				},
				availibility: {
					adult: 5,
					child: 3
				}
			}		
		]
	},
	{
		id: '5',
		name: 'UK-003',
		carrier: 'UK',
		src: 'BOM',
		dest: 'BLR',
		type: 'E',
		originDepartTime: toDateTime('TODAY|06:00'),
		destArrivalTime: toDateTime('TODAY|07:10'),
		route:[
			{
				routeSrc: 'BOM',
				routeDest: 'BLR',
				departTime: toDateTime('TODAY|06:00'),
				arrivalTime: toDateTime('TODAY|07:10'),
				fareDetails: {
					adult: 4550,
					child: 3200
				},
				availibility: {
					adult: 26,
					child: 21
				}
			}		
		]
	},
	{
		id: '6',
		name: 'UK-963',
		carrier: 'UK',
		src: 'BOM',
		dest: 'BLR',
		type: 'E',
		originDepartTime: toDateTime('TODAY|09:00'),
		destArrivalTime: toDateTime('TODAY|09:50'),
		route:[
			{
				routeSrc: 'BOM',
				routeDest: 'BLR',
				departTime: toDateTime('TODAY|09:00'),
				arrivalTime: toDateTime('TODAY|09:50'),
				fareDetails: {
					adult: 4900,
					child: 3700
				},
				availibility: {
					adult: 5,
					child: 6
				}
			}		
		]
	},
	{
		id: '7',
		name: 'UK-008',
		carrier: 'UK',
		src: 'BOM',
		dest: 'BLR',
		type: 'E',
		originDepartTime: toDateTime('TODAY|10:00'),
		destArrivalTime: toDateTime('TODAY|11:00'),
		route:[
			{
				routeSrc: 'BOM',
				routeDest: 'BLR',
				departTime: toDateTime('TODAY|10:00'),
				arrivalTime: toDateTime('TODAY|11:00'),
				fareDetails: {
					adult: 4900,
					child: 3700
				},
				availibility: {
					adult: 6,
					child: 8
				}
			}		
		]
	}
];