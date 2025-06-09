import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
  query: string;
  onChange: (text: string) => void;
}

export const SearchBar: React.FC<Props> = ({ query, onChange }) => (
  <View style={styles.container}>
    <TextInput
      placeholder="Search recipes"
      value={query}
      onChangeText={onChange}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
