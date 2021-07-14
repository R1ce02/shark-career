<template>
    <div class="container" id="root">
        <h1>Open Vacancies</h1>
        <div id="vacancyList">
            <div class="item border rounded">
                <h4>Part-Time Job (For Students)</h4>
                <router-link :to="{name: 'Application', params: { id: 1 }}">
                    <button class="btn btn-primary">Apply</button>
                </router-link>
            </div>
            <div class="item border rounded">
                <h4>Internship</h4>
                <button class="btn btn-primary">Apply</button>
            </div>
            <div class="item border rounded">
                <h4>Fullstack Java Developer</h4>
                <button class="btn btn-primary">Apply</button>
            </div>
            <div class="item border rounded">
                <h4>UI/UX Designer</h4>
                <button class="btn btn-primary">Apply</button>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
#root {
    margin-top: 2vh;
}

.item {
    margin: 1rem 0rem 1rem 0rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h4 {
    margin-bottom: 0px;
}
</style>