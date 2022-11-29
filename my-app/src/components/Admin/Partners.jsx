import NavBars from '../NavBars'
import Header from './Header'
import './Admin.css'
import PartnersTable from './PartnersTable'
import Modals from '../Modals'
import { useModal } from '../useModal'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios';


function Partners() {
    const [isAddPartner, openAddPartner, closeAddPartner] = useModal(false)
    const [isOpenDeletePartner, openDeletePartner, closeDeletePartner] = useModal(false)
    const [idModal, setIdModal] =useState('')
    const [partners, setPartners] = useState(useLoaderData())

    function deletePartner (){
        axios.delete(`https://6372d80a348e947299fdd17b.mockapi.io/users/${idModal}`)  
          .then(() =>{
            return axios
            .get('https://6372d80a348e947299fdd17b.mockapi.io/users')
            .then((response) => {
                setPartners(response.data)
            })
          })
        };

    return (
        <>
            <NavBars />
            <Modals
                isAddPartner={isAddPartner}
                closeAddPartner={closeAddPartner}
                isOpenDeletePartner={isOpenDeletePartner}
                closeDeletePartner={closeDeletePartner}
                deletePartner={deletePartner}
            />
            <div className="partners-layout">
                <Header />
                <PartnersTable
                    openAddPartner={openAddPartner}
                    openDeletePartner={openDeletePartner}
                    idModal={idModal}
                    setIdModal={setIdModal}
                    partners = {partners}
                />
            </div>
        </>
    )
}

export default Partners
