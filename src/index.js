import { Stack } from './stack';

const stack = new Stack();

const section_stack = document.querySelector('#stack');
const input_stack = document.querySelector('#stack_number');
const template_push = function () {
    let div = document.createElement("div");
    div.innerText = stack.peek()
    return div
};

section_stack.addEventListener("click", function (e) {
    switch (true) {
        case e.target === document.querySelector('#push'):
            stack.push(input_stack.value);
            input_stack.value = '';
            if (this.children[3].childElementCount === 0) {
                this.children[3].appendChild(template_push())
            } else {
                this.children[3].insertBefore(template_push(),this.children[3].firstChild)
            }
            break;
        case e.target === document.querySelector('#pop'):
            stack.pop();
            if (this.children[3].childElementCount === 0) {
                window.confirm("没有任何元素在栈内")
            } else {
                this.children[3].removeChild(this.children[3].firstChild)
            }
            break;
        default:
            return;
    }
})
