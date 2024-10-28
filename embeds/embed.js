function createIframe() {
  const currentScript = document.currentScript

  const parentElement = currentScript.parentNode

  const embedName = currentScript.getAttribute("embed")

  const url = "/static/embeds/" + embedName

  const iframe = document.createElement("iframe")

  iframe.style = "width: 100%;"
  iframe.src = url

  iframe.width = 0
  iframe.height = 0

  parentElement.appendChild(iframe)

  iframe.onload = function () {
    updateClasses()
    updateIframeSize()

    const resizeObserver = new ResizeObserver(() => {
      updateIframeSize()
    })

    resizeObserver.observe(iframe.contentWindow.document.body)

    // Analytics
    iframe.contentWindow.document.addEventListener(
      "click",
      () => {
        umami.track(`embed-${embedName}`)
      },
      { once: true }
    )
  }

  function updateIframeSize() {
    if (!iframe.contentWindow) return

    iframe.width = iframe.contentWindow.document.body.scrollWidth
    iframe.height = iframe.contentWindow.document.body.scrollHeight
  }

  function updateClasses() {
    const classes = document.documentElement.className
      .replace("no-transitions", "transition-none")
      .split(" ")
      .slice(1)

    const iframeDocument =
      iframe.contentDocument.documentElement ||
      iframe.contentWindow.document.documentElement

    iframeDocument.className = classes
  }

  const observer = new MutationObserver(([mutation]) => {
    if (mutation.attributeName === "class") {
      updateClasses()
    }
  })

  observer.observe(document.documentElement, { attributes: true })
}

createIframe()
