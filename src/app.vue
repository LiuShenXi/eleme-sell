<template>
  <div id="app">
  	<vHeader :seller="seller"></vHeader>	
    <div class="tab">
    	<div class="tab-item">
    		<router-link to="/goods">商品</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/ratings">评论</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/seller">商家</router-link>
    	</div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
	const ERR_OK = 0;

	import header from './components/header/header.vue';
	import axios from 'axios';

	export default {
		data() {
			return {
				seller: {}
			}
		},
		components: {
			'vHeader': header
		},
		created() {
			axios.get('/api/seller').then((response) => {
				if(response.data.errno === ERR_OK) {
					console.log('this is errno' + response.data.errno);
					this.seller = response.data.data;
				}
			});
		},
		name: 'app'
	}
</script>

<style lang="less">
@import url(./common/styles/mix-in.less);
@import url(./common/styles/icon.less);
#app {
	.tab{
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	.tab-item{
		flex: 1;
		text-align: center;
		a{
			display: block;
			font-size: 14px;
			color: rgb(77, 85, 93);
		}
		.router-link-active{
			color: rgb(240, 20, 20);
		}
	}
}
</style>