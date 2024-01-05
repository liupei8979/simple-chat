<script>
    import Header from "../signup/Header.svelte";
    import Content from "../signup/Content.svelte";
</script>

<div class="Wrapper">
    <Header />
    <Content />
</div>


<style>
    .Wrapper{
        margin: 0 auto;
  width: 50%;
  min-height: 95vh;
  border: 1px solid #dadada;
  @media only screen and (max-width: 800px) {
    width: 95%;
  }
    }
</style>