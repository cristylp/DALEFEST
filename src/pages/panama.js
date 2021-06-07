import * as React from 'react'
import { Link } from 'gatsby'
import { Form, Button, Col } from 'react-bootstrap';

import Navigation from "../components/Navbar"
import "../pages/panama.css"

import hoja4 from '../images/plantaevento2.png'
import Hoja3 from "../images/hojas_home3.png"
import hoja2 from '../images/hoja_6.png'
import hoja1 from '../images/hojaevento.png'
import Fuerte from "../images/sanlorenzo.jpeg"
import Valle from "../images/valle.jpg"
import Sanblas from "../images/GunaYala.jpeg"
import Canal from "../images/Canal.jpeg"
import Canal2 from "../images/Canal2.jpeg"
import Canal3 from "../images/Canal3.jpeg"
import Casco from "../images/casco.jpeg"
import Pty from "../images/pty.jpg"
import Hike from "../images/hike.jpeg"
import Flag from "../images/cerroAncon.jpg"
import Bocas from "../images/bocas.jpeg"
import Venao from "../images/selina.jpg"
import Catalina from "../images/santaCatalina.jpg"
import Cambutal from "../images/cambutal.jpg"
import Golfo from "../images/chiriqui.jpeg"


const PanamaPage = () => {
    return (
        <>
          <Navigation/>
          <title>DALE - CONOCE PANAMA</title>

          <div className="container-page">
              <img src={Hoja3} alt="" class="hoja-pty1"/>
              <img src={hoja2} alt="" class="hoja-pty2"/>
              <img src={hoja1} alt="" class="hoja-pty3"/>
              <img src={Hoja3} alt="" class="hoja-pty4"/>
              <img src={hoja1} alt="" class="hoja-pty5"/>
              <img src={hoja4}alt="" class="hoja-pty6"/>

              <div className="title-box">
                <h1 className="page-title">DAY TRIPS DESDE CIUDAD DE PANAMÁ</h1>
                <p className="page-subtitle">Les recomendamos algunos de nuestros destinos favoritos en Panamá!!! Cualquier pregunta sobre más información y reservas:<br/> Escribenos via <span><a href="mailto: info@viajesgloriamendez.com" id="coral-link">email</a></span> o por <span><a href="https://wa.me/message/4LSTBISDIR3DN1"  target="_blank" id="coral-link">whatsapp</a></span></p>
              </div>

            {/*PORTOBELOOO*/}
              <div className="portobelo-box" id="pty-box">
                <h2 className="pty-title-place">VISITA HISTÓRICA A PORTOBELO & FUERTE SAN LORENZO</h2>

                <div className="info-box">

                  <div className="left" id="left-special">
                    <div className="text-special">
                      <p className="pty-text"><span id="coral-text">Duración:</span> Día completo (hasta 8 horas).</p>
                      <p className="pty-text"><span id="coral-text">Incluye:</span> Transporte privado, guía experto y almuerzo en restaurante auténtico local.</p>
                      <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa fresca y casual con zapatos cerrados (zapatillas.) Recomendamos llevar repelente de mosquitos.</p>
                    </div>
                    <img src={Fuerte} alt="" class="pty-pic" id="portobelo-pic"/>
                  </div>

                  <div className="right">
                  <p className="pty-text"><span id="textoCoral">Detalles:</span> Saldremos de su hotel y nos dirigiremos a Portobelo ubicado en la provincia de Colón a conocer un poco de la historia Española en Panamá. Durante los siglos XVII y XVIII, Portobelo era considerado una fortaleza española y un puerto caribeño. Productos tales como especias, oro y plata que venían de Perú y de otras colonias españolas cruzaban el istmo por el “Camino Real” hacia Portobelo. Aquí los tesoros esperaban para ser enviados en barco a España. Como los ricos guardaban sus tesoros en Portobelo, los piratas solían atacar el pueblo. El ataque más conocido fue el de Henry Morgan.</p>
                  <p className="pty-text">Visitaremos los fuertes de San Geronimo y Santiago de la Gloria y seguido a esto el Fuerte San Lorenzo, considerado sitio de Patrimonio Cultural por la UNESCO. Este último fue construido en la entrada del Río Chagres. Este bastión Español servía para fortificar y proteger la entrada del río al sendero de las Cruces que conducía hacia la ciudad de Panamá. Esta misma entrada se utilizó más adelante como puerto de entrada para los buscadores de oro que se dirigían hacia California durante la segunda mitad del siglo XIX. En esta aventura viajarás a través de una exuberante selva dentro del Parque Nacional San Lorenzo donde es posible tener la oportunidad de ver monos perezosos, coatíes, tucanes y otros animales salvajes. Terminaremos con un almuerzo (incluido) en un restaurante local.</p>
                  </div>
                </div>
              </div>

            {/*SANBLAS*/}
              <div className="sanblas-box" id="pty-box">
                <h2 className="pty-title-place">SAN BLAS POR EL DÍA</h2>

                <div className="info-box">

                  <div className="left" id="left-special">
                    <img src={Sanblas} alt="" class="pty-pic" id="sanblas-pic"/>
                  </div>

                  <div className="right">
                      <p className="pty-text"><span id="coral-text">Duración:</span> 8 horas (día completo)</p>
                      <p className="pty-text"><span id="coral-text">Incluye:</span> Traslado al hotel ida y vuelta, bebidas (cerveza, ron, sodas y agua), almuerzo (pollo, carne y pescado), guías bilingües, impuestos, entradas y cover. Animación, lanchas, snorkel, seguro contra accidentes, impuestos comarcales. Visita a atractivos históricos, hermosas Playa y bellos paisajes.
                      </p>
                      <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa de playa, muda de ropa, bloqueador solar, gorra y lentes.
                      </p>
                      <p className="pty-text">
                        Temprano en la mañana los buscaremos en el hotel para iniciar nuestro recorrido a uno de los destinos más paradisíacos de Panamá. Descubre este espectacular lugar y sus aguas cristalinas. En la visita a este espectacular archipiélago verás ríos, montañas, playas cristalinas, escenarios selváticos y mucho más. La Ruta terrestre a San Blas está llena de lindos paisajes.
                      </p>
                      <p className="pty-text">
                        Llegaremos al muelle de San Blas para abordar una lancha que nos llevará a visitar la comunidad Guna Yala en Isla Cangrejo. También efectuaremos un recorrido en lancha hasta Isla Aguja donde almorzaremos ricos platos típicos de la comunidad. Podrás realizar actividades de agua como nadar y snorkeling.
                      </p>
                  </div>
                </div>
              </div>

            {/*KAYAKS*/}
              <div className="kayak-box" id="pty-box">
                <h2 className="pty-title-place">TOUR DE KAYAKS POR EL CANAL DE PANAMÁ</h2>

                <div className="info-box">

                  <div className="left">
                    <p className="pty-text"><span id="coral-text">Duración:</span> 4-5 horas
                    </p>
                      <p className="pty-text"><span id="coral-text">Incluye:</span> Transporte privado, guía experto, entradas, snacks y agua embotellada.
                      </p>
                      <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa cómoda deportiva, zapatillas y repelente de mosquitos.
                      </p>
                      <p className="pty-text">
                        Después de una pequeña lección de remo, navegaremos
                        en kayak por los alrededores del
                        Canal de Panamá. Paseando por estas aguas tendrán
                        una nueva perspectiva del famoso e icónico Canal
                        de Panamá.
                      </p>
                      <p className="pty-text">
                        El guía los llevará a los mejores lugares de interés
                        mientras comparte datos sobre la flora y fauna del
                        área. Si observas atentamente podrías ver tucanes,
                        osos perezosos y otros animales en su ambiente
                        natural.
                      </p>
                  </div>

                  <div className="right" id="right-special">
                    <img src={Canal} alt="" class="pty-pic" id="kayak-pic"/>
                  </div>
                </div>
              </div>

            {/*CRUCE CANAL*/}
              <div className="canal-box" id="pty-box">
                <h2 className="pty-title-place">CRUCE PARCIAL DEL CANAL DE PANAMÁ</h2>

                <div className="info-box">

                  <div className="left" id="left-special">
                    <div className="text-special">
                      <p className="pty-text"><span id="coral-text">Duración:</span> 5-6 horas
                      </p>
                        <p className="pty-text"><span id="coral-text">Incluye:</span> Traslado compartido desde y hacia Flamenco Marina, desayuno continental, almuerzo, soda y agua, narradores bilingües, transporte desde Gamboa hasta Flamenco Marina.
                        </p>
                        <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa fresca y cómoda.
                        </p>
                    </div>
                      <img src={Canal2} alt="" class="pty-pic" id="canal-pic"/>
                  </div>

                  <div className="right" id="right-special">
                    <p className="pty-text">
                      Esta travesía nos llevará a cruzar (parcialmente) el Canal de Panamá. Saldremos desde Flamenco Marina ubicada en el Causeway de Amador. La hora será confirmada el día antes del tour por la Autoridad del Canal de Panamá. Desembarcaremos en Gamboa donde un bus nos transportará de regreso a Flamenco Marina (recorrido de aproximadamente 40 minutos.)
                    </p>
                    <img src={Canal3} alt="" class="pty-pic" id="canal-pic"/>
                  </div>
                </div>
              </div>

            {/*PTY TOUR*/}
              <div className="ptytour-box" id="pty-box">
                <h2 className="pty-title-place">TOUR COMPLETO DE LA CIUDAD DE PANAMÁ</h2>

                <div className="info-box">

                  <div className="left" id="left-special">
                    <div className="text-special">
                      <p className="pty-text"><span id="coral-text">Duración:</span> 7 horas
                      </p>
                        <p className="pty-text"><span id="coral-text">Incluye:</span> Recogida y traslado de regreso al hotel, guía acompañante en español, entradas al canal de Panamá y al Centro de Visitantes, transporte durante todo el día, visita guiada en español en el Casco Antiguo, Bebidas (jugos, gaseosas o agua).
                        </p>
                        <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa fresca y cómoda, gorra y lentes de sol.

                        </p>
                    </div>
                      <img src={Casco} alt="" class="pty-pic" id="pty-pic"/>
                      <img src={Pty} alt="" class="pty-pic" id="pty-pic"/>
                  </div>

                  <div className="right">
                    <p className="pty-text">
                     Pasaremos a buscarlos al hotel y los llevaremos hasta las esclusas de Miraflores, a veinte minutos de Ciudad de Panamá.
                    </p>
                    <p className="pty-text">
                      Las esclusas de Miraflores se encuentran del lado del océano Pacífico del canal de Panamá. En esta sección, los barcos suben (o bajan, dependiendo del sentido en que circulen) 16 metros. Visitaremos el Centro de Visitantes del canal y asistiremos al paso de un barco por Miraflores, un proceso que lleva media hora y que se repite decenas de veces cada día en las diversas esclusas del canal.
                    </p>
                    <p className="pty-text">
                      Dejaremos atrás esta maravilla de la ingeniería para acercarnos al casco antiguo de Ciudad de Panamá. Recorreremos sus calles coloniales mientras descubrimos la historia de este barrio, construido tras un terrible ataque pirata que destruyó el asentamiento anterior. El Casco Viejo de Panamá es el núcleo a partir del que se desarrolló la actual capital.
                    </p>
                    <p className="pty-text">
                      Dispondrás de dos horas de tiempo libre para comer a vuestro aire y pasear, disfrutando del ambiente histórico del barrio donde se encuentran aún hoy los principales edificios gubernamentales de Ciudad de Panamá.
                    </p>
                    <p className="pty-text">
                      Con las pilas recargadas, nos dirigiremos a la calzada de Amador, un paseo marítimo que conecta cuatro islas del Pacífico con Ciudad de Panamá. Caminando junto a los cafés y las tiendas visitaremos la marina deportiva, desde donde podréis disfrutar de unas vistas inigualables del skyline de la ciudad.
                    </p>
                    <p className="pty-text">
                      Nuestra última parada será el centro moderno de Ciudad de Panamá, donde se encuentran el distrito financiero y todos los rascacielos. Tendréis tiempo para recorrer esta zona, repleta de tiendas y parques, a vuestro aire.
                    </p>
                    <p className="pty-text">
                      El tour de Ciudad de Panamá al completo termina de regreso al hotel.
                    </p>
                  </div>
                </div>
              </div>

              {/*CAMINO DE CRUCES*/}
              <div className="senderismo-box" id="pty-box">
                <h2 className="pty-title-place">SENDERISMO EN CAMINO DE CRUCES</h2>

                <div className="info-box">

                  <div className="left" id="left-special">
                    <div className="text-special">
                      <p className="pty-text"><span id="coral-text">Duración:</span> Día completo (hasta 10 horas) Recogida en hotel a las 6:45am.
                      </p>
                        <p className="pty-text"><span id="coral-text">Incluye:</span> Transporte privado, conductor, guía experto, entradas, snacks, botella de agua y almuerzo.
                        </p>
                        <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa cómoda de senderismo (preferiblemente pantalón largo ). Recomendamos zapatos cómodos para caminar y llevar una muda de ropa.
                        </p>
                        <p className="pty-text"><span id="coral-text">Nota:</span> Se requieren buenas condiciones físicas y es necesario firmar un formulario de liberación de responsabilidad.
                        </p>
                    </div>
                      <img src={Hike} alt="" class="pty-pic" id="senderismo-pic"/>
                  </div>

                  <div className="right">
                    <p className="pty-text">
                      Temprano en la mañana saldremos de su hotel. Después de una manejada de aproximadamente 45 minutos llegaremos a Camino de Cruces. Este histórico camino de piedras fue construido por los españoles en los primeros años de la colonia para unir la Ciudad de Panamá Vieja ubicada en las orillas del Océano Pacífico con el Fuerte San Lorenzo. Caminaremos un tramo de 9.5km (aproximadamente 5 horas) que ha sido protegido dentro del Parque Nacional Soberanía.
                    </p>
                    <p className="pty-text">
                      El sendero, en su mayoría plano, los llevará a través de magníficas selvas tropicales repletas de vida silvestre exótica y monumentos históricos. Este camino sirvió mucho a los españoles por más de tres siglos. Muchos tesoros pasaron por aquí mientras hacían su travesía desde Perú y el Pacífico al Atlántico y luego a España. Esta mercancía de España y sus colonias fueron transportadas a Panamá que era el centro del comercio para centro y sur América. Más adelante durante la Fiebre del Oro en California (1849) utilizaron esta ruta de Panamá para llegar a California.
                    </p>
                    <p className="pty-text">
                      Para este recorrido deben estar preparados para terrenos irregulares resbaladizos llenos de lodo y con charcos. Entre los animales que podríamos ver están las iguanas verdes, osos perezosos, monos capuchinos de cara blanca, monos aulladores, tucanes, entre otros animales salvajes y mucha flora.  Luego de completar los 9.5km llegaremos a unas ruinas ubicadas en las orillas del río Chagres donde nuestro guía local Emberá nos estará esperando para un traslado en bote a la comunidad a almorzar. En la comunidad conocerás las tradiciones y costumbres emberá y luego regresarás al muelle de Gamboa para el traslado a la ciudad. Por la tarde regresaremos al hotel.
                    </p>
                  </div>
                </div>
              </div>

            {/*ANCON*/}
              <div className="ancon-box" id="pty-box">
                <h2 className="pty-title-place">VISITA AL PARQUE NATURAL METROPOLITANO, CERRO ANCÓN Y PUNTA CULEBRA</h2>

                <div className="info-box">

                  <div className="left" id="left-special">
                    <div className="text">
                      <p className="pty-text"><span id="coral-text">Duración:</span> 6 horas
                      </p>
                        <p className="pty-text"><span id="coral-text">Incluye:</span> Recogida en el hotel y traslado de regreso, transporte en autobús, guía en español, comida y bebida y entradas.
                        </p>
                        <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa cómoda deportiva, bloqueador solar y gorra.
                        </p>
                    </div>
                      <img src={Flag} alt="" class="pty-pic" id="ancon-pic"/>
                  </div>

                  <div className="right">
                    <p className="pty-text">
                     Conoce la riqueza natural de la capital panameña y sus animales endémicos con este tour por el Parque Natural Metropolitano, el cerro Ancón y Punta Culebra.  A las 8:00AM los recogeremos en su hotel para visitar estos 3 sitios ubicados en Ciudad de Panamá.
                    </p>
                    <p className="pty-text">
                      En primer lugar, nos dirigiremos al Parque Natural Metropolitano, donde conoceremos parte de las 256 hectáreas que lo conforman. Para ello, realizaremos una ruta de senderismo de una hora en busca de las ardillas, monos tití o guacamayos que habitan en este pulmón verde de la capital panameña.
                    </p>
                    <p className="pty-text">
                      Después, volveremos al autobús y subiremos al cerro Ancón, un montículo de casi 200 metros de altitud desde donde hay unas vistas excepcionales de Ciudad de Panamá. Muy atentos al cielo, es posible que veamos tucanes y gavilanes. ¿Sabías que más de tres millones de aves pasan por este lugar cada año?
                    </p>
                    <p className="pty-text">
                      A continuación, visitaremos el Centro de Exhibiciones Marinas Punta Culebra. Este lugar tiene como objetivo la promoción del conocimiento sobre la biodiversidad de los trópicos y en él tendremos la oportunidad de ver anfibios e incluso perezosos.
                    </p>
                    <p className="pty-text">
                      Para poner el broche de oro al tour, nos deleitaremos con un almuerzo tradicional de marisco y pescado en el restaurante Sirena. ¿Se os ocurre una forma mejor de terminar la mañana?
                    </p>
                    <p className="pty-text">
                      Finalmente, regresaremos a su hotel de Ciudad de Panamá a las 2:00PM.
                    </p>
                  </div>
                </div>
              </div>

               {/*VALLE*/}
              <div className="valle-box" id="pty-box">
                <h2 className="pty-title-place">DÍA COMPLETO EN EL VALLE DE ANTÓN</h2>

                <div className="info-box">

                  <div className="left" id="left-special">
                      <img src={Valle} alt="" class="pty-pic" id="valle-pic"/>
                  </div>

                  <div className="right">
                    <p className="pty-text">Este day trip se puede hacer desde Buenaventura. El Valle queda a 30 mins desde Buenaventura
                    </p>
                      <p className="pty-text"><span id="coral-text">Incluye:</span> Transporte privado, conductor, guía experto, entradas, snacks, botella de agua y almuerzo.
                      </p>
                      <p className="pty-text"><span id="coral-text">Qué llevar:</span> Ropa cómoda (puede ser pantalón largo o corto). Recomendamos zapatos cómodos para caminar y de ser posible chaqueta impermeable.
                      </p>
                    <p className="pty-text">
                     Los buscaremos en su hotel temprano y manejaremos hacia el “interior” por la famosa Carretera Interamericana que conecta desde Panamá hasta México.  En el camino disfrutarán de hermosas vistas. Está ubicado a 600 metros sobre el nivel del mar en el cráter de un volcán. “El Valle,” como le llaman los locales, es conocido por tener una temperatura más fresca que la ciudad, sus hermosos paisajes, por las múltiples aves que lo habitan y por estar rodeado de colinas y montañas.
                    </p>
                    <p className="pty-text">
                      En El Valle podrán disfrutar de distintas actividades como ver jeroglíficos de indígenas pre colombinos, aguas termales, tirolina, cascadas, mariposarios, cerros y vistosos senderos. Durante el día también visitaremos el mercado del pueblo donde podrán encontrar auténticas artesanías panameñas al a venta.
                    </p>
                  </div>
                </div>
              </div>

              <hr id="solid" />

              <div className="recomendaciones">
                <div className="left" id="left-special">
                  <h2 className="title-recom">
                    Tours desde Gamboa
                  </h2>
                  <li className="list-recom">
                    Teleférico y visita al mirador
                  </li>
                  <li className="list-recom">
                    Tour en lancha por el Gatún
                  </li>
                  <li className="list-recom">
                    Tour de pesca por el Gatún
                  </li>
                  <li className="list-recom">
                    Visita al mariposario
                  </li>
                  <li className="list-recom">
                    Visita al santuario de osos perezosos
                  </li>
                  <li className="list-recom">
                    Almuerzo en Don Caimán
                  </li>
                  <li className="list-recom">
                    Visita a comunidad Emberá
                  </li>
                  <li className="list-recom">
                    Senderismo
                  </li>
                  <li className="list-recom">
                    Tour de aves
                  </li>
                </div>
                <div className="right">
                  <h2 className="title-recom">
                    Recomendamos visitar desde la Ciudad:
                  </h2>
                  <p className="recom-p">
                    Se puede coordinar traslado privado también en Uber.
                  </p>
                  <li className="list-recom">
                    Biomuseo
                  </li>
                  <li className="list-recom">
                    Causeway de Amador
                  </li>
                  <li className="list-recom">
                    Museo de la Mola
                  </li>
                  <li className="list-recom">
                    Tour del Casco Viejo (caminando)
                  </li>
                  <li className="list-recom">
                    Centro de Visitantes del Canal de Panamá
                  </li>
                </div>
              </div>

              <hr id="solid" />

              <div className="weekend-trip-box">
                <h2 className="wknd-title">
                  WEEKEND TRIPS
                </h2>
                <div className="trips">

                  <div className="trip">
                    <img src={Bocas} alt=""/>
                    <div className="wknd-text">
                      <h3>
                        BOCAS DEL TORO
                      </h3>
                      <div className="list-wknd">
                        <li>
                          Azul Paradise
                        </li>
                        <li>
                          Sol Bungalows
                        </li>
                        <li>
                          Tropical Suites
                        </li>
                        <li>
                          Playa Tortuga
                        </li>
                        <li>
                          Selina Bocas del Toro
                        </li>
                        <li>
                          Hotel Swan Cay
                        </li>
                        <li>
                          Red Frog Beach Resort
                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="trip">
                    <img src={Valle} alt=""/>
                    <div className="wknd-text">
                      <h3>
                        VALLE DE ANTÓN
                      </h3>
                      <div className="list-wknd">
                        <li>
                          Hotel Los Mandarinos
                        </li>
                        <li>
                          Caracol Hotel
                        </li>
                        <li>
                          Hotel Crater Valley
                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="trip">
                    <img src={Venao} alt=""/>
                    <div className="wknd-text">
                      <h3>
                        PEDASI/PLAYA VENAO
                      </h3>
                      <div className="list-wknd">
                        <li>
                          Selina Playa Venao
                        </li>
                        <li>
                          Villa Marina Lodge
                        </li>
                        <li>
                          Playa Venao Hotel Resort
                        </li>
                        <li>
                          El Sitio Hotel
                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="trip">
                    <img src={Catalina} alt=""/>
                    <div className="wknd-text">
                      <h3>
                        SANTA CATALINA
                      </h3>
                      <div className="list-wknd">
                        <li>
                          Catalina’s Hideaway
                        </li>
                        <li>
                          Nativo Boutique Hotel
                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="trip">
                    <img src={Cambutal} alt=""/>
                    <div className="wknd-text">
                      <h3>
                        CAMBUTAL
                      </h3>
                      <div className="list-wknd">
                        <li>
                          Sansara Surf and Yoga Resort
                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="trip">
                    <img src={Golfo} alt=""/>
                    <div className="wknd-text">
                      <h3>
                        GOLFO DE CHIRIQUÍ
                      </h3>
                      <div className="list-wknd">
                        <li>
                          Seagull Cove Resort
                        </li>
                        <li>
                          Isla Palenque
                        </li>
                        <li>
                          Cala Mia Island Resort
                        </li>
                        <li>
                          Bocas del Mar
                        </li>
                        <li>
                          El Regalo Resort
                        </li>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <hr id="solid" />

              <div className="rest-container">
                <h2 className="rest-title">
                  RESTAURANTES
                </h2>
                <div className="rest-box">
                  <div className="left">
                    <div className="rest-type">
                      <h3>
                        CASUALES
                      </h3>
                      <div className="list-rests">
                        <li className="list-recom">
                          Tacos la Neta (mexicana)
                        </li>
                        <li className="list-recom">
                          Gentile (comida mediteránea e internacional)
                        </li>
                        <li className="list-recom">
                          Lucca Trattoria (comida italiana casual)
                        </li>
                        <li className="list-recom">
                          Ciao Ragazzi (comida italiana casual)
                        </li>
                        <li className="list-recom">
                          Magoo Fish Rcos (tacos de pescado)
                        </li>
                        <li className="list-recom">
                          Republicano (hamburguesas)
                        </li>
                        <li className="list-recom">
                          Beauty and the Butcher (comida americana)
                        </li>
                        <li className="list-recom">
                          Café Bilal (comida libanesa e internacional)
                        </li>
                        <li className="list-recom">
                          Amano (bar y comida casual)
                        </li>
                        <li className="list-recom">
                          Blue Moon Tap House (cervecería y comida internacional)
                        </li>
                        <li className="list-recom">
                          Casa Stizzoli (comida italiana)
                        </li>
                        <li className="list-recom">
                          Segundo Muelle (comida peruana)
                        </li>
                        <li className="list-recom">
                          Casa Stizzoli (comida italiana)
                        </li>
                        <li className="list-recom">
                          Segundo Muelle (comida peruana)
                        </li>
                        <li className="list-recom">
                          Londoners Restaurant (comida internacional)
                        </li>
                        <li className="list-recom">
                          Panos Kretan House (pizzas/ comida griega)
                        </li>
                        <li className="list-recom">
                          Slabón (hamburguesas)
                        </li>
                        <li className="list-recom">
                          Botánica Pizza
                        </li>
                        <li className="list-recom">
                          Esa Flaca Rica (hamburguesas)
                        </li>
                        <li className="list-recom">
                          Cantina del Tigre (ceviche/ mariscos)
                        </li>
                        <li className="list-recom">
                          Parrillada Jimmy's (griego)
                        </li>
                      </div>
                    </div>

                    <div className="rest-type">
                      <h3>
                        COMIDA PANAMEÑA
                      </h3>
                      <div className="list-rests">
                        <li className="list-recom">
                          Fonda lo que Hay (comida gourment panameña)
                        </li>
                        <li className="list-recom">
                          Salsipuedes (comida gourment panameña)
                        </li>
                        <li className="list-recom">
                          Tinajas (comida típica panameña con show folclórico)
                        </li>
                        <li className="list-recom">
                          El Trapiche (desayuno, almuerzo y cena autónomo panameño)
                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="right">
                    <div className="rest-type">
                      <h3>
                        MÁS UPSCALE
                      </h3>
                      <div className="list-rests">
                        <li className="list-recom">
                          Maito (comida internacional, Latam 50 Best Restaurants)
                        </li>
                        <li className="list-recom">
                          Makoto (comida fusión asiática)
                        </li>
                        <li className="list-recom">
                          Acha, La casa del Marisco (mariscos e internacional)
                        </li>
                        <li className="list-recom">
                          Los Años Locos (steak house e internacional)
                        </li>
                        <li className="list-recom">
                          Gauchos (steak house)
                        </li>
                        <li className="list-recom">
                          Meze (comida mediteránea/ griega)
                        </li>
                        <li className="list-recom">
                          Siete Mares (mariscos e internacional)
                        </li>
                        <li className="list-recom">
                          Isaki (japonesa y fusión)
                        </li>
                        <li className="list-recom">
                          Azahar (fusión internacional)
                        </li>
                        <li className="list-recom">
                          Azafrán (comida internacional)
                        </li>
                        <li className="list-recom">
                          Brutto (comida internacional)
                        </li>
                        <li className="list-recom">
                          Salvaje Rooftop (comida japonesa)
                        </li>
                        <li className="list-recom">
                          Vinoteca (comida italiana)
                        </li>
                      </div>
                    </div>

                    <div className="rest-type">
                      <h3>
                        BRUNCH/DESAYUNO
                      </h3>
                      <div className="list-rests">
                        <li className="list-recom">
                          Café Unido
                        </li>
                        <li className="list-recom">
                          LOCAL
                        </li>
                        <li className="list-recom">
                          Mika Bazar
                        </li>
                        <li className="list-recom">
                          Mentiritas Blancas
                        </li>
                        <li className="list-recom">
                          NY Bagel
                        </li>
                        <li className="list-recom">
                          Brew Coffee Company
                        </li>
                        <li className="list-recom">
                          Leto Coffee Brew Bar
                        </li>
                        <li className="list-recom">
                          Vitali
                        </li>
                        <li className="list-recom">
                          Dos Cucharas
                        </li>
                        <li className="list-recom">
                          Golden Unicorn (desayuno chino)
                        </li>
                        <li className="list-recom">
                          Palacio Lung Fung (desayuno chino)
                        </li>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
          </div>
          </>
           )
}

export default PanamaPage
