"use strict"
class myArr{
    constructor(){
        this.elements=arguments;
    }

    //task 1
    Some (callBackFunction){
        let result=false;
        for(const item of this.elements){
            if(callBackFunction(item)){
                result=true;
                break;
            }
        }
        return result;
    }

    //task 2
    Map (callBackFunction) {
        let result=[];
        for(let i=0; i<this.elements.length; i++){
            result[i]=callBackFunction(this.elements[i]);
        }
        return result;
    }
    
    //task 3
    Filter (callBackFunction){
        let result=[];
        for(const item of this.elements){
            if(callBackFunction(item)){
                result.push(item)
            }
        }
        return result;
    }

    //task 4
    IndexOf (element){
        let result=-1;
        for(let i=0; i<this.elements.length; i++){
            if(element==this.elements[i]){
                result=i;
                break;
            }
        }
        return result;
    }

    LastIndexOf(element){
        let result=-1;
        for( let i=this.elements.length-1; i>0; i--){
            if(element==this.elements[i]){
                result=i;
                break;
            }
        }
        return result;
    }

    //task 5
    Include(element, index=0){
        for(let i=index; i<this.elements.length; i++){
            if(element==this.elements[i]){
                return true;
            }
        }
        return false;
    }

    // task 6
    Join(element=","){
        let result="";
        for(let i=0; i<(this.elements.length-1); i++){
            result+=(this.elements[i]+element);
        }
        result+=this.elements[this.elements.length-1];
        return result;
    }

    // task 7
    ToString(){
        let result="";
        for(let i=0; i<(this.elements.length-1); i++){
            result+=(this.elements[i]+",");
        }
        result+=this.elements[this.elements.length-1];
        return result;
    }
}
let Arr= new myArr(2,3,2,5,6,1,9,19,20);
console.log(Arr.ToString());