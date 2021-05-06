/**
 * dynamic-contents-insert.js
 */

const dynamicContentsInsert = (settings) => {
    if(!settings){
        console.error("[DynamicContentsInsert] Please set property object in argument.");
        return null;
    }
    settings.forEach(item => {

        // initialize
        var match_flg = false;
    
        // Check url pattern
        if(location.href.match(item.url)){
    //        console.log("[Check] url matched.");
    
            item.condition.forEach(condition_item => {            
                var condition_target = (condition_item.target) ? condition_item.target : "body";
    
                if(document.querySelector(condition_target).querySelector(condition_item.xpath)){
                    if(document.querySelector(condition_target).querySelector(condition_item.xpath).textContent.match(condition_item.text)){
    //                    console.log("[Check] condition matched",condition_target, document.querySelector(condition_target).querySelector(condition_item.xpath));
                        match_flg = true;
                    }
                }
            })
    
            // insert contents
            if(match_flg === true){
                item.contents.forEach(contents_item => {
                    document.querySelector(contents_item.xpath).insertAdjacentHTML(contents_item.type,contents_item.content)
                });    
            }
        }
    });
}