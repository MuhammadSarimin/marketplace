import { ButtonCard } from '../card';
import { ScanInput } from '../input';
import { StringTime } from '../time';

export default function SidebarItems() {

    const menu = [
        {img: "/icon/search-item.svg", text:"Cek Draft", href:""},
        {img: "/icon/cek-harga.svg", text:"Cek Harga Barang", href:""},
        {img: "/icon/list.svg", text:"List Product", href:""},
        {img: "/icon/edit.svg", text:"Update Stock", href:""},
        {img: "/icon/history.svg", text:"History Penjualan", href:""},
        {img: "/icon/laporan.svg", text:"Laporan", href:""}
    ]

    return (
    <div className="flex w-s-i">
        <div className="w-s-i-l drop-shadow-lg min-h-screen ${className}">
            <div className="p-5 border-b-2 border-slate-500">
                <h1 className="text-4xl font-bold">Chart MiniBQ</h1>
            </div>
            <div className="p-5">
                <div className="border-b-2 border-slate-500">
                    <div className="items flex justify-between mb-3">
                        <div className="">
                            <h1 className="font-semibold text-xl">Gula Pasir <span className="text-gray-500">x 1</span></h1>
                            <span className="text-gray-500">varian : 1kg</span>
                        </div>
                        <div className="w-72 font-semibold text-xl"><h1>Rp. 10.000</h1></div>
                    </div>
                    <div className="items flex justify-between mb-3">
                        <div className="">
                            <h1 className="font-semibold text-xl">Beras 5kg <span className="text-gray-500">x 1</span></h1>
                        </div>
                        <div className="w-72 font-semibold text-xl"><h1>Rp. 100.000</h1></div>
                    </div>
                    <div className="items flex justify-between mb-3">
                        <div className="">
                            <h1 className="font-semibold text-xl">Roti Aroma <span className="text-gray-500">x 1</span></h1>
                        </div>
                        <div className="w-72 font-semibold text-xl"><h1>Rp. 11.000</h1></div>
                    </div>
                </div>
                <div className="border-b-2 border-slate-500 pt-5">
                    <div className="items flex justify-between mb-3">
                        <div className="font-semibold text-xl"><h1>Discount</h1></div>
                        <div className="w-72 font-semibold text-xl"><h1>Rp. 0</h1></div>
                    </div>
                    <div className="items flex justify-between mb-3">
                        <div className="font-semibold text-xl"><h1>Tax</h1></div>
                        <div className="w-72 font-semibold text-xl"><h1>Rp. 0</h1></div>
                    </div>
                </div>
                <div className="border-b-2 border-slate-500 pt-8">
                    <div className="items flex justify-between mb-3">
                        <div className="font-bold text-2xl"><h1>Total</h1></div>
                        <div className="w-72 font-bold text-2xl"><h1>Rp. 10.000</h1></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-s-i-r bg-slate-100 min-h-screen">
            <div className="p-8">
                <div className="mt-24">
                    <StringTime className="text-lg font-semibold"></StringTime>
                </div>
                <ScanInput/>
                <div className="mt-8 grid grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-md flex justify-start items-center">
                        <img className="w-10 h-10" src="/icon/bayar.svg" alt="Scan Logo" />
                        <h2 className="font-medium text-xl pl-4 ">Bayar</h2>
                    </div>
                    <div className="bg-rose-600 p-6 col-end-5 rounded-md flex justify-start items-center text-white">
                        <img className="w-10 h-10" src="/icon/draft.svg" alt="Scan Logo" />
                        <h2 className="font-medium text-xl pl-4 ">Draft</h2>
                    </div>
                </div>
                <div className="mt-32 grid grid-cols-4 gap-4">
                    {menu.map( (m, i) => (
                        <ButtonCard key={i} img={m.img}>{m.text}</ButtonCard>
                    ) )}
                </div>
            </div>
        </div>
    </div>
    )
  }