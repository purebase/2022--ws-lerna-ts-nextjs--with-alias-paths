"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var url_1 = require("url");
var next_1 = __importDefault(require("next"));
var utils_1 = require("@purebase/utils");
var port = parseInt(process.env.PORT || '3000', 10);
var dev = process.env.NODE_ENV !== 'production';
var app = (0, next_1.default)({ dev: dev });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    (0, http_1.createServer)(function (req, res) {
        var parsedUrl = (0, url_1.parse)(req.url, true);
        var pathname = parsedUrl.pathname, query = parsedUrl.query;
        if (pathname === '/') {
            app.render(req, res, '/', query);
        }
        else {
            handle(req, res, parsedUrl);
        }
    }).listen(port);
    (0, utils_1.logger)("> Server listening at http://localhost:".concat(port, " as ").concat(dev ? 'development' : process.env.NODE_ENV));
});
//# sourceMappingURL=index.js.map