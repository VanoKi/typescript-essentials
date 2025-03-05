enum ModalStatus {
    Opened,
    Closed,
}

const buildModal = (text: string, status: ModalStatus) => {
    return {text, status}
}

const modal = buildModal('hexlet', ModalStatus.Opened)
console.log(modal);
