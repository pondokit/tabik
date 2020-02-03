import React, { Component, Fragment } from 'react'
import { View } from 'react-native'
import { Container, InputSearch, ValueSearch, Loading } from './components'
import { db } from '../../service/sqliteSchema'

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
                                nama={data.nama}
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
            this.checkOnDb()
        }, 1000)
    }

    checkOnDb = () => {
        const { namaWialayah } = this.state
        db.transaction(txn => {
            txn.executeSql(
              `SELECT * FROM wilayah WHERE nama like '%${namaWialayah}%'`,
              [],
              (tx, res) => {
                // console.log(res.rows._array);
                this.setState({ listWilayah : res.rows._array, isLoading : false })
              }
            )
        })
    }

}

export default SearchLocation;
