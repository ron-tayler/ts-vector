import {Vector2} from "./Vector2";

export class Vector3 {

    constructor(
        private _x: number,
        private _y: number,
        private _z: number
    ){}

    /**
     * [x:1, y:2, z:3] -> [x:1, y:2]
     */
    public toVector2XY(): Vector2{
        return new Vector2(this._x,this._y)
    }

    /**
     * [x:1, y:2, z:3] -> [x:1, y:3]
     */
    public toVector2XZ(){
        return new Vector2(this._x,this._z)
    }

    /**
     * [x:1, y:2, z:3] -> [x:2, y:3]
     */
    public toVector2YZ(){
        return new Vector2(this._y,this._x)
    }

    /**
     * [x:1, y:2, z:3] -> [x:2, y:3, z:1]
     */
    public switch(){
        [this._x, this._y, this._z] = [this._y, this._z, this._x]
        return this
    }

    public x(){
        return this._x
    }
    public y(){
        return this._y
    }
    public z(){
        return this._z
    }
}
