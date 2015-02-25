/**
 * Created by DongwooInt on 2015-02-25.
 */
(function() {
    var queue = [], paused = false, results;

    this.test = function(name, fn) {
        queue.push(function () {
            results = document.getElementById("results");
            results = assert(true, name).appendChild(document.createElement("ul"));
            fn();
        });
        runTest();
    };

    this.pause = function() {
        paused = true;
    };

    this.resume = function() {
        paused = false;
        setTimeout(runTest, 1);
    };

    function runTest() {
        if (!paused && queue.length) {
            queue.shift()();
            if (!paused) {
                resume();
            }
        }
    }

    this.assert = function(value, desc) {
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }
        return li;
    };
})();

window.onload = function() {
    test("Async Test #1", function() {
        pause();
        setTimeout(function() {
            assert(true, "First test complete");
            resume();
        }, 1000);
    });

    test("Async Test #2", function() {
        pause();
        setTimeout(function() {
            assert(true, "Second test complete");
            resume();
        }, 1000);
    });


};
