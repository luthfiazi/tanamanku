import React, { Component } from 'react'
import NavbarComp from './components/NavbarComp'
import JumbotronComponent from './components/JumbotronComponent'
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import DetailUserContainer from './containers/DetailUserContainer'
import EditContainer from './containers/EditContainer'


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
        id: 2,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 3,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 4,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 5,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 6,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 7,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 8,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 9,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 10,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 11,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 12,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 13,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 14,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 15,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 16,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 17,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 18,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 19,
        nama: "Kuping Gajah",
        jenis: "Asia",
        Usia: 2,
        noinduk: "0123123123123"
      },
      {
        id: 20,
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
        <BrowserRouter>
          <Route path="/" exact >
            <HomeContainer tanamans={this.state.tanamans} />
          </Route>
          <Route path="/create" exact >
            <CreateUserContainer />
          </Route>
          <Route path="/detail/:id" exact >
            <DetailUserContainer />
          </Route>
          <Route path="/edit/:id" exact >
            <EditContainer />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
