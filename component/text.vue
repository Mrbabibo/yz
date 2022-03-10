<!--
 * @Author: your name
 * @Date: 2022-03-10 12:40:58
 * @LastEditTime: 2022-03-10 16:28:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \github\component\text.vue
-->
<template>
  <div>小功能</div>
</template>
converData (data) { let res = [] for (let i = 0; i < data.length; i ++) { let
dataItem = data[i] // 获取 来去 地址的 经纬度 let fromCoord =
this.geoCoord[dataItem[0].name] let toCoord = this.geoCoord[dataItem[1].name] //
debugger; if (fromCoord && toCoord) { res.push({ fromName: dataItem[0].name,
toName: dataItem[1].name, coords: [fromCoord, toCoord] }) } } return res },
getScatter (data) { let _self = this let scatter = [] // 获取目的地和 出发地 的
名称 和 经纬度，用来 作为点 的数据 scatter = data.map(function(dataItem) {
return { name: dataItem[1].name, value: _self.geoCoord[dataItem[1].name] } })
scatter.push({ name: data[0][0].name, value: _self.geoCoord[data[0][0].name] })
return scatter }, drawMap() { let _self = this; let SHData = [
[{name:'上海'},{name:'北京'}], [{name:'上海'},{name:'杭州'}],
[{name:'上海'},{name:'舟山'}] ]; let planePath =
'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
let option = { title: { text: '迁移情况', textStyle: { fontStyle:'normal',
fontSize: 14, }, backgroundColor: '#fff' }, geo: { // 使用地图 作为 图表的 坐标
center: [121.4648,31.2891], zoom: 6, // 放大 倍数 name: '全国', type: 'map',
roam: true, // 鼠标缩放和 平移漫游 map: 'china', itemStyle:{ normal:{
borderColor:'white', borderWidth: 3, areaColor: '#c6d9f1' }, emphasis: {
areaColor: '#4089d3' } }, }, series: [{ name: '用户行程', type: 'lines', //
飞行的路径线 zlevel: 1, effect: { // 尾迹特效 需要单独 放在一个层 show: true,
period: 6, // 动画时间 trailLength: 0.7, // 特效尾迹的长度 color: '#fff',
symbolSize: 3 }, lineStyle: { normal: { color: '#3f73a8', width: 0, curveness:
0.2 // 边的 曲度 } }, data: _self.converData(SHData) }, { name: '用户行程',
type: 'lines', // 飞机飞行路线的运行效果 zlevel: 2, symbolSize: 10, effect: {
show: true, period: 6, trailLength: 0, symbol: planePath, symbolSize: 15, },
lineStyle: { normal: { color: '#3f73a8', width: 4, opacity: 0.6, curveness: 0.2
} }, data: _self.converData(SHData) }, { name: '用户行程', type:
'effectScatter', // 行程目标地点的 标注 coordinateSystem: 'geo', // 使用的坐标系
zlevel: 3, rippleEffect: { // 涟漪特效相关配置 brushType: 'stoke' }, label: {
normal: { show: true, position: 'right', formatter: '{b}' } }, symbolSize: 10,
itemStyle: { normal: { color: '#3f73a8' } }, data: _self.getScatter(SHData) }] }
this.map.setOption(option); }
