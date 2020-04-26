<template>
    <div></div>
</template>

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

                // this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
                this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
                // this.camera.position.z = 1;
                this.camera.position.set(0,0,100);
                this.camera.lookAt(0,0,0);

                this.scene = new THREE.Scene();

                this.geometry = new THREE.BoxGeometry( 0.3, 0.3, 0.3 );
                this.geometry = new THREE.Geometry();
                this.geometry.vertices.push( new THREE.Vector3(-20,0,0));
                this.geometry.vertices.push( new THREE.Vector3(0,-20,0));
                this.geometry.vertices.push( new THREE.Vector3(0,0,-20));
                this.geometry.vertices.push( new THREE.Vector3(-20,0,0));

                // var verticesOfCube = [
                //     -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
                //     -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
                // ];
                //
                // var indicesOfFaces = [
                //     2,1,0,    0,3,2,
                //     0,4,7,    7,3,0,
                //     0,1,5,    5,4,0,
                //     1,2,6,    6,5,1,
                //     2,3,7,    7,6,2,
                //     4,5,6,    6,7,4
                // ];

                // this.geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 25, 1 );

                // this.material = new THREE.MeshNormalMaterial();
                this.material = new THREE.LineBasicMaterial( { color: '#ffffff'});

                // this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.mesh = new THREE.Line( this.geometry, this.material );
                // this.scene.add( this.mesh );

                //
                // var meshMaterial = new THREE.MeshNormalMaterial();
                // meshMaterial.side = THREE.DoubleSide;
                // var wireFrameMat = new THREE.MeshBasicMaterial();
                // wireFrameMat.wireframe = true;

                // create a multimaterial
                // this.mesh = THREE.SceneUtils.createMultiMaterialObject(new THREE.IcosahedronGeometry(10,0), [meshMaterial, wireFrameMat]);



                // add the sphere to the scene
                this.scene.add(this.mesh);

                this.renderer = new THREE.WebGLRenderer( { antialias: true , alpha: true} );
                this.renderer.setClearColor("#000000");
                let container = document.getElementById('canvas');

                this.renderer.setSize($(container).width(), $(window).height(), false);
                container.appendChild(this.renderer.domElement);

                // this.renderer.setSize( window.innerWidth, window.innerHeight );
                // document.body.appendChild( this.renderer.domElement );

            },
            animate: function () {


                requestAnimationFrame( this.animate );

                // this.mesh.rotation.x += 0.02;
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
        height: 320px;
        top:0;
    }
</style>
