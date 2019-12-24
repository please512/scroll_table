mounted() {
    this.tableScroll()
},
// 列表滚动
tableScroll() {
    var speed = 100;
    var delay = 2000;
    var height = 46;
    var time;
    var speed1 = 100;
    var delay1 = 2000;
    var height1 = 46;
    var time1;
    window.onload = function () {
        var area = document.getElementById("roll");
        area.innerHTML += area.innerHTML;

        function scroll() {
            if (area.scrollTop % height == 0) {
                clearInterval(time);
                setTimeout(start, delay);
            } else {
                area.scrollTop++;
                if (area.scrollTop >= area.scrollHeight / 2) {
                    area.scrollTop = 0;
                }
            }

        }

        function start() {
            time = setInterval(scroll, speed);
            area.scrollTop++;
        }
        setTimeout(start, delay);

        var area1 = document.getElementById("predictionId");
        area1.innerHTML += area1.innerHTML;

        function scroll1() {
            if (area1.scrollTop % height1 == 0) {
                clearInterval(time1);
                setTimeout(start1, delay1);
            } else {
                area1.scrollTop++;
                if (area1.scrollTop >= area1.scrollHeight / 2) {
                    area1.scrollTop = 0;
                }
            }
        }

        function start1() {
            time1 = setInterval(scroll1, speed1);
            area1.scrollTop++;
        }

        setTimeout(start1, delay1);
    }
},
