export class Queue{
    constructor(){
        this.items=[];
    };
    // 队列尾部添加项
    enqueue(e){
        this.items.push(e);
    }
    // 移除队列首项
    dequeue(){
        this.items.shift();
    }
    // 返回第一个项
    front(){
        return this.items.length > 0 ? this.items[0]:''
    }
    // 判断队列是否为空
    isEmpty(){
        return this.items.length === 0
    }
    // 返回队列项数量
    size(){
        return this.items.length
    }
    // 打印一下
    print(){
        console.log(this.items.toString())
    }
}