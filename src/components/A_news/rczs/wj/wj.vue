<template>
    <div class="nc">
        <div class="rq">
            <hr>
            <div class="rqz">
                <span>9月10日 星期一</span>
            </div>
        </div>
        <div class="msitm">
            <a class="mstan" href="#">
                <span>M</span>
            </a>
            <div class="bcpti">
                <a href="#" class="tin">M</a>
                <span class="ngbim">10:29</span>
                <a href="#" class="ngtic iconfont icon-qizi"></a>
            </div>
            <div class="actxt">
                <div class="txtn">吃</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style  lang='scss' scoped>
    .nc{
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        color: #cacaca;
        font-size: 17px;
        .rq{
            position: relative;
            height: 20px;
            margin: 20px 0;
            hr{
                position: absolute;
                width: 100%;
                top: 10px;
                border: none;
                height: 1px;
                background-image: linear-gradient(to right,#fff,#eee 50%,#fff);
            }
            .rqz{
                text-align: center;
                line-height: 20px;
                position: absolute;
                width: 100%;
                span{
                    margin: auto;
                    padding: 0 20px;
                    display: inline-block;
                    background-color: #fdfdfd;
                    font-size: 16px;
                    color: #aaa;
                }
            }
        }
        .msitm{
            display: block;
            position: relative;
            padding: 0 25px 10px 10px;
            margin: 0 10px 5px;
            .mstan{
                position: absolute;
                top: 1px;
                display: block;
                width: 38px;
                height: 38px;
                line-height: 38px;
                font-size: 12px;
                border-radius: 38px;
                background-color: rgb(239, 126, 222);
                color: #fff;
            }
        }
        .bcpti{
            margin-left: 50px;
            line-height: 20px;
            overflow: hidden;
            .tin{
                color: #333;
                font-size: 12px;
                float: left;
            }
            .ngbim{
                margin-left: 10px;
                color: #aaa;
                font-size: 12px;
                float: left;
            }
            .ngtic{
                float: left;
                margin-left: 5px;
                color: #ffc442;
            }
        }
        .actxt{
            max-width: 640px;
            margin-left: 50px;
            margin-top: 2px;
            font-size: 14px;
            line-height: 120%;
            position: relative;
            color: #333;
            .txtn{
                position: relative;
                border-left: solid 2px rgb(247, 108, 170);
                border-right: solid 1px #eee;
                border-top: solid 1px #eee;
                border-bottom: solid 1px #eee;
                padding: 10px 18px;
                position: relative;
                background: transparent;
                text-align-last: left;
            }
        }
    }
</style>