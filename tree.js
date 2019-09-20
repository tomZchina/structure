let tree = {
      data: 'a',
      left: {
        data: 'b',
        left: {
          data: 'c',
          left: { data: 'd' },
          right: { data: 'e' }
        },
        right: {
          data: 'f',
          left: { data: 'g' },
          right: { data: 'h' }
        }
      },
      right: {
        data: 'i',
        left: {
          data: 'j',
          left: { data: 'k' },
          right: { data: 'l' }
        },
        right: {
          data: 'm',
          left: { data: 'n' },
          right: { data: 'o' }
        }
      }
    }

    let t1 = []
    let t2 = []
    let t3 = []
    function preOrder(root) {
      if (!root.data) return
      t1.push(root.data)
      if (root.left) {
        preOrder(root.left)
      }
      if (root.right) {
        preOrder(root.right)
      }
    }
    preOrder(tree)
    function inOrder(root) {
      if (!root.data) return
      if (root.left) {
        inOrder(root.left)
      }

      t2.push(root.data)
      if (root.right) {
        inOrder(root.right)
      }
    }
    inOrder(tree)

    function postOrder(root) {
      if (!root.data) return
      if (root.left) {
        postOrder(root.left)
      }
      if (root.right) {
        postOrder(root.right)
      }
      t2.push(root.data)
    }
    console.log(t1)
    console.log(t2)
