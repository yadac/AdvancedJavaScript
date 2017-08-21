function requestJsonp(url) {
    // create script tag
    let script = document.createElement('script');
    script.src = url;

    // input created tag in head tag.
    // browser access to yahoo api.
    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, null);
}

/**
 * weather infomation processer.
 * @param {object} data weather infomation return from yahoo api 
 */
function processWeather(data) {
    let weatherList = data.Feature[0].Property.WeatherList;
    console.dir(weatherList);
}

// yahoo weather api (xxx replace own yahoo appid, detail is below)
// https://developer.yahoo.co.jp/start/
let url = "https://map.yahooapis.jp/weather/V1/place?appid=xxx&coordinates=139.732293,35.663613&output=json&callback=processWeather";
requestJsonp(url);
