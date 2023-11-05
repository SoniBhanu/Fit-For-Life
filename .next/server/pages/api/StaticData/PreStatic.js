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
exports.id = "pages/api/StaticData/PreStatic";
exports.ids = ["pages/api/StaticData/PreStatic"];
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

/***/ "(api)/./pages/api/StaticData/PreStatic.js":
/*!*******************************************!*\
  !*** ./pages/api/StaticData/PreStatic.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction getData() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Pre_data.json\");\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n    const data = JSON.parse(fileData);\n    return data;\n}\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const data = getData();\n        res.status(200).json({\n            message: data\n        });\n    } else if (req.method === \"POST\") {\n        const { title , subtitle , description , image1  } = req.body;\n        const newSupplement = {\n            title,\n            subtitle,\n            description,\n            image1,\n            id: Date.now()\n        };\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"Pre_data.json\");\n        const data = getData();\n        data.push(newSupplement);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"Added\",\n            book: newSupplement\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvU3RhdGljRGF0YS9QcmVTdGF0aWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUV4QixTQUFTRSxVQUFVO0lBQ2pCLE1BQU1DLFdBQVdGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLFdBQVdQLHNEQUFlLENBQUNHO0lBQ2pDLE1BQU1NLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0o7SUFDeEIsT0FBT0U7QUFDVDtBQUVBLFNBQVNHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3pCLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1OLE9BQU9QO1FBQ2JZLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBU1Q7UUFBSztJQUN2QyxPQUFPLElBQUlJLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ2hDLE1BQU0sRUFBRUksTUFBSyxFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRUMsT0FBTSxFQUFFLEdBQUdULElBQUlVLElBQUk7UUFDekQsTUFBTUMsZ0JBQWdCO1lBQ3BCTDtZQUNBQztZQUNBQztZQUNBQztZQUNBRyxJQUFJQyxLQUFLQyxHQUFHO1FBQ2Q7UUFFQSxNQUFNeEIsV0FBV0YsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7UUFFbEQsTUFBTUcsT0FBT1A7UUFDYk8sS0FBS21CLElBQUksQ0FBQ0o7UUFDVnhCLHVEQUFnQixDQUFDRyxVQUFVTyxLQUFLb0IsU0FBUyxDQUFDckI7UUFDMUNLLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFTYSxNQUFNUDtRQUFjO0lBQy9ELENBQUM7QUFDSDtBQUVBLGlFQUFlWixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmQvLi9wYWdlcy9hcGkvU3RhdGljRGF0YS9QcmVTdGF0aWMuanM/OWZiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBcIlByZV9kYXRhLmpzb25cIik7XHJcbiAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0RGF0YSgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBkYXRhIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UxIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IG5ld1N1cHBsZW1lbnQgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBzdWJ0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGltYWdlMSxcclxuICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBcIlByZV9kYXRhLmpzb25cIik7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcclxuICAgIGRhdGEucHVzaChuZXdTdXBwbGVtZW50KTtcclxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJBZGRlZFwiLCBib29rOiBuZXdTdXBwbGVtZW50IH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImdldERhdGEiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZURhdGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UxIiwiYm9keSIsIm5ld1N1cHBsZW1lbnQiLCJpZCIsIkRhdGUiLCJub3ciLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImJvb2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/StaticData/PreStatic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/StaticData/PreStatic.js"));
module.exports = __webpack_exports__;

})();