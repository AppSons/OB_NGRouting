export enum LEVELS {
    "Info",
    "Urgent",
    "Blocking"
}




export interface ITask{
    title: string;
    description: string;
    complete: boolean;
    level: LEVELS;
}