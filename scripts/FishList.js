import { getFish } from "./database.js"

export const FishList = () => {
    const importFish = getFish()

    let htmlString = '<article class="fishList">'

    for (const singleFishObject of importFish) {
        htmlString += `<section class="fish card">
        <div><img  class="fish__image image--card" src="${singleFishObject.image}" /></div>
            <div class="fishDetails">${singleFishObject.name}</div>
            <div class="fish__species">${singleFishObject.species}</div>
            <div class="fish__length">${singleFishObject.length}</div>
            <div class="fish__location">${singleFishObject.location}</div>
            <div class="fish__diet">${singleFishObject.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

/* <img src+"${}" class="" alt="${}" />
Alt text also shows photos 

* for CSS - look into it
margin and padding at 0%

CSS Reset for asterisk 100% width CSS Reset will apply to everything UNTIL you adjust it later (because the most recent styling will take over old styling)

list-style-type?

z-index will change position (like layers) fixed

@media (min-width: 320px) {
    .logo(width: 50%)
}

In inspector, Toggle device toolbar (2nd one over)

live server in vsc - look at the extension on vsc

look at extensions */