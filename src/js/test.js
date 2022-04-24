
var obj={
    _name:'tr'
}
Object.defineProperty(obj,'name',{
    configurable:false,
    get:function(){
        return this._name
    },
    set(val){
        this._name=val
    }
})
obj.name=123
console.log(obj.name)