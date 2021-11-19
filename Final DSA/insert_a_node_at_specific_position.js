
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let count = 0;
    let temp = head;
    let prev = null;
  
  
  while(count!=position){
     count++
     prev = temp
     temp = temp.next;
     
  }
  
    let newNode = new LinkedListNode();
    newNode.data = data;
    newNode.next = temp;
    if(count == 0){
          head = newNode;
       }else{
          prev.next = newNode;
    }

    return head; 
  
  
}

