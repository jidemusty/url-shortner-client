<template>
  <div class="container container--centered">
    <form action="" class="urlform">
    	<input type="url" placeholder="Let's get you a short URL" class="urlform__input">
    </form>

    <div class="result">
    	<div class="result__details">
    		<div class="result__original">
    			<span>http://uhfkhiioflh;ilfjoflkjfofjlfjfojflojffff</span> is now 
    		</div>
    		<a href="#" target="_blank" class="result__url">http://localhost:5050/abc</a>
    		<a href="#" class="result__stats">Get stats</a>
    	</div>
    	<button class="button button--blue">Copy to clipboard</button>
    </div>

    <!-- <div class="notice">
    	Hit return when you are done
    </div>

    <div class="notice">
    	One moment
    </div> -->
  </div>
</template>

<style lang="scss">
	.urlform {
		width: 100%;
		margin-bottom: 40px;

		&__input {
			font: inherit;
			font-size: 1.2em;
			padding: 20px;
			width: 100%;
			border: 0;
			outline: none;
			border-radius: 3px;
			box-shadow: 0 0 50px rgba(#FFF, .1);
		}
	}

	.notice {
		color: #FFF;
		font-size: 1.1em;
		font-weight: 500px;
	}

	.result {
		width: 100%;
		text-align: center;

		&__details {
			color: #FFF;
			font-size: 1.4em;
		}

		&__url {
			display: block;
			margin-bottom: 20px;
			color: #FFF;
		}

		&__original {
			opacity: 0.5;
			margin-bottom: 5px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			span {
				display: inline-block;
				max-width: 300px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-right: 8px;
			}
		}

		&__stats {
			display: block;
			color: #FFF;
			font-size: .9em;
			margin-bottom: 20px;
		}

		@media (min-width: 736px) {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;


			&__stats {
				margin-bottom: 0;
			}

			&__details {
				margin-right: 40px;
			}
		}
	}
</style>
