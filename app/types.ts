export interface AudioProps {
    url:{
        get:string,
        set:(url:string) => void
    },
    startTime:{
        get:number,
        set:(url:number) => void
    }
}