import { useState, useEffect } from 'react'

import './networks.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'
import { toast } from 'react-toastify'

import { db } from '../../services/firebaseConnection'

import {
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore'

export default function Networks() {
    const [facebook, setFacebook] = useState("")
    const [youtube, setYoutube] = useState("")
    const [instagram, setInstagram] = useState("")

    useEffect(() => {

        function loadLinks() {
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
                .then((snapshot) => {

                    if (snapshot.data() !== undefined) {
                        setFacebook(snapshot.data().facebook)
                        setYoutube(snapshot.data().youtube)
                        setInstagram(snapshot.data().instagram)
                    }
                })
        }
    })

    function handleSave(e) {
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            youtube: youtube
        })
            .then(() => {
                console.log('sucess')
                toast.success("Salvo com sucesso!")
            })
            .catch(() => {
                console.log('error')
                toast.error("Erro ao salvar!")
            })

    }

    return (
        <div className="admin-container">
            <Header />

            <h1 className="title-social">Suas redes sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do Facebook</label>
                <Input
                    placeholder="Digite a url do Facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />

                <label className='label'>Link do Youtube</label>
                <Input
                    placeholder="Digite a url do Youtube"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />

                <label className='label'>Link do Instagram</label>
                <Input
                    placeholder="Digite a url do Instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />

                <button type='submit' className='btn-register'>
                    Salvar links <MdAddLink size={24} color="#FFF"></MdAddLink>
                </button>
            </form>
        </div>
    )
}