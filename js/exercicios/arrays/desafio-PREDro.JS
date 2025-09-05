const joioETrigo  =  ["joio",  "trigo",  "trigo",  "joio",  "trigo", 
"joio",  "joio",  "joio",  "joio",  "trigo",  "trigo",  "joio", 
"joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", 
"trigo",  "trigo",  "trigo",  "trigo",  "trigo",  "trigo", 
"joio",  "joio",  "joio",  "joio",  "joio",  "joio",  "joio", 
"joio",  "trigo",  "trigo",  "joio",  "joio",  "joio",  "joio", 
"joio",  "joio",  "joio",  "joio",  "joio",  "joio",  "joio", 
"joio",  "joio",  "joio",  "joio",  "joio",  "trigo",  "trigo", 
"trigo",  "trigo",  "trigo",  "trigo",  "trigo",  "trigo", 
"trigo",  "trigo",  "trigo",  "trigo",  "trigo",  "trigo", 
"trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", 
"joio",  "joio",  "joio",  "joio",  "joio",  "joio",  "joio", 
"trigo",  "trigo",  "trigo",  "trigo",  "trigo",  "trigo", 
"trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", 
"joio",  "joio",  "trigo",  "joio",  "joio",  "joio",  "joio", 
"joio", "trigo", "trigo", "trigo", "trigo", "joio", "joio", 
"joio",  "joio",  "joio",  "joio",  "joio",  "trigo",  "trigo", 
"trigo", "joio", "trigo", "joio", "joio", "joio"];

const Nomejoio = "joio";

const Nometrigo = "trigo";

const Ajoio = joioETrigo.filter(function(joio){
    return joio === Nomejoio;
})

const Atrigo = joioETrigo.filter(function(trigo){
    return trigo === Nometrigo;
})

console.log(Ajoio);
console.log(Atrigo);




