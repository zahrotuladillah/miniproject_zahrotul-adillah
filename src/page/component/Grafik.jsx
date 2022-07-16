import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';

import useGetPemasukan from "../../hooks/useGetPemasukan";
import useGetPengeluaran from "../../hooks/useGetPengeluaran";
import useGetRencana from "../../hooks/useGetRencana";
import Pie from "./Pie";
import { Link } from "react-router-dom";

export default function Grafik(){
    const {data: dataPemasukan, loading: loadPemasukan, error: errorPemasukan, subsPemasukan} = useGetPemasukan() 
    const {data: dataPengeluaran, loading: loadingPengelauran, error: errorPengeluaran, subsPengeluaran} = useGetPengeluaran()
    const {data: dataRencana, loading: loadingRencana, error: errorRencana, subsRencana} = useGetRencana()

    const [date, setDate] = useState("")
    const [tahun, setTahun] = useState(0)
    const [bulan, setBulan] = useState("")
    const [ifMin, setIfMin] = useState(1)
    const [ifMinRencana, setIfMinRencana] = useState(1)
    const [tahunRencana, setTahunRencana] = useState(0)
    const [bulanRencana, setBulanRencana] = useState("")
    const [nominalRencana, setNominalRencana] = useState(0)
    const [persenHasil, setPersenHasil] = useState(0)
    const [persenRencana, setPersenRencana] = useState(0)
    const [tabungan, setTabungan] = useState(0)
    const [persenJenis, setPersenJenis] = useState([])

    const months = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];

    useEffect(()=>{
        subsPemasukan()
    },[])

    useEffect(()=>{
        subsPengeluaran()
    },[])

    useEffect(()=>{
        subsRencana()
    },[])


    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };


    let temp = 0
    let temprencana = 0
    let tempnominal = 0
    let selisih = 0
    let jenis = []
    const fungsiHitung = (bulan, tahun) => {
        console.log("halo")
        let mulai = "01"
        let selesai = ""
        let bulanDipilih = months.indexOf(bulan)+1
        // s = `${n}`
        let tahunDipilih = `${tahun}`

        if(bulan==="Januari" || bulan==="Maret" || bulan==="Mei" || bulan==="Juli" || bulan==="Agurstus" || 
            bulan==="Oktober" || bulan==="Desember" ){
            selesai = "31"
        }
        else if(bulan==="Februari"){
            // console.log("kabisat",tahun%4===0)
            if(tahun%4===0){
                selesai = "29"
            }
            else{
                selesai = "28"
            }
        }
        else{
            selesai = "30"
        }


        if(bulanDipilih<10){
            bulanDipilih = "0".concat(bulanDipilih)
        }
        const tanggalMulai = tahunDipilih.concat("-",bulanDipilih,"-",mulai);
        const tanggalSelesai = tahunDipilih.concat("-",bulanDipilih,"-",selesai);

        let sumPemasukan = 0
        let sumPengeluaran = 0
        
        dataPemasukan.forEach((item)=>{
            if(item.tanggal>=tanggalMulai && item.tanggal<=tanggalSelesai){
                sumPemasukan += item.nominal
            }
        })

        dataPengeluaran.forEach((item)=>{
            if(item.tanggal>=tanggalMulai && item.tanggal<=tanggalSelesai){
                sumPengeluaran += item.nominal
            }
        })

        dataPengeluaran.forEach((item)=>{
            if(item.tanggal>=tanggalMulai && item.tanggal<=tanggalSelesai){
                JenisPengeluaran.forEach((item1, i)=>{
                    jenis[i]=0
                    if(item.jenis===item1){
                        jenis[i] += item.nominal
                    }
                })
            }
        })

        dataRencana.forEach((item)=>{
            if(tahunRencana===item.tahun && bulanRencana===item.bulan){
                tempnominal = item.nominal
                setNominalRencana(item.nominal)
            }
        })

        selisih = sumPemasukan-sumPengeluaran
        console.log("sls", selisih)
        if(sumPengeluaran<sumPemasukan){
            temp = sumPengeluaran/sumPemasukan*100
        }
        else{
            temp = sumPengeluaran/selisih*100
        }
        jenis.forEach((item,i)=>{
            let isi = item/sumPengeluaran*100
            jenis[i] = isi
        })
        temprencana = selisih/tempnominal*100
    }

    // Untuk Pemasukan Pengeluaran
    const handleChangeTahun = e => {
        setTahun(Number(e.target.value))
    }

    const handleChangeBulan = e => {
        setBulan(e.target.value)
    }

    var DataTahun = ["Pilih Tahun"],
    MakeItemth = function(value){
        return <option key={DataTahun.indexOf(value)}>{value}</option>
    }

    var TahunPemasukanPengeluaran = []
    var BulanPemasukanPengeluaran = []
    dataPemasukan.forEach((item)=>{
        const dateString = item.tanggal
        const year = +dateString.substring(0, 4)
        const month = +dateString.substring(5, 7)

        TahunPemasukanPengeluaran.push(year)
        BulanPemasukanPengeluaran.push(month)
    })

    dataPengeluaran.forEach((item)=>{
        const dateString = item.tanggal
        const year = +dateString.substring(0, 4)
        const month = +dateString.substring(5, 7)

        TahunPemasukanPengeluaran.push(year)
        BulanPemasukanPengeluaran.push(month)
    })

    TahunPemasukanPengeluaran.forEach((item, i)=>{
        // const dateString = item.tanggal
        // const year = +dateString.substring(0, 4)
        if(i>0){
            let beda = true
            DataTahun.forEach((item1)=>{
                if(DataTahun.indexOf(item1)>0){
                    if(item1===item){
                        beda = false
                    }
                }
            })
            if(beda===true) DataTahun.push(item)
        }
        else {DataTahun.push(item)}
    })

    var DataBulan = ["Pilih Bulan"],
    MakeItembln = function(value){
        return <option key={DataBulan.indexOf(value)}>{value}</option>
    }
    let pertama = true
    TahunPemasukanPengeluaran.forEach((item, i)=>{
        // console.log(tahun===item, " ", tahun, " ",item)
        // console.log(tahun===item, " ",typeof tahun, " ",typeof item)
        const bln = BulanPemasukanPengeluaran[i]
        if(tahun===item){
            // console.log("yohoo",item, bln)
            // console.log(pertama)
            if(pertama===false){
                let beda = true
                DataBulan.forEach((item1)=>{
                    // console.log(item1)
                    if(DataBulan.indexOf(item1)>0){
                        // console.log("sama")
                        if(item1===months[bln-1]){
                            beda = false
                        }
                    }
                })
                if(beda===true) DataBulan.push(months[bln-1])
            }
            else{
                // console.log("nye")
                pertama = false
                DataBulan.push(months[bln-1])
                // console.log(pertama)
            }
        }
        
    })
    
    var JenisPengeluaran = ["Pekerjaan dan Belajar", "Komunikasi", "Penampilan", "Makan dan Minum", "Liburan", "Lain-lain"],
    MakeItemJenis = function(value){
        return (
            <div className="list-rincian" key={JenisPengeluaran.indexOf(value)}>
                <div>{value}</div> 
                <div>{persenJenis[JenisPengeluaran.indexOf(value)]}%</div>
            </div>
        )
    }
    const handleFilter = () => {
        fungsiHitung(bulan, tahun)
        setPersenHasil(temp)
        setPersenJenis(jenis)
        if(temp<0){
            setIfMin(2)
        }
        else{
            setIfMin(1)
        }
    }

    // Untuk Perencanaan
    const handleChangeTahunRencana = e => {
        setTahunRencana(Number(e.target.value))
    }

    const handleChangeBulanRencana = e => {
        setBulanRencana(e.target.value)
    }
    
    var DataTahunRencana = ["Pilih Tahun"],
    MakeItemRth = function(value){
        return <option key={DataTahunRencana.indexOf(value)}>{value}</option>
    }
    dataRencana.forEach((item, i)=>{
        if(i>0){
            let beda = true
            DataTahunRencana.forEach((item1)=>{
                if(DataTahunRencana.indexOf(item1)>0){
                    if(item1===item.tahun){
                        beda = false
                    }
                }
            })
            if(beda===true) DataTahunRencana.push(item.tahun)
        }
        else {DataTahunRencana.push(item.tahun)}
    })

    var DataBulanRencana = ["Pilih Bulan"],
    MakeItemRbln = function(value){
        return <option key={DataBulanRencana.indexOf(value)}>{value}</option>
    }
    pertama = true
    dataRencana.forEach((item)=>{
        if(tahunRencana===item.tahun){
            if(pertama===false){
                let beda = true
                DataBulanRencana.forEach((item1)=>{
                    if(DataBulanRencana.indexOf(item1)>0){
                        if(item1===item.bulan){
                            beda = false
                        }
                    }
                })
                if(beda===true) DataBulanRencana.push(item.bulan)
            }
            else{
                DataBulanRencana.push(item.bulan)
                pertama = false
            }
        }
    })
    const handleNominalRencana = () => {
        fungsiHitung(bulanRencana, tahunRencana)
        console.log(selisih)
        setTabungan(selisih)
        setPersenRencana(temprencana)
        console.log(temprencana)
        if(temprencana<0){
            setIfMinRencana(2)
        }
        else if(temprencana>100){
            setIfMinRencana(3)
        }
        else{
            setIfMinRencana(1)
        }
    }

    
    return(
        <div className="grafik">
            <div className="title-grafik" style={{textAlign: 'center'}}>GRAFIK KEUANGAN</div>
            <div className="box-grafik">
                <div className="switch-bulan" style={{marginTop: '0'}}>
                    <label className="in">
                        Pilih Tahun
                        <select required className="input-grafik" name="tahun" value={tahun} onChange={handleChangeTahun}>
                            {DataTahun.map(MakeItemth)}
                        </select>
                    </label>
                    <label className="in">
                        Pilih Bulan (isi tahun)
                        <select required className="input-grafik" name="tahun" value={bulan} onChange={handleChangeBulan}>
                            {DataBulan.map(MakeItembln)}
                        </select>
                    </label>
                    <div onClick={handleFilter} className="in-button">Apply</div>
                </div>
                <div className="grafik-keuangan">
                    <div><Pie value={persenHasil} ifMin={ifMin}/></div>
                    <div className="ket">
                        <div className="teks">Pengeluaran</div>
                        <div className="persen">{persenHasil}%</div>
                        <div className="teks">Pemasukan</div>
                    </div>
                </div>
                <div className="grafik-rincian">
                    <div className="title-rincian">Jenis Pengeluaran</div>
                    {JenisPengeluaran.map(MakeItemJenis )}
                </div>
            </div>
            <div className="title-grafik" style={{textAlign: 'center'}}>HASIL PERENCANAAN</div>
            <div className="box-grafik">
                <div className="switch-bulan" style={{marginTop: '0'}}>
                    <label className="in">
                        Pilih Tahun
                        <select required className="input-grafik" name="tahun" value={tahunRencana} onChange={handleChangeTahunRencana}>
                            {DataTahunRencana.map(MakeItemRth)}
                        </select>
                    </label >
                    <label className="in">
                        Pilih Bulan (isi tahun)
                        <select required className="input-grafik" name="tahun" value={bulanRencana} onChange={handleChangeBulanRencana}>
                            {DataBulanRencana.map(MakeItemRbln)}
                        </select>
                    </label>
                    <div onClick={handleNominalRencana} className="in-button">Apply</div>
                </div>
                <div className="grafik-keuangan">
                <div><Pie value={persenRencana} ifMin={ifMinRencana}/></div>
                    <div className="ket">
                        <div className="teks">Tabungan</div>
                        <div className="persen">{persenRencana}%</div>
                        <div className="teks">Rencana Tabungan</div>
                    </div>
                </div>
                <div className="grafik-rincian">
                    <div className="title-rincian">Rencana</div>
                    <div className="list-rincian">
                        <div>Rencana Tabungan</div> 
                        <div>
                            {nominalRencana}
                        </div>
                    </div>
                    <div className="list-rincian">
                        <div>Tabungan</div> 
                        <div>{tabungan}</div>
                    </div>
                </div>
            </div>
            <Link to='/Home' className="tohome" style={{display: 'grid'}} onClick={scrollToTop}>Kembali ke Home</Link>
        </div>
    )
}