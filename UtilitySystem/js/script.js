function calculateToCAD(){
	var foreign_currency = document.getElementById("toCAD").value;
 
    var amount = document.getElementById("toCAD1").value;
 
	if(amount == ""){
		document.getElementById("toCAD2").value = "";
	}else{
		switch(foreign_currency){
			case "US Dollar":
				document.getElementById("toCAD2").value = amount * 1.25;
			break;
 
			case "Pound":
				document.getElementById("toCAD2").value = amount * 1.73;
			break;
 
			case "Euro":
				document.getElementById("toCAD2").value = amount *1.49 ;
			break;
            
            case "Naira":
				document.getElementById("toCAD2").value = amount * 0.0031;
			break;
            
            case "Indian Rupee":
				document.getElementById("toCAD2").value = amount * 0.017;
			break;
                
            case "Pakistani Rupee":
				document.getElementById("toCAD2").value = amount * 0.080;
			break;
                
            case "Russian Ruble":
				document.getElementById("toCAD2").value = amount * 0.017;
			break;
            
            case "Birr":
				document.getElementById("toCAD2").value = amount * 0.030;
			break;
                
            case "Dirham":
				document.getElementById("toCAD2").value = amount * 0.34;
			break;
 
			case "Yen":
				document.getElementById("toCAD2").value = amount * 0.011;
			break;
 
			case "Yuan":
				document.getElementById("toCAD2").value = amount * 0.19;
			break;
                
            
		}
	}
}

function calculateFromCAD(){
	var foreign_currency = document.getElementById("fromCAD").value;
 
	var amount = document.getElementById("fromCAD1").value;
 
	if(amount == ""){
		document.getElementById("fromCAD2").value = "";
	}else{
		switch(foreign_currency){
			case "US Dollar":
				document.getElementById("fromCAD2").value = amount / 1.25;
			break;
 
			case "Pound":
				document.getElementById("fromCAD2").value = amount / 1.73;
			break;
 
			case "Euro":
				document.getElementById("fromCAD2").value = amount /1.49 ;
			break;
            
            case "Naira":
				document.getElementById("fromCAD2").value = amount / 0.0031;
			break;
            
            case "Indian Rupee":
				document.getElementById("fromCAD2").value = amount / 0.017;
			break;
                
            case "Pakistani Rupee":
				document.getElementById("fromCAD2").value = amount / 0.080;
			break;
                
            case "Russian Ruble":
				document.getElementById("fromCAD2").value = amount / 0.017;
			break;
            
            case "Birr":
				document.getElementById("fromCAD2").value = amount / 0.030;
			break;
                
            case "Dirham":
				document.getElementById("fromCAD2").value = amount / 0.34;
			break;
 
			case "Yen":
				document.getElementById("fromCAD2").value = amount / 0.011;
			break;
 
			case "Yuan":
				document.getElementById("fromCAD2").value = amount / 0.19;
			break;
                
            
		}
	}
}

// Temperature  
function calculateTemperature(){
	var unit_temp1 = document.getElementById("temp_unit1").value;
    
    var unit_temp2 = document.getElementById("temp_unit2").value;
 
	var temp1= document.getElementById("temp1").value;
 
	if(temp1 == ""){
		document.getElementById("temp2").value = "";
	}else{
        if (unit_temp1 == unit_temp2 ){
            document.getElementById("temp2").value = temp1;     
        }else if(unit_temp1 =="Kelvin" && unit_temp2=="Celsius") {
            document.getElementById("temp2").value = parseInt(temp1) -273.15;   
        }else if(unit_temp1 =="Celsius" && unit_temp2=="Kelvin") {
            document.getElementById("temp2").value = parseInt(temp1) + 273.15;   
        }else if(unit_temp1 =="Kelvin" && unit_temp2=="Fahrenheit") {
            document.getElementById("temp2").value = (parseInt(temp1) -273.15)*1.8 + 32;   
        }else if(unit_temp1 =="Fahrenheit" && unit_temp2=="Kelvin") {
            document.getElementById("temp2").value = (parseInt(temp1) -32)*0.56 + 273.15;   
        }else if(unit_temp1 =="Fahrenheit" && unit_temp2=="Celsius") {
            document.getElementById("temp2").value = (parseInt(temp1) -32)*0.56;   
        }else if(unit_temp1 =="Celsius" && unit_temp2=="Fahrenheit") {
            document.getElementById("temp2").value = parseInt(temp1) *1.8 + 32;   
        }
	
	}
}

// Weight  
function calculateWeight(){
	var unit_weight1 = document.getElementById("weight_unit1").value;
    
    var unit_weight2 = document.getElementById("weight_unit2").value;
 
	var weight1= document.getElementById("weight1").value;
 
	if(weight1 == ""){
		document.getElementById("weight2").value = "";
	}else{
        if (unit_weight1 == unit_weight2 ){
            document.getElementById("weight2").value = weight1;     
        }else if(unit_weight1 =="Kilogram" && unit_weight2=="Pound") {
            document.getElementById("weight2").value = weight1 * 2.20462;   
        }else if(unit_weight1 =="Pound" && unit_weight2=="Kilogram") {
             document.getElementById("weight2").value = weight1 / 2.20462;  
        }else if(unit_weight1 =="Kilogram" && unit_weight2=="Ounce") {
            document.getElementById("weight2").value = weight1*35.274;   
        }else if(unit_weight1 =="Ounce" && unit_weight2=="Kilogram") {
            document.getElementById("weight2").value = weight1/35.274;
        }else if(unit_weight1 =="Ounce" && unit_weight2=="Pound") {
            document.getElementById("weight2").value = weight1/16;   
        }else if(unit_weight1 =="Pound" && unit_weight2=="Ounce") {
            document.getElementById("weight2").value = weight1*16;  
        }
	
	}
}


