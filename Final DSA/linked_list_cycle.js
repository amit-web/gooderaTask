
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
  let temp = head;
  let slow = temp;
  let fast = temp;
  
  if(temp ===null || temp.next===null){
       
      return false
    
  }
  
  if(temp.next === temp){
    
   return true; 
  }
  
  while(fast!=null&&fast.next!=null){
    fast = fast.next.next;
     slow = slow.next;
     
    
    if(slow===fast){
       return true; 
    }
   
  }
  return false;
  
};

