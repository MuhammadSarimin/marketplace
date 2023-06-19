// import Header from '../../../components/header'

import { useState } from "react";
import Aside from "../../../components/aside";
import Main from "../../../components/main";
import { Nav } from "../../../components/navbar";
import { SearchType, Table, TableSearch } from "../../../components/table"

export default function Products() {

  const [filterBy, setFilterBy] = useState("name")
  const data = {
    header : ["No", "Product", "Varian", "Stock", "Action"],
    data : [
        {
            product_id:1, product: "Baju", varians: [
                {varian_id: 1, varian_name: "Batik", stock:"90"},
                {varian_id: 2, varian_name: "Batik", stock:"90"},
                {varian_id: 3, varian_name: "Batik", stock:"90"},
            ]
        },
        {
            product_id:2, product: "Celana", varians: [
                {varian_id: 4, varian_name: "Batik", stock:"90"},
                {varian_id: 5, varian_name: "Batik", stock:"90"},
                {varian_id: 6, varian_name: "Batik", stock:"90"},
            ]
        }
    ]
}

    return (
      <div className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
        <div className="absolute w-full bg-blue-500 min-h-75"></div>
        
        <Aside menu="Products"/>

        <Main>
          <Nav>Products</Nav>

          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6 className="dark:text-white">Data Products</h6>
                    <div className="flex justify-between">
                      <div className="w-5/12"> <SearchType nameType={filterBy} setNameType={setFilterBy}/> </div>
                      <TableSearch/>
                    </div>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-6 overflow-x-auto">
                      <Table data={data}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Main>
      </div>
    )
  }
  