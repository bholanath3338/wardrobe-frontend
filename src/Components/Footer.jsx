export default function Footer() {
  return (
    <footer>
      &copy; Copyright 2021. All Rights Reserved.
      <br />
      <a href="mailto:support@wardrobe.com">support@wardrobe.com</a>
      <script>localStorage.removeItem("productsInCart");</script>
      <script src="assets/js/cart-numbers.js"></script>
    </footer>
  );
}
