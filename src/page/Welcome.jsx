import { Link } from "react-router-dom";

// Fungsi untuk membungkus konten list data dalam home dan memanggil fungsi ListItem untuk setiap item yang ada pada data
// Fungsi ini memberikan passing props lists
export default function Welcome(){
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    return(
        <>
            <section className="home first">
                <div className="img-logo">
                    <img src="./logo.png" alt="logo" width='300'/>
                </div>
                <div className="home-content">
                    <div className="textp-1">Atur Keuanganmu</div>
                    <div className="textp-2">Make Your</div>
                    <div className="textp-3" style={{color: 'white'}}>Day Eazy<span></span></div>
                </div>
            </section>
            <img src="./waveatas.png" style={{width: '100%', marginTop: '-5px'}}/>
            <section className="max-width">
                <div className="title-fitur" style={{textAlign: 'center'}}>FITUR</div>
                <div className="list-fitur">
                    <div className="box" style={{backgroundColor: '#ACB5E9'}}>
                        <div className="nama-fitur">Pemasukan</div>
                        <div className="deskripsi-fitur">Hitung Pemasukan setiap Bulan</div>
                    </div>
                    <div className="box" style={{backgroundColor: '#F5ACA8'}}>
                        <div  className="nama-fitur">Pengeluaran</div>
                        <div className="deskripsi-fitur">Atur Pengeluaran setiap Bulan</div>
                    </div>
                    <div className="box" style={{backgroundColor: '#FBC3A5'}}>
                        <div  className="nama-fitur">Rencana</div>
                        <div className="deskripsi-fitur">Buat Rencana Tabungan Anda</div>
                    </div>
                    <div className="box" style={{backgroundColor: '#B5F0A6'}}>
                        <div  className="nama-fitur">Grafik</div>
                        <div className="deskripsi-fitur">Pantau Kondisi Keuangan Anda</div>
                    </div>
                </div>
            </section>
            <div style={{display: 'grid'}}><Link className="start" to='/Home' onClick={scrollToTop}>Start Now</Link></div>
            <img src="./wavebawah.png" alt="" width={'100%'}/>
        </>
    );
}