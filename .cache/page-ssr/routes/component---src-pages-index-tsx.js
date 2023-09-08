"use strict";
exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./src/components/Form.tsx":
/*!*********************************!*\
  !*** ./src/components/Form.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./src/components/Input.tsx");


const Form = () => {
  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const receiveFromChild = event => {
    setUserName(event);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('this username: ', userName);
  }, [userName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto py-10 lg:py-28 px-4 lg:px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center pb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-[#2C261F] text-[30px] mb-1 leading-tight text-center"
  }, "Libro de reclamaciones"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-[#9B8F86] lg:w-6/12 mx-auto"
  }, "Conforme a lo establecido en el C\xF3digo de Protecci\xF3n y Defensa del Consumidor, esta instituci\xF3n cuenta con un libro de reclamaciones a su disposici\xF3n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:w-6/12 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-10 md:grid-cols-6 gap-3 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6 mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-semibold text-sm mb-5 text-[#2C261F]"
  }, "ANTES DE EMPEZAR, IND\xCDCANOS EL LUGAR EN EL QUE SE DIERON LOS SUCESOS DEL RECLAMO:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-[#2C261F]"
  }, "ESTABLECIMIENTO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Seleccione"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DNI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "CE")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-[#9B8F86]"
  }, "Nota: Si la queja o reclamo se relaciona con un proyecto entregado, consignar a la oficina principal.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#F09B3C]"
  }, "1. Identificaci\xF3n del consumidor reclamante")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "MONBRES*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "APELLIDOS*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "CORREO ELECTR\xD3NICO*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "TEL\xC9FONO/CELULAR*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "TIPO DOC."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DNI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "CE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "N\xBA DE DOCUMENTO*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DEPARTAMENTO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DNI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "CE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "PROVINCIA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DNI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "CE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DISTRITO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DNI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "CE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "DIRECCI\xD3N*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    texto: "",
    placeholder: "NOMBRE DEL TUTOR*",
    name: "tutor",
    onValueChange: receiveFromChild,
    type: "password",
    extraStyles: "my-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "APELLIDOS DEL TUTOR*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "TIPO DOC."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "DNI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "CE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "N\xBA DE DOCUMENTO*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-[#9B8F86]"
  }, "*Esto aplica si el reclamante es menor de edad")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6 pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#F09B3C]"
  }, "2. Identificaci\xF3n del bien contratado")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-5 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "default-radio-1",
    type: "radio",
    value: "",
    name: "default-radio",
    className: "w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "default-radio-1",
    className: "ml-2 text-sm pt-[10px]"
  }, "PROYECTO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    checked: true,
    id: "default-radio-2",
    type: "radio",
    value: "",
    name: "default-radio",
    className: "w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "default-radio-2",
    className: "ml-2 text-sm pt-[10px]"
  }, "SERVICIO")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: "",
    cols: 30,
    rows: 4,
    placeholder: "MENSAJE"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6 pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#F09B3C]"
  }, "3. Detalle de la Reclamaci\xF3n y Pedido del Consumidor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-5 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "default-radio-3",
    type: "radio",
    value: "",
    name: "default-radio",
    className: "w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "default-radio-3",
    className: "ml-2 text-sm pt-[10px]"
  }, "QUEJA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    checked: true,
    id: "default-radio-4",
    type: "radio",
    value: "",
    name: "default-radio",
    className: "w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "default-radio-4",
    className: "ml-2 text-sm pt-[10px]"
  }, "RECLAMO")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-[#9B8F86]"
  }, "*Reclamo: Disconformidad relacionada a los proyectos o servicios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-[#9B8F86]"
  }, "*Queja: Disconformidad no relacionada a los proyectos o servicios;o, malestar o descontento respecto a la atenci\xF3n al p\xFAblico.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: "",
    cols: 30,
    rows: 4,
    placeholder: "DETALLE*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none",
    name: "",
    id: "",
    cols: 30,
    rows: 4,
    placeholder: "PEDIDO*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "dropzone-file",
    className: "flex flex-col items-center justify-center w-full h-[150px] border border-[#8B8986] border-dashed rounded-lg cursor-pointer bg-[#F1F1F1]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center justify-center pt-5 pb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-2 text-sm text-[#9B8F86]"
  }, "Adjuntar archivo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-[#9B8F86]"
  }, "(PDF, PPTX, WORD o im\xE1genes JPG, PNG)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "dropzone-file",
    type: "file",
    className: "hidden"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6 pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#F09B3C]"
  }, "4. Observaciones y acciones adoptadas por el proveedor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#9B8F86]"
  }, "Fecha de comunicaci\xF3n de la respuesta: Jueves, 04 de Octubre del 2018."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#9B8F86]"
  }, "Descripci\xF3n: \u201CAl ser un reclamo virtual, su caso ser\xE1 derivado al \xE1rea de atenci\xF3n al cliente, a fin de dar respuesta dentro del plazo legalmente establecido.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6 pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#F09B3C]"
  }, "5. Autorizo notificaci\xF3n del resultado del reclamo al correo consignado")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-5 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "default-radio-5",
    type: "radio",
    value: "",
    name: "default-radio",
    className: "w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "default-radio-5",
    className: "ml-2 text-sm pt-[10px]"
  }, "SI")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    checked: true,
    id: "default-radio-6",
    type: "radio",
    value: "",
    name: "default-radio",
    className: "w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "default-radio-6",
    className: "ml-2 text-sm pt-[10px]"
  }, "NO")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-10 md:col-span-6 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs text-[#eb323c]"
  }, "(*) Campos obligatorios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#9B8F86]"
  }, "* La formulaci\xF3n del reclamo no impide a la persona acudir a otras v\xEDas de soluci\xF3n de controversias ni es requisito previo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#9B8F86]"
  }, "* El proveedor deber\xE1 dar respuesta al reclamo en un plazo no mayor a (30) treinta d\xEDas calendario, pudiendo ampliar el plazo hasta (30) treinta d\xEDas m\xE1s, previa comunicaci\xF3n al consumidor.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-2 w-full my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: "some_id",
    className: "relative peer flex items-center justify-center appearance-none w-5 h-5 border-2 border-[#42B0CD] rounded-sm bg-white checked:bg-[#42B0CD] checked:border-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "pt-1 text-[#9B8F86] text-sm",
    htmlFor: "some_id"
  }, "He le\xEDdo y acepto la Pol\xEDticas de Privacidad de Datos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "font-medium h-[50px] bg-[#42B0CD] w-fit text-white px-10 uppercase flex items-center justify-center shadow-[0_10px_20px_0_rgba(66,176,205,0.20)]",
    href: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pt-2"
  }, "ENVIAR")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/components/Input.tsx":
/*!**********************************!*\
  !*** ./src/components/Input.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  texto,
  placeholder,
  name,
  type = "text",
  onValueChange,
  customStyles,
  extraStyles
}) => {
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: placeHold,
    1: setPlaceHolder
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: inputType,
    1: setInputType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("text");
  const {
    0: inputName,
    1: setInputName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handleChange = value => {
    setInputValue(value);
    onValueChange(value);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setInputValue(texto);
    setInputName(name);
    setPlaceHolder(placeholder);
    setInputType(type);
  }, [name, placeholder, texto, type]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: `input-component ${extraStyles}`,
    type: inputType,
    name: inputName,
    id: inputName,
    value: inputValue,
    onChange: event => handleChange(event.target.value),
    placeholder: placeHold
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/pages/index.tsx?export=default":
/*!********************************************!*\
  !*** ./src/pages/index.tsx?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Form */ "./src/components/Form.tsx");


const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home Page");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map