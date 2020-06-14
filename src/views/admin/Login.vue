<template>
	<v-sheet class="px-4" light color="white" tile height="100%" id="login">
		<AdminSnackbar />
		<div class="mt-8 d-flex flex-column align-center mb-8">
			<v-img width="112px"  src="@/assets/img/firestacks/logo-fire-stacks.png"></v-img>
			<span class="mt-2 title text-center">Powered by Fire Stacks</span>
		</div>
		<LoginCard />
	</v-sheet>
</template>

<script>
import LoginCard from '@/components/admin/LoginCard'
import AdminSnackbar from '@/layout/admin/AdminSnackbar'

export default {
	name: 'Login',
	components: { LoginCard, AdminSnackbar },
	
}
</script>

<style>
</style>