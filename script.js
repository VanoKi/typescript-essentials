"use strict";
var ModalStatus;
(function (ModalStatus) {
    ModalStatus[ModalStatus["Opened"] = 0] = "Opened";
    ModalStatus[ModalStatus["Closed"] = 1] = "Closed";
})(ModalStatus || (ModalStatus = {}));
const buildModal = (text, status) => {
    return { text, status };
};
const modal = buildModal('hexlet', ModalStatus.Opened);
console.log(modal);
