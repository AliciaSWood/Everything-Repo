import Header from '../../Components/Header/Header';
import React, { useState } from 'react';
import Toggle1 from '../../Components/ToggleBox1/Toggle1';
import styles from './mainpage.module.scss'
import Counter from '../../Components/Counter/Counter';
import List from '../../Components/List/List';

const MainPage = ({setSearch, search}) => {
    return (
        <div className = {styles.Main}>
            <Header setSearch = {setSearch} search = {search}/>
            <Toggle1/>
            <Counter/>
            <List/>
        </div>
    );
};

export default MainPage;