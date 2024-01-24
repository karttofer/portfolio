<template>
  <div class="work-history" v-for="(work, index) in configsArray" :key="index">
    <p>{{ work.time }}</p>
    <div class="work-history-info">
      <div class="work-history-info-title">
        <a :href="work.companyUrl" target="_blank">
          {{ work.title }}
          <i class="pi pi-arrow-up-right"></i>
        </a>
      </div>
      <p>{{ work.subTitle }}</p>
      <div class="work-history-info-context">
        <p v-for="(description, index) in work.descriptions" :key="index">
          {{ description }}
        </p>
      </div>
      <div class="work-history-info-techs">
        <p v-for="(technology, index) in work.technologies" :key="index">
          {{ technology }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { IWorkHistoryObject } from '../interfaces/globals'

export default {
  name: 'WorkHistoryComponent',
  props: {
    configsArray: {
      type: Object as PropType<Array<IWorkHistoryObject>>,
      required: true
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/variables.scss';

.work {
  &-history {
    display: grid;
    grid-template-columns: 40% 60%;
    margin: 0px 0px 25px 0px;

    @media (max-width: $mobile-breakpoint) {
      display: block;
    }

    > p {
      color: $-exp-time;
    }

    &-info {
      &-title {
        a {
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
      }
      p {
        &:nth-child(2) {
          color: $-exp-subtitle-tech;
          font-size: $-profile-user-subtitle;
          margin: 5px 0 5px 0;
        }
      }

      &-techs {
        display: flex;
        flex-wrap: wrap;
        color: $-exp-subtitle-tech;

        * {
          color: $-exp-subtitle-tech !important;
          margin: 5px 5px 0px 0px !important;
          font-size: $-profile-exp-techs !important;
        }
      }

      &-context {
        margin: 12px 0px 12px 0px;
        * {
          color: $-exp-context !important;
          font-size: $-profile-description !important;
        }
      }
    }
  }
}

.p-card .p-card-content {
  padding: 0px;
}
</style>
