import NavBars from '../NavBars'
import Header from './Header'
import './Admin.css'
import PartnersTable from './PartnersTable'
import Modals from '../Modals'
import { useModal } from '../useModal'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import getData from '../../getData'
import ModalAddPartner from './AdminModals/ModalAddPartner'
import ModalDeletePartner from './AdminModals/ModalDeletePartner'
import ModalEditPartner from './AdminModals/ModalEditPartner'

function Partners() {
    const [isAddPartner, openAddPartner, closeAddPartner] = useModal(false)
    const [isEditPartner, openEditPartner, closeEditPartner] = useModal(false)
    const [isOpenDeletePartner, openDeletePartner, closeDeletePartner] =
        useModal(false)
    const [idModal, setIdModal] = useState('')
    const [inputText, setInputText] = useState('')
    const [partners, setPartners] = useState(useLoaderData())
    const [filteredPartners, setFilteredPartners] = useState(partners)
    // change input values
    const [addPartners, setAddPartners] = useState({
        email: '',
        password: '',
        role: 'admin',
    })

    console.log(addPartners)
    const filterByEmail = partners.filter((element) => {
        return (
            element.email.toLowerCase().includes(inputText) ||
            element.role.toLowerCase().includes(inputText)
        )
    })

    useEffect(() => {
        setFilteredPartners(inputText !== '' ? filterByEmail : partners)
    }, [inputText])

    const urlUsers = 'https://6372d80a348e947299fdd17b.mockapi.io/users'

    function deletePartner() {
        axios
            .delete(
                `https://6372d80a348e947299fdd17b.mockapi.io/users/${idModal}`
            )
            .then(async () => {
                const dataUsers = await getData(urlUsers)
                setFilteredPartners(dataUsers)
                closeDeletePartner()
                return setPartners(dataUsers)
            })
    }

    function putPartner(event) {
        event.preventDefault()
        axios
            .put(
                `https://6372d80a348e947299fdd17b.mockapi.io/users/${idModal}`,
                addPartners
            )
            .then(async (resp) => {
                const dataUsers = await getData(urlUsers)
                setFilteredPartners(dataUsers)
                closeEditPartner()
                return setPartners(dataUsers)
            })
    }

    function postPartner(event) {
        event.preventDefault()
        console.log(partners)
        axios.post(urlUsers, addPartners).then((resp) => {
            setAddPartners({
                email: '',
                password: '',
                role: 'admin',
            })
            setFilteredPartners([...partners, resp.data])
            closeAddPartner()
            console.log(resp.data)
            return setPartners([...partners, resp.data])
        })
    }
    return (
        <>
            <NavBars />
            {/* <Modals
                isAddPartner={isAddPartner}
                closeAddPartner={closeAddPartner}
                isOpenDeletePartner={isOpenDeletePartner}
                closeDeletePartner={closeDeletePartner}
                deletePartner={deletePartner}
                addPartners={addPartners}
                setAddPartners={setAddPartners}
                postPartner={postPartner}
                putPartner={putPartner}
                isEditPartner={isEditPartner}
                closeEditPartner={closeEditPartner}
            /> */}

            <ModalAddPartner isOpen={isAddPartner}
                close={closeAddPartner} addPartners={addPartners}
                setAddPartners={setAddPartners}  postPartner={postPartner}/>
            <ModalDeletePartner isOpen={isOpenDeletePartner} close={closeDeletePartner}
                deletePartner={deletePartner}/>
            <ModalEditPartner isOpen={isEditPartner}
                close={closeEditPartner} addPartners={addPartners}
                setAddPartners={setAddPartners} putPartner={putPartner}/>

            <div className="partners-layout">
                <Header inputText={inputText} setInputText={setInputText} />
                <PartnersTable
                    openAddPartner={openAddPartner}
                    openDeletePartner={openDeletePartner}
                    idModal={idModal}
                    setIdModal={setIdModal}
                    partners={
                        filteredPartners !== partners
                            ? filteredPartners
                            : partners
                    }
                    openEditPartner={openEditPartner}
                    setAddPartners={setAddPartners}
                />
            </div>
        </>
    )
}

export default Partners
