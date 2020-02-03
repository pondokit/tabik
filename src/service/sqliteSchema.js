import { openDatabase } from 'expo-sqlite'
import dataKota from './dataKota'

export const db = openDatabase('Tabik', 1, 'DB for tabik Apps')

export const dispatchArrayWilayah = () => dataKota.map(data => addWilayah({
    id         : data.id,
    nama       : data.description,
    latitude   : data.latitude,
    longitude  : data.longitude,
    zone       : data.zone,
}))

export const createTableWilayah = () => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS wilayah (id integer primary key not null, nama text, latitude text, longitude text, zone text);"
      );
    });
  }

  export const addWilayah = ({ id, nama, latitude, longitude, zone }) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO wilayah (id, nama, latitude, longitude, zone) VALUES (?,?,?,?,?)',
        [id, nama, latitude, longitude, zone],

        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log(results)
          } else {
            console.log('Failed create data')
          }
        }
      )
    })
}

export const showDataWilayah = () => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT * FROM wilayah",
        [],
        function(tx, res) {
          console.log(res.rows._array);
        }
      )
    })
  }


  export const searchWilayah = ({ nama }) => {
    console.log('Search wilayah running')
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM wilayah WHERE nama like '%${nama}%'`,
        [],
        function(tx, res) {
          console.log(res.rows._array);
        }
      )
    })
  }
