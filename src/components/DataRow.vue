<template>

	<div>

		<div class="blog-card blog-card-1" v-if="dataPos == 'left'">
			<div class="photo photo1"></div>
			<div class="description">
				<h1>Грузовые перевозки - Renault Master</h1>
				<h2>Длина - 3.2м / Ширина - 1.7м / Высота - 1.89м</h2>
				<p class="summary">
					<ul>
                		<li><i class="fa fa-bed" aria-hidden="true"></i>&nbsp; Мебель</li>
                		<li><i class="fa fa-industry" aria-hidden="true"></i>&nbsp; Стройматериалы</li>
                		<li><i class="fa fa-tv" aria-hidden="true"></i>&nbsp; Бытовая техника</li>
                		<li><i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; Офисная техника</li>
                		<li><i class="fa fa-motorcycle" aria-hidden="true"></i>&nbsp; Мототехника</li>
                		<li><i class="fa fa-truck" aria-hidden="true"></i>&nbsp; И многое другое</li>
                	</ul>
                </p>
			</div>
		</div>
		<div class="blog-card alt" v-if="dataPos == 'right'">
			<div class="photo photo2"></div>
			<div class="description">
				<h1>Дополнительные услуги</h1>
				<h2>Индивидуальный подход</h2>
				<p class="summary">
					<ul>
                		<li><i class="fa fa-users" aria-hidden="true"></i>&nbsp; Услуги опытных грузчиков</li>
                		<li><i class="fa fa-truck" aria-hidden="true"></i>&nbsp; Услуги монтажа / демонтажа комнатной мебели</li>
                		<li><i class="fa fa-recycle" aria-hidden="true"></i>&nbsp; Вывоз старой мебели</li>
                		<li><i class="fa fa-th" aria-hidden="true"></i>&nbsp; Упаковка хрупких / деликатных грузов</li>
                	</ul></p>
			</div>
		</div>

	</div>

</template>

<script>
  
export default {
  name: 'PriceTable',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      table: 1
    }
  },
  props: ['dataPos']
}

</script>

<style lang="sass">

/*PEN STYLES*/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700);

$green: #1fa67a;
$grey: #f5f5f5;
$yellow: #f2b632;

@mixin transition($dur, $prop: all) {
	transition: $prop $dur ease;
	-webkit-transition: $prop $dur ease;
}

@mixin bgImg($url) {
	background: url($url) center no-repeat;
	background-size: cover;
}

.blog-card {
	@include transition(0.3s, height);

	background: #fff;
	border-radius: 1px;
	box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
	margin: 0 auto 1.6%;
	overflow: hidden;
	position: relative;
	font-size: 14px;
	line-height: 1.45em;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	box-shadow: 0px 0px 3px 0px #000;

	&.blog-card-1 {
		top: 9px;
	}

	&:hover {
		.details {
			left: 0;
		}

		&.alt {
			.details {
				right: 0;
			}
		}
	}

	&.alt {
		.details {
			right: -100%;
			left: inherit;
		}
	}

	.photo {
		height: 200px;
		position: relative;

		&.photo1 {
			@include bgImg("../assets/img/1.jpg");
		}

		&.photo2 {
			@include bgImg("../assets/img/2.jpg");
		}
	}

	.details {
		@include transition(0.3s);

		background: rgba(0, 0, 0, 0.6);
		box-sizing: border-box;
		color: #fff;
		font-family: "Open Sans";
		list-style: none;
		margin: 0;
		padding: 10px 15px;
		height: 100%;

		/*POSITION*/
		position: absolute;
		top: 0;
		left: -100%;

		> li {
			padding: 3px 0;
		}

		li:before, .tags ul:before {
			font-family: FontAwesome;
			margin-right: 10px;
			vertical-align: middle;
		}

		.author:before {
			content: "\f007";
		}

		.date:before {
			content: "\f133";
		}

		.tags {
			ul {
				&:before {
					content: "\f02b";
				}

				list-style: none;
				margin: 0;
				padding: 0;
			}

			li {
				display: inline-block;
				margin-right: 3px;
			}
		}

		a {
			color: inherit;
			border-bottom: 1px dotted;

			&:hover {
				color: $green;
			}
		}
	}

	.description {
		padding: 50px;
		box-sizing: border-box;
		position: relative;
		height: 100%;

		h1 {
			font-family: "Roboto";
			line-height: 1em;
			margin: 0 0 10px 0;
			font-size: 21px;
		}

		h2 {
			color: $grey / 1.5;
			font-family: "Open Sans";
			line-height: 1.2em;
			text-transform: uppercase;
			font-size: 1em;
			font-weight: 400;
			margin: 1.2% 0;
		}

		p {
			position: relative;
			margin: 0;
			padding-top: 20px;
			white-space: normal;

			&:after {
				content: "";
				background: $yellow;
				height: 6px;
				width: 40px;

				/*POSITION*/
				position: absolute;
				top: 6px;
				left: 0;
			}
		}
		li {
			font-size: 16px;
			margin: 5px 0px;
		}

		a {
			color: $green;
			margin-bottom: 10px;
			float: right;

			&:after {
				@include transition(0.3s);

				content: "\f061";
				font-family: FontAwesome;
				margin-left: -10px;
				opacity: 0;
				vertical-align: middle;
			}

			&:hover:after {
				margin-left: 5px;
				opacity: 1;
			}
		}
	}
}

@media screen and (min-width: 600px) {
	.blog-card {
		height: 310px;
		max-width: 1280px;

		&:hover {
			.photo {
				// transform: rotate(5deg) scale(1.3);
				transform: scale(1.1);
			}

			&.alt .photo {
				// transform: rotate(-5deg) scale(1.3);
				transform: scale(1.1);
			}
		}

		&.alt {
			.details {
				padding-left: 30px;
			}

			.description {
				float: right;

				&:before {
					transform: skewX(5deg);
					right: -15px;
					left: inherit;
				}
			}

			.photo {
				float: right;
			}
		}

		.photo {
			@include transition(0.5s);

			float: left;
			height: 100%;
			width: 40%;
		}

		.details {
			width: 40%;
		}

		.description {
			float: left;
			width: 60%;
			z-index: 0;

			&:before {
				transform: skewX(-5deg);
				content: "";
				background: #fff;
				width: 100%;
				z-index: -1;

				/*POSITION*/
				position: absolute;
				left: -15px;
				top: 0;
				bottom: 0;
			}
		}
	}
}

</style>
