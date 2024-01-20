import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {productList} from '../../data/productList';

const ConcertsScreen = () => {
  return (
    <>
      <ScrollView style={{paddingLeft: '3%', paddingRight: '3%'}}>
        {productList.map((item, index) => {
          return (
            <Card style={{marginBottom: 20}} key={item.id}>
              <Card.Cover source={{uri: item.imageUrl}} />
              <Card.Title
                titleStyle={{fontSize: 25}}
                title={item.name}
                subtitle={item.unitPrice}
              />
              <Card.Content>
                <Text>{item.description}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
};

export default ConcertsScreen;
