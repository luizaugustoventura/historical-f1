import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import api from "../../services/api";
import isValidRound, { ShortDate } from "../../utils/validateRound";
import { Params, SeasonResultsResponse, Races } from "./interfaces";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import LoadingContent from "../../components/LoadingContent";
import ContentContainer from "../../components/ContentContainer";

const SeasonResults = () => {
  const [seasonResults, setSeasonResults] = useState<Races[]>();

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    NetInfo.fetch()
      .then((status: NetInfoState) => {
        if (status.isInternetReachable) {
          if (!routeParams.season) {
            Alert.alert("Ooops", "Parameter not found");
            navigation.goBack();
            return;
          }

          api
            .get<SeasonResultsResponse>(`${routeParams.season}`)
            .then((response) => {
              try {
                setSeasonResults(response.data.MRData.RaceTable.Races);
              } catch {
                Alert.alert(
                  "Sorry",
                  "We did not find any data for your request"
                );
                navigation.goBack();
              }
            });
        } else {
          Alert.alert(
            "Network problem",
            "You must have an internet connection to use this app"
          );
        }
      })
      .catch(() => {
        Alert.alert(
          "Network problem",
          "Connection problems went on while loading this page"
        );
        navigation.goBack();
      });
  }, []);

  function handleNavigateToRound(round: string, date: string) {
    const [year, month, day] = date
      .split("-")
      .map((element) => Number(element));
    const raceDate: ShortDate = {
      year,
      month,
      day,
    };

    const now = new Date();
    const currentDate: ShortDate = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
    };

    if (!isValidRound(currentDate, raceDate)) {
      Alert.alert("Sorry", "This content is not available");
      return;
    }

    navigation.navigate("RoundResults", {
      season: routeParams.season,
      round,
    });
  }

  return (
    <View style={styles.mainContainer} testID="season-results-view">
      <Header />

      <PageTitle text={`${routeParams.season} season results`} />

      {seasonResults ? (
        <ContentContainer>
          {seasonResults.map((race) => (
            <TouchableOpacity
              style={styles.contentCard}
              activeOpacity={0.7}
              onPress={() => handleNavigateToRound(race.round, race.date)}
              key={race.round}
            >
              <View style={styles.contentCardHeader}>
                <Text style={styles.contentCardHeaderTitle}>
                  {race.round}-{race.raceName}
                </Text>
                <Icon name="arrow-right" size={18} color="#E54A4A" />
              </View>

              <View style={styles.contentCardData}>
                <Text style={styles.contentCardDataLabel}>
                  Circuit:&nbsp;
                  <Text style={styles.contentCardDataValue}>
                    {race.Circuit.circuitName}
                  </Text>
                </Text>

                <Text style={styles.contentCardDataLabel}>
                  Location:&nbsp;
                  <Text style={styles.contentCardDataValue}>
                    {race.Circuit.Location.locality},{" "}
                    {race.Circuit.Location.country}
                  </Text>
                </Text>

                <Text style={styles.contentCardDataLabel}>
                  Date:&nbsp;
                  <Text style={styles.contentCardDataValue}>{race.date}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ContentContainer>
      ) : (
        <LoadingContent />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  contentCard: {
    height: 160,
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },

  contentCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  contentCardHeaderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B4949",
  },

  contentCardData: {
    marginTop: 16,
  },

  contentCardDataLabel: {
    fontSize: 16,
    color: "#4B4949",
    fontWeight: "bold",
    marginBottom: 4,
  },

  contentCardDataValue: {
    fontWeight: "normal",
  },
});

export default SeasonResults;
