<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="row pl-3 pr-3 justify-content-left">
      <div v-for="skill in skills" :key="skill.name" class="col-md-3 mb-3">
        <SkillsLevelElement :name="skill.name" :level="skill.level" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillsLevelElement from '@/components/SkillsLevelElement'

export default {
  components: {
    SkillsLevelElement,
  },
  data() {
    return {
      skills: [
        {
          name: 'Ruby',
          level: 4,
          category: 1,
        },
        {
          name: 'Ruby on Rails',
          level: 3,
          category: 1,
        },
        {
          name: 'Javascript',
          level: 3,
          category: 1,
        },
        {
          name: 'C#',
          level: 1,
          category: 1,
        },
        {
          name: 'MySQL',
          level: 3,
          category: 1,
        },
      ],
    }
  },
}
</script>
