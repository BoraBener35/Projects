<template>
<section>
    
    <div class="destination-details">
        <h1>{{destination.name}}</h1>
        <img :src="` /images/${destination.image}`" :alt="destination.name">
    </div>
    
</section>
    
</template>