// Length  
function calculateLength(){
	var unit_length1 = document.getElementById("length_unit1").value;
    
    var unit_length2 = document.getElementById("length_unit2").value;
    
	var length1= document.getElementById("length1").value;
    
	if(length1 == ""){
		document.getElementById("length2").value = "";
	}else{
        if (unit_length1 == unit_length2 ){
            document.getElementById("length2").value = length1;     
        }else if(unit_length1 =="Inch" && unit_length2=="Meter") {
            document.getElementById("length2").value = length1 /39.37;   
        }else if(unit_length1 =="Meter" && unit_length2=="Inch") {
             document.getElementById("length2").value = length1 * 39.37;  
        }else if(unit_length1 =="Inch" && unit_length2=="Foot") {
            document.getElementById("length2").value = length1/12;   
        }else if(unit_length1 =="Foot" && unit_length2=="Inch") {
            document.getElementById("length2").value = length1 * 12;
        }else if(unit_length1 =="Meter" && unit_length2=="Foot") {
            document.getElementById("length2").value = length1*3.281;   
        }else if(unit_length1 =="Foot" && unit_length2=="Meter") {
            document.getElementById("length2").value = length1/3.281;  
        }
	}
}

// Area  
function calculateArea(){
	var unit_area1 = document.getElementById("area_unit1").value;
    
    var unit_area2 = document.getElementById("area_unit2").value;
    
	var area1= document.getElementById("area1").value;
    
	if(area1 == ""){
		document.getElementById("area2").value = "";
	}else{
        if (unit_area1 == unit_area2 ){
            document.getElementById("area2").value = area1;     
        }else if(unit_area1 =="Inch2" && unit_area2=="Meter2") {
            document.getElementById("area2").value = area1 / 1550;   
        }else if(unit_area1 =="Meter2" && unit_area2=="Inch2") {
             document.getElementById("area2").value = area1 * 1550;  
        }else if(unit_area1 =="Inch2" && unit_area2=="Foot2") {
            document.getElementById("area2").value = area1/144;   
        }else if(unit_area1 =="Foot2" && unit_area2=="Inch2") {
            document.getElementById("area2").value = area1 * 144;
        }else if(unit_area1 =="Meter2" && unit_area2=="Foot2") {
            document.getElementById("area2").value = area1*10.764;   
        }else if(unit_area1 =="Foot2" && unit_area2=="Meter2") {
            document.getElementById("area2").value = area1/10.764;  
        }
	}
}

// Volume  
function calculateVolume(){
	var unit_volume1 = document.getElementById("volume_unit1").value;
    
    var unit_volume2 = document.getElementById("volume_unit2").value;
    
	var volume1= document.getElementById("volume1").value;
    
	if(volume1 == ""){
		document.getElementById("volume2").value = "";
	}else{
        if (unit_volume1 == unit_volume2 ){
            document.getElementById("volume2").value = volume1;     
        }else if(unit_volume1 =="Inch3" && unit_volume2=="Meter3") {
            document.getElementById("volume2").value = volume1/61024;   
        }else if(unit_volume1 =="Meter3" && unit_volume2=="Inch3") {
             document.getElementById("volume2").value = volume1 * 61024;  
        }else if(unit_volume1 =="Inch3" && unit_volume2=="Foot3") {
            document.getElementById("volume2").value = volume1/1728;   
        }else if(unit_volume1 =="Foot3" && unit_volume2=="Inch3") {
            document.getElementById("volume2").value = volume1 * 1728;
        }else if(unit_volume1 =="Meter3" && unit_volume2=="Foot3") {
            document.getElementById("volume2").value = volume1*35.315;   
        }else if(unit_volume1 =="Foot3" && unit_volume2=="Meter3") {
            document.getElementById("volume2").value = volume1/35.315;  
        }
	}
}

//Mortgage
function calculateMortgage(){
    /**
    Monthly Payment = principal * [r*(1+r)**N]/[((1+r)**N)-1]
    */
    var mortgage;
    var principal = document.getElementById("principal").value;

    var interest_rate = document.getElementById("interest_rate").value;

    var payment_period = document.getElementById("payment_period").value;
    
    if(principal == "" || interest_rate=="" || payment_period ==""){
		document.getElementById("mortgage").value = "";
	}else{
        var r = interest_rate/1200;
        var N = payment_period*12;
        var numerator = r * Math.pow(1+r,N);
        var denominator = Math.pow(1+r,N) -1;
        
        mortgage= principal * (numerator/denominator);
        
        document.getElementById("mortgage").value = mortgage;     
        
	}
}

/// Switching from Tab to tab

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onload=function(){
    document.getElementById("meaurement_converter").click();   
}

