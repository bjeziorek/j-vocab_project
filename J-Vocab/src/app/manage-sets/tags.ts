import { DataBase } from './../data-base';
export class Tags {

    listTags(): string[] {
        function existsOnTagListAlready(tag,tagList){
            for(let t of tagList){ console.log(tag, t);
                if(t===tag){
                   return true; 
                }
            }
            return false;
        }
        let tagList: string[];
        tagList=[];
        const db = new DataBase();
        for (let el of db.resources) {
            for (let tag of el.tags) {
                if (!existsOnTagListAlready(tag,tagList)) {
                    tagList.push(tag);
                }
            }
        }
        console.log(tagList);
        return tagList;
    }

}