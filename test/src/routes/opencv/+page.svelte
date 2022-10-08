<script lang="ts">
  import cv from "@techstark/opencv-js"
  
  let buildInfo = "";
  

  window.setTimeout(() => {
    (window as any).cv = cv;
    buildInfo = cv.getBuildInformation();
  }, 1000);

  
</script>

<h1>opencv is fun to do</h1>

<textarea class="build-info">
  {buildInfo}
  
</textarea>

<p ></p>

<style>
  .build-info {
    width: 600px;
    height: 400px;
  }
</style>
