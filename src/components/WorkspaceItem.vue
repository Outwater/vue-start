<template>
  <li>
    <div
      :style="{ paddingLeft: `${14 * depth}px` }"
      class="title"
      @click="
        $router.push({
          name: 'Workspace',
          params: {
            id: workspace.id,
          },
        })
      ">
      <span
        :class="{ active: isShowChildren }"
        class="material-icons"
        @click="isShowChildren = !isShowChildren">
        play_arrow
      </span>
      <span class="text">{{ workspace.title || "제목없음" }}</span>
      <div class="actions">
        <span class="material-icons" @click="createWorkspace"> add </span>
        <span class="material-icons" @click="deleteWorkspace"> delete </span>
      </div>
    </div>
    <div
      v-if="!hasChildren && isShowChildren"
      class="no-children"
      :style="{ paddingLeft: `${14 * depth + 22}px` }">
      하위페이지가 없습니다.
    </div>
    <ul v-if="hasChildren && isShowChildren">
      <WorkspaceItem
        v-for="ws in workspace.documents"
        :key="ws.id"
        :workspace="ws"
        :depth="depth + 1" />
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    workspace: {
      type: Object,
      default: () => ({}),
    },
    depth: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      isShowChildren: false,
    };
  },
  computed: {
    hasChildren() {
      return this.workspace.documents && this.workspace.documents.length > 0;
    },
  },
  methods: {
    createWorkspace() {
      this.$store.dispatch("workspace/createWorkspace", {
        parentId: this.workspace.id,
      });
      this.isShowChildren = true;
    },
    deleteWorkspace() {
      this.$store.dispatch("workspace/deleteWorkspace", {
        id: this.workspace.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 14px;
  color: rgba($color-font, 0.7);
  &:hover {
    padding-right: 4px;
    background-color: $color-background--hover1;
    .actions {
      display: flex;
    }
  }

  .material-icons {
    font-size: 18px;
    color: $color-icon;
    margin-right: 4px;
    &:hover {
      background-color: $color-background--hover2;
    }
    &.active {
      transform: rotate(90deg);
    }
  }
  .text {
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  .actions {
    display: none;
    align-items: center;
  }
}
.no-children {
  color: rgba($color-font, 0.35);
  height: 30px;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
}
</style>
