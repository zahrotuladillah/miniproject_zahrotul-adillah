import List from "./component/List"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { useSelector } from "react-redux"
import useGetPemasukan from "../hooks/useGetPemasukan"
import useGetPengeluaran from "../hooks/useGetPengeluaran"
import useGetRencana from "../hooks/useGetRencana"

export default function Home(){
    const [filter, setFilter] = useState('pemasukan')
    const {data: dataPemasukan, loading: loadPemasukan, error: errorPemasukan, subsPemasukan} = useGetPemasukan() 
    const {data: dataPengeluaran, loading: loadingPengeluaran, error: errorPengeluaran, subsPengeluaran} = useGetPengeluaran()
    const {data: dataRencana, loading: loadingRencana, error: errorRencana, subsRencana} = useGetRencana()

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    useEffect(()=>{
        subsPemasukan()
    },[])

    useEffect(()=>{
        subsPengeluaran()
    },[])

    useEffect(()=>{
        subsRencana()
    },[])

    // if(errorDataPemasukan){
    //     console.log("error get data pemasukan")
    // }
    const handleClick = e => {
        setFilter(e.target.value)
    }
    
    return(
        <div>
            {loadPemasukan===true && <div>Loading</div>}
            <section className="home second">
                <div className="home-content">
                    <div className="textp-1">Pantau Keuanganmu</div>
                    <div className="textp-2">Dengan Grafik</div>
                    <Link to='/Grafik' className="mainbutton" style={{display: 'grid'}}>Lihat Grafik</Link>
                    {/* <div className="textp-3">You cand find <span className="typing"></span></div> */}
                </div>
                <div className="img-grafik">
                    <img src="./Saly-12.png" alt="logo"/>
                </div>
            </section>
            <img src="./waveatas.png" style={{width: '100%', marginTop: '-5px'}}/>
            <div className="max-width">
                {filter==='pemasukan' && <Link to='/TambahPemasukan' style={{display: 'grid'}} className="tambahbutton" onClick={scrollToTop}>Tambah Pemasukan</Link>}
                {filter==='pengeluaran' && <Link to='/TambahPengeluaran' style={{display: 'grid'}} className="tambahbutton" onClick={scrollToTop}>Tambah Pengeluaran</Link>}
                {filter==='rencana' && <Link to='/TambahRencana' style={{display: 'grid'}} className="tambahbutton" onClick={scrollToTop}>Tambah Rencana</Link>}
                <div className="filter">
                    {filter==='pemasukan'
                    ? <button className="filterbutton" onClick={handleClick} value={'pemasukan'} style={{backgroundColor: '#ACB5E9', border: '2px solid rgba(0, 0, 0, 1)'}}>Pemasukan</button>
                    : <button className="filterbutton" onClick={handleClick} value={'pemasukan'} style={{backgroundColor: '#ACB5E9'}}>Pemasukan</button>} 
                    {filter==='pengeluaran'
                    ? <button className="filterbutton" onClick={handleClick} value={'pengeluaran'} style={{backgroundColor: '#F5ACA8', border: '2px solid rgba(0, 0, 0, 1)'}}>Pengeluaran</button>
                    : <button className="filterbutton" onClick={handleClick} value={'pengeluaran'} style={{backgroundColor: '#F5ACA8'}}>Pengeluaran</button>}
                    {filter==='rencana'
                    ? <button className="filterbutton" onClick={handleClick} value={'rencana'} style={{backgroundColor: '#FBC3A5', border: '2px solid rgba(0, 0, 0, 1)'}}>Rencana</button>
                    : <button className="filterbutton" onClick={handleClick} value={'rencana'} style={{backgroundColor: '#FBC3A5'}}>Rencana</button>}
                    
                </div>
                <section style={{marginBottom: '10%'}}>
                    {filter==='pemasukan' && dataPemasukan.map(income => (<List key={income.id} item={income} filter='pemasukan'/>))}
                    {filter==='pengeluaran' && dataPengeluaran.map((outcome) => (<List key={outcome.id} item={outcome} filter='pengeluaran'/>))}
                    {filter==='rencana' && dataRencana.map((plan) => (<List key={plan.id} item={plan} filter='rencana'/>))}
                    { loadPemasukan===false && filter==='pemasukan' && dataPemasukan.length===0 &&
                        <div className="list" style={{display: "block", textAlign: "center", marginTop: '3%', color: "red", width: "100%", backgroundColor: '#F5ACA8'}}>
                            Belum Ada Pemasukan
                        </div>
                    }
                    {filter==='pengeluaran' && dataPengeluaran.length===0 &&
                        <div className="list" style={{display: "block", textAlign: "center", marginTop: '3%', color: "red", width: "100%", backgroundColor: '#F5ACA8'}}>
                            Belum Ada Pengeluaran
                        </div>
                    }
                    {filter==='rencana' && dataRencana.length===0 &&
                        <div className="list" style={{display: "block", textAlign: "center", marginTop: '3%', color: "red", width: "100%", backgroundColor: '#FBC3A5'}}>
                            Belum Ada Rencana Tabungan
                        </div>
                    }
                </section>
                <div>Note : Klik Untuk Mengedit</div>
            </div>
        </div>
    )
}