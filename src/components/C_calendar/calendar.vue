<template>
    <div>
        <div class="c-nav-left">
            <div class="header">
                <span>日历</span>
                <i class="iconfont icon-rili"></i>
            </div>
            <div class="calendar">
                <crili></crili>
            </div>

            <div class="tree-menu">
                <ul v-for="menuItem in theModel">
                    <my-tree :model="menuItem"></my-tree>
                </ul>
            </div>


        </div>
        <div class="c-body-list">

        </div>




    </div>
</template>

<script>
 
</script>

<style scoped>
    .c-nav-left{
        width: 240px;
        height: 1000px;
        border-right: 1px solid #ddd;
    }
    .c-nav-left .header{
        height: 50px;
    }
    .c-nav-left .header i{
        float:right;
        font-size: 20px;
        line-height: 50px;
        margin-right: 20px;
        cursor: pointer;
    }
    .c-nav-left .header i:hover{
        color: #22d7bb;
    }
    .c-nav-left .header span{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .calendar{
        width: 100%;
        height: 300px;
    }
    .wdrc{
        margin-bottom: 2px;
    }

</style>