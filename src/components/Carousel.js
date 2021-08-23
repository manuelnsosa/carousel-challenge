import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  text: {
    marginTop: "20%",
    color: "grey",
    fontSize: 20,
    height: 20,
    alignSelf: "center",
    fontFamily: "tahoma",
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  div: {
    flexDirection: "row",
    width: "90%",
    height: "100%",
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "center",
  },
  btncontainer: {
    height: "20",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: "aliceblue",
    width: "90%",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonTxt: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
});
export default styles;
