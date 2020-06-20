<template>
  <div class="flex col a-center about fade-in">
    <h1 class="tracking-in-expand-fwd">About</h1>

    <p>This project was made by</p>

    <div class="name-container flex space-between">
      <a
        title="Open LinkedIn Profile"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/shahar-p-662a791a9/"
      >Shahar Peretz</a>

      <a
        title="Open LinkedIn Profile"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/abir-nadav-0389631a7/"
      >Abir Nadav</a>
    </div>
    <h3>Technologies Used :</h3>

    <div class="tech-spans flex a-center">
      <span>Vue.JS</span>
      <span>Vuex Store</span>
      <span>CSS</span>
      <span>ES6</span>
    </div>
  </div>
</template>



<style>
.name-container {
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  height: 20vh;
  margin-bottom: 10vh;
}

.name-container a {
  color: #4cd137;
  font-size: 30px;
  text-decoration: none;
}

.name-container a:hover {
  animation: wobble-hor-bottom 1s both;
}

.about > * {
  margin-bottom: 10vh;
}
.about p {
  font-size: 26px;
  width: 70vw;
  margin: 0 auto;
}

.about p a {
  color: #4cd137;
  text-decoration: none;
}
.about h1 {
  font-size: 43px;
}

.about h3 {
  margin-top: -16vh;
  font-size: 23px;
}

.tech-spans span {
  margin: 20px;
  font-size: 30px;
  color: #4cd137;
  transition: 1s;
}

.tech-spans span:hover {
  transform: scale(1.2);
  color: #6bf556;
}

.fade-in {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.tracking-in-expand-fwd {
  -webkit-animation: tracking-in-expand-fwd 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
}

@-webkit-keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
.wobble-hor-bottom {
  -webkit-animation: wobble-hor-bottom 0.8s both;
  animation: wobble-hor-bottom 0.8s both;
}

@-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
</style>