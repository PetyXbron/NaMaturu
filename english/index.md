---
title: Angličtina
description: Hlavní stránka pro přípravu na maturitu z angličtiny
state: 2
---

<script setup>
import TopicCardsGrid from '../.vitepress/theme/components/TopicCardsGrid.vue'
import { getTopicsFor } from '../.vitepress/theme/utils/topicIndexData.ts'

const topics = getTopicsFor('english')
</script>

# 🇬🇧 **English**

Summary of all maturita topics in a clear card grid

<TopicCardsGrid :items="topics" :en="true" />

<hr />

<ul style="display: flex; justify-content: center; gap: 3rem; list-style-type: none;">
    <li style="margin-top: 8px;">✅ Done</li>
    <li style="margin-top: 8px;">🟡 Still editing</li>
    <li style="margin-top: 8px;">❌ Not finished</li>
</ul>
