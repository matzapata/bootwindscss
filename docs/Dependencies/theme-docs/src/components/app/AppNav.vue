<template>
  <aside
    class="fixed inset-0 z-30 w-full mt-16 bg-white lg:w-1/5 lg:block lg:relative lg:mt-0 dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent"
    :class="{ 'block': menu, 'hidden': !menu }"
  >
    <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
      <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8">
        <li v-if="!settings.algolia" class="mb-4 lg:hidden">
          <AppSearch />
        </li>
        <li
          v-for="(docs, category, index) in categories"
          :key="category"
          class="mb-4"
          :class="{
            'active': isCategoryActive(docs),
            'lg:mb-0': index === Object.keys(categories).length - 1
          }"
        >
          <p
            v-if="category"
            class="mb-2 text-sm font-bold tracking-wider text-gray-500 uppercase lg:text-xs"
          >{{ category }}</p>
          <ul>
            <li v-for="doc of docs" :key="doc.slug" class="text-gray-700 dark:text-gray-300">
              <NuxtLink
                :to="localePath(doc.to)"
                class="flex items-center justify-between px-2 py-1 font-medium rounded hover:text-red-500"
                exact-active-class="text-red-500 bg-red-100 hover:text-red-500 dark:bg-red-900"
              >
                {{ doc.menuTitle || doc.title }}
                <client-only>
                  <span
                    v-if="isDocumentNew(doc)"
                    class="w-2 h-2 rounded-full opacity-75 animate-pulse bg-primary-500"
                  />
                </client-only>
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li class="space-x-2 lg:hidden">
          <p class="mb-2 text-sm font-bold tracking-wider text-gray-500 uppercase lg:text-xs">More</p>
          <div class="flex items-center space-x-4">
            <a
              v-if="settings.twitter"
              :href="`https://twitter.com/${settings.twitter}`"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              name="Twitter"
              class="inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500"
            >
              <IconTwitter class="w-5 h-5" />
            </a>
            <a
              v-if="settings.github"
              :href="githubUrls.repo"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              name="Github"
              class="inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500"
            >
              <IconGithub class="w-5 h-5" />
            </a>

            <AppLangSwitcher />
            <AppColorSwitcher />
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'settings',
      'githubUrls'
    ]),
    menu: {
      get () {
        return this.$store.state.menu.open
      },
      set (val) {
        this.$store.commit('menu/toggle', val)
      }
    },
    categories () {
      return this.$store.state.categories[this.$i18n.locale]
    }
  },
  methods: {
    isCategoryActive (documents) {
      return documents.some(document => document.to === this.$route.fullPath)
    },
    isDocumentNew (document) {
      if (process.server) {
        return
      }
      if (!document.version || document.version <= 0) {
        return
      }

      const version = localStorage.getItem(`document-${document.slug}-version`)
      if (document.version > Number(version)) {
        return true
      }

      return false
    }
  }
}
</script>
