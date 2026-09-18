<template>
	<div class="section relative">
		<div class="hero flex items-center justify-center flex-col min-h-125">
			<h2 class="text-5xl text-center max-w-167 py-5"><slot name="Title" >Lezen wordt makkelijker als het bij je past</slot></h2>
			<p class="max-w-106.75 text-center text-base"><slot name="subtext">Maak je eigen leesprofiel en ontdek boeken die aansluiten bij jouw interesses en niveau. Jij houdt zelf de regie.</slot></p>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<!-- <div class="hero grid grid-cols-2 min-h-125">
			<div class="grid grid-item justify-center content-center">
				<p>Afbeelding</p>
			</div>
			<div class="grid grid-item justify-center content-center">
				<p>Formulier</p>
			</div>
		</div> -->


<style scoped>
.hero::before {
  content: '';
  background: #B1D0FF;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
}
</style>