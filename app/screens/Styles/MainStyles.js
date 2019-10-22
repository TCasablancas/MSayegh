import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Shelf = styled.View`
    margin: 10px -10px;
    justify-content: flex-end;
    flex-direction: row;
`;

export const ItemShelf = styled.View`
    width: 50%;
    height: 210px;
    overflow: hidden;
    padding: 0px 10px;
`;

export const ItemImage = styled.View`
    background-color: #f00;
    height: 120px;
    margin-bottom: 10px;
    border-radius: 6px;
`;

export const ItemTitle = StyleSheet.create({
    font:{
        fontFamily: 'avenir-roman',
        fontSize: 10,
    },
});

export const ItemDesc = StyleSheet.create({
    font:{
        fontFamily: 'avenir-roman',
        fontSize: 14,
        marginVertical: 6,
    },
});

export const ItemPrice = StyleSheet.create({
    font:{
        //fontFamily: 'AvenirLTStd-Black',
        fontSize: 16,
    },
});