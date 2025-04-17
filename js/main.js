document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menü
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      document.body.classList.toggle("no-scroll")
    })
  }

  // Dropdown Menü (Mobil)
  const dropdowns = document.querySelectorAll(".dropdown")

  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a")

    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        dropdown.classList.toggle("active")
      }
    })
  })

  // SSS Accordion
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Diğer açık olanları kapat
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Tıklanan öğeyi aç/kapat
      item.classList.toggle("active")
    })
  })

  // Sayfa yüklendiğinde ilk SSS öğesini aç
  if (faqItems.length > 0) {
    faqItems[0].classList.add("active")
  }

  // Smooth Scroll
  const scrollLinks = document.querySelectorAll('a[href^="#"]')

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()
        const target = document.querySelector(href)

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    })
  })
})
