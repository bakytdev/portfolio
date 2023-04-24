import React from 'react';
import movie from '../../img/movie.png'
import comp from '../../img/comp.png'

const Data = [
    {
        id: 1,
        img: movie,
        name: 'ALL',
        catigory: 'all'
    },
    {
        id: 1,
        img: movie,
        name: 'REACT',
        catigory: 'react'
    },
    {
        id: 1,
        img: comp,
        name: 'JAVASCRIPT',
        catigory: 'js'},

    {
        id: 1,
        img: comp,
        name: 'HTML',
        catigory: 'html/css'
    }
]


export const DataTab = [
    {
        title: 'ALL',
        params: "all",
    },
    {
        title: "HTML/CSS",
        params: "html/css",
    },
    {
        title: "JS",
        params: "js",
    },
    {
        title: "REACT",
        params: "react",
    },
]

export default Data;

