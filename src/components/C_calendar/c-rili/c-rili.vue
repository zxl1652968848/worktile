<template>
    <div>
        <div class="r-header">
            <span class="left"><</span>
            <div class="strong" @click="left">
            <strong v-model="year">{{year}}</strong>年
            <strong v-model="month">{{month}}</strong>月
            </div>
            <span class="right" @click="right">></span>
        </div>
        <table>
            <thead>
                <th>日</th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
            </thead>
            <tbody>
            <!-- index从0开始 i从1开始 -->
            <tr v-for='(item,index) of calender.length / 7'>
                <td v-for='i of 7' :class="{cur : calender[7 * index + (i -1)].cur}" @clcik="dian">
                    {{calender[7 * index + (i -1)].fullDay}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    export default {
        name: "crili",
        data(){
            return{
            year:2018,
            month:9
            }
        },
        methods:{
            left(){
                this.month--;
                if (this.month<1){
                    this.year--;
                    this.month=12;
                }
            },
            right(){
                this.month++;
                if (this.month>12){
                    this.year++;
                    this.month=1;
                }
            },
            dian(){

            }
        },
        computed:{
            calender(){
                var arr = [];
                var nowMonthLength = new Date(this.year,this.month,0).getDate()
                var nowMonthFirstWeek = new Date(this.year,this.month-1).getDay()
                var LastMonthLength = new Date(this.year,this.month-1,0).getDate()
                var pmonth = this.month == 1 ? 12 : this.month-1;
                var pyear = this.month == 1 ? this.year - 1 : this.year;
                var nmonth = this.month == 12 ? 1 : this.month + 1;
                var nyear = this.month == 12 ? this.year + 1 : this.year;
                function buling(n){
                    return n.toString().length > 1 ? n.toString() : '0' + n.toString()
                }

                //补充上个月的最后几天
                while(nowMonthFirstWeek--){
                    arr.unshift({
                        day:LastMonthLength,
                        cur:true,
                        fullDay:`${buling(LastMonthLength)}`
                    });
                    LastMonthLength--
                }

                //本月天数
                var _a = 1;
                while(nowMonthLength--){
                    arr.push({
                        day:_a,
                        cur:false,
                        fullDay:`${buling(_a)}`
                    });
                    _a++;
                }
                var nextLength = arr.length>35 ? 42-arr.length : 42-arr.length;
                _a = 1;
                while(nextLength--){
                    arr.push({
                        day:_a,
                        cur:true,
                        fullDay:`${buling(_a)}`
                    });
                    _a++
                }
                return arr;
            }
        }


    }
</script>


<style scoped>
    .r-header{
        width: 100%;
        height: 30px;
        background-color: white;
        font-size: 17px;
    }
    .r-header .left{
        display: inline-block;
        width: 10%;
        padding-left: 10%;
    }
    .r-header .strong{
        display: inline-block;
        width: 70%;
        text-align: center;
    }
    .r-header .right{
        display: inline-block;
        width: 10%;
    }
    table thead th{
        width: 30px;
    }
    table tbody td{
        padding-left: 10px;
        cursor: pointer;
    }
    table tbody td.cur{
        color: #ccc;
    }
</style>