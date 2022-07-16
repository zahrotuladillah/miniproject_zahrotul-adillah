import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
// import { addPemasukan, editPemasukan } from "../../store/ListPemasukanSlice"
import useUpdateRencana from "../../hooks/useUpdateRencana"

export default function EditRencana(props){
    const {updateRecana, loadingUpdateRencana} = useUpdateRencana()
    const {item} = props
    const [data, setData] = useState(item)
    // const dispatch = useDispatch(editPemasukan)

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    const onEditRencana = async(newItem) => {
        await updateRecana({variables: {
            _eq: newItem.id,
            _set: {
                nama: newItem.nama,
                nominal: newItem.nominal,
                bulan: newItem.bulan,
                tahun: newItem.tahun,
                keterangan: newItem.keterangan
            }
        }})
        alert("Data Berhasil Diperbarui")
    };

    const handleChange = e => {
        setData({ ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        if(data.nama){
            if(data.nominal){
                if(data.bulan){
                    if(data.tahun){
                        const newItem = {id: data.id, nama: data.nama, nominal: data.nominal, bulan: data.bulan, tahun:data.tahun, keterangan: data.keterangan}
                        onEditRencana(newItem)
                    }
                    else{
                        alert("Isi Tahun Yaa..")
                    }
                }
                else{
                    alert("Isi Tanggal Terlebih Dahulu")
                }
            }
            else{
                alert("Nominal Masih Kosong")
            }
        }
        else{
            alert("Nama Pemasukan Masih Kosong")
        }
    }
    return(
        <div className="edit-rencana">
            <div className="title" style={{textAlign: 'center'}}>Rencana Tabungan</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform-edit">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <label>
                                Nama Rencana
                                <input type="text" name="nama" value={data.nama} onChange={handleChange} 
                                className="input" />
                            </label>
                        </div>
                        <div className="nominal">
                            <label>
                                Nominal Tabungan
                                <input type="number" name="nominal" value={data.nominal} onChange={handleChange} 
                                className="input" />
                            </label>
                        </div>
                        <div className="bulan">
                            <label>
                                Bulan Rencana
                                <select className="input" name="bulan" value={data.bulan} onChange={handleChange}
                                    >
                                        <option value="">Pilih Bulan</option>
                                        <option value="Januari">Januari</option>
                                        <option value="Februari">Februari</option>
                                        <option value="Maret">Maret</option>
                                        <option value="April">April</option>
                                        <option value="Mei">Mei</option>
                                        <option value="Juni">Juni</option>
                                        <option value="Juli">Juli</option>
                                        <option value="Agustus">Agustus</option>
                                        <option value="September">September</option>
                                        <option value="Oktober">Oktober</option>
                                        <option value="November">November</option>
                                        <option value="Desember">Desember</option>
                                </select>
                            </label>
                        </div>
                        <div className="tahun">
                        <label>
                            Tahun Rencana
                            <input type="number" name="tahun" value={data.tahun} onChange={handleChange} 
                            className="input" />
                        </label>
                        </div>
                        <div className="keterangan">
                            <label>
                                Keterangan
                                <textarea name="keterangan" value={data.keterangan} onChange={handleChange} 
                                rows="7"></textarea>
                            </label>
                        </div>

                        <div className="footer">
                            <input type="submit" 
                            // value="Submit" 
                            className="submit" style={{width: "100%"}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}