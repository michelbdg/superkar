import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {

    return (
        <>
            <nav>
                <p className="logo">
                    <Link to="/">Supakar</Link>
                </p>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
                    <li>Vehicules</li>
                    <li><NavLink to="/customizer" className={({ isActive }) => (isActive ? 'active' : '')}>Customizer</NavLink></li>
                    <li>Visite</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav

/**
 * Ce composant gère la navigation de l'application.
 * Il est affiché sur toutes les pages où il est importé.
 * Afin de gérer la navigation, nous utilisons les composants
 * Link et NavLink de react-router-dom. Ce composant permet de gérer
 * la navigation sans recharger la page.
 * 
 * Ce comportement est ce qu'on appelle le "single page application".
 * ou SPA. C'est un comportement très courant dans les applications
 * modernes. Il permet d'améliorer l'expérience utilisateur en
 * évitant les rechargements entiers de page.
 * 
 */