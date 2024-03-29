import LinkedNode from "./Node.js";
import isEqual from "../utils/isEqual.js";

export default class LinkedList {
    head: LinkedNode | null = null;
    size: number = 0;

    add(el: any) {
        const node = new LinkedNode(el);
        let head = this.head;
        if (head === null) {
            this.head = node;
            this.size++;
            return;
        }
        while (head?.next !== null) {
            head = head.next;
        }

        head.next = node;
        this.size++;
    }

    addAt(num: number, el: any) {
        const node = new LinkedNode(el);
        let head = this.head;
        let index = 0;
        if (num > this.size) num = this.size;
        if (head === null) {
            this.head = node;
            this.size++;
            return;
        }
        while (head.next != null && index < num) {
            head = head.next;
            index++;
        }

        const next = head.next;
        head.next = node;
        head.next.next = next;
        this.size++;
    }

    deleteFrom(index: number) {
        if (index < 0 || index >= this.size)
            throw new TypeError("Invalid index provided to LinkedList");
        else {
            let curr,
                prev,
                it = 0;
            curr = this.head;
            prev = curr;

            if (curr === null) return;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr?.next;
                }
                //@ts-ignore
                prev.next = curr?.next;
            }
            this.size--;

            return curr?.value;
        }
    }

    indexOf(el: any) {
        let count = 0;
        let currentNode = this.head;

        while (currentNode != null) {
            if (isEqual(currentNode.value, el)) return count;
            count++;
        }

        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    toArray() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }
}
