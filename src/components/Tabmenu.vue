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
    };
  },
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
</style>