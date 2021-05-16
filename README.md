# UtilitySystem

## Analysis and Design
This project also consists of just two files that depend on their each other:
* The HTML (index.html): The general design / structure of the Html file, used the regular design used for the rest of the project. After this there is a tabbar the has three different tabs for three different tools. The tabbar allows the user to view only one utility tool at a time for a cleaner look. In each tab there are input field for the input of the utility tool and the output shown by writting to the disable input field using a javascript function.
* The Javscript (script.js):The javascript file contains all the functions needed to calculate the outputs for all our utility tools. I exolain more about these functions in the Documentation of Implementation function.

## Documentation of Implementation
The frontend of this project was mainly written in html and used the general css stylesheet that is being used in the entire project. It just consisted of input field that took data from the frontend and via event handlers automatically sends the input to the backend which updates the output in the frontend synchronously. The Javascript basically serves as the backend where all the algorithms are done and sent to the frontend. Below I explain the algorithms behind the Javascript functions that calculate the results for each of the utility functions.

### Measurement Converter
The measurement Converter uses standard measurement conversions to convert measurements from one unit to another. For each parameter weight, length, area, volume and temperature(bonus feature), has three units of measurements that can be converted to other. For this I took 3 permutation 2 to figure out that there would be 6 possible causes at all times for each of the conversions. Using this knowledge I used switch statements or if else statments as needed to provide the output for each of the 6 cases. These are the functions that assist the Measurement Converter:

* calculateWeight() : For this program we have three units for weight kilogram, pound and ounce. Using the conversion rates I was able to come up with the different formulas for converting in the six different stages.
1 Kilogram = 1 Pound x 2.20462
1 Pound = 1 Kilogram / 2.20462
1 Kilogram = 1 Ounce x 35.274
1 Ounce = 1 Kilogram / 35.274
1 Pound = 1 Ounce x 16
1 Ounce = 1 Pound /16

* calculateLength() : For this program we have three units for length inch, meter and foot. Using the conversion rates I was able to come up with the different formulas for converting in the six different stages.
1 Inch = 1 Meter / 39.37
1 Meter = 1 Inch x 39.37
1 Inch = 1 Foot / 12
1 Foot = 1 Inch x 12
1 Meter = 1 Foot x 3.281
1 Foot = 1 Meter /3.281

* calculateArea() : For this program we have three units for area square inch, square meter and square foot. Using the conversion rates I was able to come up with the different formulas for converting in the six different stages.
1 Square Inch = 1 Square Meter / 1550
1 Square Meter = 1 Square Inch x 1550
1 Square Inch = 1 Square Foot / 144
1 Square Foot = 1 Square Inch x 144
1 Square Meter = 1 Square Foot x 10.764
1 Square Foot = 1 Square Meter / 10.764

* calculateVolume() : For this program we have three units for volume cubic inch, cubic meter and cubic foot. Using the conversion rates I was able to come up with the different formulas for converting in the six different stages.
1 Cubic Inch = 1 Cubic Meter / 61024
1 Cubic Meter = 1 Cubic Inch x 61024
1 Cubic Inch = 1 Cubic Foot / 1728
1 Cubic Foot = 1 Cubic Inch x 1728
1 Cubic Meter = 1 Cubic Foot x 35.314
1 Cubic Foot = 1 Cubic Meter /35.314

* calculateTemperature() : For this program we have three units for temperature kelvin, celsius and kelvin. Using the conversion rates I was able to come up with the different formulas for converting in the six different stages. In this case I also had to use the parseInt function to ensure that the intergers are not mistakened for strings and concatenated rather performing the original arithmetic.
Kelvin to Celsius: 1K − 273.15 = -272.1°C
Celsius to Kelvin: 1°C + 273.15 = 274.15K
Fahrenheit to Kelvin: (1°F − 32) × 5/9 + 273.15 = 255.928K
Kelvin to Fahrenheit: (1K − 273.15) × 9/5 + 32 = -457.9°F
Fahrenheit to Celsius: (1°F − 32) × 5/9 = -17.22°C
Celsius to Fahrenheit: (1°C × 9/5) + 32 = 33.8°F

### Mortgage Calculator
After watching a couple of youtube videos I was able to understand the concept of mortgage and how to calculate it. I decide to use the formula from form a specific youtube channel called Edspira, becuase this was the explanation I understood the most. The formula given for caculating mortgage is Monthly Payment = principal * [r*(1+r)^N]/[((1+r)^N)-1] , where, N= payment period / 12 months , r = interest rate/1200 using these parameters, the calculateMortgage() computes the monthly mortgage for the user and displays on the frontend.

### Currency Converter
As I had mentioned earlier I chose a currency converter as my last utility tool becuase I believe it is a tool that come in handy for many travelers, tourist, foriegn traders or any body that has family and friends in a different country and wishes to send money to them. For this I used the conversion rate from Exchange rate Source: Morningstar for Currency and Coinbase for Cryptocurrency database. Since we are in Canada I decide to compare other currencies with the canadian dollar. These were the exchange rates I used:

1 US Dollar = 1.25 CAD
1 Pound = 1.73 CAD
1 Euro = 1.49 CAD
1 Naira = 0.0031 CAD
1 Indian Rupee = 0.017 CAD
1 Pakistani Rupee = 0.080 CAD
1 Russian Ruble = 0.017 CAD
1 Birr = 0.30 CAD
1 Dirham = 0.34 CAD
1 Yen = 0.011 CAD
The calculateToCAD() converts foreign currencies to CAD while the calculateFromCAD() converts CAD to foreign currencies.

## User Guide
1. To run this project you have to be connected to the a webserver for all the parts of this project to be working.
2. Next, click on the button below to run the program,the link would take you to the Utility Tool System application, which should automatically show you the first tab, the meausurement converter.
3. For each measurement there first input box is where you input the known value and the converted value would show in the second input box.
4. You can also change the units using the dropdown menus.
5. Next, move to the mortgage calculator tab.
6. Fill in the first sentence in the mortgage tab and your monthly mortgage would show up on the next line.
7. Move to the currency converter tab.
8. You can chose to convert from a foreign currency CAD or vice ver
