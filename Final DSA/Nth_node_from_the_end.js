const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    
   if(head===null || n < 1){
      return null; 
   }
  
  let temp = head;
    let p1 = temp;
    let p2 = temp;
  for(let j=0;j<n-1;j++){
       if(p2===null){
           return null 
       }
    p2= p2.next
  }
  
  while (p2.next!=null){
       
       p1= p1.next;
       p2= p2.next; 
    
  }
  return p1.data;
}
