<template>
    <div class="box">
        <div class="massGrp">
            <h2>Mass Download</h2>
            <input placeholder="URL" id="URL">
            <input placeholder=".exa, .mp, .le" id="extentions">
            <button id="send">Send</button>
        </div>
    </div>
    <div id="found">
        <ul></ul>
    </div>
</template>

<style>
.massGrp {
    #URL {
        width: 70%;
    }
    #extentions {
        width: 10%;
    }
}
</style>
