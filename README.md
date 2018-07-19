Steps to run this app:
	1. npm i
	2. npm run start 
		To run app in development mode. It starts webpack-dev-server
	
		OR
		
		npm run build
		To get production build files
	
	3. Search data
		Flights dates are set relative to current system date. So on any date user will see the flight results
		
		One way data - For current date
		Mumbai - Bengaluru
		Mumbai - Kolkata
		Mumbai - Chennai
		Mumbai - Delhi
		Kolkata - Delhi
		Bengaluru - Chennai
		Bengaluru - Kolkata
		
		For current Date + 1
		Chennai - Mumbai
		Mumbai - Delhi
		Chennai - Delhi
		
		
		For Return Data
			Mumbai - Chennai
			depart - current date
			return - current date + 1
