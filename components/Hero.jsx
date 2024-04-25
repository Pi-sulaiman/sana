import { useEffect } from 'react';

const FlowerGenerator = () => {
  useEffect(() => {
    const scriptUrls = [
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/three.min.js',
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/OrbitControls.js',
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/THREE.MeshLine.js',
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/simplex-noise.min.js',
      'https://codepen.io/jackrugile/pen/f7248f1855b6b3ac41fc1799b440fdce.js',
      'https://codepen.io/jackrugile/pen/c8336958038e483bf27ce9347d5112a2.js',
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/variaboard.min.js'
    ];

    const loadScripts = () => {
      scriptUrls.forEach(url => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
      });
    };

    setTimeout(() => {
      loadScripts();
      let generator = new Generator();
    }, 250);

    return () => {
      scriptUrls.forEach(url => {
        const script = document.querySelector(`script[src="${url}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700,900" rel="stylesheet" />
      <div id="variaboard"></div>
      <canvas id="canvas"></canvas>
      <style jsx>{`
        #canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <script>
        {`
          class Walker {
            constructor(config) {
              this.simplex = config.simplex;
              this.total = config.total;
              this.x = config.x;
              this.y = config.y;
              this.dir = config.dir;
              this.speed = config.speed;
              this.delta = config.delta;
              this.time = config.time;
              this.angleRange = config.angleRange;
              this.away = config.away;
              this.depth = config.depth;

              this.position = new THREE.Vector3(this.x, this.y, 0);
              this.path = [];

              this.build();
            }

            build() {
              for (let i = 0; i < this.total; i++) {
                this.step(i / this.total);
              }
            }

            step(p) {
              // progress the time for noise
              this.time += this.delta;

              // get noise values for angle and speed
              this.angle = Calc.map(
                this.simplex.noise2D(this.time, 0),
                -1,
                1,
                -this.angleRange,
                this.angleRange
              );
              this.speed = Calc.map(
                this.simplex.noise2D(this.time, 1000),
                -1,
                1,
                0,
                0.01
              );

              // apply noise values
              this.dir += this.angle;
              this.position.x += Math.cos(this.dir) * this.speed;
              this.position.y += Math.sin(this.dir) * this.speed;

              // grow away or toward the camera
              if (this.away) {
                this.position.z = Calc.map(p, 0, 1, this.depth / 2, -this.depth / 2);
              } else {
                this.position.z = Calc.map(p, 0, 1, -this.depth / 2, this.depth / 2);
              }

              // push new position into the path array
              this.path.push({
                x: this.position.x,
                y: this.position.y,
                z: this.position.z
              });
            }
          }

          class Generator {
            constructor() {
              this.setupCamera();
              this.setupScene();
              this.setupRenderer();
              this.setupLines();
              this.setupOrbit();
              this.setupControls();

              this.listen();
              this.onResize();
              this.reset();
              this.loop();
            }

            // Add the rest of the Generator class here
            // ...

            setTimeout(() => {
              let generator = new Generator();
            }, 250);
          }
        `}
      </script>
    </>
  );
};

export default FlowerGenerator;
