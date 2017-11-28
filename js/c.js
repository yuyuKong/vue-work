/*组件*/
var Home=Vue.component("Home",{
    template:`<div class="home">
    <Nav></Nav>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511851813555&di=8d152eacf1a58eb7fc8128ca8268fd7d&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2657252638%2C132554658%26fm%3D214%26gp%3D0.jpg" alt="">
</div>`
})

var Nav=Vue.component("Nav",{
    template:`
    <ul class="custom-nav">
        <router-link v-for="(item,key) in navData" :key="key" :to="item.url" tag="li" exact>
            <span>{{item.title}}</span>
        </router-link>
        <router-link to="/login" v-if="!islogin">login</router-link>
       
       <span v-if="islogin" class="info" @click="show">
       {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
    </ul>
    `,
    data(){
        return {
            navData:[
                {title:"首页",url:"/"},
                {title:"公司简介",url:"/Info"},
                {title:"文档说明",url:"/Doc"}
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/");
        }
    }
})

var Info=Vue.component("Info",{
    template:`<div class="home">
    <Nav></Nav>
    <transition name="info" mode="out-in">
         <router-view></router-view>
    </transition>
   
</div>`
})
var List=Vue.component("List",{
    template:`<div>
        <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <router-link to="/Con/1" tag="a">
            <img class="mui-media-object mui-pull-left" src="http://img.hb.aicdn.com/3c1258e335717580ed0e14dfcc864020f3fd6f7411060-6kXLCi_fw658">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
       </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/Con/2" tag="a">
            <img class="mui-media-object mui-pull-left" src="http://img.hb.aicdn.com/3c1258e335717580ed0e14dfcc864020f3fd6f7411060-6kXLCi_fw658">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
       </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/Con/3" tag="a">
            <img class="mui-media-object mui-pull-left" src="http://img.hb.aicdn.com/3c1258e335717580ed0e14dfcc864020f3fd6f7411060-6kXLCi_fw658">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
       </router-link>
    </li>
</ul>
    </div>`
})
var Con=Vue.component("Con",{
    template:`<div>
                {{$route.params.id}}
            </div>`
})
var Doc=Vue.component("Doc",{
    template:`<div class="home">
        <Nav></Nav>
        <router-view name="left" class="left"></router-view>
        <router-view name="right" class="right"></router-view>
    </div>`,
    beforeRouteEnter(to,from,next){
        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})
var left=Vue.component("left",{
    template:`<div>
        <ul>
            <h4 @click="toggle1()">Router构造设置</h4>
            <ul v-show="flag1">
                <router-link tag="li" to="#one">routes</router-link>
                <router-link tag="li" to="#two">mode</router-link>
                <router-link tag="li" to="#three">linkActiveClass</router-link>
                <router-link tag="li" to="#four">scrollBehavior</router-link>
            </ul>
        </ul>
        <ul>
            <h4 @click="toggle2()">导航守卫</h4>
            <ul v-show="flag2">
                 <router-link tag="li" to="#five">全局守卫</router-link>
                 <router-link tag="li" to="#six">全局解析守卫</router-link>
                 <router-link tag="li" to="#seven">全局后置钩子</router-link>
                 <router-link tag="li" to="#eight">路由独享的守卫</router-link>
            </ul>
       
        </ul>
    </div>`,
    data(){
       return {
           flag1:true,
           flag2:false
       }
    },
    methods:{
        toggle1(){
            this.flag1=!this.flag1;
        },
        toggle2(){
            this.flag2=!this.flag2;
        }
    },
    /*检测路由的变化*/
    watch:{
        $route(){
           var hash=this.$route.hash.slice(1);
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ num:document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ num:document.querySelector("#"+hash).offsetTop-60}, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.num.toFixed()
                })
                .start()
            animate()
        }
    }
})
var right=Vue.component("right",{
    template:`<div>
                <div id="one" class="conR">
                    <h4>route</h4>
                        
                    </div>
                <div id="two" class="conR">two</div>
                <div id="three" class="conR">three</div>
                <div id="four" class="conR">four</div>
                <div id="five" class="conR">five</div>
                <div id="six" class="conR">six</div>
                <div id="seven" class="conR">seven</div>
                <div id="eight" class="conR">eight</div>
            </div>`

})
var Login=Vue.component("Login",{
    template:`
<div>
<header class="mui-bar mui-bar-nav">
     <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div></div>`,
    methods:{
        back(){
            router.push("/");
        },
        submit(){
            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc");
        }

    }


})

