<template>
  <div class="business-card">
    <span v-if="strapiData.data"
      ><i>Имя</i>: {{ strapiData.data[0].firstname }}</span
    >
    <span v-if="strapiData.data"
      ><i>Фамилия</i>: {{ strapiData.data[0].lastname }}</span
    >
    <span v-if="strapiData.data"
      ><i>Возраст</i>: {{ strapiData.data[0].age }}</span
    >
    <p
      v-if="
        strapiData.data &&
        strapiData.data[0].about &&
        strapiData.data[0].about[0].children
      "
    >
      <i>О себе</i>: {{ strapiData.data[0].about[0].children[0].text }}
    </p>

    <p
      v-if="
        strapiData.data &&
        strapiData.data[0].avatar &&
        strapiData.data[0].avatar.formats &&
        strapiData.data[0].avatar.formats.small
      "
    >
      <i>Фото из Strapi</i>
    </p>
    <img
      v-if="
        strapiData.data &&
        strapiData.data[0].avatar &&
        strapiData.data[0].avatar.formats &&
        strapiData.data[0].avatar.formats.small
      "
      :src="baseUrl + strapiData.data[0].avatar.formats.small.url"
      width="125"
      height="167"
      alt="avatar"
    />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

const strapiData: IStrapiData = await $fetch(
  `${baseUrl}/api/people?fields=firstname,lastname,age,about&populate=avatar`
);
</script>

<style lang="scss">
.business-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #286828;
  border-radius: 30px;

  p,
  span {
    color: #ffffff;
    margin: 0 0 20px;

    i {
      font-size: 20px;
    }
  }
}
</style>
