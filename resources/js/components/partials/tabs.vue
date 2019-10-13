<template>
<div class="tabs is-fullwidth shadow">
	<ul>
		<li><router-link to="/api/home/">Home</router-link></li>
		<li><router-link to="/api/projects/">Projects</router-link></li>
		<li><a>Videos</a></li>
		<li><a>Documents</a></li>
	</ul>
</div>
</template>

<style lang="scss" scoped="">

a.router-link-exact-active,
a.router-link-exact-active:focus,
a.router-link-exact-active:hover
{
	color: hsl(272, 100%, 50%);
	background-color: transparent;
	border-bottom-color: hsl(272, 100%, 50%);
	font-weight: 600;
}	
a {
	padding: 1rem 1rem;
	&:hover {
		border-bottom-color: transparent;
		color: hsl(0, 0%, 29%);
	}
}
</style>