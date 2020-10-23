export default function createElement(
    tag,
    // default values
    parentElement = document.body,
    cssClass = null,
    text = null,
    id = null
) {
    const newElement = document.createElement(tag);
    parentElement.appendChild(newElement);

    if (text) {
        newElement.textContent = text;
    }

    if (cssClass) {
        newElement.classList.add(cssClass);
    }
    
    if (id) {
        newElement.id = id;
    }

    return newElement;
}