import React from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";
import VaccinesList from "./src/VaccinesList";
import { Searchbar } from "react-native-paper";

const vaccineData = require("./src/vaccines.json");

const VaccineApp = () => {
  const data = vaccineData.compose.include[0].concept;

  const [searchInput, setSearchInput] = React.useState("");

  const filteredData = data.filter(
    (vacc) =>
      vacc.display.toLowerCase().includes(searchInput.toLowerCase()) ||
      vacc.code.toLowerCase().includes(searchInput.toLowerCase())
  );

  setSearchInput('new Value');

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingTop: 60,
        backgroundColor: "lightgrey",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          paddingBottom: 8,
        }}
      >
        Vaccines
      </Text>
      <Searchbar
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
        placeholder="Nach Impfstoff suchen"
      />

      {filteredData.length === 0 && (
        <Text>Keine Einträge gefunden für den Begriff {searchInput}</Text>
      )}
      {filteredData.length > 0 && (
        <Text>{filteredData.length} Einträge gefunden</Text>
      )}
        <VaccinesList data={filteredData} />
    </View>
  );
};

export default VaccineApp;
