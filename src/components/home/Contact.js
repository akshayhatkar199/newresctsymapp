import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";

const AppContact = () => {
  const canvasRef = useRef(null);
  window.human = false;

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext("2d");
    const numberOfParticules = 30;
    let pointerX = 0;
    let pointerY = 0;
    const tap =
      "ontouchstart" in window || navigator.msMaxTouchPoints
        ? "touchstart"
        : "mousedown";
    const colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

    function setCanvasSize() {
      canvasEl.width = window.innerWidth * 2;
      canvasEl.height = window.innerHeight * 2;
      canvasEl.style.width = window.innerWidth + "px";
      canvasEl.style.height = window.innerHeight + "px";
      ctx.scale(2, 2);
    }

    function updateCoords(e) {
      pointerX = e.clientX || e.touches[0].clientX;
      pointerY = e.clientY || e.touches[0].clientY;
    }

    function setParticuleDirection(p) {
      const angle = anime.random(0, 360) * (Math.PI / 180);
      const value = anime.random(50, 180);
      const radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle),
      };
    }

    function createParticule(x, y) {
      const p = {};
      p.x = x;
      p.y = y;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(16, 32);
      p.endPos = setParticuleDirection(p);
      p.draw = function () {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }

    function createCircle(x, y) {
      const p = {};
      p.x = x;
      p.y = y;
      p.color = "#FFF";
      p.radius = 0.1;
      p.alpha = 0.5;
      p.lineWidth = 6;
      p.draw = function () {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      return p;
    }

    function renderParticule(anim) {
      for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    }

    function animateParticules(x, y) {
      const circle = createCircle(x, y);
      const particules = [];
      for (let i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }
      anime
        .timeline()
        .add({
          targets: particules,
          x: (p) => p.endPos.x,
          y: (p) => p.endPos.y,
          radius: 0.1,
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
        })
        .add({
          targets: circle,
          radius: anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: "linear",
            duration: anime.random(600, 800),
          },
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: renderParticule,
          offset: 0,
        });
    }

    const render = anime({
      duration: Infinity,
      update: function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      },
    });

    const handleClick = (e) => {
      window.human = true;
      render.play();
      updateCoords(e);
      animateParticules(pointerX, pointerY);
    };

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    function autoClick() {
      if (window.human) return;
      animateParticules(
        anime.random(centerX - 50, centerX + 50),
        anime.random(centerY - 50, centerY + 50)
      );
      anime({ duration: 200 }).finished.then(autoClick);
    }

    document.addEventListener(tap, handleClick, false);
    autoClick();
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize, false);

    return () => {
      document.removeEventListener(tap, handleClick, false);
    };
  }, []);

  return (
    <>
      <section id="#contact">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 24 }}
          >
            <div style={{ position: "relative", width: "100%" }}>
              <canvas
                ref={canvasRef}
                className="fireworks bulbule"
                style={{
                  position: "absolute",
                  left: 0,
                  top: -250,
                  width: "100%", // Adjust the width as needed
                  height: "100%", // Adjust the height as needed
                  pointerEvents: "none", // Prevent the canvas from capturing mouse events
                  justifyContent: "center",
                }}
              ></canvas>
            </div>
          </Col>
        </Row>

        <div className="block contactBlock">
          <div className="container-fluid">
            <div className="titleHolder">
              <h2> Get in Touch</h2>
              {/* <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum </p> */}
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="Full name"
                rules={[
                  { required: true, message: "Please input your Full name!" },
                ]}
              >
                <Input placeholder="Full name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Address!",
                  },
                ]}
              >
                <Input type="email" placeholder="Email Address" />
              </Form.Item>
              <Form.Item
                name="Telephone"
                rules={[
                  { required: true, message: "Please input your Telephone!" },
                ]}
              >
                <Input type="Telephone" placeholder="Telephone" />
              </Form.Item>
              <Form.Item
                name="Subject"
                rules={[
                  { required: true, message: "Please input your Subject!" },
                ]}
              >
                <Input type="Subject" placeholder="Subject" />
              </Form.Item>
              <Form.Item
                name="massage"
                rules={[
                  { required: true, message: "Please input your massage!" },
                ]}
              >
                <TextArea type="massage" placeholder="massage" />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>I agree with terms and conditions.</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppContact;
