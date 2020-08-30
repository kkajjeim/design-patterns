import {Observer, Subject} from "./3. interfaces";

/*
[SUBJECT] 기상 정보를 가져오고, 관리한다. 구독 중인 객체들에게 최신 기상 정보를 전달한다.
[OBSERVER] 구독하고있는 기상 정보를 받아온다.
 */

class WeatherData implements Subject { // Subject 인터페이스를 구현한다.

    observers: Array<Observer>;
    temperature: number;
    humidity: number;
    pressure: number;

    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    setMeasurements(
        temperature: number,
        humidity: number,
        pressure: number
    ) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure
        this.measurementsChanged()
    }

    measurementsChanged() {
        this.notifyObserver()
    }

    // SUBJECT
    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    // SUBJECT
    removeObserver(o: Observer) {
        const targetIndex = this.observers.indexOf(o);
        if (targetIndex >= 0) {
            this.observers.splice(targetIndex, 1);
        }
    }

    // SUBJECT
    notifyObserver () {
        for(const o of this.observers) {
            o.update(this.temperature, this.humidity, this.temperature);
        }
    }
}


// OBSERVER
class CurrentDisplay implements Observer {
    temperature: number = 0;
    humidity: number = 0;
    pressure: number = 0;

    update(t: number, h: number, p: number) {
        this.temperature = t;
        this.humidity = h;
        this.pressure = p;
    }

}

// OBSERVER
class StatisticsDisplay implements Observer {
    temperature: number = 0;
    humidity: number = 0;
    pressure: number = 0;

    update(t: number, h: number, p: number) {
        this.temperature = t;
        this.humidity = h;
        this.pressure = p;
    }

}

// OBSERVER
class ForecastDisplay implements  Observer {
    temperature: number = 0;
    humidity: number = 0;
    pressure: number = 0;

    update(t: number, h: number, p: number) {
        this.temperature = t;
        this.humidity = h;
        this.pressure = p;
    }
}


const main = () => {
    const weatherData: WeatherData = new WeatherData();

    const currentDisplay: CurrentDisplay = new CurrentDisplay();
    const statisticDisplay: StatisticsDisplay = new StatisticsDisplay();
    const forecastDisplay: ForecastDisplay = new ForecastDisplay();

    weatherData.registerObserver(currentDisplay);
    weatherData.registerObserver(statisticDisplay);
    weatherData.registerObserver(forecastDisplay);
};
