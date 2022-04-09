"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = __importDefault(require("@purebase/ui/Button"));
var CustomButton_1 = __importDefault(require("components/CustomButton"));
var logger_1 = __importDefault(require("@purebase/utils/logger"));
var IndexPage = function () {
    (0, react_1.useEffect)(function () {
        (0, logger_1.default)('Page mounted');
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["The following Button resolved using built-in Next.js", ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://nextjs.org/docs/advanced-features/module-path-aliases" }, { children: "Absolute Imports" })), ' ', "feature:"] }), (0, jsx_runtime_1.jsx)(CustomButton_1.default, { children: "Custom internal button" }), (0, jsx_runtime_1.jsx)("p", { children: "The following Button resolved using custom alias configuration:" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "Button from ui" })] }));
};
exports.default = IndexPage;
//# sourceMappingURL=index.js.map