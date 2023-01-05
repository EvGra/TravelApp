import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import SPACING from '../config/SPACING';
import COLORS from '../config/COLORS';
import CATEGORIES from '../config/CATEGORIES';
import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('screen').width;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SafeAreaView>
      <View style={{padding: SPACING * 2}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: SPACING * 3,
              fontWeight: 'bold',
              color: COLORS.dark,
            }}>
            Discover
          </Text>
          <Image
            style={{
              height: SPACING * 5,
              width: SPACING * 5,
              borderRadius: SPACING * 5,
            }}
            source={require('../assets/images/Avatar.png')}
          />
        </View>
        <ScrollView style={{marginVertical: SPACING * 2}} horizontal>
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity
              onPress={() => setActiveCategory(index)}
              style={{marginRight: SPACING}}
              key={category.id}>
              <Text
                style={[
                  {fontSize: SPACING * 2, color: COLORS.dark},
                  activeCategory == index && {color: COLORS.primary},
                ]}>
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={{fontSize: SPACING * 1.7, color: COLORS.dark}}>
          {CATEGORIES[activeCategory].tours.length + ' '}
          {CATEGORIES[activeCategory].title}
        </Text>
        <ScrollView
          horizontal
          snapToInterval={WIDTH * 0.7}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          decelerationRate="fast"
          style={{marginVertical: SPACING * 2}}>
          {CATEGORIES[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity
              style={{
                width: WIDTH * 0.7,
                height: WIDTH * 0.9,
                overflow: 'hidden',
                borderRadius: SPACING * 2,
                marginRight: SPACING * 2,
              }}
              key={index}>
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  height: '100%',
                  width: '100%',
                  backgroundColor: COLORS.transparent,
                  justifyContent: 'space-between',
                  padding: SPACING,
                }}>
                <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                  <Icon name="heart" color={COLORS.light} size={SPACING * 3} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: '700',
                    color: COLORS.white,
                    marginLeft: SPACING,
                  }}>
                  {tour.title}
                </Text>
              </View>
              <Image
                source={tour.image}
                style={{width: '100%', height: '100%'}}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: SPACING * 2,
              fontWeight: 'bold',
              color: COLORS.dark,
            }}>
            Feeling Adventurous?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: SPACING * 1.4,
                fontWeight: '500',
                color: COLORS.primary,
              }}>
              Show All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
