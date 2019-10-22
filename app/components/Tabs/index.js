import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';

import { 
    Container,
    TabsContainer, TabItem, ImageTab, text, 
    Shelf, ItemShelf, ItemImage,
    ItemTitle, ItemDesc, ItemPrice } from '../../screens/Styles/TabStyles';

import styles from '../../screens/Styles/Styles';
import homeStyles from '../../screens/Styles/HomeStyles';

export default function Tabs() {
    return(
        
        <ScrollView>
            <View><Text style={homeStyles.title}>Estão são as novidades</Text></View>

            <View>
            <TabsContainer>
                <TabItem>
                    <ImageTab source={ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-712786762-colar-coraco-titanic-rose-semi-joia-cristal-com-strass-_JM&psig=AOvVaw0WskAWQlpODwS-rmC33xIa&ust=1571430984330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAn9-SpOUCFQAAAAAdAAAAABAE" } />
                    <Text style={text.font}>Lorem Ipsum dolor sit amet</Text>
                </TabItem>
                <TabItem>
                    <ImageTab source={ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-712786762-colar-coraco-titanic-rose-semi-joia-cristal-com-strass-_JM&psig=AOvVaw0WskAWQlpODwS-rmC33xIa&ust=1571430984330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAn9-SpOUCFQAAAAAdAAAAABAE" } />
                    <Text style={text.font}>Lorem Ipsum dolor sit amet</Text>
                </TabItem>
                <TabItem>
                    <ImageTab source={ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-712786762-colar-coraco-titanic-rose-semi-joia-cristal-com-strass-_JM&psig=AOvVaw0WskAWQlpODwS-rmC33xIa&ust=1571430984330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAn9-SpOUCFQAAAAAdAAAAABAE" } />
                    <Text style={text.font}>Lorem Ipsum dolor sit amet</Text>
                </TabItem>
                <TabItem>
                    <ImageTab source={ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-712786762-colar-coraco-titanic-rose-semi-joia-cristal-com-strass-_JM&psig=AOvVaw0WskAWQlpODwS-rmC33xIa&ust=1571430984330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAn9-SpOUCFQAAAAAdAAAAABAE" } />
                    <Text style={text.font}>Lorem Ipsum dolor sit amet</Text>
                </TabItem>
                <TabItem>
                    <ImageTab source={ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-712786762-colar-coraco-titanic-rose-semi-joia-cristal-com-strass-_JM&psig=AOvVaw0WskAWQlpODwS-rmC33xIa&ust=1571430984330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAn9-SpOUCFQAAAAAdAAAAABAE" } />
                    <Text style={text.font}>Lorem Ipsum dolor sit amet</Text>
                </TabItem>
                <TabItem>
                    <ImageTab source={ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-712786762-colar-coraco-titanic-rose-semi-joia-cristal-com-strass-_JM&psig=AOvVaw0WskAWQlpODwS-rmC33xIa&ust=1571430984330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiAn9-SpOUCFQAAAAAdAAAAABAE" } />
                    <Text style={text.font}>Lorem Ipsum dolor sit amet</Text>
                </TabItem>
            </TabsContainer>
            </View>

        </ScrollView>
    );
}