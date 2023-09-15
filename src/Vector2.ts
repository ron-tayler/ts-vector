import {Vector3} from "./Vector3";

export class Vector2 {
    private _x: number
    private _y: number

    constructor(x: number, y: number){
        this._x = x
        this._y = y
    }

    /**
     * [x:1, y:2] -> [x:1, y:2, z:0]
     */
    public toVector3XY(): Vector3{
        return new Vector3(this._x,this._y,0)
    }

    /**
     * [x:1, y:2] -> [x:1, y:0, z:2]
     */
    public toVector3XZ(): Vector3{
        return new Vector3(this._x,0,this._y)
    }

    /**
     * [x:1, y:2] -> [x:0, y:1, z:2]
     */
    public toVector3YZ(): Vector3 {
        return new Vector3(0, this._x, this._y)
    }

    /**
     * [x:1, y:2] -> [x:2, y:1]
     */
    public switch(){
        [this._x, this._y] = [this._y, this._x]
        return this
    }

    public x(){
        return this._x
    }
    public y(){
        return this._y
    }

    add(vec:Vector2): this{
        this._x += vec.x()
        this._y += vec.y()
        return this
    }

    sub(vec:Vector2): this{
        this._x -= vec.x()
        this._y -= vec.y()
        return this
    }

    multi(a: number): this{
        this._x *= a
        this._y *= a
        return this
    }

    length(): number{
        return Math.sqrt(this._x*this._x + this._y*this._y)
    }

    normalize(): Vector2{
        let inv_length = 1 / this.length()
        let x = this._x * inv_length
        let y = this._y * inv_length
        return new Vector2(x, y)
    }

    getAngleRadian(){
        return Math.atan(this._y/this._x)
    }

    getAngleDeg(){
        return Vector2.radToDeg(this.getAngleRadian())
    }

    rotate(deg: number){
        let rad = Vector2.degToRad(deg)
        let x = this._x * Math.cos(rad) - this._y * Math.sin(rad)
        let y = this._x * Math.sin(rad) + this._y * Math.cos(rad)
        this._x = x
        this._y = y
    }

    private static radToDeg(rad: number){
        return rad * (180 / Math.PI)
    }
    private static degToRad(deg: number){
        return deg / (180 / Math.PI)
    }
}
