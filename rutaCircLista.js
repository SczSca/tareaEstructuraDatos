class Base {
    constructor(name, minutes){
        this.name = name
        this.minutes = minutes
        this.next = null
    }
}
class Ruta{
    constructor(){
        this.first = null
        //property that makes it easier for the methods
        this.lastadded = null
    }

    add(newBase){
        if(this.first === null){
            this.first = newBase
            this.first.next = newBase
            this.lastadded = newBase
        }
        else{
            newBase.next = this.first
            this.lastadded.next = newBase
            this.lastadded = newBase 
        }
    }
    
    search(name){
        let base = this.first
        let before = this.lastadded
        while(base != this.lastadded && base.name != name){
            before = base
            base = base.next
        }
        let values = [base, before]
        if (base.name == name){
            //return two values to write less code in delete()
            return values
        }
        else{
            return null
        }
    }

    delete(name){
        let values = this.search(name)
        if(values[0].name == name){
            values[1].next = values[0].next
            let message = "base borrada"
            return message
        }
        else{
            return null
        }
    }

    pathing(startBase,startHour,startMinute,endHour,endMinute){
        let base = this.search(startBase)
        if(base === null){
            return null
        }
        else{
            base = base[0]
            //temp to save future changes on the hours and minutes
            let temp = []
            //it tracks the base and time of arriving
            let track =`${base.name}: ${startHour}:${startMinute}\n`
            //transforms start and deadline to minutes
            let totalStartMinute = startHour * 60 + startMinute
            let totalEndMinute = endHour * 60 + endMinute
            while (totalStartMinute <= totalEndMinute){                
                base = base.next
                totalStartMinute += base.minutes
                //hours
                let temp = [Math.floor(totalStartMinute / 60)]
                //minutes
                temp[1] = totalStartMinute - temp[0] * 60
                track += `${base.name}: ${temp[0]}:${temp[1]}\n`
            }
            return track
        }

    }
    print(){
        let road = ""
        let base = this.first
        while(base != this.lastadded){
            road += `${base.name} -> `
            base = base.next
        }
        road += `${base.name} -> ${this.first.name} `
        return road
    }
}
const route = new Ruta
let b = new Base("a", 20)
route.add(b)
b = new Base("b", 20)
route.add(b)
b = new Base("c", 20)
route.add(b)
b = new Base("d", 20)
route.add(b)
console.log(route.print())
console.log(route.delete("b"))
console.log(route.print())
let searchedBase = route.search("c")
if(searchedBase === null){
    console.log("base no encontrada")
}
else{
    console.log(searchedBase[0])
}
let roadPathing = route.pathing("d",7,30,12,20)
if(roadPathing === null){
    console.log("No se puede iniciar rastreo, base inexistente")
}
else{
    console.log(roadPathing)

}
