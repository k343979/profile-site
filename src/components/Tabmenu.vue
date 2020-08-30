<template>
  <div id="Tabmenu">
    <div class="open">
      <ol>
        <li v-for="(item, index) in items" :key="index">
          <router-link v-bind:to=item.path>
            {{ item.title }}
          </router-link>
        </li>
      </ol>
    </div>
    <div class="hamburger">
      <div class="hamburger_btn" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <transition name="menu">
        <div class="manu" v-if="show">
          <ul>
            <li v-for="(item, index) in items" :key="index">
              <router-link v-bind:to="item.path">
                {{ item.title }}
              </router-link>
            </li>
            <button @click="closeManu">閉じる</button>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabmenu',
  data() {
    return {
      items: [
        { title: 'home', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'background', path: '/background'},
        { title: 'skills', path: '/skills' },
        { title: 'outputs', path: '/outputs' }
      ],
      show: false
    };
  },
  methods: {
    openMenu() {
      this.show = true;
    },
    closeMenu() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
ol {
  margin-top: 20px;
  margin-left: auto;
  margin-right: 20px;
  width: 700px;
  display: flex;
  padding: 0;
  list-style: none;
}

li {
  width: 120px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  text-align: center;
  background-color: #444;
  border-radius: 8px;
  position: relative;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #ffffff;
  text-decoration: none;
  line-height: 50px;
  transition: 0.3s;
}

a:hover {
  background-color: #ffffff;
  border: 1px solid #444;
  border-radius: 8px;
  color: #444;
}

@media screen and (max-width: 768px) {
  #hamburger {
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    
    top: 15px;
    right: 20px;
    transition: 0.4s;
  }

  #hamburger span {
    position: absolute;
    left: 2px;
    display: block;
    width: 35px;
    height: 2px;
    color: #444;
    transition: 0.8s;
  }

  #hamburger span:nth-of-type(1) {
    top: 10px;
  }

  #hamburger span:nth-of-type(2) {
    top: 20px;
  }

  #hamburger span:nth-of-type(3) {
    top: 30px;
  }

  .open {
    display: none;
  }
}
</style>