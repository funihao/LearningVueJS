<template lang="pug">
  .container
    .content.has-text-centered
      .spinner
        .rect1
        .rect2
        .rect3
        .rect4
        .rect5
</template>

<style lang="scss" scoped>

.spinner {
  font-size: 10px;
  height: 40px;
  margin: 100px auto;
  text-align: center;
  width: 50px;

  > div {
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
    background-color: #23d160;
    display: inline-block;
    height: 100%;
    margin-right: 1px;
    width: 6px;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .rect4 {
    -webkit-animation-delay: -.9s;
    animation-delay: -.9s;
  }

  .rect5 {
    -webkit-animation-delay: -.8s;
    animation-delay: -.8s;
  }
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(.4) }
  20% { -webkit-transform: scaleY(1) }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(.4);
    -webkit-transform: scaleY(.4);
  }  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
