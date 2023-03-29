async function start(){
    try {
        await init()
        browserNotify({
            title: "title", 
            body: "Minha primeira notificação",
            icon:"./logoo.png"
        })    
    } catch (error) {
        console.log(error.message)
    }
}
start()