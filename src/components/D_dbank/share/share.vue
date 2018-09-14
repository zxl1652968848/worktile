<template>
    <div>
        <div class="main-body-center">
            <div class="module-wrapper">
                <div class="module-header">
                    <div class="title">
                        <a href="javascript:;">
                            <font-awesome-icon icon="users" style='color:rgb(34, 215, 187);font-size:20px !important;margin-right:5px'/>
                            与我共享
                        </a>
                    </div>
                    <div class="panel">
                        <button class="new">
                            <font-awesome-icon icon="plus" style='color:#22d7bb;font-size:16px !important'/>
                            新建
                        </button>
                        <div class="btn-group">
                            <button type="button" class="btn btn-s">
                                <font-awesome-icon icon="upload" style='color:#fff;font-size:16px !important'/>
                                上传文件
                            </button>
                            <button class="btn btn-x">
                                <font-awesome-icon icon="caret-down" style='color:#fff;font-size:16px !important'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="drive-list">
             <div class="none">
                <font-awesome-icon icon="file-alt" style='color:#ddd;font-size:100px !important; margin-right:5px'/>
                <br>
                <span style="text-align:center;line-height:30px;color:#ccc">没 有 文 件</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .main-body-center{
       position: absolute;
       top: 0;
       width: 100%;
       height: 100%;
    }
    .main-body-center .module-header{
        height: 50px;
        width: 100%;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .main-body-center .module-header .title{
        font-size: 14px;
        text-overflow:ellipsis;
        overflow: hidden;
        line-height: 50px;
        color: #333;
        float: left;
        width: 1100px;
    }
    .main-body-center{
        background-color: #ddd;
    }
    .main-body-center .module-wrapper{
        width: 100%;
    }
    .drive-list{
        position: absolute;
        top: 50px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        margin: 15px;
    }
    .drive-list .none{
        position: absolute;
        top: 40%;
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
        cursor: pointer;
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