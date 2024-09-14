var func = function (n, m, l) {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func(23, 23);
