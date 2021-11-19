const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
   
    var node = new  LinkedListNode(data);
  if(head===null){
    head = node
      return head
  }
     var temp = head;
    while(temp.next!=null){
        temp = temp.next

    }
    temp.next = node;
    return head;
}