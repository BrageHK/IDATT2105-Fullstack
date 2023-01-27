<template>
  <div class="event-card">
    <!-- Display event data -->
    <span>@ {{  event.time }} on {{  event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      event: {
        id: 263847,
        category: "Music",
        title: "The Best Concert Ever",
        description:
          "This is the best concert ever. You will not want to miss it. It will be the best concert ever.",
        location: "The Best Concert Hall",
        date: "2021-12-31",
        time: "19:00",
        isFeatured: true,

      }
    }
  }
};

</script>

<style scoped>

</style>
