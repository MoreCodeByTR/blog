function Event(){
    this.event=[]  //使用{}更好，无需循环

    this.addEventListener=function(name){
        let obj={
            task:[],
            name
        }
        this.event.push(obj)
    }

    this.on=function(name,fn){
        for(let item of this.event){
            if(item.name==name){
                item.task.push(fn)
                return
            }
        }
    }

    this.emit=function(name){
        for(let item of this.event){
            if(item.name==name){
                
                for(let i=0;i<item.task.length;i++){
                    item.task[i].call()
                }

                return
            }
        }
    }

    this.off=function(name){
        for(let i=0;i<this.event.length;i++){
            if(this.event[i].name==name){ 
                this.event.splice(i,1)
                return
            }
        }
    }

    this.show=function(){
        return this.event
    }
    
}

let e=new Event()
e.addEventListener('start')
e.on('start',()=>{console.log(123)})
e.on('start',()=>{console.log(456)})
e.emit('start')
e.off('start')
console.log(e.show())
e.addEventListener('start2')
e.on('start2',()=>{console.log(123)})
e.on('start2',()=>{console.log(456)})
console.log(e.show())