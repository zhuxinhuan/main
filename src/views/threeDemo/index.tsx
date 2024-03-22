// 引入three.js
import { useEffect } from 'react';
import * as THREE from 'three';
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//引入性能监视器stats.js
import Stats from 'three/addons/libs/stats.module.js';


function Index() {
    useEffect(() => {

        const scene = new THREE.Scene(); // 创建3D场景对象Scene

        const pointLight = new THREE.PointLight(0xffffff, 1.0);
        pointLight.intensity = 1.0;//光照强度

        const renderer = new THREE.WebGLRenderer();// 创建渲染器对象
        const camera = new THREE.PerspectiveCamera();   // 实例化一个透视投影相机对象
        const geometry = new THREE.BoxGeometry(100, 60, 20);//创建一个长方体几何对象Geometry
        const material = new THREE.MeshBasicMaterial({
            color: 0x0000ff, //设置材质颜色
            transparent: true,//开启透明
            opacity: 0.5,//设置透明度
        }); //创建一个材质对象Material
        // 两个参数分别为几何体geometry、材质material
        const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        const width = window.innerWidth || 800; //宽度
        const height = window.innerHeight ||500; //高度
        renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
        mesh.position.set(0, 0, 0);
        camera.position.set(100, 200, 200);  //相机观察目标指向Threejs 3D空间中某个位置
        camera.lookAt(mesh.position);//指向mesh对应的位置
        scene.add(mesh);
        const axesHelper = new THREE.AxesHelper(150);
        scene.add(axesHelper);
        renderer.render(scene, camera); //执行渲染操作
        document.body.appendChild(renderer.domElement);
        // 光源辅助观察
        const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
        scene.add(pointLightHelper);
        // 你可以对比不同光照强度明暗差异(传播同样距离)
        pointLight.intensity = 10000.0;//光照强度
        pointLight.intensity = 50000.0;//光照强度
        pointLight.decay = 0.0;//设置光源不随距离衰减

        //点光源位置
        pointLight.position.set(400, 0, 0);//点光源放在x轴上
        scene.add(pointLight); //点光源添加到场景中
        pointLight.position.set(100, 60, 50);
        // 改变点光源位置，使用OrbitControls辅助观察
        pointLight.position.set(-400, -200, -300);
        //环境光:没有特定方向，整体改变场景的光照明暗
        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambient);

        // 设置相机控件轨道控制器OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', function () {
            const { x, y, z } = camera.position
            camera.position.set(x, y, z);  //相机观察目标指向Threejs 3D空间中某个位置
            renderer.render(scene, camera); //执行渲染操作
        });

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
                // 在XOZ平面上分布
                mesh.position.set(i * 200, 0, j * 200);
                scene.add(mesh); //网格模型添加到场景中  
            }
        }


        //创建stats对象
        const stats = new Stats();
        //stats.domElement:web页面上输出计算结果,一个div元素，
        // document.body.appendChild(stats.domElement);
        // 渲染函数
        function render() {
            //requestAnimationFrame循环调用的函数中调用方法update(),来刷新时间
            stats.update();
            renderer.render(scene, camera); //执行渲染操作
            requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
        }
        render();
    }, [])
    return (
        <div className="introduction">
            Three
        </div>
    )
}

export default Index
