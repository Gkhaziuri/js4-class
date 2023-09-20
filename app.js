// დავწეროთ ფუნქცია, რომელშიც აღწერილი იქნება რაიმე კონტეინერი 
// და ამ ფუნქციას გავატანოთ პარამეტრად Color, text, button;
// და სულ მჭირდება ბრაუზერში მქონდეს სამი კონტეინერი 
// სამივე სხვადასხვა ფერით ტექსტით და ღილაკით;

// function createContainer(color, text, button) {
//     const container = document.createElement("div");
//     container.style.backgroundColor = grey;
//     container.style.width = "100px";
//     container.style.height = "100px";


//     const paragraph = document.createElement("p");
//     paragraph.textContent = "Hello World";
//     paragraph.style.color = "white";

//     const button = document.createElement("button");
//     button.textContent - "click";

//     container.appendChild(paragraph);
//     container.appendChild(button);

//     return container;
// }
const main = document.getElementById("main");

const createBoxItem = (bgColor) => {
    const boxItem = document.createElement("div");
    boxItem.style.width = "150px";
    boxItem.style.height - "150px";
    boxItem.style.backgroundColor = bgColor || "grey";
    boxItem.style.margin = "15px"
    return boxItem
}

const createTextItem = (textColor, text, parentElement) => {
    const textItem = document.createElement("h3");
    textItem.innerHTML = text;
    textItem.style.color = textColor;
    parentElement.appendChild(textItem); 
    return textItem;
}

const box_1 = createBoxItem("blue");
const box_2 = createBoxItem("red");
const box_3 = createBoxItem("yellow");

// main.appendChild(createElement("box_1", "blue", box_1))
// main.appendChild(createElement("box_2", "red", box_2))
// main.appendChild(createElement("box_3", "yellow", box_3))
main.appendChild(box_1); // Use 'box_1' directly, no need for createElement
main.appendChild(createTextItem("blue", "Box 1 Text", box_1)); // Add text to 'box_1'
main.appendChild(box_2);
main.appendChild(createTextItem("red", "Box 2 Text", box_2));
main.appendChild(box_3);
main.appendChild(createTextItem("yellow", "Box 3 Text", box_3));