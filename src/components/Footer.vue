<template>
    <div id="footer">
        <span id="workboard"></span>
    </div>
</template>

<script lang="ts" setup>
"use strict";
import moment from 'moment-timezone';

function createTime() {
    const now = moment();

    // 设置时区（可以根据需要调整）
    const timezone = 'Asia/Shanghai';
    const nowTz = now.tz(timezone);

    // 计算旅行者1号距离
    const start = moment('2022-08-01 00:00:00');
    const dis = Math.trunc(234e8 + nowTz.diff(start, 'seconds') * 17);
    const unit = (dis / 1496e5).toFixed(6);

    // 计算网站运行时间
    const grt = moment('2023-03-24 00:00:00');
    const duration = moment.duration(nowTz.diff(grt));

    const dnum = Math.floor(duration.asDays());
    const hnum = Math.floor(duration.hours());
    const mnum = Math.floor(duration.minutes());
    const snum = Math.round(duration.seconds());

    const formattedS = String(hnum).padStart(2, '0');
    const formattedL = String(mnum).padStart(2, '0');
    const formattedB = String(snum).padStart(2, '0');

    let currentTimeHtml = "";
    if (hnum < 22 && hnum >= 8) {
        currentTimeHtml = `<img alt="" class='boardsign' src='https://img.shields.io/badge/本站点-营业中-6adea8?style=social&logo=php' title='距离百年老站也就差不到一百年~'>
                            <br>
                            <div style="font-size:0.em;font-weight:bold">与压轴戏相识 ${dnum} 天 ${formattedS} 小时 ${formattedL} 分 ${formattedB} 秒
                                <hours class='fas fa-heartbeat' id="heartbeat"></hours>
                                <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀
                            </div>`;
    } else {
        currentTimeHtml = `<img class='boardsign' src='https://img.shields.io/badge/本站点-打烊了-6adea8?style=social&logo=apache' title='这个点了应该去睡觉啦，熬夜对身体不好哦' alt=""><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${formattedS} 小时 ${formattedL} 分 ${formattedB} 秒 <hours id="heartbeat" class='fas fa-heartbeat'></hours> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`;
    }

    const workboard = document.getElementById("workboard");
    if (workboard) {
        workboard.innerHTML = currentTimeHtml;
    }
}

setInterval(() => {
    createTime();
}, 1000);
</script>

<style lang="scss" scoped>
/**
  * 时间样式
  * 字体大小: 16px;
  * 背景流体: 动态 8s 流速相同 无限次;
  * -webkit 背景流体: 动态 8s 流速相同 无限次;
  * 背景图片: -webkit 水平线性渐变背景;
  * -webkit 文本填充颜色: 透明;
  * -webkit 背景渐变色的裁剪区域: 文本;
  * -webkit 背景渐变色尺寸: 宽度两倍 高度与文本大小相同;
  * 文本填充颜色: 水平线性渐变背景;
  * 背景渐变色的裁剪区域: 文本;
  * 背景渐变色尺寸: 颜色宽度 高度与文本大小相同;
  * 背景窗口: 固定;
}**/

#currentTime {
    font-size: 16px;
    animation: animate 8s linear infinite;
    -webkit-animation: animate 8s linear infinite;
    background-image: -webkit-linear-gradient(to right, violet, indigo, #ff4c98, #d9138b, yellow, orange, red);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    background-image: linear-gradient(to right, #38b1fd, #300082, #ff4c98, green, yellow, orange, red);
    background-clip: text;
    background-size: 9% 100%;
    background-attachment: fixed;
}


#footer {
    font-size: 16px;
    margin: 0 auto; // ✅ 水平居中
    width: 100%; // ✅ 宽度 80%
    color: #000;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0; // ✅ 配合 margin auto 保证居中
    bottom: 0;
    padding: 10px 0;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px 8px 0 0; // ✅ 顶部圆角更好看（可去掉）
}

#footer a {
    text-decoration: none;
}
</style>