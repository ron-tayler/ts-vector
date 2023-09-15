import {expect, test, describe, it} from "@jest/globals";
import {Vector2} from "../Vector2";

describe.each([
    {
        init:{x:3,y:4},
        rot_deg:90,
        rot:{x:-4,y:3},
        norm:{x:0.6,y:0.8},
        length: 5,
        deg: 53.130
    }, {
        init:{x:-4,y:3},
        rot_deg:-90,
        rot:{x:3,y:4},
        norm:{x:-0.8,y:0.6},
        length: 5,
        deg:  -36.869
    },{
        init:{x:8.66,y:5},
        rot_deg: 90,
        rot: {x:-5,y:8.66},
        norm: {x:0.866,y:0.5},
        length: 10,
        deg: 30
    }
])("new Vector2($init.x,$init.y)", (p)=>{

    test(`.rotate(${p.rot_deg})`,()=>{
        let vec = new Vector2(p.init.x,p.init.y)
        vec.rotate(p.rot_deg)
        expect(vec.x()).toBeCloseTo(p.rot.x)
        expect(vec.y()).toBeCloseTo(p.rot.y)
    })

    test(`.length()`,()=>{
        let vec = new Vector2(p.init.x,p.init.y)
        expect(vec.length()).toBeCloseTo(p.length)
    })

    test(`.normalize()`,()=>{
        let vec = new Vector2(p.init.x,p.init.y)
        let vec_norm = vec.normalize()
        expect(vec_norm.x()).toBeCloseTo(p.norm.x)
        expect(vec_norm.y()).toBeCloseTo(p.norm.y)
    })

    if(p.deg){
        test(".getAngleDeg()",()=>{
            let vec = new Vector2(p.init.x,p.init.y)
            expect(vec.getAngleDeg()).toBeCloseTo(p.deg)
        })
    }
})
