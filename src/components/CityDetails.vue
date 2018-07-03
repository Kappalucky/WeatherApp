<template>
  <div id="city-details">
    <!--<b-table striped hover :items="items" :fields="fields"></b-table>-->
    <div class="currentInfo">
        <div id="details">
            <div class="wind">
                <span class="label">Wind:</span>
                <span class="values">
                    <span class="number">3</span>
                    <span class="unit">mph</span>
                    <span class="direction">-></span>
                </span>
            </div>
            <div class="humidity">
                <span class="label">Humidity:</span>
                <span class="values">
                    <span class="number">45</span>
                    <span class="unit">%</span>
                </span>
            </div>
            <div class="dew">
                <span class="label">Dew Pt:</span>
                <span class="values">
                    <span class="number">79</span>
                    <span class="unit">˚</span>
                </span>
            </div>
            <div class="breakpoint"></div>
            <div class="uvIndex">
                <span class="label">UV Index:</span>
                <span class="values">
                    <span class="number">0</span>
                </span>
            </div>
            <div class="visibility">
                <span class="label">Visibility:</span>
                <span class="values">
                    <span class="number">10</span>
                    <span class="unit">mi</span>
                </span>
            </div>
            <div class="pressure">
                <span class="label">pressure:</span>
                <span class="values">
                    <span class="number">1056</span>
                    <span class="unit">mb</span>
                </span>
            </div>
        </div>
    </div>
    <div class="currentInfoTemp">
        <div class="title_head">
            <span class="current-label">
                <span class="weather-icon">
                    <i :class="'owf owf-' + weatherDataNow.cod"></i>
                </span>
                <span class="temp-big">87deg Description word</span>
                <span class="temp-sum">
                    <span class="high-temp-sum">
                        <span class="high-label">High</span>
                        80
                    </span>
                </span>
                <span class="low-temp-sum">
                    <span class="low-label">Low:</span>
                        60
                </span>
            </span>
            <span class="full-description">
                totally hot as fuck my guy
            </span>
        </div>
    </div>
    <div class="byTime">
        <div class="time-blocks">
            <!--For each array in time-->
            <div class="status">
                <span class="word">clear</span>
                <br>
                <span class="time">Now</span>
                <span id="time val" class="time id">78deg</span>
            </div>
        </div>
    </div>
    <div class="mapContainer">
        <iframe></iframe>
    </div>
    <div class="weekForecast">
        <div class="summary">
            "Cloudy with a chance of meatballs"
        </div>
        <template>
            <div class="day">
                <span class="left-tab">
                    <span class="icon"><i></i></span>
                    <span class="name">Today</span>
                </span>
                <div class="break"></div>
                <span class="right-tab">
                    <span class="temp-big">87deg Description word</span>
                    <span class="temp-sum">
                        <span class="high-temp-sum">
                            <span class="high-label">High</span>
                            80
                        </span>
                    </span>
                    <span class="low-temp-sum">
                        <span class="low-label">Low:</span>
                        60
                    </span>
                </span>
            </div>
            <!--on click slide down-->
        <transition>
            <!--by Time-->
            <div class="day details">

            </div>
        </transition>
        </template>
    </div>
    <div class="see_more">
        <!--Link to page with full forcast info-->
        <!--Link to see page with multiple city data-->
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'CityDetails',

};
</script>

<style scoped>
/* .currentInfo {

}
.currentInfoTemp {

}
.byTime {

}
.mapContainer {

}
.weekForecast {

}
.see_more {

} */
</style>
