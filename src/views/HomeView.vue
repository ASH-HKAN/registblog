<template>
  <div class="home">
    <MyBlogPost :post="welcomeScreen" />
    <MyBlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
  </div>
</template>

<script>
import MyBlogPost from "@/components/MyBlogPost.vue";
export default {
  name: "HelloWorld",
  components: { MyBlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: "Weekly blog with all new news",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "this Is Filter Title1",
          blogHTML: "this is blog title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "this Is filter Title",
          blogHTML: "this is blog title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
