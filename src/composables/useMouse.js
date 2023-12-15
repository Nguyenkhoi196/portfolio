const useCursor = (size, sizeF) => {
  const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end
  }

  let cursorX = 0
  let cursorY = 0
  let pageX = 0
  let pageY = 0
  const followSpeed = 0.2
  const app = document.querySelector('#app')
  app.style.cursor = 'none'
  const cursor = document.createElement('div')
  cursor.className = 'cursor'

  const cursorF = document.createElement('div')
  cursorF.className = 'cursor-f'
  document.body.appendChild(cursor)
  document.body.appendChild(cursorF)

  cursor.style.setProperty('--size', size + 'px')
  cursorF.style.setProperty('--size', sizeF + 'px')

  window.addEventListener('mousemove', function (e) {
    pageX = e.clientX
    pageY = e.clientY
    cursor.style.left = e.clientX - size / 2 + 'px'
    cursor.style.top = e.clientY - size / 2 + 'px'
  })

  function mouse() {
    cursorX = lerp(cursorX, pageX, followSpeed)
    cursorY = lerp(cursorY, pageY, followSpeed)
    cursorF.style.top = cursorY - sizeF / 2 + 'px'
    cursorF.style.left = cursorX - sizeF / 2 + 'px'
    requestAnimationFrame(mouse)
  }
  //   loop()
  return { mouse }
}

export default useCursor
