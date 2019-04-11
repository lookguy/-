import {Stack} from './stack';
import {Queue} from "./queue";

const stack = new Stack();
const queue = new Queue();

const section_stack = document.querySelector('#stack');
const input_stack = document.querySelector('#stack_number');
const template_push = function () {
    let div = document.createElement("div");
    div.innerText = stack.peek();
    return div;
};

const section_queue = document.querySelector('#queue');
const input_queue = document.querySelector('#queue_number');
const template_push_queue = function () {
    let div = document.createElement("div");
    div.innerText = queue.front();
    return div;
};

section_stack.addEventListener("click", function (e) {
    switch (true) {
        case e.target === document.querySelector('#push'):
            stack.push(input_stack.value);
            input_stack.value = '';
            if (this.children[3].childElementCount === 0) {
                this.children[3].appendChild(template_push());
            } else {
                this.children[3].insertBefore(template_push(), this.children[3].firstChild);
            }
            console.log(stack.print())
            break;
        case e.target === document.querySelector('#pop'):
            stack.pop();
            if (this.children[3].childElementCount === 0) {
                window.confirm("没有任何元素在栈内");
            } else {
                this.children[3].removeChild(this.children[3].firstChild);
            }
            console.log(stack.print());
            break;
        default:
            return;
    }
})

section_queue.addEventListener("click", function (e) {
    switch (true) {
        case e.target === document.querySelector('#enqueue'):
            queue.enqueue(input_queue.value);
            input_queue.value = '';
            if (this.children[3].childElementCount === 0) {
                this.children[3].appendChild(template_push_queue());
            } else {
                this.children[3].insertBefore(template_push_queue(), this.children[3].firstChild);
            }
            console.log(queue.print());
            break;
        case e.target === document.querySelector('#dequeue'):
            queue.dequeue();
            if (this.children[3].childElementCount === 0) {
                window.confirm("没有任何元素在队列内");
            } else {
                this.children[3].removeChild(this.children[3].lastChild);
            }
            console.log(queue.print());
            break;
        default:
            return;
    }
})
