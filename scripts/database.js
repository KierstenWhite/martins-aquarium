const database = {
    fish: [
        {
            image: 'https://www.liveaquaria.com/images/categories/large/lg72524PurpleDottyback.jpg',
            name: "Carol",
            species: "Pseudochromis porphyreus",
            length: "2.5",
            location: "Narnia",
            food: "carnivore",
        },
        {
            image: 'https://www.liveaquaria.com/images/categories/large/lg81298IngensSeahorse.jpg',
            name: "Harold",
            species: "Hippocampus ingens",
            length: "7",
            location: "Nemo's Reef",
            food: "carnivore",
        },
        {
            image: 'https://www.liveaquaria.com/images/categories/large/lg_80388_Blue_Sapphire_Damselfish.jpg',
            name: "Brenda",
            species: "Chrysiptera cf. springeri",
            length: "0.5",
            location: "From the mouth of a seagull",
            food: "carnivore",
        },
        {
            image: 'https://www.liveaquaria.com/images/categories/large/lg_69872_Evansi_Anthias.jpg',
            name: "Sharon",
            species: "Pseudanthias evansi",
            length: "3",
            location: "Over the Rainbow",
            food: "carnivore",
        },
        {
            image: 'https://www.liveaquaria.com/images/categories/product/lg_72329_Royal_Gramma_Basslet.jpg',
            name: "Grandma",
            species: "Gramma loreto",
            length: "1",
            location: "San Diego, California",
            food: "carnivore",
        }
    ]
}

export const getFish = () => {
    return database.fish.map((copyofSingleFishObject) => ({...copyofSingleFishObject}))
}