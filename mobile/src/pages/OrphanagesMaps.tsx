import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";

import mapMarker from "../images/map-marker-2x.png";
import { useNavigation } from "@react-navigation/native";

const OrphanagesMap = () => {
  const navigation = useNavigation();

  const handlerNavigatioToOrphanagesDetail = () => {
    navigation.navigate("OrphanagesDetail");
  };

  return (

    <View style={styles.container}>

      {/* Start of the map */}

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >

      {/* Marker is the icon on map, you need to use coordinates to place it >> */}

        <Marker
          style={{
            width: 100,
            height: 100,
          }}
          image={mapMarker}
          calloutAnchor={{
            x: 5.8,
            y: 1.5,
          }}
          coordinate={{
            latitude: -27.2092052,
            longitude: -49.6401092,
          }}
        >
      {/* Callout component is the tooltip when you click the marker */}

          <Callout tooltip onPress={handlerNavigatioToOrphanagesDetail}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      {/* View footer >> */}

      <View style={styles.footer}>

        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity
          style={styles.createOrphanageButton}
          onPress={() => {}}
        >
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>

      </View>
        
      {/* End of the map */}

    </View>
  );
};

// custom style >>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
    elevation: 3
  },

  calloutText: {
    color: "#0089a5",
    fontSize: 14,
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
    color: "#8fa7b3",
    fontFamily: "nunito700",
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrphanagesMap;
