<template>
    <div>
        <div class="main-body-center">
            <div class="module-wrapper">
                <div class="module-header">
                    <div class="title">
                        <a href="javascript:;">
                            <font-awesome-icon icon="folder" style='color:rgb(249, 105, 170);font-size:20px !important'/>
                            个人网盘
                            <font-awesome-icon icon="angle-down" />
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
            <div class="file-list-header">
                <div class="file-name">
                    <span class="scope">文件名</span>
                </div>
                <div class="file-size">
                    <span class="scope">大小</span>
                </div>
                <div class="file-updated-by">
                    <span class="scope">更新人</span>
                </div>
                 <div class="file-updated">
                    <span class="scope">更新时间</span>
                    <font-awesome-icon icon="arrow-down" style='color:#22d7bb;font-size:16px !important'/>
                </div>
            </div>
            <div class="com">
                <div class="file-item">
                    <div class="file-name">
                         <font-awesome-icon icon="folder" style='color:rgb(34, 215, 187);font-size:30px !important; vertical-align:middle;margin-right:10px'/>
                        <a href="javascript:;" class="slide-trigger">111</a>
                    </div>
                    <div class="file-size">
                        <span class="scope">-</span>
                    </div>
                    <div class="file-updated-by">
                        <div class="role">
                            <span class="member">
                                <div class="binding">M</div>
                            </span>
                            <div class="name">M</div>
                        </div>
                    </div>
                    <div class="file-updated">
                        9月11日 10:21
                    </div>
                    <div class="file-action">
                        <font-awesome-icon icon="arrow-down" style='color:#22d7bb;font-size:12px !important'/>
                        <font-awesome-icon icon="ellipsis-h" style='color:#22d7bb;font-size:12px !important'/>
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
    .file-list-header{
        line-height: 27px;
        color: #666;
        position: relative;
        padding: 14px 35px;
    }
    .file-list-header div{
        display: inline-block;
    }
    .file-list-header:before,.file-item:before{
        content: "";
        position: absolute;
        left: 20px; 
        right: 20px;
        top: 55px;
        border-bottom: 1px solid #eee;
    }
    .file-name{
        width: 1030px;
    }
    .file-size{
        width: 120px;
    }
    .file-updated-by{
        width: 130px;
    }
    .file-updated{
        width: 170px;
    }
    .file-item{
        position: relative;
        padding: 14px 35px;
    }
    .file-item .file-name{
        padding-right: 20px;
        line-height: 30px;
    }
    .file-item div{
        display: inline-block;
    }
    .file-item .file-size{
        line-height: 30px;
        color: #888;
    }
    .file-item .file-updated-by{
        color: #333;
        line-height: 30px;
    }
    .file-item .file-updated-by .member{
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
        background-color: rgb(239,126,222);
        text-align: center;
        color: #fff;
    }
    .file-item .file-updated-by .name{
        margin-left: 5px;
    }
    .file-item .file-updated{
        color: #888;
        line-height: 30px;
    }
    .file-item .file-action{
        width: 60px;
        text-align: center;
        visibility: hidden;
    }
    .file-item:hover{
        box-shadow: 0 0 8px 2px #eee;
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