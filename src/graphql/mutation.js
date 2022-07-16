import { gql } from "@apollo/client";

export const AddDataPemasukan = gql`
    mutation AddDataPemasukan($object: pemasukan_insert_input!) {
        insert_pemasukan_one(object: $object) {
            id
            nama
            nominal
            tanggal
            keterangan
        }
    }
`

export const AddDataPengeluaran = gql`
    mutation AddDataPengeluaran($object: pengeluaran_insert_input!) {
        insert_pengeluaran_one(object: $object) {
            id
            nama
            nominal
            jenis
            tanggal
            keterangan
        }
    }
`

export const AddDataRencana = gql`
    mutation addDataRencana($object: rencana_insert_input!) {
        insert_rencana_one(object: $object) {
            id
            nama
            nominal
            bulan
            tahun
            keterangan
        }
    }
` 

export const UpdateDataRencana = gql`
    mutation UpdateDataRencana($_eq: Int!, $_set: rencana_set_input!) {
        update_rencana(where: {id: {_eq: $_eq}}, _set: $_set) {
            returning {
                id
                nama
                nominal
                bulan
                tahun
                keterangan
            }
        }
    }
`

export const UpdateDataPengeluaran = gql`
    mutation UpdateDataPengeluaran($_eq: Int!, $_set: pengeluaran_set_input!) {
        update_pengeluaran(where: {id: {_eq: $_eq}}, _set: $_set) {
            returning {
                id
                nama
                nominal
                jenis
                tanggal
                keterangan
            }
        }
    }
`

export const UpdateDataPemasukan = gql`
    mutation UpdateDataPemasukan($_eq: Int!, $_set: pemasukan_set_input!) {
        update_pemasukan(where: {id: {_eq: $_eq}}, _set: $_set) {
            returning {
                id
                nama
                nominal
                tanggal
                keterangan
            }
        }
    }
`

export const DeleteDataPemasukan = gql`
    mutation deleteDataPemasukan($id: Int!) {
        delete_pemasukan_by_pk(id: $id) {
            id
        }
    }
`

export const DeleteDataPengeluaran = gql`
    mutation deleteDataPengeluaran($id: Int!) {
        delete_pengeluaran_by_pk(id: $id) {
            id
        }
    }
`

export const DeleteDataRencana = gql`
    mutation deleteDataRencana($id: Int!) {
        delete_rencana_by_pk(id: $id) {
            id
        }
    }
`



