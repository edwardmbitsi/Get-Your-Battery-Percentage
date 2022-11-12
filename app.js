navigator.getBattery().then(function(battery) {
    $('.progress-bar').css('width', battery.level * 100 + '%');
