import { gql } from "@apollo/client"

export const GetDataPemasukan = gql`
    query getDataPemasukan {
        pemasukan {
            id
            nama
            nominal
            tanggal
            keterangan
        }
    }
`

export const GetDataPengeluaran = gql`
    query getDataPengeluaran {
        pengeluaran {
            id
            nama
            nominal
            jenis
            tanggal
            keterangan
        }
    }
`

export const GetDataRencana = gql`
    query getDataRencana {
        rencana {
            id
            nama
            nominal
            bulan
            tahun
            keterangan
        }
    }
`

