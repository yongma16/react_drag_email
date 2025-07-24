# 拖拽 使用 react dnd-kit 


## 拖拽 组件 结构 使用 json 存储 和 xml 存储  相互转化


json 结构

```json
{
    type:'body',
    attribute:{
        'padding-left':0,
        'padding-right':0,
    }
    childrenContent:[   
            type:'text',
            content:'我是文字',
    attribute:{
        'padding-left':0,
        'padding-right':0,
        'color':'#fff',
    }
    childrenContent:[   
        
    ]
    ]
}

```


元素A 元素B 元素C 排序 前提条件 是存在内容 元素A 元素B 元素C

元素A 放入 dom 前提条件 是 dom不存在 元素A