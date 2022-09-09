export let customName: string = "Test";

customName.toUpperCase();

export enum Drinks {
    COLA = 0,
    COFFEE = 1,
    TEA = 2
}

console.log(Drinks.COLA, Drinks.TEA, Drinks.COFFEE)

export class User {
    private ad: string
    soyad: string

    constructor(ad: string, soyad: string) {
        this.ad = ad
        this.soyad = soyad
    }

    getAd(): string {
        return this.ad
    }

    getSoyad(): string {
        return this.soyad
    }
}



const user: User = new User("Hüseyin", "Battal")

user.getAd()

console.log(user, user.getSoyad())

export class BaseClass {
    id: string | undefined

}

export class otherClass extends BaseClass {

}

let cls: otherClass = new otherClass()

cls.id = "h"

export type MyType = "X" | "Y" | "Z" | 5

const customMyType: MyType = 5

console.log(customMyType);

class TestClass{
    public static logConsole():void
}