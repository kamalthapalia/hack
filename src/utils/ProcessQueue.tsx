export class Queue<T> {
    private items: T[];
    private offset: number;


    constructor() {
      this.items = [];
      this.offset = 0;
    }
  
    enqueue(item: T) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
  
      const item = this.items[this.offset];
      this.offset++;
  
      // If we have dequeued more than half of the items, slice the queue to free memory
      if (this.offset * 2 >= this.items.length) {
        this.items = this.items.slice(this.offset);
        this.offset = 0;
      }
  
      return item;
    }
  
    isEmpty() {
      return this.items.length === this.offset;
    }
  
    length() {
      return this.items.length - this.offset;
    }
  }