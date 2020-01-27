<template>
    <div></div>
</template>
<!--<script src="//cdn.rawgit.com/mrdoob/three.js/master/build/three.min.js"></script>-->
<script>
    import * as THREE from 'three';

    export default {
        name: "canvas-component",
        data: function(){
            return {
                camera: null,
                scene: null,
                renderer: null,
                mesh: null,
                geometry: null,
                material: null
            }
        },
        methods:{
            init: function () {

                this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
                this.camera.position.z = 1;

                this.scene = new THREE.Scene();

                this.geometry = new THREE.BoxGeometry( 0.3, 0.3, 0.3 );
                this.material = new THREE.MeshNormalMaterial();

                this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.mesh );

                this.renderer = new THREE.WebGLRenderer( { antialias: true } );

                let container = document.getElementById('canvas');
                console.log(container)
                // this.renderer.setSize($(container).width(), $(window).height());
                container.appendChild(this.renderer.domElement);

                // this.renderer.setSize( window.innerWidth, window.innerHeight );
                // document.body.appendChild( this.renderer.domElement );

            },
            animate: function () {


                requestAnimationFrame( this.animate );

                // this.mesh.rotation.x += 0.01;
                this.mesh.rotation.y += 0.02;

                this.renderer.render( this.scene, this.camera );
            }
        },
        created(){
            this.init();
            this.animate();
        }
    }
</script>

<style>
    canvas {
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        z-index:-1;
    }
</style>
