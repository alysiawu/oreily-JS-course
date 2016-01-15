var weatherStation = {
    update: [],
    addObserver: function(f) {
        this.update.push(f);
    },
    notify: function() {
        for (var i = 0; i < this.update.length; i++) {
            var f = this.update[i];
            f.apply(this, arguments);
        }
    }
};

weatherStation.addObserver(function(weather) {
    console.log("The current temp is: " + weather.temp);
});

weatherStation.addObserver(function(weather) {
    console.log("The current pressure is: " + weather.pressure);
});

weatherStation.notify({ temp: 87, pressure: 29.93 }); 