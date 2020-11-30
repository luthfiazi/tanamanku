import React, { Component } from 'react'
import NavbarComp from './components/NavbarComp'
import JumbotronComponent from './components/JumbotronComponent'
import { TableComponent } from './components/TableComponent'


export default class App extends Component {
  state = {
    title: "TanamanKU",
    tanamans: [
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 1,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      }
    ]
  }

  render() {
    return (
      <div>
        <NavbarComp />
        <JumbotronComponent title={this.state.title} />
        <TableComponent tanamans={this.state.tanamans} />
      </div>
    )
  }
}
