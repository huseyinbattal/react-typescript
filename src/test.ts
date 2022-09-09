export let customName: string = "Test";

customName.toUpperCase();

export enum Drinks {
    COLA = 0,
    COFFEE = 1,
    TEA = 2
}

console.log(Drinks.COLA, Drinks.TEA, Drinks.COFFEE)

export class User {
    ad: string
    soyad: string

    constructor(ad: string, soyad: string) {
        this.ad = ad
        this.soyad = soyad
    }

    getSoyad(): string{
        return this.soyad
    }
}

const user: User = new User("Hüseyin", "Battal")

console.log(user,user.getSoyad())