"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { ProductsData } from "../data/data";
import { useRouter } from "next/navigation";
import HashLoader from "react-spinners/HashLoader";
import { GetCountries, GetState } from "react-country-state-city";

const ParentContext = createContext();

export default function Context({ children }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartLength, setCartLength] = useState(0);
  const [amount, setAmount] = useState(0);
  const [heart, setHeart] = useState(false);
  const [productId, setProductId] = useState(false);
  const [colors, setColor] = useState(null);
  const [counts, setCounts] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(1);
  const [data, setData] = useState(ProductsData);
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [wish, setWish] = useState(() => {
    if (typeof window != "undefined") {
      const SavedCart = localStorage.getItem("Wish-Product");
      return SavedCart ? JSON.parse(SavedCart) : [];
    }
  });
  const [coupon, setCoupon] = useState(() => {
    if (typeof window != "undefined") {
      const Coupon = localStorage.getItem("Coupon");

      return Coupon ? JSON.parse(Coupon) : "";
    }
  });

  const [totalAmount, setTotalAmount] = useState(() => {
    if (typeof window != "undefined") {
      const Total = localStorage.getItem("TotalAmount");
      return Total ? JSON.parse(Total) : amount;
    }
  });

  const [Total, setTotal] = useState(() => {
    if (typeof window != "undefined") {
      const Totals = localStorage.getItem("Total");
      return Totals ? JSON.parse(Totals) : amount;
    }
  });

  const [disabledButton, setDisabledButton] = useState(() => {
    if (typeof window != "undefined") {
      const disabled = localStorage.getItem("DisabledButton");
      return disabled ? JSON.parse(disabled) : false;
    }
  });

  const [cartProducts, setCartProducts] = useState(() => {
    if (typeof window != "undefined") {
      const SavedCart = localStorage.getItem("Cart-Product");
      return SavedCart ? JSON.parse(SavedCart) : [];
    }
  });

  const [product, setProduct] = useState(() => {
    if (typeof window != "undefined") {
      const SavedCart = localStorage.getItem("ProductDetails");
      return SavedCart ? JSON.parse(SavedCart) : [];
    }

  });
  const [countryName, setCountryName] = useState(() => {
    if (typeof window != "undefined") {
      const UserCountry = localStorage.getItem("Country");
      return UserCountry ? JSON.parse(UserCountry) : "";
    }
  });
  const [stateName, setStateName] = useState(() => {
    if (typeof window != "undefined") {
      const UserState = localStorage.getItem("State");
      return UserState ? JSON.parse(UserState) : "";
    }
  });

  const [orderProduct, setOrderProduct] = useState(() => {
    if (typeof window != "undefined") {
      const SavedProduct = localStorage.getItem("Order-products");
      return SavedProduct ? JSON.parse(SavedProduct) : [];
    }
  });
  // country & state data

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  useEffect(() => {
    if (country)
      GetState(parseInt(country)).then((result) => {
        setStateList(result);
      });
  }, [country]);

  const handleMouseE = () => {
    setShow(true);
  };

  const handleMouseL = () => {
    setShow(false);
  };

  const handleRouting = () => {
    if (typeof window != "undefined") {
      const CurrentUser = JSON.parse(localStorage.getItem("Current-User"));
      if (CurrentUser != null) {
        if (CurrentUser.email === "" && CurrentUser.password === "") {
          setShowLogin(true);
          setOpenCart(false);
        } else {
          router.push("/view-cart/cart");
          setOpenCart(false);
        }
      } else {
        setShowLogin(true);
        setOpenCart(false);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("Order-products", JSON.stringify(orderProduct));
  }, [orderProduct]);

  const handleRouting1 = () => {
    if (typeof window != "undefined") {
      const CurrentUser = JSON.parse(localStorage.getItem("Current-User"));
      if (CurrentUser != undefined) {
        if (CurrentUser.email === "" && CurrentUser.password === "") {
          setShowLogin(true);
          setOpenCart(false);
        } else {
          router.push("/view-cart/checkout");
          setOpenCart(false);
        }
      }
    }
  };

  // add cart

  const handleCart = (item, newQuan, options) => {
    setOpenCart(true);
    setOrderProduct([]);
    const fav = cartProducts.some((items) => items.id === item.id);

    // already same product

    if (options === "") {
      if (fav === true) {
        const findQuantity = cartProducts.map((items) =>
          items.id === item.id
            ? {
              ...items,
              id: item.id,
              discount: item.discount,
              name: item.name,
              Oprice: item.Oprice,
              brand: item.brand,
              parent: item.parent,
              quantity: newQuan,
              sort: item.sort,
              type: item.type,
              stock: item.stock,
              Dprice: item.Dprice,
              color: item.color,
              img1: item.img1,
              img2: item.img2,
            }
            : items
        );
        setCartProducts(findQuantity);
        setOrderProduct(findQuantity);
        setData((prev) =>
          prev.map((item) =>
            item.id === item.id ? { ...item, quantity: newQuan } : item
          )
        );
      }
      // add product
      else if (fav === false) {
        setCartProducts((prev) => [...prev, item]);
        setOrderProduct((prev) => [...prev, item]);
      }
    } else {
      setOpenCart(false);
      router.push(`/product_details/${item.id}`);
    }
  };

  const handleCartDetails = (item, colors, image) => {
    let fav = [];

    if (colors != null) {
      setOpenCart(true);
      // setOrderProduct([]);
      fav = cartProducts.some(
        (items) => items.color === colors && items.name === item.name
      );
    }

    // already same product && same color to increase quantity only
    if (fav === true) {
      const findQuantity = cartProducts.map((items) =>
        items.color === colors
          ? {
            ...items,
            id: Date.now(),
            quantity: items.quantity + item.quantity,
          }
          : items
      );
      setCartProducts(findQuantity);
      setOrderProduct(findQuantity);
    }
    // add product in the cart
    else if (fav === false) {
      if (colors === null) {
        setCartProducts((prev) => [
          ...prev,
          {
            ...item,
            img1: item.img1,
            color: colors,
            id: Date.now(),
            quantity: item.quantity,
          },
        ]);
        setOrderProduct((prev) => [
          ...prev,
          {
            ...item,
            img1: item.img1,
            color: colors,
            id: Date.now(),
            quantity: item.quantity,
          },
        ]);
      } else {
        if (item.quantity === 1) {
          setCartProducts((prev) => [
            ...prev,
            {
              ...item,
              img1: image,
              color: colors,
              id: Date.now(),
              quantity: 1,
            },
          ]);
          setOrderProduct((prev) => [
            ...prev,
            {
              ...item,
              img1: item.img1,
              color: colors,
              id: Date.now(),
              quantity: item.quantity,
            },
          ]);
        } else {
          setCartProducts((prev) => [
            ...prev,
            {
              ...item,
              img1: image,
              color: colors,
              id: Date.now(),
              quantity: item.quantity,
            },
          ]);
          setOrderProduct((prev) => [
            ...prev,
            {
              ...item,
              img1: item.img1,
              color: colors,
              id: Date.now(),
              quantity: item.quantity,
            },
          ]);
        }
      }
    }
    const find = wish.filter((items) => items.name != item.name);
    setWish(find);
  };

  const handleClear = (e) => {
    setColor((e.target.value = ""));
    location.reload(true);
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      localStorage.setItem("Cart-Product", JSON.stringify(cartProducts));
      localStorage.setItem("ProductDetails", JSON.stringify(product));
      localStorage.setItem("Wish-Product", JSON.stringify(wish));
    }
  }, [cartProducts, wish, product]);

  const [quantities, setQuantities] = useState(0);

  useEffect(() => {
    const totalQty = cartProducts.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    setQuantities(totalQty);
    setCartLength(totalQty);
  }, [cartProducts]);


  // wish cart product add in cart page

  const handleCartWish = (item, newQuan) => {
    // /check that id already include in wish cart
    const fav = cartProducts.some((items) => items.id === item.id);

    // that id already inside wih cart to remove that data
    if (fav === true) {
      // let finds = cartProducts.filter((items) => items.id != item.id);
      setCartProducts((prev) =>
        prev.map((items) =>
          items.id === item.id
            ? {
              ...prev,
              id: item.id,
              discount: item.discount,
              name: item.name,
              Oprice: item.Oprice,
              brand: item.brand,
              parent: item.parent,
              quantity: newQuan,
              sort: item.sort,
              type: item.type,
              stock: item.stock,
              Dprice: item.Dprice,
              color: item.color,
              img1: item.img1,
              img2: item.img2,
            }
            : items
        )
      );
      let wishProduct = wish.filter((items) => items.id != item.id);
      setWish(wishProduct);
    }
    // add that data
    else if (fav === false) {
      setCartProducts((prev) => [...prev, item]);
      let wishProduct = wish.filter((items) => items.id != item.id);
      setWish(wishProduct);
    }
  };

  // remove cart
  const handleRemoveProduct = (id) => {
    if (cartProducts.length === 1) {
      setCartProducts([]);
      setOrderProduct([]);
    } else {
      const find = cartProducts.filter((item) => item.id != id);
      setCartProducts(find);
      setOrderProduct(find);
    }
  };

  useEffect(() => {
    let total = 0;

    cartProducts.forEach((i) => {
      if (i.Dprice === "") {
        total += i.quantity * i.Oprice;
      } else {
        total += i.quantity * i.Dprice;
      }
    });

    setAmount(total.toFixed(2));
  }, [cartProducts]);

  // wishcart

  const handleWish = (item) => {
    setHeart(!heart);
    // /check that id already include in wish cart
    const fav = wish.some((items) => items.id === item.id);

    // that id already inside wih cart to remove that data
    if (fav === true && heart === false) {
      let finds = wish.filter((items) => items.id != item.id);
      setWish(finds);
      setOrderProduct(finds);
    }
    // add that data
    else if (fav === false && heart === true) {
      setWish((prev) => [...prev, item]);
      setOrderProduct((prev) => [...prev, item]);
    }
  };

  // remove wishcart

  const handleRemoveWish = (id) => {
    if (cartProducts.length === 1) {
      setWish([]);
    } else {
      const find = wish.filter((item) => item.id != id);
      setWish(find);
    }
    setProductId(true);
  };

  // qunatity increase & decrease fun

  const handleRemove = (id, newQuan, items) => {
    if (newQuan === 0) {
      const findProduct = cartProducts.filter((item) => item.id != id);
      setCartProducts(findProduct);
      setOrderProduct(findProduct);
      setShowCoupon(false);
      setCoupon("");
      setTotalAmount(0);
      setDisabledButton(false);
    } else {
      if (cartProducts.filter((item) => item.id === id)) {
        if (count > 0) {
          setCartProducts((prev) =>
            prev.map((item) =>
              item.id === id ? { ...items, quantity: newQuan } : item
            )
          );
          setOrderProduct((prev) =>
            prev.map((item) =>
              item.id === id ? { ...items, quantity: newQuan } : item
            )
          );

          setData((prev) =>
            prev.map((item) =>
              item.id === id ? { ...items, quantity: newQuan } : item
            )
          );
          setShowCoupon(false);
          setCoupon("");
          setTotalAmount(0);
          setDisabledButton(false);
        }
      }
    }
  };

  const handleAdd = (id, newQuan, items) => {
    if (cartProducts.filter((item) => item.id === id)) {
      setCartProducts((prev) =>
        prev.map((item) =>
          item.id === id ? { ...items, quantity: newQuan } : item
        )
      );
      setOrderProduct((prev) =>
        prev.map((item) =>
          item.id === id ? { ...items, quantity: newQuan } : item
        )
      );

      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...items, quantity: newQuan } : item
        )
      );
      setShowCoupon(false);
      setCoupon("");
      setTotalAmount(0);
      setDisabledButton(false);
    }
  };

  const handleRemoveDetails = (id, newQuan, items) => {
    if (newQuan >= 1) {
      if (cartProducts.filter((item) => item.id === id)) {
        setProduct((prev) =>
          prev.map((item) =>
            item.id === id ? { ...items, quantity: newQuan } : item
          )
        );
      }
    }
  };

  const handleAddDetails = (id, newQuan, items) => {
    if (cartProducts.filter((item) => item.id === id)) {
      setProduct((prev) =>
        prev.map((item) =>
          item.id === id ? { ...items, quantity: newQuan } : item
        )
      );
    }
  };

  // apply coupon

  let disCount = 0;
  const handleApplyCoupon = (counts) => {
    const CouponCode = "Furnistor05";
    setCounts(counts);
    if (CouponCode === coupon && counts === 1) {
      const discountPercentage = 5 / 100;
      const discountAmount = amount * discountPercentage;
      disCount = amount - discountAmount;
      setDisabledButton(true);
      setTotalAmount(disCount.toFixed(2));
      setTotal(disCount.toFixed(2));
      setShowCoupon(true);
    }
  };

  // enlarge animation

  const handleEnlarge = () => {
    setShowModal(true);
  };

  const handleHideEnlarge = () => {
    setShowModal(false);
  };

  return (
    <>
      <ParentContext.Provider
        value={{
          handleMouseE,
          handleMouseL,
          setShowCoupon,
          show,
          orderProduct,
          handleApplyCoupon,
          handleCart,
          openCart,
          counts,
          handleEnlarge,
          Total,
          showModal,
          handleHideEnlarge,
          setOpenCart,
          handleWish,
          setColor,
          productId,
          handleAdd,
          showLogin,
          handleRemove,
          handleCartWish,
          setShowLogin,
          colors,
          handleClear,
          handleAddDetails,
          handleRemoveDetails,
          heart,
          handleRouting1,
          showCoupon,
          setCartProducts,
          data,
          setData,
          handleRemoveProduct,
          handleRemoveWish,
          cartProducts,
          wish,
          handleRouting,
          coupon,
          setCoupon,
          cartLength,
          amount,
          HashLoader,
          loading,
          setLoading,
          setCartProducts,
          totalAmount,
          setTotalAmount,
          disabledButton,
          setDisabledButton,
          country,
          setCountry,
          stateList,
          setStateList,
          countryName,
          setCountryName,
          countriesList,
          setCountriesList,
          currentState,
          product,
          setProduct,
          setcurrentState,
          stateName,
          setStateName,
          handleCartDetails,
        }}
      >
        {children}
      </ParentContext.Provider>
    </>
  );
}

export function useSearch() {
  return useContext(ParentContext);
}
