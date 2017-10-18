const express = require('express')
const app = express()
const capitulos = [
    { temporada: 'Temporada 1', capitulos: ['Pilot', 'Lawnmower Dog', 'Anatomy Park', 'M. Night Shaym-Aliens!', 'Meeseeks and Destroy', 'Rick Potion #9', 'Raising Gazorpazorp', 'Rixty Minutes', 'Something Ricked This Way Comes', 'Close Rick-counters of the Rick Kind', 'Ricksy Business'] },
    { temporada: 'Temporada 2', capitulos: ['A Rickle in Time', 'Mortynight Run', 'Auto Erotic Assimilation', 'Total Rickall', 'Get Schwifty', 'The Ricks Must Be Crazy', 'Big Trouble in Little Sanchez', 'Interdimensional Cable 2: Tempting Fate', "Look Who's Purging Now", 'The Wedding Squanchers'] },
    { temporada: 'Temporada 3', capitulos: ['The Rickshank Rickdemption ', 'Rickmancing the Stone ', 'Pickle Rick ', 'Vindicators 3: The Return of Worldender', 'The Whirly Dirly Conspiracy', 'Rest and Ricklaxation', 'Tales from the Citadel', "Morty's Mind Blowers", "The ABC's of Beth", 'The Rickchurian Mortydate'] }
]

app.get('/api/temporadas', function(req, res) {
    const response = {temporadas: capitulos}
    res.json(response);
});

app.get('/api/temporadas/:id', function(req, res) {
    const id = req.params.id
    const temporada = capitulos[id]
    res.json(temporada);
});

app.listen(3000)