<template>
	<div class="page">
		<div class="page-content">
			<img src="img/logo-fs.svg">
			<p>Подключите ваше устройство</p>
		</div>
		<div class="page-footer">
			<p>или</p>
			<button>Откройте каталог вручную</button>
		</div>
	</div>
</template>

<script>
  export default {
    components: {},
    name: 'connect-device'
  }
</script>

<style lang="scss" scoped>

	.page {
		position: relative;
		height: 100%;

		&-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100%;

			img {
				width: 35vw;
				display: block;
				margin-top: 10vh;
				margin-bottom: 2vh;
			}

			p {
				font-family: 'Futura Light';
				font-size: 5.5vw;
			}
		}

		&-footer {
			width: 100%;
			text-align: center;
			position: absolute;
			bottom: 25px;

			p {
				color: #333;
				font: 3vw 'Futura Light';
				margin-bottom: 3.5vh;
			}

			button {
				color: #333;
				font: 2vw 'Futura Normal';
				border: 0;
				background: transparent;
				transition: color 250ms ease-in-out;

				&:hover {
					color: #75a4ba;
				}
			}
		}
	}
</style>
