const Database = require('./db'); 
const saveOrphanage = require('./saveOrphanage');
Database.then(async (db) => {
    //inserir dados na tabela 
    await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6555874",
        name: "Lar dos meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9888888",
        images: [
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 

            "https://images.unsplash.com/photo-1600712243809-7a3dd4e68fff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.", 
        opening_hours: "Horários de visitas das 18h até as 8h",
        open_on_weekends: "0"
    }) 
    //consultar dados da tabela
    const selectedOprphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOprphanages)

    //consultar somente 1 orphanage, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"')
    console.log(orphanage)

    //deletar dado da tabela 
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})