import { useEffect, useState } from "react";
import Button from "../../components/button";
import { Card } from "../../components/card";
import { Scan } from '../../components/input';
import PlusIcon from "../../assets/icon/plus";
import MinIcon from "../../assets/icon/min";
import { FormatRupiah } from "../../utils/format";

const mockList = [
  {
    id : 1,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 100
  },
  {
    id : 2,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 11000000
  },
  {
    id : 3,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 120
  },
  {
    id : 4,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 130
  },
  {
    id : 5,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 140
  },
  {
    id : 6,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 150
  },
  {
    id : 7,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 160
  },
  {
    id : 8,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 170
  },
  {
    id : 9,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 180
  },
  {
    id : 10,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 190
  },
  {
    id : 11,
    product : "Gula Pasir",
    varian : "varian 1 Kg",
    quantity : 1,
    amount: 111
  }
];

export default function Home() {

    const [scanList, setScanList] = useState([]);
    const [subQuantity, setSubQuantity] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    const hitung = () => {
      const sum = scanList.reduce((current, obj) => {
        return current + obj.amount * obj.quantity;
      }, 0);
      setTotal(sum)
      setSubQuantity(sum)
    }

    useEffect(() => {
      setScanList(mockList);
      hitung()
    },[])

    const addQuantity = (id) => {
      const newScanList = scanList.slice()
      const index = scanList.findIndex(list => list.id === id);
      if (index !== -1) {
        newScanList[index].quantity++
        setScanList(newScanList)
        hitung()
      } else {
        alert("something is wrong !!")
      }
    }

    const reduceQuantity = (id) => {
      const newScanList = scanList.slice()
      const index = scanList.findIndex(list => list.id === id);
      if (index !== -1) {
        newScanList[index].quantity--
        setScanList(newScanList)
        hitung()
      } else {
        alert("something is wrong !!")
      }
    }

    const handleOnChange = (id, val) => {
      const newScanList = scanList.slice()
      const index = scanList.findIndex(list => list.id === id);
      if (index !== -1) {
        newScanList[index].quantity = val
        setScanList(newScanList)
        hitung()
      } else {
        alert("something is wrong !!")
      }
    }

    return (
      <div className="grid md:flex items-center bg-blue-500 min-h-screen">
        <div className="w-full md:w-2/5 h-screen md:h-auto md:order-2 p-8">
          <div className="grid bg-white rounded-lg">
              <div className="h-32 p-6">
                <h1 className="font-semibold text-2xl">Scan Product</h1>
                <Scan className="mt-4"/>
              </div>
              <div className="w-full p-6 grid grid-cols-4 gap-4 mt-4">
                  <Card key={0} className="pt-3" type="button" img="/icon/search-item.svg">Cek Draft</Card>
                  <Card key={1} className="pt-3" type="button" img="/icon/cek-harga.svg">Cek Harga</Card>
                  <Card key={2} className="pt-8" type="link" href="#" img="/icon/list.svg">List Product</Card>
                  <Card key={3} className="pt-8" type="link" href="#" img="/icon/edit.svg">Update Stock</Card>
                  <Card key={4} className="pt-8" type="link" href="#" img="/icon/history.svg">Penjualan</Card>
                  <Card key={5} className="pt-8" type="link" href="#" img="/icon/laporan.svg">Report</Card>
              </div>
          </div>
          <div className="bg-white rounded-lg mt-8">
            <div className="h-fit p-6">

              <div className="section-price">
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">Sub quantity</p>
                  <p className="text-lg font-semibold">{FormatRupiah(subQuantity)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">Discount</p>
                  <p className="text-lg font-semibold">{FormatRupiah(discount)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">Tax</p>
                  <p className="text-lg font-semibold">{FormatRupiah(tax)}</p>
                </div>
                <hr className="mt-5 mb-5"/>
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">Total</p>
                  <p className="text-lg font-semibold">{FormatRupiah(total)}</p>
                </div>
              </div>

              <Button className="bg-slate-100 w-full hover:bg-blue-600 text-slate-300 text-xl font-semibold py-2 px-4 rounded mt-5 mb-5" type="button">Save to Draft</Button>
              <Button className="bg-blue-500 w-full hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded" type="button">Payment</Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 pt-8 pl-8 pb-8">
          <div className="bg-white rounded-lg min-h-[793px] h-fit p-8">
            {
              scanList.map( (data) => {
                return <ListScan key={data.id} data={data} addQuantity={addQuantity} reduceQuantity={reduceQuantity} handleOnChange={handleOnChange} />
              })
            }
          </div>
        </div>
    </div>
    )
    
}

const ListScan = (props) => {
  
  const onChange = (e) => {
    if (e.target.validity.valid)
    props.handleOnChange(props.data.id, e.target.value)
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-80 min-w-fit">
          <p className="font-semibold text-md">{props.data.product}</p>
          <p>{props.data.varian}</p>
        </div>
        <div className="flex">
          <Button className="rounded-full bg-blue-500 w-6 text-white" onClick={() => props.reduceQuantity(props.data.id)}>
            <MinIcon className="stroke-2 w-full"/>
          </Button>
          <input className="w-24 min-w-10 text-center outline-none" pattern="[0-9]*" onChange={onChange} value={props.data.quantity}/>
          <Button className="rounded-full bg-blue-500 w-6 text-white" onClick={() => props.addQuantity(props.data.id)}>
            <PlusIcon className="stroke-2 w-full"/>
          </Button>
        </div>
        <div className="font-semibold w-80 min-w-fit text-right"> {FormatRupiah(props.data.amount * props.data.quantity)}</div>
      </div>

      <hr className="my-2"/>
    </>
  );
}