import React from "react";
import { ScrollView, Text, Image, TouchableOpacity } from "react-native";
import VaccineItem from "./VaccineItem";
import VaccineItemPaper from "./VaccineItemPaper";



export default function VaccinesList({data}) {
  return (
    <ScrollView>
      {data.map((vacc) => <VaccineItemPaper key={vacc.code} item={vacc} />)}
    </ScrollView>
  );
}
