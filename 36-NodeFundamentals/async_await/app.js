class Pokemon{
    constructor(id){
        this.id = id
        this.types = []
    }
    async getInfo(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        this.name = res.data.name
        for (let type of res.data.types){
            this.types.push(type.type.name)
        }
    }
}

<<<<<<< HEAD
// Pokemon(56)
console.log("Hello World")
=======
// Pokemon(56)
>>>>>>> origin/main
