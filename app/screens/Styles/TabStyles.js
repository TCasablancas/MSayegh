import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    height: 180px;
    margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 0, paddingRight: 10 },
    showHorizontalScrollIndicator: false,
    marginBottom: 20,
})``;

export const TabItem = styled.View`
    width: 100px;
    height: 160px;
    border-radius: 6px;
    margin-right: 15px;
    borderBottomColor: #9f9f9f;
`;

export const ImageTab = styled.View`
    width: 100%;
    height: 100px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #f00;
    margin-bottom: 8px;
`;

export const text = StyleSheet.create({
    font: {
        fontSize: 14,
        fontFamily: 'avenir-roman',
    },
});
