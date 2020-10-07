<template>
  <div>
    <div>
      <div
        v-for="n in 5"
        :key="n"
        class="skill-level__point"
        :class="[n <= level ? activeClass : notActiveClass]"
      ></div>
    </div>
    <div class="mt-1 skill-level__title">{{ name }}</div>
    <div class="mt-1 skill_level__name">{{ findName(level) }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      activeClass: 'skill-level__point--active',
      notActiveClass: 'skill-level__point--not-active',
      levelsMap: {
        1: 'beginner',
        2: 'junior',
        3: 'regular',
        4: 'advanced',
        5: 'expert',
      },
    }
  },
  methods: {
    findName(n) {
      return this.levelsMap[n]
    },
  },
}
</script>

<style lang="scss" scoped>
.skill-level__title {
  color: theme-color('primary');
  font-weight: 600;
  font-size: 18px;
}

.skill_level__name {
  color: lighten(theme-color('dark'), 60);
  font-weight: 300;
  font-size: 14px;
}

.skill-level__point {
  display: inline-block;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: lighten(theme-color('dark'), 40);
  vertical-align: middle;
}

.skill-level__point--active {
  background-color: theme-color('primary');
}
</style>
