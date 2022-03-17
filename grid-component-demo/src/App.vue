<template>
  <section id="app">
    <header class="header">
      <span>search</span>
      <input type="text" v-model="searchContent" />
    </header>
    <section class="content">
      <table>
        <thead>
          <tr>
            <th @click="changeSortByName">
              Name <span :class="['triangle', nameAsc ? 'asc' : 'dsc']"></span>
            </th>
            <th @click="changeSortByPower">
              Power
              <span :class="['triangle', powerAsc ? 'asc' : 'dsc']"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in sortList" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.power }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<script>
const app = {
  name: "App",
  data() {
    return {
      searchContent: "",
      bodyList: [
        { name: "Bruce Lee", power: 9000 },
        { name: "Chuck Norris", power: Infinity },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet LI", power: 8000 },
      ],
      nameAsc: true,
      powerAsc: false,
      edit: "name", // 标记谁是上一次的编辑状态，优先级高
    };
  },
  methods: {
    changeSortByName() {
      this.nameAsc = !this.nameAsc;
      this.edit = "name";
    },
    changeSortByPower() {
      this.powerAsc = !this.powerAsc;
      this.edit = "power";
    },
  },
  computed: {
    sortList() {
      if (this.searchContent == "") {
        if (this.edit == "name") {
          return this.nameAsc ? filter.ascByName() : filter.desByName();
        } else {
          return this.powerAsc ? filter.ascByPower() : filter.dscByPower();
        }
      } else {
        // 处于搜索状态
        return this.bodyList.filter(
          (item) => item.name.indexOf(this.searchContent) != -1
        );
      }
    },
  },
};
const filter = {
  ascByName() {
    return app.data().bodyList.sort();
  },
  desByName() {
    return app.data().bodyList.sort().reverse();
  },
  ascByPower() {
    return app.data().bodyList.sort((a, b) => a.power - b.power);
  },
  dscByPower() {
    return app.data().bodyList.sort((a, b) => b.power - a.power);
  },
};

export default app;
</script>

<style lang="less">
#app {
  width: 400px;
  margin: 20px auto;
  .header {
    span {
      margin-right: 20px;
    }
  }
  .content {
    table {
      border: 1px solid green;
      margin-top: 10px;
    }
    tr {
      height: 40px;
      width: 300px;
      display: flex;
      line-height: 40px;
      border-bottom: 1px white solid;
      th {
        background-color: #008c8c;
        color: white;
      }
      td,
      th {
        flex: 1;
        border-left: 1px white solid;
      }
      td {
        background-color: antiquewhite;
      }
    }
  }
}
.triangle {
  margin-left: 10px;
  display: inline-block;
  height: 0;
  width: 0;
  border: 5px solid transparent;
}
.dsc {
  border-top-color: white;
}
.asc {
  border-bottom-color: white;
}
</style>
