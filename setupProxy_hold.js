const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy("/stories", {
            target: "",
            changeOrigin: true
        })
    );
};