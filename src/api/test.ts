// import { getAllJSDocTags } from "typescript"
import server from "./http"
import {bk,edit} from "../types/type"
export function getmsg(data?:any){
    return server({
        url: '/getmsg',
        method: 'post',
        data:data
    })
}
export function writebk(data:bk){
    return server({
        url: '/writebk',
        method: 'post',
        data:data
    })
}
export function editbk(data:edit){
    return server({
        url: '/editbk',
        method: 'post',
        data:data
    })
}
export function getpart1(data?:any){
    return server({
        url: '/getpart1',
        method: 'post',
        data:data
    })
}
export function getpart2(data?:any){
    return server({
        url: '/getpart2',
        method: 'post',
        data:data
    })
}



