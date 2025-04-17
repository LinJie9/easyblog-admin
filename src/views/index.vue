<template>
    <div  class="login-img">
        <div class="login-panel">
           
        <div class="login-title">用户登录</div>
        <el-form :model="fromData">
            

            <el-form-item prop="account">
                <el-input placeholder="请输入账号" :prefix-icon="User" v-model="fromData.account"></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input placeholder="请输入密码" :prefix-icon="Lock" v-model="fromData.password"></el-input>
            </el-form-item>

            <el-form-item prop="checkCode">
                <div class="check-code-panel">
                    <el-input placeholder="请输入验证码" class="input-pancel"></el-input>
                    <img :src="checkCodeUrl" class="check-code" @click="changeCheckCode">
                </div>
            </el-form-item>

            <el-form-item>
                <el-checkbox :label="true">记住我</el-checkbox>
            </el-form-item>

            <el-button type="primary" style="width: 80%;" round>登录</el-button>

        </el-form>

        

        </div>
    </div>
</template>


<script setup>
import { ElButton } from 'element-plus';
import {reactive, ref} from 'vue';
const fromData = reactive({})
import { User, Lock } from '@element-plus/icons-vue'; // 引入 Element Plus 图标


//ref 是一个函数，它用于创建一个响应式的引用。
// 当你使用 ref 包装一个值时，Vue 会自动跟踪这个值的任何变化，并在值变化时触发组件的重新渲染。
const checkCodeUrl = ref("api/checkCode?" + new Date().getTime())
const changeCheckCode = () => {
    checkCodeUrl.value = "api/checkCode?" + new Date().getTime();
}

</script>

<style lang="scss">
html, body{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}


.login-img{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    // background-image: url(../assets/bg1.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    

    .login-panel{
        width: 350px;
        height: 320px;
        float: center;
        padding: 10px;
        background: #fff;
        // background: rgba(255, 255, 255, 0);
        border-radius: 6px;
        box-shadow: 2px 2px 10px #ddd;

    }

    .login-title{
        margin: 15px;
    }

    .check-code-panel{
        width: 100%;
        display: flex;
        align-items: center;
        .input-pancel{
           flex: 1;
           margin-right: 5px;
        }
        .check-code{
            height: 30px;
            cursor: pointer;
        }
    }
}

// .login-img{
//     width: 100%;
//     height: 100vh;
//     background-size: cover;
//     background-position: center;
//     background-image: url(../assets/bg1.jpg);
//     display: flex;
//     justify-content: center;
//     align-items: center;
    

//     .login-panel{
//         width: 350px;
//         float: center;
//         padding: auto;
//         background: #fff;
//         // background: rgba(255, 255, 255, 0);
//         border-radius: 6px;
//         box-shadow: 2px 2px 10px #ddd;

//     }
// }

</style>