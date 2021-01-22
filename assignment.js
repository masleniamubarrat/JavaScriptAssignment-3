function kilometerToMeter(kmValue) {
    if (kmValue < 0) {             //condition for negative value as input;
        var s = "Distance can not be negative";
        return s;
    }
    else {

        var meterValue;
        meterValue = (kmValue / 1000);
        return meterValue;
    }

}

function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {

    var priceOfWatch = 50, priceOfMobile = 100, priceOfLaptop = 500;
    var totalBudget = (priceOfWatch * numOfWatch + priceOfMobile * numOfMobile + priceOfLaptop * numOfLaptop);


}

function hotelCost(stayDays) {
    var totalCost = 0;
    
    if (stayDays< 0) {  //to check whether input value is negative 
        var s = "invalid input value";
        return s;
    }
    else if (stayDays <= 10) {
        totalCost =(stayDays * 100);
        return totalCost;
    }
    else if (stayDays <= 20) {
        totalCost = 10 * 100 + (stayDays - 10) * 80;
        return totalCost;
    }
    else  {
        totalCost = 10 * 100 + 10 * 80 + (stayDays - 20) * 50;
        return totalCost;

    }
}

function megaFriend(nameList) {
    var longName;
    var longSize = 0;
    var MultipleAns = 0;
    if (nameList.length == 0) {
        console.log("Don't you have any friends?")
    }
    else {
        for (var i = 0; i < nameList.length; i++) {
            var s = nameList[i];
            if (s.length > longSize) {
                longSize = s.length;  //updating the latest max length.
                longName = s;  //storing the string with max length.
            }
            
        }
            return longName;
        
    }

}



