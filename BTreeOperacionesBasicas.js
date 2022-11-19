class NodeBtree{
    constructor(id){
        this.id = id
        this.leftChild = null
        this.rightChild = null
    }
}
class nodeList extends NodeBtree{
    constructor(id){
        super(id)
        this.next = null
        this.before = null
    }
}
//class that generates a double list based on the expression
//to create a binary tree
class ExpresionDoubleList{
    constructor(){
        this.root = null
        this.first = null
        this.last = null
    }
    add(newNode){
        if(this.first === null){
            this.first = newNode
            this.last = this.first
        }else{
            newNode.before = this.last
            this.last.next = newNode
            this.last = newNode
        }
    }
    generateBTrees(){
        let tmp = this.first
        while(!!tmp){
            if(tmp.id === "*" || tmp.id === "/"){
                this._GBTProcess(tmp)
            }
            tmp = tmp.next
        }
        tmp = this.first
        while(!!tmp){
            if(tmp.id === "+" || tmp.id === "-"){
                this._GBTProcess(tmp)
            }
            tmp = tmp.next
        }

    }
    //process that transforms nodes to root and nodes to children/leaves
    _GBTProcess(tmp){
        //if it is a math sign, the number before and after them are its children
        tmp.leftChild = tmp.before
        tmp.rightChild = tmp.next
        //to mantain the structure of the double list
        if(tmp.before === this.first){
            this.first = tmp
        }else{
            tmp.before.before.next = tmp
        }
        tmp.before = tmp.before.before
        tmp.next = tmp.next.next
        if(!!tmp.next){
            tmp.next.before = tmp
        }else{
            this.last = tmp
            this.root = tmp
            //get rid of properties that wont be used
            delete tmp.next
            delete tmp.before
        }
    }
    //returns expression with RID structure based on the Btree
    preOrder(){
        if(this.root === null) {
            return null
        }
        else{
            return this._recursivePreOrder(this.root)
        }
    }
    _recursivePreOrder(root){ //RID
        let txt = ``
        txt += `${root.id}`
        if(!!root.leftChild){
            txt += `${this._recursivePreOrder(root.leftChild)}`
        }
        if(!!root.rightChild){
            txt += `${this._recursivePreOrder(root.rightChild)}`
        }
        return txt
    }
    //returns expression with IDR structure based on Btree
    postOrder(){
        if(this.root === null) {
            return null
            
        }
        else{
            
            return this._recursivePostOrder(this.root)
        }
    }
    _recursivePostOrder(root){ //IDR
        let txt = ``
        if(!!root.leftChild){
            txt += `${this._recursivePostOrder(root.leftChild)}`
        }
        if(!!root.rightChild){
            txt += `${this._recursivePostOrder(root.rightChild)}`
            
        }
        txt += `${root.id}`
        return txt
    }
    //generates a double list based on a string
    generateList(str){
        let i = 0
        while(i < str.length){
            let node = new nodeList(str[i])
            this.add(node)
            i++
        }
    }
}
//class with common methods for the structures FIFO and LIFO
class Estructure{
    constructor(){
        this.first = null
        this.last = null
        this.operation = null
    }
    add(newNode){
        if(this.first === null){
            this.first = newNode
            this.last = this.first
        }else{
            this.last.next = newNode
            this.last = newNode
        }
    }
    extract(){
        let char = this.first
        if(!!this.first){
            this.first = this.first.next
        }
        return char
    }
}
class FIFO extends Estructure{
    constructor(){
        super()
    }
    generateList(str){
        let i = 0
        while(i < str.length){
            let node = new nodeList(str[i])
            delete node.before
            this.add(node)
            i++
        }
    }
    //method that does the math stuff with PostOrder
    doOperation(){
        while (!!this.first){
            if(isNaN(this.first.id)){
                let num1 = pilaPrincipal.extract()
                let num2 = pilaPrincipal.extract()
                //second extracted number is positioned on the left
                let num3 = String(eval(`${num2.id}${this.extract().id}${num1.id}`))
                pilaPrincipal.addLastFirst(new nodeList(num3))
            }else{
                let node = this.extract()
                node.next = null
                pilaPrincipal.addLastFirst(node)
            }
        }
    }
}
class LIFO extends Estructure{
    constructor(){
        super()       
    }
    addLastFirst(newNode){
        if(!!this.first){
            newNode.next = this.first
        }
        this.first = newNode        
    }
    generateList(str){
        let i = str.length - 1
        while(i >= 0){
            let node = new nodeList(str[i])
            delete node.before
            this.add(node)
            i--
        }
    }
    doOperation(){
        while (!!this.first){
            if(isNaN(this.first.id)){
                let num1 = pilaPrincipal.extract()
                let num2 = pilaPrincipal.extract()
                //second extracted number is positioned on the right
                let num3 = String(eval(`${num1.id}${this.extract().id}${num2.id}`))
                pilaPrincipal.addLastFirst(new nodeList(num3))
            }else{
                let node = this.extract()
                node.next = null
                pilaPrincipal.addLastFirst(node)
            }
        }
    }
}
const dList = new ExpresionDoubleList
const FIFOpostO = new FIFO()
const LIFOpreO = new LIFO()
//create a LIFO for the operations
const pilaPrincipal = new LIFO()
dList.generateList("3*2+2+5*8/2")
dList.generateBTrees()
//returns PreOrder and PostOrder from Btree
const preOrder = dList.preOrder()
const postOrder = dList.postOrder()
console.log(dList.preOrder() + " PREORDER")
console.log(dList.postOrder() + " POSTORDER")
//double list based on string from postOrder Btree
FIFOpostO.generateList(postOrder)
FIFOpostO.doOperation()
const resultadoPostOrder = pilaPrincipal.extract().id
console.log(resultadoPostOrder)
//double list based on string from PreOrder Btree
LIFOpreO.generateList(preOrder)
LIFOpreO.doOperation()
const resultadoPreOrder = pilaPrincipal.extract().id
console.log(resultadoPreOrder)
