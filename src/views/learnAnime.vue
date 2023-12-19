<template>
  <div>
    <h2>Linked List Component</h2>
    <ul>
      <li v-for="node in linkedList" :key="node.id">{{ node.data }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkedList: null
    }
  },
  mounted() {
    // Khởi tạo linked list
    this.linkedList = this.createLinkedList()

    // Thêm một số phần tử vào linked list để minh họa
    this.linkedList.add(1)
    // this.linkedList.add(2)
    // this.linkedList.add(3)
  },
  methods: {
    // Hàm tạo linked list
    createLinkedList() {
      class Node {
        constructor(data) {
          this.data = data
          this.next = null
        }
      }

      class LinkedList {
        constructor() {
          this.head = null
        }

        add(data) {
          const newNode = new Node(data)
          // console.log(newNode)
          if (!this.head) {
            this.head = newNode
          } else {
            let current = this.head
            while (current.next) {
              current = current.next
            }
            current.next = newNode
          }
        }
      }

      return new LinkedList()
    }
  }
}
</script>

<style scoped>
/* Thêm các kiểu CSS nếu cần */
</style>
