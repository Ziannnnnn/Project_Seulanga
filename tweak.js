console.log('starting tweak')
const product1 = document.getElementById("product1")
const wrapper = document.getElementById("wrapper")
const newBox = document.getElementById("newBox")
const productBox1 = document.getElementById("productBox1")
const productBox2 = document.getElementById("productBox2")
const productBox3 = document.getElementById("productBox3")
const productBox4 = document.getElementById("productBox4")
const productBox5 = document.getElementById("productBox5")
const productBox6 = document.getElementById("productBox6")
const animasi = document.getElementById("animasi")
const descriptionButton = document.getElementById("descriptionButton")


function getDetail(nomor) {
   console.log('produk: ', nomor)
   newBox.style.display = "block"
   wrapper.style.display = "none"

   if (nomor === 1) {
      productBox1.style.display = "flex"
      animasi.style.display = "none"
   }

   else if (nomor === 2) {
      productBox2.style.display = "flex"
      animasi.style.display = "none"
   }

   else if (nomor === 3) {
      productBox3.style.display = "flex"
      animasi.style.display = "none"
   }

   else if (nomor === 4) {
      productBox4.style.display = "flex"
      animasi.style.display = "none"
   }

   else if (nomor === 5) {
      productBox5.style.display = "flex"
      animasi.style.display = "none"
   }

   else if (nomor === 6) {
      productBox6.style.display = "flex"
      animasi.style.display = "none"
   }

   else if (nomor === 7) {
      productBox1.style.display = "none"
      wrapper.style.display = "flex"
      animasi.style.display = "flex"
   }

   else if (nomor === 8) {
      productBox2.style.display = "none"
      wrapper.style.display = "flex"
      animasi.style.display = "flex"
   }

   else if (nomor === 9) {
      productBox3.style.display = "none"
      wrapper.style.display = "flex"
      animasi.style.display = "flex"
   }

   else if (nomor === 10) {
      productBox4.style.display = "none"
      wrapper.style.display = "flex"
      animasi.style.display = "flex"
   }

   else if (nomor === 11) {
      productBox5.style.display = "none"
      wrapper.style.display = "flex"
      animasi.style.display = "flex"
   }

   else if (nomor === 12) {
      productBox6.style.display = "none"
      wrapper.style.display = "flex"
      animasi.style.display = "flex"
   }
}

const home = document.getElementById("home")

function headerMenu(number) {
   console.log('homepage:', number)
   newBox.style.display = "block"
   wrapper.style.display = "none"

   if (number === 1) {
      window.location.reload();
   }

   else if (number === 2) {
      animasi.style.display = "none"
      wrapper.style.display = "flex"
   }
}