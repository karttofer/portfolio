<script setup lang="ts">
import DescriptionComponent from '@/components/DescriptionComponent.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'
import WorkHistoryComponent from '@/components/WorkHistoryComponent.vue'
import { experience } from '@/mock/experience'
</script>
<template>
  <section class="home-profile">
    <ProfileComponent />
  </section>
  <section class="home-description">
    <DescriptionComponent />
    <Divider />
    <div class="home-description-work-history">
      <WorkHistoryComponent :configs-array="experience" />
    </div>
  </section>
</template>
<style lang="scss">
@import '../../assets/styles/variables.scss';

#app {
  @media (max-width: $mobile-breakpoint) {
    width: 100%;
    height: 100%;

    > div {
      &,
      section {
        width: 100%;
      }
    }
  }
  > div {
    display: grid;
    grid-template-columns: auto 530px;
    position: relative;
    z-index: 2;
    grid-gap: 30px;

    @media (max-width: $mobile-breakpoint) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-self: center;

      padding: 20px;
    }
  }
}

.home {
  &-description {
    color: $-myself-description-font-folor;
    height: max-content;

    &-work-history {
      overflow: scroll;
      height: calc(100vh - 300px);
    }
  }
}
</style>
@/mock/experience
