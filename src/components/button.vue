<template>
    <a href="#"><span>Купить</span></a> 
</template>


<style scoped>
a {
  position: relative;
  width: 160px;
  height: 50px;
  line-height: 48px;
  background: #836666;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: 0.5s;
  font-weight: 500;


}

a span {
  position: absolute;
  display: block;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  text-align: center;
  background: #fffbfb;
  color: rgb(0, 0, 0);
  transition: 0.5s;
}

a:hover span {
  color: rgb(242, 102, 102);
}

a span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  z-index: 10;
}

a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #c0392b,
    #f39c12,
    #f1c40f,
    #2ecc71,
    #3498db,
    #2980b9,
    #9b59b6,
    #8e44ad,
    #c0392b,
    #f39c12,
    #f1c40f,
    #2ecc71,
    #3498db,
    #2980b9,
    #9b59b6,
    #8e44ad
  );
  background-size: 400%;
  opacity: 0;
  transition: 2.5s;
  animation: eff 20s linear infinite;
}

a:hover::before,
a:hover::after {
  opacity: 1;
}



</style>