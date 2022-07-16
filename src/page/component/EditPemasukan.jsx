import React, { useState } from "react"
import { Link } from "react-router-dom"

import useAddPemasukan from "../../hooks/useAddPemasukan"
import useUpdatePemasukan from "../../hooks/useUpdatePemasukan"

export default function EditPemasukan(props){
    const {updatePemasukan, loadingUppdate} = useUpdatePemasukan()
    const {item} = props
    const [data, setData] = useState(item)

    const onEditPemasukan = async(newItem) => {
        await updatePemasukan({variables: {
            _eq: newItem.id,
            _set: {
                nama: newItem.nama,
                nominal: newItem.nominal,
                tanggal: newItem.tanggal,
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
                if(data.tanggal){
                    const newItem = {id: data.id, nama: data.nama, nominal: data.nominal, tanggal: data.tanggal, keterangan: data.keterangan}
                    onEditPemasukan(newItem)
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
        <div className="edit">
            <div className="title" style={{textAlign: 'center'}}>Pemasukan</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform">
                    <form 
                    onSubmit={handleSubmit}
                    >
                            <div className="name">
                                <label>
                                    Nama Pemasukan
                                    <input type="text" value={data.nama} name="nama" onChange={handleChange}
                                    className="input" />
                                </label>
                            </div>
                            <div className="nominal">
                                <label>
                                    Nominal Pemasukan
                                    <input type="number" value={data.nominal} name="nominal" onChange={handleChange} 
                                    className="input" />
                                </label>
                            </div>
                            <div className="tanggal">
                                <label>
                                    Tanggal Pemasukan
                                    <input type="date" value={data.tanggal} name="tanggal" onChange={handleChange} 
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
                            {/* <Link className="button batal">Tutup</Link> */}
                            <input type="submit" value="Submit" className="submit" style={{width: "100%"}}/>
                            {/* <button onClick={handleSubmit}>submit</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}