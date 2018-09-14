<template>
    <div>
        <div class="header">
            回收站
        </div>
        <div class="body">
           <div class="drive-list">
            <div class="none">
                <font-awesome-icon icon="file-alt" style='color:#ddd;font-size:100px !important; margin-right:5px'/>
                <br>
                <span style="text-align:center;line-height:30px;color:#ccc">没 有 文 件</span>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="scss" scoped >
    .header{
        background: rgba(253,253,253,.97);
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
    }
    .icon-delete{
        color: #22d7bb;
    }
    .drive-list{
        position: absolute;
        top: 50%;
        width: 100%;
        height: 100%;
        background-color: #fff;
        margin: 15px;
        position: relative;
    }
    .drive-list .none{
        position: absolute;
        top: 300px;
        left: 40%;
    }
    .panel{
        line-height: 50px;
        display: inline-block;
    }
    .panel .new{
        padding: 3px 20px;
        font-size: 14px;
        background-color: #fff;
        border: none;
        border: 1px solid rgb(34, 215, 187);
        border-radius: 5px;
        color: rgb(34, 215, 187);
        cursor: pointer;
        outline: none;
    }
    .btn-group{
        display: inline-block;
        margin-left: 10px;
    }
    .btn{
        padding: 3px 10px;
        height: 30px;
        background-color: rgb(34,215,187);
        border: none;
        color: #fff;
        border-radius: 20px;
        outline: none;
    }
    .btn:hover{
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .btn-s{
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    .btn-x{
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        margin-left: -4px;
    }
</style>
