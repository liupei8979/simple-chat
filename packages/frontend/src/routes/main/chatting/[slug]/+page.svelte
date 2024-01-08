<script>
    import Header from "../../../../components/chattingRoom/Header.svelte";
    import Footer from "../../../../components/chattingRoom/Footer.svelte";
</script>

<div class="Wrapper">
    <Header />
    <Footer />
</div>

<style>
    .Wrapper{
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 99;
        width: 100%;
        height: 100vh;
        background: #b2c7d9;
    }
</style>