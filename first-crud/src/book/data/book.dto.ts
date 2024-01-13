// export interface Book{
//     //id : string ;
//     id : number,
//     tittle : string;
//     author : string;
//     published : string;
// }

import { IsInt, IsString } from "class-validator";

export class Book{
    //id : string ;
    @IsInt()
    id : number;
    
    @IsString()
    tittle : string;
    
    @IsString()
    author : string;

    @IsString()
    published : string;
}
