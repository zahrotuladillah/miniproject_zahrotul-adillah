import React, { useState } from "react"
import { Link } from "react-router-dom"
import useUpdatePengeluaran from "../../hooks/useUpdatePengeluaran"

export default function EditPengeluaran(props){
    const {updatePengeluaran, loadingUpdate} = useUpdatePengeluaran()
    const {item} = props
    const [data, setData] = useState(item)

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    const onEditPengeluaran = async(newItem) => {
        await updatePengeluaran({variables: {
            _eq : newItem.id,
            _set: {
                nama: newItem.nama,
                nominal: newItem.nominal,
                jenis: newItem.jenis,
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
                if(data.jenis){
                    if(data.tanggal){
                        const newItem = {id: data.id, nama: data.nama, nominal: data.nominal, jenis: data.jenis, tanggal: data.tanggal, keterangan: data.keterangan}
                        onEditPengeluaran(newItem)
                    }
                    else{
                        alert("Isi Tanggal Terlebih Dahulu")
                    }
                }
                else{
                    alert("Jangan Lupa Isi Jenis Pengeluaran")
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
        <div className="edit-pengeluaran">
            <div className="title" style={{textAlign: 'center'}}>Pengeluaran</div>
            <div className='align-items-center justify-content-center' style={{display: 'flex'}}>
                <div className="preform">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <label>
                                Nama Pengeluaran
                                <input type="text" name="nama" value={data.nama} onChange={handleChange} 
                                className="input" />
                            </label>
                        </div>
                        <div className="nominal">
                            <label>
                                Nominal Pengeluaran
                                <input type="number" name="nominal" value={data.nominal} onChange={handleChange} 
                                className="input" />
                            </label>
                        </div>
                        <div className="jenis">
                                <label>
                                    Jenis Pengeluaran
                                    <select className="input" name="jenis" value={data.jenis} onChange={handleChange}
                                    >
                                        <option value="">Pilih Jenis Pengeluaran</option>
                                        <option value="Pekerjaan dan Belajar">Pekerjaan dan Belajar</option>
                                        <option value="Komunikasi">Komunikasi</option>
                                        <option value="Penampilan">Penampilan</option>
                                        <option value="Makan dan Minum">Makan dan Minum</option>
                                        <option value="Liburan">Liburan</option>
                                        <option value="Lain-lain">Lain-lain</option>
                                    </select>
                                </label>
                            </div>
                        <div className="tanggal">
                            <label>
                                Tanggal Pengeluaran
                                <input type="date" name="tanggal" value={data.tanggal} onChange={handleChange} 
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
                            className="submit" style={{width: "100%"}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}