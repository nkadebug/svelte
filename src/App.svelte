<script>
	import Header from './components/Header.svelte';
    import Main from './components/Main.svelte';
    import Footer from './components/Footer.svelte';
    export let name;
</script>

<Header {name}/>
<Main/>
<Footer/>