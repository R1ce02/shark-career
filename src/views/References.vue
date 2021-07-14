<template>
<div class="container" id="root">
    <h1>References</h1>
    <h3>Selected Customer Reference</h3>
    <div id="imageBox">
        <img src="../assets/customers/burgenland.png" alt="burgenland"/>
        <img src="../assets/customers/csc.png" alt="csc"/>
        <img src="../assets/customers/generali.png" alt="generali"/>
        <img src="../assets/customers/gkk.png" alt="gkk"/>
        <img src="../assets/customers/ibm.png" alt="ibm"/>
        <img src="../assets/customers/landesregierung.png" alt="landesregierung"/>
        <img src="../assets/customers/linz.png" alt="linz"/>
        <img src="../assets/customers/mmkarton.png" alt="mmkarton"/>
        <img src="../assets/customers/ober.png" alt="ober"/>
        <img src="../assets/customers/oraclelogo.png" alt="oraclelogo"/>
        <img src="../assets/customers/post.png" alt="post"/>
        <img src="../assets/customers/sv.png" alt="sv"/>
        <img src="../assets/customers/tirol.png" alt="tirol"/>
        <img src="../assets/customers/vkk.png" alt="vkk"/>
        <img src="../assets/customers/wiener.png" alt="wiener"/>
    </div>
</div>
    
</template>

<style scoped>
#root {
    margin-top: 2vh;
}

#imageBox {
    display: flex;
    flex-wrap: wrap;
}

img {
    height: 100px;
    width: auto;
    margin: 1rem;
    animation-duration: 0.5s;
    padding: 5px;

    animation-name: descend;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
}

img:hover {
    animation-name: rise;
    animation-duration: 0.5s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
}

@keyframes rise {
    from {
        box-shadow: none;
    }
    to {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transform: scale(1.2);
    }
}

@keyframes descend {
    from {
        
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transform: scale(1.2);
    }
    to {
        box-shadow: none;
        transform: scale(1);
    }
}
</style>