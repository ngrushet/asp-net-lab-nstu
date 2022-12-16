import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 1, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'a', price: 25000, rating: 5, img: '', typeId: 1, brandId: 2},
            {id:1,  name:'12 pro',    price:3,rating: 0, img: '49ca916d-87b4-4732-9abf-a51d529b9c44.jpeg', typeId: 1, brandId:1},
            {id:4,  name:'12 pro 2323',   price:3444, rating:0, img:'7fbb1513-25d9-45ae-9c11-63a1095055c5.jpeg',typeId:2,brandId:1}
        ]
        makeAutoObservable(this)
    }

    setTypes(types)  {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
}