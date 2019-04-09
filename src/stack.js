export class Stack {
    //选用议中数据结构来保存栈里的元素
    constructor() {
        this.items = [];
    }
    //添加元素
    push(el) {
        this.items.push(el);
    }
    //移除元素
    pop(el) {
        this.items.pop();
    }
    //返回栈顶的元素
    peek() {
        return this.items[items.length - 1];
    }
    //判断栈里是否有元素
    isEmpty() {
        return this.items.length === 0;
    }
    //移除栈里所有元素
    clear() { 
        for(let i =0;i<this.items.length;i++){
            this.items.pop()
        }
    }
    //返回栈里元素个数
    size() { 
        return this.items.length;
    }
    //打印
    print(){
        console.log(this.items.toString())
        return false;
    }
}
