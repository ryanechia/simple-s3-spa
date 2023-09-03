<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="linked-list">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon/>
      </template>
      <template #heading>Rates</template>
      Rate rises below inflation
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
</template>

<style scoped>

.linked-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center; /* align item horizontally */
}

</style>
