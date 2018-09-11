<template>
    <div>
        <ul>
            <li v-for="(item,index) of vList">
                    <i class="iconfont " :class='item.icon'></i>
                    {{item.title}}
                    <i class="iconfont hou" :class="item.icon2"></i>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'candan',
        data(){
            return{
                

            }
        }
    }
</script>
<style scoped>
    ul{
        list-style: none;
    }
    ul li{
        height: 40px;
        line-height: 40px;
        padding-left: 30px;
    }
    ul li i{
        font-size: 10px;
    }
    ul li .hou{
        position: absolute;
        right: 10px;
        display: none;
    }

</style>