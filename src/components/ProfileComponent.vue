<script lang="ts">
// Dependencies
import { ref } from 'vue'

// Components
import ChipsComponent from '@/components/ChipsComponent.vue'
import ProjectExperience from './ProjectExperience.vue'

// Mocks
import { previousProjects } from '@/mock/experience'

export default {
  name: 'ProfileComponent',
  setup() {
    const chips = ref([
      {
        label: 'REACT',
        size: 65
      },
      {
        label: 'ANGULAR',
        size: 93
      },
      {
        label: 'VUE',
        size: 65
      },
      {
        label: 'NODE',
        size: 65
      },
      {
        label: 'NESTJS',
        size: 166
      },
      {
        label: 'DOCKER',
        size: 92
      },
      {
        label: 'AWS',
        size: 65
      },
      {
        label: 'TDD',
        size: 65
      },
      {
        label: 'GRAPHQL',
        size: 87
      },
      {
        label: 'JS/HTML/CSS',
        size: 144
      }
    ])

    const projects = ref(previousProjects)
    return {
      chips,
      projects
    }
  },
  components: { ChipsComponent, ProjectExperience }
}
</script>
<template>
  <Card>
    <template #header>
      <img alt="profile" class="profile-picture" src="../assets/imges/my-image.jpg" data-cy="profile-img" />
    </template>
    <template #title>
      <p class="profile-fonts" data-cy="profile-name">Jhornan Colina</p>
    </template>
    <template #subtitle>
      <p class="profile-fonts" data-cy="profile-field">Remote Frontend Developer</p>
      <p class="profile-fonts-location-info" data-cy="profile-location">
        Colombiaㅤ-ㅤ<a href="https://www.linkedin.com/in/jhornancolina/overlay/contact-info/" target="_blank">Contact
          Info</a>
      </p>
      <div class="profile-chips-container" data-cy="profile-chips">
        <ChipsComponent :config="item" v-for="(item, index) in chips" :key="index" />
      </div>
    </template>
    <template #footer>
      <ProjectExperience :configs-array="projects" />
    </template>
  </Card>
</template>
<style lang="scss">
@import '../assets/styles/variables.scss';

@mixin alignCenter {
  @media (max-width: $mobile-breakpoint) {
    text-align: center;
  }
}

@mixin completeAlign {
  @media (max-width: $mobile-breakpoint) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.p-card-header {
  @include completeAlign();
}

.profile {
  &-picture {
    border-radius: 100%;
    @include imgSize;
  }

  &-fonts {
    color: $-user-name-subname;
    margin: 7px 0px 7px 0px;

    @include alignCenter;

    &-location-info {
      display: flex;
      align-items: center;
      color: $-user-location;

      @include completeAlign();

      a {
        color: $-user-contact-info;
      }
    }
  }

  &-chips {
    &-container {
      width: 397px;
      display: flex;
      flex-wrap: wrap;
      grid-gap: 7px;
      margin: 15px 0px 15px 0px;

      @include completeAlign();
    }
  }
}
</style>
