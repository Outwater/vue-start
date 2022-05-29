<template>
  <nav class="nav">
    <div class="nav__header">
      <div class="user-profile" />
      Outwater's Notion
    </div>
    <ul class="nav__list">
      <WorkspaceItem
        v-for="workspace in workspaces"
        :key="workspace.id"
        :workspace="workspace"
      />
    </ul>
    <div class="nav__actions">+ 새페이지</div>
  </nav>
</template>
<script>
  import WorkspaceItem from "@/components/WorkspaceItem";
  export default {
    components: {
      WorkspaceItem,
    },
    computed: {
      workspaces() {
        return this.$store.state.workspace.workspaces;
      },
    },
    created() {
      this.$store.dispatch("workspace/readWorkspaces");
    },
    mounted() {
      console.log(this.workspaces);
    },
  };
</script>
<style lang="scss" scoped>
  .nav {
    width: 240px;
    height: 100%;
    display: flex;
    flex-direction: column;

    background-color: color.adjust($color-background, $lightness: -5%);
    &__header {
      padding: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      .user-profile {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background-image: url("https://avatars.githubusercontent.com/u/52021566?v=4");
        background-size: cover;
      }
    }
    &__list {
      flex-grow: 1;
    }
  }
</style>
