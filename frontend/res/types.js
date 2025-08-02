export const types = { // what is [x] weak/resist/immune to?
    fire: {
        "resistances":["fire", "plant", "ice", "bug", "metal"],
        "weaknesses":["water", "earth", "air"],
        "immunities":[]
    },
    water: {
        "resistances":["fire", "water", "ice", "metal"],
        "weaknesses":["plant", "electric", "toxic"],
        "immunities":[]
    },
    plant: {
        "resistances":["water", "plant", "earth", "electric"],
        "weaknesses":["fire", "ice", "dark", "bug", "toxic"],
        "immunities":["light"]
    },
    light: {
        "resistances":["fire", "light", "ancient"],
        "weaknesses":["dark", "metal"],
        "immunities":["spirit"]
    },
    dark: {
        "resistances":["dark", "mind", "spirit"],
        "weaknesses":["fire", "light", "bug"],
        "immunities":[]
    },
    ice: {
        "resistances":["ice", "air"],
        "weaknesses":["fire", "metal", "brawler"],
        "immunities":[]
    },
    electric: {
        "resistances":["electric", "metal", "air"],
        "weaknesses":["water", "earth"],
        "immunities":[]
    },
    air: {
        "resistances":["bug", "brawler"],
        "weaknesses":["ice", "electric"],
        "immunities":["earth"]
    },
    bug: {
        "resistances":["plant", "dark", "bug", "earth"],
        "weaknesses":["ice", "air", "brawler"],
        "immunities":[]
    },
    earth: {
        "resistances":["toxic"],
        "weaknesses":["water", "plant", "ice"],
        "immunities":["electric"]
    },
    toxic: {
        "resistances":["plant", "toxic", "brawler"],
        "weaknesses":["earth", "mind"],
        "immunities":[]
    },
    metal: {
        "resistances":["ice", "air", "bug", "metal", "mind", "ancient", "simple"],
        "weaknesses":["fire", "electric", "earth", "brawler"],
        "immunities":[]
    },
    ancient: {
        "resistances":["fire", "water", "plant", "electric", "spirit"],
        "weaknesses":["light", "metal", "ancient"],
        "immunities":[]
    },
    spirit: {
        "resistances":["electric", "dark", "toxic", "simple"],
        "weaknesses":["light", "ancient", "spirit"],
        "immunities":["brawler"]
    },
    brawler: {
        "resistances":["ice", "bug"],
        "weaknesses":["air", "toxic", "spirit", "mind"],
        "immunities":[]
    },
    mind: {
        "resistances":["light", "brawler", "mind"],
        "weaknesses":["dark", "bug", "spirit"],
        "immunities":[]
    },
    simple: {
        "resistances":["spirit"],
        "weaknesses":["mind", "brawler"],
        "immunities":[]
    },

}