/**
 * Created by DongwooInt on 2015-02-25.
 */
(function() {
    var results;
    this.assert = function assert(value, desc) {
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }
        return li;
    };
    this.test = function test(name, fn) {
        results = document.getElementById("results");
        results = assert(true, name).appendChild(document.createElement("ul"));
        fn();
    };
})();

window.onload = function() {
    test("A test", function() {
        assert(true, "First assertion completed");
        assert(true, "Second assertion completed");
        assert(true, "Third assertion completed");
    });
    test("Another test", function() {
        assert(true, "First assertion completed");
        assert(false, "Second assertion fail.");
        assert(true, "Third assertion completed");
    });
};
