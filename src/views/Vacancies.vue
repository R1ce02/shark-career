<template>
    <div class="container" id="root">
        <h1 class="title">Open Vacancies</h1>
        <div id="vacancyList">
            <div v-bind:key="job.j_id" v-for="job in jobs" class="item border rounded">
                <h4>{{job.j_name}}</h4>
                <a v-bind:href = "'mailto:rafi.kahn@shark-soft.com?subject=Application For ' + job.j_name"><button type="button" class="btn btn-primary">Apply</button></a>
            </div>
        </div>
    </div>
    
</template>

<script>
// import axios from 'axios';

export default {
    data() {
        return {
            jobs: [
                {
                    "j_name": "Java Full Stack Developer",
                },
                {
                    "j_name": "UI/UX Developer",
                },
                {
                    "j_name": "Part-Time Job",
                },
                {
                    "j_name": "Internship",
                }
            ]
        }
    },
    // mounted() {
    //     this.getJobs()
    // },
    methods: {
        // getJobs() {
        //     try {
        //         axios.get(process.env.VUE_APP_API + "jobs").then((response) => {
        //             response.data.forEach(element => {
        //                 this.jobs.push(element)
                    
        //             });
        //         })    
        //     } catch (error) {
        //         this.$toast.error('Please connect to an internet connection!');
        //     }
            
        // }
    }
}
</script>

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