import Header from '../Components/Header/Header';
import React, { useState } from 'react';

const MainPage = ({setSearch, search}) => {
    return (
        <div>
            <Header setSearch = {setSearch} search = {search}/>
        </div>
    );
};

export default MainPage;