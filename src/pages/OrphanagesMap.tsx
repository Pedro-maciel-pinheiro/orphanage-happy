import React from "react";
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapMarkerImg from '../images/Marker.svg';

import '../styles/pages/orphanages-map.css';
import mapIcon from "../utils/mapIcon";


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :</p>

                </header>
                <footer>

                    <strong>Distrito Federal</strong>
                    <strong>Brasilia</strong>

                </footer>
            </aside>

            <MapContainer center={[-15.8248183, -47.8839823,]} zoom={13}
                style={{ width: '100%', height: '100%' }}

            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker
                    icon={mapIcon}
                    position={[-16.0752823, -47.9727411,]}
                >
                    <Popup closeButton={false} minWidth={248} maxHeight={240}
                        className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={25} color="#fff" />
                        </Link>

                    </Popup>
                </Marker>
            </MapContainer>

            <Link to="/orphanages/create" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}


export default OrphanagesMap;