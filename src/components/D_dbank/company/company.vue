<template>
    <div>
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
                </div>
            </div>
            <div class="com">
                <div class="file-item">
                    <div class="file-name">
                        <a href="javascript:;" class="slide-trigger">公司制度</a>
                    </div>
                    <div class="file-size">
                        <span class="scope">-</span>
                    </div>
                    <div class="file-updated-by">
                        <div class="role">
                            <span class="member">
                                <div class="binding">M</div>
                            </span>
                            <div class="name">m</div>
                        </div>
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
    .file-list-header{
        line-height: 27px;
        color: #666;
        position: relative;
        padding: 14px 35px;
    }
    .file-list-header:before{
        content: "";
        position: absolute;
        left: 20px; 
        right: 20px;
        border-bottom: 1px solid #eee;
    }
    .file-name{
        width: 470px;
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
</style>