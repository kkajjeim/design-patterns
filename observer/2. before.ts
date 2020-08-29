class WeatherData {
    temperature: number;
    humidity: number;
    pressure: number;

    constructor() {
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    getDataFromKMA() {
        // 대충 기상청으로부 데이터 받아와서 setMeasurements 실행하는 함수
    }

    setMeasurements(
        temperature: number,
        humidity: number,
        pressure: number
    ) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure

        currentDisplay.update(this.temperature, this.humidity, this.pressure);
        staticDisplay.update(this.temperature, this.humidity, this.pressure);
        forecastDisplay.update(this.temperature, this.humidity, this.pressure);
    }
}

class CurrentDisplay {
    update(t: number, h: number, p: number) {
        // 인자로 전달받은 기온, 습도, 기압을 가지고 현재 날씨 상황을 그려줌
    }
}

class StatisticsDisplay {
    update(t: number, h: number, p: number) {
        // 인자로 전달받은 기온, 습도, 기압을 가지고 날씨 통계를 그려줌
    }
}

class ForecastDisplay{
    update(t: number, h: number, p: number) {
        // 인자로 전달받은 기온, 습도, 기압을 가지고 날씨 예보 화면을 그려줌
    }
}

const currentDisplay = new CurrentDisplay();
const staticDisplay = new StatisticsDisplay();
const forecastDisplay = new ForecastDisplay();

