/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Pikachu and Onix.
*/ 

let pikachuAttack = 25
let onixAttack = 35

if(pikachuAttack > onixAttack){
    console.log('pikachu is stronger')
}else if (onixAttack > pikachuAttack){
    console.log('onix is stronger')
}else {
     console.log('They are tied')
}
   
let pikachuHealth = 100
let pikachuDefense = 0

if (pikachuHealth <= onixAttack){
    console.log('Pikachu has fainted')
} else {
    // pikachuHealth = pikachuHealth - onixAttack
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}`)
}

pikachuDefense += 25

if(pikachuHealth <= onixAttack - pikachuDefense){
    console.log('Pikachu has fainted')
} else {
    // pikachuHealth = pikachuHealth - onixAttack
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}`)
}

if((pikachuHealth + 50) >= 100){
    pikachuHealth = 100
}else{
    pikachuHealth += 50
}
console.log(`Pikachu's was healed and his health is now ${pikachuHealth}`)

let ironTailHits = false

if (ironTailHits !== true){
    console.log('The battle continues!')
}else{
    console.log('Onix has fled the battle')
}

for(let i=0; i < 5 ; i++){
    if (pikachuHealth <= onixAttack - pikachuDefense){
        console.log('Pikachu has fainted')
    }else{
        pikachuHealth -= (onixAttack - pikachuDefense)
        console.log(`Pikachu's health is down to ${pikachuHealth}`)
    }
}

while(pikachuHealth > 0){
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}`)
    if(pikachuHealth <=0){
        console.log('Pikachu has fainted')
    }
}
