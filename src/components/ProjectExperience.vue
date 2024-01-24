<template>
  <Card v-for="(work, index) in configsArray" :key="index">
    <template #content>
      <div class="profile-work-experience-container">
        <img alt="profile work experience" class="profile-work-experience-img" :src="work.imgSrc" />
        <div class="profile-work-experience-titles">
          <a :href="work.websiteUrl" target="_blank"
            >{{ work.title }} <i class="pi pi-arrow-up-right"></i
          ></a>
          <p class="m-0">
            {{ work.description }}
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>
<script lang="ts">
import type { IPreviousProjects } from '../interfaces/globals'
import type { PropType } from 'vue'

export default {
  name: 'WorkHistoryComponent',
  props: {
    configsArray: {
      type: Object as PropType<Array<IPreviousProjects>>,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/variables.scss';

.profile {
  &-work-experience {
    &-container {
      display: flex;
      align-items: start;
      grid-gap: 8px;
    }
    &-img {
      width: 100px;
      height: 50px;
      border: 2px solid #96979a;
      border-radius: 2px;
    }

    &-titles {
      p,
      a {
        color: $-exp-title;
      }

      a {
        margin: 0 0 10px 0;
        display: flex;
        cursor: pointer;
        color: $-exp-title;
        font-size: $-profile-user-title;

        @media (max-width: $mobile-breakpoint) {
          font-size: 15px;
        }

        i {
          display: flex;
          align-items: center;
          font-size: 0.6em;
          transform: translate(3px, 0px);
          transition: all 0.1s;
        }

        &:hover {
          text-decoration: underline;
          color: $-user-contact-info;
          i {
            transform: translate(4px, -3px);
          }
          transition: all 0.1s;
        }
      }

      p:nth-child(2) {
        color: $-exp-subtitle-tech;
      }
    }
  }
}

.p-card,
.p-component {
  padding: 12px;
  border: 1px solid transparent;
  &:hover {
    background: #3c3c3c26 !important;
    border: 1px solid rgb(74 74 74 / 52%);
  }
  cursor: pointer;
}
</style>
