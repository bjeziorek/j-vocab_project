import { DataBase } from './../data-base';
export class Tags {
    tagList = [];


    newDb(tag) {
      //  let tagList = ['n1', 'n5'];
        let tagList = this.tagList; //['n1', 'n5'];
        switchTag(tag);
        const db = new DataBase();
        let newDb = [];
        //tagList=//update from service
        function switchTag(tag) {
            console.log(tagList);let m;
            const index = tagList.indexOf(tag);
            if (index > -1) {
               m= tagList.splice(index, 1);
            }else{
                tagList.push(tag);
            }
             console.log(tagList,m);
        }
        function containsTag(el) {
            for (let i = 0; i < el.tags.length; i++) {
                for (let j = 0; j < tagList.length; j++) {
                    if (el.tags[i] === tagList[j]) {
                        return true;
                    }
                }
            }
            return false;
        }
        for (let i = 0; i < db.resources.length; i++) {
            if (containsTag(db.resources[i])) {
                newDb.push(db.resources[i]);
            }
        }
        return newDb;
    }

    /* newDb(){
         //tagList=//update from service
         const db = new DataBase();
         let newDb=[];
         for (let i=0;i<10;i++) {
             newDb.push(db.resources[i]);
         }
         return newDb;
     }*/

    listTags(): string[] {
        function existsOnTagListAlready(tag, tagList) {
            for (let t of tagList) {
                if (t === tag) {
                    return true;
                }
            }
            return false;
        }
        let tagList: string[];
        tagList = [];
        const db = new DataBase();
        for (let el of db.resources) {
            for (let tag of el.tags) {
                if (!existsOnTagListAlready(tag, tagList)) {
                    tagList.push(tag);
                }
            }
        }
        console.log(tagList);
        return tagList;
    }

}