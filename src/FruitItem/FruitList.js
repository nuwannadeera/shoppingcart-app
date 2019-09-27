import React from 'react';
import { Fruits } from './Fruits';

export const FruitList = () => {

    const database = [
        {
            id: 1, name: "Apple Banana 1kg", price: 300.00, img: "https://lh3.googleusercontent.com/qJk9W6gjnMxhbXD-GqTJsNTg1tSMtmu1O9Ge6P2Bzzx_BbUztnQDBFL-IGppyVJ4o_ya=s134"
        },
        {
            id: 2, name: "Green Apple", price: 60.00, img: "https://lh3.googleusercontent.com/_01ydXQqaSyFmKeSjEIYiXy_lQhxWLZ96HK2FXJLDzB1SadcnUUBuWXN9I39lJj4cl7rVfs=s88"
        },
        {
            id: 3, name: "Green Pear", price: 80.00, img: "https://lh3.googleusercontent.com/o5XgEtfJXnN0sU_mV_3LkbfXlOuSp7AkLRevoXSPiXp6HPQxtodG_v0p4ymjQsDzUScBwJM=s85"
        },
        {
            id: 4, name: "Imported Orange", price: 40.00, img: "https://lh3.googleusercontent.com/ptTP3S4xHJcHf4_DW5bGVRTdVyA3CdA2voAOBaNyZIsvZPIyIRQu4eeDOQWsZgsPpAW-cg=s85"
        },
        {
            id: 5, name: "Karthakolomban", price: 90.00, img: "https://lh3.googleusercontent.com/xSGOguAf4hKsRr1CSCAkrBidwW41hP4uHA8X0ab4ZxrCgaC3RKp-pvA1vO3MLWEUxsbZ=s85"
        }
    ]

    return(
        <div>
            {database.map(item => (
                <Fruits name={item.name} price={item.price} img={item.img} key={item.id} />
            ))}
        </div>
    )
}