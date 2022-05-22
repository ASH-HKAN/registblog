<template>
  <div class="home">
    <MyBlogPost :post="welcomeScreen" />
    <MyBlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <MyBlogCard :post="post"  v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyBlogCard from "@/components/MyBlogCard.vue";
import MyBlogPost from "@/components/MyBlogPost.vue";
export default {
  name: "HelloWorld",
  components: { MyBlogPost, MyBlogCard },
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
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "May 1,2022",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "May 1,2022",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "May 1,2022",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "May 1,2022",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>