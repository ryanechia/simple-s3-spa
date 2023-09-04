<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="page-container">
    <div class="textBlock">
      <p>
        As someone who grew up in the City of Melville and is now raising my family in the ward, I understand our local
        community and will work hard to represent you, serve you, and ensure your voice is heard.
      </p>
      <p>
        Being an entrepreneur,
        chartered accountant, community board member, and father has given me unique skills and experiences that will
        drive positive change for all current and future residents. My non-partisan, issues-based, commonsense approach
        will ensure the greatest benefit to the community, when and where it is needed the most.
      </p>
      <p>
        As your Councillor, I will advocate for a community-led approach to urban planning to ensure community amenity
        and public infrastructure are prioritised. I believe rate increases should only be at, or below inflation, and
        will champion sound long term financial planning and accountable decision-making.
      </p>
      <p>
        I will protect our local tree
        canopy by supporting additional planting and the preservation of established trees.
      </p>
      <h2>Vote 1, Daniel Lim.</h2>
    </div>
    <div class="linked-list">
      <h1 class="blue">Daniel's Priorities</h1>

      <WelcomeItem>
        <template #icon>
          <DocumentationIcon/>
        </template>
        <template #heading>Rates</template>
        Keeping council rate rises below inflation
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <EcosystemIcon/>
        </template>
        <template #heading>Nature</template>
        Protecting our tree canopy
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <CommunityIcon/>
        </template>
        <template #heading>Community</template>
        Community led urban planning
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <SupportIcon/>
        </template>
        <template #heading>Support Daniel</template>
        As an independent candidate, Daniel relies on community backing. You can help show your support by
        <a href="https://www.facebook.com/DanielLimCityofMelville" target="_blank" rel="noopener">liking his facebook
          page</a>.
      </WelcomeItem>
    </div>
  </div>
</template>

<style scoped>

.linked-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

h2 {
  color: var(--color-heading);
}
</style>
