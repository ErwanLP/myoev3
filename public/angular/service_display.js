/**
 * Created by Erwan on 14/01/2016.
 */
myoApp.factory('displayService', ['$http', function ($http) {

    var s = {  };
    console.log('service display init');

    var renderer, scene, camera, mesh, width, height;

    var sphere, groupeShere;

    var vitesseTranslation = 0.1;

    var vitesseRotation = vitesseTranslation / 1.5;

    s.mode = null;

    width = 500;
    height = 500;


    init(width, height);
    animate();

    function init(){
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000 );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor( 0xffffff, 0);
        document.getElementById('context').appendChild(renderer.domElement);
        camera.position.set(20, 20, 0);
        camera.lookAt(new THREE.Vector3(0,0,0));
        scene.add(camera);

        // create a camera contol
        //cameraControls	= new THREEx.DragPanControls(camera)
        s.keyboard = new THREEx.KeyboardState();

        //add ground
        var grassTex = THREE.ImageUtils.loadTexture('images/grass.jpg');
        grassTex.wrapS = THREE.RepeatWrapping;
        grassTex.wrapT = THREE.RepeatWrapping;
        grassTex.repeat.x = 256;
        grassTex.repeat.y = 256;
        var groundMat = new THREE.MeshBasicMaterial({map:grassTex});
        var groundGeo = new THREE.PlaneGeometry(400,400);
        var ground = new THREE.Mesh(groundGeo,groundMat);
        ground.position.y = -1.9; //lower it
        ground.rotation.x = -Math.PI/2; //-90 degrees around the xaxis
        //IMPORTANT, draw on both sides
        ground.doubleSided = true;
        scene.add(ground);

        //add sphere
        groupeShere = new THREE.Object3D();//create an empty container
        var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
        var loader = new THREE.TextureLoader();
        loader.load(
            // resource URL
            'images/plutomap1K.jpg',
            // Function when resource is loaded
            function ( texture ) {
                // do something with the texture
                var material = new THREE.MeshBasicMaterial( {
                    map: texture
                } );
                sphere = new THREE.Mesh(geometry, material);
                groupeShere.add( sphere );//add a mesh with geometry to it
                scene.add( groupeShere );//when done, add the group to the scene
            },
            // Function called when download progresses
            function ( xhr ) {
                //console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            },
            // Function called when download errors
            function ( xhr ) {
                console.log( 'An error happened' );
            }
        );
    }

    function animate(){
        // on appel la fonction animate() récursivement à chaque frame
        requestAnimationFrame( animate );
        // update camera controls
        //cameraControls.update();
        s.mode = null;
        if(s.keyboard.pressed("left")) {
            s.mode = 'left'
        }
        if(s.keyboard.pressed("right")) {
            s.mode = 'right';
        }
        if(s.keyboard.pressed("up")) {
            s.mode = 'up';
        }
        if(s.keyboard.pressed("down")) {
            s.mode = 'down';
        }
        // on fait tourner le cube sur ses axes x et y
        if(groupeShere && sphere){
            switch(s.mode) {
                case 'up':
                    groupeShere.translateX(-vitesseTranslation);
                    sphere.rotation.z -= vitesseRotation;
                    break;
                case 'down':
                    groupeShere.translateX(vitesseTranslation);
                    sphere.rotation.z += vitesseRotation;

                    break;
                case 'left':
                    groupeShere.translateZ(vitesseTranslation);
                    sphere.rotation.x += vitesseRotation;
                    break;
                case 'right':
                    groupeShere.translateZ(-vitesseTranslation);
                    sphere.rotation.x -= vitesseRotation;

                    break;
                default:
                //console.error('s.mode = ' + s.mode + 'not define');
            }
        }

        // on effectue le rendu de la scène
        renderer.render( scene, camera );
    }


    return s;
}]);