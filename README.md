# dynamic-contents-insert-js
JavaScriptで動的にコンテンツを追加するための汎用ライブラリ

## how to use

1. please set dynamic-contents-insert.js in your website.
2. please set configuration javascript object.
3. run dynamicContentsInsert() in your page.

## configuration object

This is sample configuration object.

```javascript
// please set Array variable.(you can set multiple rule.)
var configuration = [
    {
        // set specify the URL condition of the target page.(please use regex format)
        url: "manjiro.net\/post\/.*",
        condition:[  // condition's data can set multiple condition.(It will work any of the conditions you wrote are met.)

            {
                xpath: "h1",    //set specify the csspath of the target condition DOM object.
                text: "ゲーム紹介", //set text that will be used as the match condition.(please use regex format)
                target: "body"  //If you want to filter search DOM object, please set target csspath.

            }
        ],
        contents:[  // contents data can set multiple.(if conditions are met, run all contents key setting)

            {
                xpath: "#related",
                type: "afterbegin", // you can use 4 pattern setting(beforebegin, afterbegin,beforeend,afterend)
                content: "<div>追加したいコンテンツ情報</div>"
            }
        ]
    }
]
```

### about "contents.type" pattern
this function use "element.insertAdjacentHTML" function.
so if you want to know more detail, please see below.

https://developer.mozilla.org/ja/docs/Web/API/Element/insertAdjacentHTML
