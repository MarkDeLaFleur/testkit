<script Lang=ts>
import {onMount} from "svelte"
    /**
	 * @type {HTMLVideoElement}
	 */
    let videoEl;
    /**
	 * @type {HTMLCanvasElement}
	 */
    let canvasEl;
onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia(
        {video: {facingMode: {exact: "environment"} } }
    ).then((stream) => {
        videoEl.srcObject = stream;
        videoEl.play();
    }).catch((err) => {
        console.log("something went wrong "+ err);
    });
});
onMount( () => {
    const cont = canvasEl.getContext('2d',{alpha: true});
    cont.fillStyle="green";
    cont.fillRect(10,10,20,20);});

</script>
<style>
    main{
        width: 100%;
        height: 100vh;
        padding: 0;
        box-sizing: border-box;
        position: absolute;
    }
    video{
        display: block;
        margin: 20px auto;
        border: solid gray 1px;
    }
    canvas{
        display: block;
        margin: 20px auto;
        border: solid blueviolet 2px;
    }
</style>


<main>
<h3 > Video </h3>
    
<video bind:this={videoEl} >
    <track kind="captions"/>
</video>
<h4> CANVAS </h4>
<canvas bind:this={canvasEl} >

</canvas>
</main>
