import { Link } from "react-router-dom"
import { useState } from "react";
import useDeletePemasukan from "../../hooks/useDeletePemasukan";
import useDeletePengeluaran from "../../hooks/useDeletePengeluaran";
import useDeleteRencana from "../../hooks/useDeleteRencana";

import EditPemasukan from "./EditPemasukan";
import EditPengeluaran from "./EditPengeluaran";
import EditRencana from "./EditRencana";

export default function List(props){
    const {deletePemasukan, loadingDeletePemasukan} = useDeletePemasukan()
    const {deletePengeluaran, loadingDelatePengeluaran} = useDeletePengeluaran()
    const {deleteRencana, loadingDeleteRencana} = useDeleteRencana()
    const {item, filter} = props
    const [parameterPemasukan, setParamPemasukan] = useState({id: 0, nama: "", nominal: 0, tanggal: "", keterangan: ""})
    const [parameterPengeluaran, setParamPengeluaran] = useState({id: 0, nama: "", nominal: 0,jenis:"", tanggal: "", keterangan: ""})
    const [parameterRencana, setParamRencana] = useState({id: 0, nama: "", nominal: 0, bulan: "", keterangan: ""})

    const [show, setShow] = useState(false);

    const handleClose = () => {
        console.log("halo")
        setParamPemasukan({id: 0, nama: "", nominal: 0, tanggal: "", keterangan: ""})
        setShow(false)
    };
    const handleShowPemasukan = () => {
        setShow(true)
        setParamPemasukan({
            id: item.id,
            nama: item.nama,
            nominal: item.nominal,
            tanggal: item.tanggal,
            keterangan: item.keterangan
        })
    };
    const handleShowPengeluaran = () => {
        setShow(true)
        setParamPengeluaran({
            id: item.id,
            nama: item.nama,
            nominal: item.nominal,
            jenis: item.jenis,
            tanggal: item.tanggal,
            keterangan: item.keterangan
        })
    };
    const handleShowRencana = () => {
        setShow(true)
        setParamRencana({
            id: item.id,
            nama: item.nama,
            nominal: item.nominal,
            bulan: item.bulan,
            tahun: item.tahun,
            keterangan: item.keterangan
        })
    };

    const handleHapusPemasukan = () => {
        deletePemasukan({variables: {
            id: item.id
        }})
    }

    const handleHapusPengeluaran = () => {
        deletePengeluaran({variables:{
            id: item.id
        }})
    }
    const handleHapusRencana = () => {
        deleteRencana({variables:{
            id: item.id
        }})
    }
    return(
        <>
            {show===false &&
                <section className="item">
                    {filter==='pemasukan' && 
                    <div onClick={handleShowPemasukan}
                    className="list" style={{backgroundColor: '#ACB5E9'}}>
                        <div>{item.nama}</div>
                        <div>{item.tanggal}</div>
                    </div>
                    }
                    {filter==='pengeluaran' && 
                    <div onClick={handleShowPengeluaran} className="list" style={{backgroundColor: '#F5ACA8'}}>
                        <div>{item.nama}</div>
                        <div>{item.tanggal}</div>
                    </div>}
                    {filter==='rencana' && 
                    <div onClick={handleShowRencana} className="list" style={{backgroundColor: '#FBC3A5'}}>
                        <div>{item.nama}</div>
                        <div>{item.tanggal}</div>
                    </div>}
                    {filter==='pemasukan' &&
                        <div className="delete-button" onClick={handleHapusPemasukan}>Hapus</div>
                    }
                    {filter==='pengeluaran' &&
                        <div className="delete-button" onClick={handleHapusPengeluaran}>Hapus</div>
                    }
                    {filter==='rencana' &&
                        <div className="delete-button" onClick={handleHapusRencana}>Hapus</div>
                    }
                </section>
            }
            {show===true && <div className="done-edit-button" onClick={handleClose}>Selesai</div>}    
            {show===true && 
                <div>
                    <div>
                        {filter==='pemasukan' && <EditPemasukan item={parameterPemasukan} behavior={handleClose}/>} 
                        {filter==='pengeluaran' && <EditPengeluaran item={parameterPengeluaran} behavior={handleClose}/>}
                        {filter==='rencana' && <EditRencana item={parameterRencana} behavior={handleClose}/>}
                    </div>
                </div>
            }
        </>
        
    )
}