<template>
	<div id="login">
         <dingbu />
		<!--登录表单-->
        <div class="fangshi">
            <div class="left">账号密码</div>
            <div class="right act">短信验证</div>
        </div>
		<div class="loginForm">
			<form class="mui-input-group">
			    <div class="mui-input-row" >
			    	<span class="iconfont icon-ren"></span><input type="text" class="mui-input-clear" v-model='username' placeholder="请输入您的手机号">
			    </div>
			    <div class="mui-input-row">
			       <span class="iconfont icon-zhidemai"></span> <input type="password" class="mui-input-password"  v-model="password"  placeholder="密码">
			    </div>
			    <div class="mui-button-row">
			        <button type="button"
                   class="mui-btn"
			        @click="toLogin"
			        >
			          登陆
			        </button>
			    </div>
			</form>
		</div>
        <div class="otherOperation">
			<a class="left" href="javascript:;"  @click="jump('Duanxin')">找回密码</a>
			<a class="right" href="javascript:;" @click="jump('register')">注册</a>
		</div>
		<div class="thirdLogin">
			<div class="title">
				<div>
					第三方登录
				</div>
			</div>
			<div class="enter">
				<ul>
					<li>
						<router-link to="" tag="a">
							<img src="../assets/images/login/loginQQ.png"/>
						</router-link>
					</li>
					<li>
						<router-link to="" tag="a" >
							<img src="../assets/images/login/loginTaobao.png"/>
						</router-link>
					</li>
					<li>
						<router-link to="" tag="a">
							<img src="../assets/images/login/loginXinlang.png"/>
						</router-link>
					</li>
				</ul>
            <div>
            <!--提示-->
            </div>
			</div>
			<div class="tip">
				<span>七天无理由退货</span>
				<span>支持货到付款</span>
				<span>100%正品</span>
			</div>
		</div>
        <div class="agreement">
            <span class="one">安全问题 </span>
            <span class="two">登录代表您已同意</span>
            <span class="third">《当当隐私政策》</span>
		</div>
	</div>
</template>

<script>
import dingbu from "@/components/dlu/dingbu.vue";

export default {
	name: 'login',
	data(){
		return{
			username:null,
			password:null
		}
	},
	components:{
        dingbu
    },
	methods: {
		jump(path){
			this.$router.push(path)
		},
		toLogin(){
			window.console.log("登录沉淀 ");
			this.$axios.get("http://192.168.54.38:3000/login",{
				params:{
					username:this.username,
					password:this.password
				}
			})
			.then((response)=>{
				console.log(response);
				let token = response.data.result.token;
				localStorage.login = token;
				this.$router.push("/My");
			})
			.catch((error)=>{
				console.log(error)
			})
		}
	}
}
</script>
<style lang="less">
// 登录页面
.fangshi{
    width: 100%;
    text-align: center;
    font-size:20px;
    overflow: hidden;
    div{
        float: left;
        width: 50%;

    }
    .left{
        font-size:20px;
    }
    .act{
        opacity: 0.8;
    }
}
// 登录
#login {
	height: 100%;
	padding-right: 20px;
	padding-left: 20px;
	padding-top: 40px;
    background: #fff;
    margin-top: 38px;
    overflow:hidden;
	.loginForm {
		padding-top: 24px;
        height: 200px;
		.mui-input-group {
			&::after {
				height:0;
				border:0;
			}
			.mui-input-row {
				height: 45px;
				border: 0px;
                background: #fff;
                margin-top: 10px;
				&:nth-child(2) {
					margin-top:10px;
				}
				&::after {
					height:0;
					border:0;
				}
				input{
					width: 85%;
					float: left
				}
			}
			.mui-button-row {
				padding-top: 20px;
				.mui-btn {
                    height: 45px;
                    width:100%;
					line-height: 18px;
					background: #aaa;
					border-radius: 6px;
					color: #fff
				}
				.bgRed{
					background: #ff463c;
				}
			}
		}
	}
	.otherOperation {
		height:30px;
        background: #fff;
        margin-top: 20px;
		&>a {
			color:#ff463c;
			font-size: 14px;
        }
        .left{
            float:left;
        }
        .right{
            float: right;
        }
	}
	.thirdLogin {
		height:200px;
		padding-top:20px;
		.title {
			padding-left:30px;
			padding-right:30px;
			position: relative;
			&::after, &::before {
				content:'';
				position:absolute;
				width:200px;
				height:1px;
				background: #ddd;
				top:10px;
				z-index:1
			}
			&::before { left: 0;}
			&::after { right: 0;}
			&>div {
				width:80px;
				height:30px;
				margin:0 auto;
				font-size: 13px;
				background: #fff;
				color:#aaa;
				position: relative;
				z-index:2;
			}
		}
		.enter {
			height:100px;
			padding-top: 10px;
			ul{
				margin: 0;
				padding: 0;
				li{
					margin: 0;
					padding: 0;
					list-style: none;
					float: left;
					width: 33%;
					text-align: center;
					a{
						img{
							width:41px;
							height:41px;
						}
					}
				}
			}
		}
		.tip {
			height:42px;
			padding-top:20px;
			text-align: center;
			span {
				position: relative;
				font-size: 11px;
				margin-left:25px;
				color:#aaa;
				&::before {
					content: '';
					position:absolute;
					width:16px;
					height:16px;
					left:-20px;
					top:-1px;
					background:url('../assets/images/login/check_icon.png') no-repeat center;
					background-size: contain;
				}
			}
        }

	}
}
// 其他方式
.agreement {
    width:100%;
    font-size:12px;
    text-align: center;
    .one{
        font-size: 12px;
        color: #ccc;
    }
    .two{
        font-size: 12px;
        color: #333;
    }
   .third{
        font-size: 12px;
        color: #ccc;
    }
}
</style>