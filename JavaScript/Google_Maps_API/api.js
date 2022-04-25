//國家、年、月 檢查-----------------------------------------
let mapTotal = {};
let yearCheck = new Set();
let monthCheck = new Set();

County.forEach((item) => {
    if (!yearCheck.has(item.Year)) {
        yearCheck.add(item.Year);
    }
});

County.forEach((item) => {
    if (!monthCheck.has(item.Month)) {
        monthCheck.add(item.Month);
    }    
});

yearCheck.forEach((year) => {
    mapTotal[`${year}`] = {};
    monthCheck.forEach((month) => {
        mapTotal[`${year}`][`${month}`] = County.filter((item) => {
            if (item.Year == year) {
                return item.Month;
            }
        });
    });
});

//----------------------------------------------
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 24.760052505061207, lng: 120.95292512434172 },
        zoom: 7,
    });
    
    City.forEach((item) => {
        let singleCity = mapTotal[104][1].filter((c) => {
            return c.County == item.City && c.Town == item.District && c.Month == 1;
        })[0];

        let countyValue, townValue, yearValue, monthValue, dailyValue;

        if (singleCity) {
            countyValue = singleCity.County;
            townValue = singleCity.Town;
            yearValue = singleCity.Year;
            monthValue = singleCity.Month;
            dailyValue = singleCity.TheDailyDomesticConsumptionOfWaterPerPerson;
        }

        let pos = { lat: item.Lat, lng: item.Lng };

        new google.maps.Marker({
            position: pos,
            map,
            title: countyValue + "." + townValue + yearValue + "年" + monthValue + "月" + "用水量: "  + dailyValue,
        });
    });
}