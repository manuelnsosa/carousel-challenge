import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styles from "./Carousel.js";

const Carousel = () => {
  const [imagesToShow, setImagesToShow] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(0);
  const [randomImage, setRandomImage] = useState("");
  const [data, setData] = useState(null);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("storage", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(
        "storage",
        async (err, item) => await console.log(item)
      );
      const aux = JSON.parse(value);
      if (aux !== null && aux !== undefined) {
        console.log(aux);
        setPage(aux.page);
        setRandomImage(aux.image);
        setData(aux);
        setLoaded(true);
      } else {
        setPage(0);
        let number = Math.floor(
          Math.random() * imagesToShow[page].images.length
        );
        setRandomImage(imagesToShow[page].images[number]);
        storeData({ image: randomImage, page: page });
        setLoaded(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    async function getImages() {
      const images = await axios.get(
        "https://testapi.io/api/manuelnsosa/countries"
      );
      setImagesToShow(images.data);
    }
    getImages();
    getData();
  }, []);

  useEffect(() => {
    if (imagesToShow.length && data === null) {
      let number = Math.floor(Math.random() * imagesToShow[page].images.length);
      setRandomImage(imagesToShow[page].images[number]);
      setLoaded(true);
      storeData({ image: randomImage, page: page });
    }
  }, [imagesToShow]);

  useEffect(() => {
    if (imagesToShow.length) {
      let number = Math.floor(Math.random() * imagesToShow[page].images.length);
      setRandomImage(imagesToShow[page].images[number]);
      console.log(number);
      storeData({ image: imagesToShow[page].images[number], page: page });
    }
  }, [page]);

  const handleOnClick = (e) => {
    if (e === "previous") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carousel-Challenge APP</Text>
      <View style={styles.div}>
        {!loaded ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <Image style={styles.image} source={randomImage} />
        )}
      </View>
      <View style={styles.btncontainer}>
        {page > 0 && (
          <TouchableOpacity
            value="previous"
            style={styles.button}
            onPress={() => {
              handleOnClick("previous");
            }}
            style={styles.button}
          >
            <Text style={[styles.buttonTxt]}>PREVIOUS</Text>
          </TouchableOpacity>
        )}
        {page < imagesToShow.length - 1 && (
          <TouchableOpacity
            value="previous"
            style={styles.button}
            onPress={() => {
              handleOnClick("next");
            }}
            style={styles.button}
          >
            <Text style={[styles.buttonTxt]}>NEXT</Text>
          </TouchableOpacity>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Carousel;
