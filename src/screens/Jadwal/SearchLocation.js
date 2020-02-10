import React, { Component, Fragment } from 'react'
import { View } from 'react-native'
import axios from 'axios';
import { Container, InputSearch, ValueSearch, Loading } from './components'
// import { db } from '../../service/sqliteSchema'

class SearchLocation extends Component {

    constructor(props){
        super(props)
        this.state = {
            namaWialayah : '',
            listWilayah : [],
            isLoading : false
        }
    }

    render() {
        const { namaWialayah, listWilayah, isLoading } = this.state
        const { navigation } = this.props
        console.log(namaWialayah)
        return (
            <Fragment>

                <InputSearch
                    onChangeText={text => this.onSearch({ text })}
                    value={namaWialayah}
                    onSearch={this.checkOnDb}
                />
                {isLoading ? <Loading /> : (
                    <Container>
                        {listWilayah.length <= 0 ? null : listWilayah.map(data => (
                            <ValueSearch
                                onPress={() => navigation.push('Home', { data })}
                                nama={data.kota + ', ' + data.prov}
                                key={data.id} />
                        ))}
                    </Container>
                )}
            </Fragment>
        )
    }

    onSearch = ({ text }) => {
        this.setState({ namaWialayah : text, isLoading : true })
        setTimeout(() => {
            // this.checkOnDb()
            this.getLocation()
        }, 1000)
    }

    getLocation = () => {
        const { namaWialayah } = this.state
        axios.get(`http://209.97.169.78:98/lokasi/api?s=${namaWialayah}`)
        .then(res => {
            this.setState({ listWilayah : res.data, isLoading : false });
        })
        .catch(e => {
            console.log(JSON.stringify(e));
        });
    }

    // checkOnDb = () => {
    //     const { namaWialayah } = this.state
    //     db.transaction(txn => {
    //         txn.executeSql(
    //           `SELECT * FROM wilayah WHERE nama LIKE '%${namaWialayah}%' ORDER BY nama LIMIT 10`,
    //           [],
    //           (tx, res) => {
    //             // console.log(res.rows._array);
    //             this.setState({ listWilayah : res.rows._array, isLoading : false })
    //           }
    //         )
    //     })
    // }

}

export default SearchLocation;
