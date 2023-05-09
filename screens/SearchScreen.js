import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native'
import { TractorsCat } from '../Data/Data'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function SearchScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchText, setSearchText] = useState('')
  const categories = ['All', 'Wheel', 'Crawler', 'Mini', 'Moto']

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  const handleSearchTextChange = (text) => {
    setSearchText(text)
  }

  const wheelTractors = TractorsCat.wheelTractors || []
  const crawlerTractors = TractorsCat.crawlerTractors || []
  const miniTractors = TractorsCat.miniTractors || []
  const motoTractors = TractorsCat.motoTractors || []

  const displayedData =
    selectedCategory === 'All'
      ? wheelTractors.concat(crawlerTractors, miniTractors, motoTractors)
      : TractorsCat[selectedCategory.toLowerCase() + 'Tractors'] || []

  const filteredData =
    searchText.trim().length === 0
      ? displayedData
      : displayedData.filter((item) =>
          item.Name.toLowerCase().includes(searchText.toLowerCase())
        )

  const handleItemPress = (item) => {
    navigation.navigate('Details', { tractor: item })
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#fff',
          paddingTop: 0,
          display: 'flex',
          alignItems: 'center',

          flexDirection: 'row',
          backgroundColor: '#FFf',
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 10,
            marginLeft: 15,
          }}
        >
          Categories
        </Text>
      </View>
      <View style={styles.Search}>
        <Ionicons name='search-outline' size={30} color='#bdbdbd' />
        <TextInput
          style={styles.searchBar}
          placeholder='Search'
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>

      <View style={styles.navbar}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              category === selectedCategory && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategorySelect(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                category === selectedCategory &&
                  styles.selectedCategoryButtonText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        <View style={styles.listContainer}>
          {filteredData.map((item) => (
            <TouchableOpacity
              style={styles.Items}
              key={item.id}
              onPress={() => handleItemPress(item)}
            >
              <Image source={{ uri: item.Image }} style={styles.image} />
              <View style={{ paddingLeft: 3 }}>
                <Text>
                  {item.Price.toLocaleString('en-PH', {
                    style: 'currency',
                    currency: 'PHP',
                  })}
                </Text>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    right: 4,
                  }}
                >
                  <Ionicons name='heart-outline' size={30} color='#FF8C00' />
                </View>
                <Text style={{ color: '#828282' }}>{item.Manufacturer}</Text>
                <Text>{item.Name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
  },
  categoryButton: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  selectedCategoryButton: {
    backgroundColor: '#FF8C00',
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedCategoryButtonText: {
    color: '#fff',
  },
  searchBar: {
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    width: 330,
  },
  Search: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 4,
  },
  item: {
    height: 200,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: 184,
    height: 200,
  },
  Items: {
    width: 184,

    backgroundColor: '#FFf',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  listContainer: {
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 3,
  },
})
