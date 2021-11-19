const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    let current = head;
    
    let x = new Set([current.data]);
    
    while(current.next){
        let nextnode = current.next;
        
        if(x.has(nextnode.data)){
            current.next = nextnode.next;
        }
        else{
            x.add(nextnode.data)
            current = nextnode
        }
        
    }
    return head
};

