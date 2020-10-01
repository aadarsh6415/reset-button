class Player{
    constructor(){
this.index=null
this.name=null
this.distance=0
}
updateCount(count){
database.ref('/').update({
    playerCount:count
})
}
getCount(){
database.ref('playerCount').on("value",function(data){
    playerCount = data.val()
})
}
update(){
var playerIndex = "players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
   distance:this.distance
})
}
getPlayerInfo(){
    var playerInfoRef = database.ref('players')
playerInfoRef.on("value",(data)=>{
    allPlayers=data.val()
})

}

}
