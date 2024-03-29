"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/StaticData/ProteinStatic";
exports.ids = ["pages/api/StaticData/ProteinStatic"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/StaticData/ProteinStatic.js":
/*!***********************************************!*\
  !*** ./pages/api/StaticData/ProteinStatic.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction getData() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Proteins_data.json\");\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n    const data = JSON.parse(fileData);\n    return data;\n}\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const data = getData();\n        res.status(200).json({\n            message: data\n        });\n    } else if (req.method === \"POST\") {\n        const { title , subtitle , description , image1  } = req.body;\n        const newSupplement = {\n            title,\n            subtitle,\n            description,\n            image1,\n            id: Date.now()\n        };\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Proteins_data.json\");\n        const data = getData();\n        data.push(newSupplement);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"Added\",\n            book: newSupplement\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvU3RhdGljRGF0YS9Qcm90ZWluU3RhdGljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFFeEIsU0FBU0UsVUFBVTtJQUNqQixNQUFNQyxXQUFXRixnREFBUyxDQUFDSSxRQUFRQyxHQUFHLElBQUksUUFBUTtJQUNsRCxNQUFNQyxXQUFXUCxzREFBZSxDQUFDRztJQUNqQyxNQUFNTSxPQUFPQyxLQUFLQyxLQUFLLENBQUNKO0lBQ3hCLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN6QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNTixPQUFPUDtRQUNiWSxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVNUO1FBQUs7SUFDdkMsT0FBTyxJQUFJSSxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUNoQyxNQUFNLEVBQUVJLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxZQUFXLEVBQUVDLE9BQU0sRUFBRSxHQUFHVCxJQUFJVSxJQUFJO1FBQ3pELE1BQU1DLGdCQUFnQjtZQUNwQkw7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUcsSUFBSUMsS0FBS0MsR0FBRztRQUNkO1FBRUEsTUFBTXhCLFdBQVdGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSSxRQUFRO1FBRWxELE1BQU1HLE9BQU9QO1FBQ2JPLEtBQUttQixJQUFJLENBQUNKO1FBQ1Z4Qix1REFBZ0IsQ0FBQ0csVUFBVU8sS0FBS29CLFNBQVMsQ0FBQ3JCO1FBQzFDSyxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBU2EsTUFBTVA7UUFBYztJQUMvRCxDQUFDO0FBQ0g7QUFFQSxpRUFBZVosT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kLy4vcGFnZXMvYXBpL1N0YXRpY0RhdGEvUHJvdGVpblN0YXRpYy5qcz81ZTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiUHJvdGVpbnNfZGF0YS5qc29uXCIpO1xyXG4gIGNvbnN0IGZpbGVEYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogZGF0YSB9KTtcclxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBzdWJ0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlMSB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBuZXdTdXBwbGVtZW50ID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgc3VidGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBpbWFnZTEsXHJcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIiwgXCJQcm90ZWluc19kYXRhLmpzb25cIik7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcclxuICAgIGRhdGEucHVzaChuZXdTdXBwbGVtZW50KTtcclxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJBZGRlZFwiLCBib29rOiBuZXdTdXBwbGVtZW50IH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImdldERhdGEiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZURhdGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UxIiwiYm9keSIsIm5ld1N1cHBsZW1lbnQiLCJpZCIsIkRhdGUiLCJub3ciLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImJvb2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/StaticData/ProteinStatic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/StaticData/ProteinStatic.js"));
module.exports = __webpack_exports__;

})();