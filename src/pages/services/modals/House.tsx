import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../../../components/layout/navbar/Navbar";
import { Footer } from "../../../components/layout/footer/Footer";
import './../../projects/project-page/projectPage.css';
import './house.css'
import { WhatsappIcon } from "../../../components/common/whatsapp/Whatsapp";
import BlankLogo from './../../../assets/img/blank-logo.webp'


import React from "react";

export const HousePage = () => {

  return (
    <>
      <div
        className="project-page-container house-bg-container"
        style={{
          backgroundColor: '#f5f5f5',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Fondo con imagen y capa blanca solo a la derecha */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '10%',
            width: '600px',
            height: '100%',
            // background: `url(${BlankLogo}) no-repeat center right / 80% auto`,
            opacity: 0.1,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Navbar mainPage={false} />
          <div className="house-body">
            <h2>🏡 Casas Financiadas </h2>
            <p>Disfrutá tu <strong>casa propia</strong> con una construcción moderna, eficiente y ecológica. Modelos de <strong>2 o 3 habitaciones</strong>, con o sin galería, equipados con cocina, estar, comedor, baño y antebaño.</p>

            <h3>🔨 ¿Por qué elegirnos?</h3>
            <ul>
              <li>Construcción rápida y eficiente</li>
              <li>Aislación térmica de alta calidad</li>
              <li>Materiales sostenibles y resistentes a sismos</li>
              <li>Diseño moderno, funcional y adaptable</li>
            </ul>

            <h3>🧱 Detalles técnicos</h3>
            <ul>
              <li>Estructura wood frame + OSB con aislación térmica</li>
              <li>Revestimiento Revear en exterior</li>
              <li>Interiores de drywall y pintura látex</li>
              <li>Cielorrasos de durlock y techo con aislante</li>
              <li>Pisos de cerámico sobre platea de hormigón</li>
            </ul>

            <h3>🛠️ Mantenimiento fácil</h3>
            <p>Madera tratada, reparaciones rápidas, y estructura pensada para larga duración.</p>

            <h3>💰 Modalidades de financiación</h3>
            <ol>
              <li><strong>Hipoteca</strong> con Ley 24.441</li>
              <li><strong>Crédito prendario</strong> (vehículos)</li>
              <li><strong>Pagarés</strong> con recibo de sueldo y antigüedad</li>
            </ol>
            <p><em>Pagás una cuota fija por 60 meses y la casa es tuya. Comenzamos con 60 suscripciones.</em></p>
            <div className="offer">
              OFERTA ÚNICA
            </div>
            <div className="offer-request">
              ¿QUE ESPERAS PARA SOLICITAR LA TUYA?
            </div>
          </div>

          <WhatsappIcon />
          <Footer />
        </div>
      </div>
    </>
  )

}
