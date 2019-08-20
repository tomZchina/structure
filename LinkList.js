class Node {
  constructor(item, next) {
    this.val = item
    this.next = next || null
  }
}

class LinkList {
  constructor() {
    this.header = {
      next: null
    }
  }

  del(item) {
    let prev = this.findPrev(item)
    let node = this.find(item)
    if (prev) {
      prev.next = node.next
    }
  }

  insert(newItem, item) {
    let temp = this.find(item)
    if (temp) {
      temp.next = new Node(newItem, temp.next)
    }
  }

  findPrev(item) {
    let currNode = this.header
    let prev = null
    if (this.header.next) {
      while (currNode.val != item) {
        currNode = currNode.next
        prev = currNode
      }
    }
    return prev
  }

  find(item) {
    if (this.header.next === null) {
      throw new Error('empty')
    }
    let currNode = this.header.next
    while (currNode.val != item) {
      currNode = currNode.next
    }
    return currNode
  }
}

module.exports = LinkList
