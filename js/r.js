/*路由*/
var router=new VueRouter({
    routes:[
        {path:"/",component:Home},
        {path:"/login",component:Login},
        {path:"/Info",component:Info,children:[
            {path:"",component:List},
            {path:"/Con/:id",component:Con}
        ]},
        {path:"/Doc",component:Doc,children:[
            {path:"",components:{
                "left":left,
                "right":right
            }}
        ]},
        {path:"*",redirect:"/"}
    ]
})
