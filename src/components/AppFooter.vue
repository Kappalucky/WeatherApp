<template>
	<footer>
		<nav class="navbar fixed-bottom navbar-light bg-light">
			<a
				class="navbar-brand"
				style="font-family: 'Permanent Marker'"
				href="https://kappalucky.github.io"
			>
				<p>&copy; {{new Date().getFullYear()}} Shaquille John-Foster</p>
			</a>
		</nav>
	</footer>
</template>

<script>
export default {
	name: "AppFooter"
};
</script>

<style scoped>
a,
p {
	text-align: center;
	margin: auto;
}
nav {
	background-color: rgb(119, 119, 151);
}
</style>
