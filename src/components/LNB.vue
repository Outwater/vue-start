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
        :workspace="workspace" />
    </ul>
    <div class="nav__actions">
      <div
        class="nav__action"
        @click="$store.dispatch('workspace/createWorkspace')">
        <span class="material-icons"> add </span>
        새페이지
      </div>
    </div>
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
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__actions {
    border-top: 1px solid $color-border;
  }
  &__action {
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 14ppx;
    color: $color-icon;
    cursor: pointer;
    &:hover {
      background-color: $color-background--hover1;
    }
    .material-icons {
      margin-left: 4px;
      color: $color-icon;
    }
  }
}
</style>
