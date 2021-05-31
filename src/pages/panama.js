import * as React from 'react'
import { Link } from 'gatsby'
import { Form, Button, Col } from 'react-bootstrap';

import Navigation from "../components/Navbar"
import "../pages/panama.css"

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
            <Navigation />
            <title>DALE - CONOCE PANAMÁ</title>
            <div className="paragraph">
                <h2 className="titleText">DAY TRIPS DESDE CIUDAD DE PANAMÁ</h2>
                <p id="subtitle">VISITA HISTÓRICA A PORTOBELO & FUERTE SAN LORENZO</p>
            </div>

            <div className="fullWidth">
                <div className="paragraphRight2">
                    <p className="basicInfo"><span id="textoCoral">Duración:</span> Día completo (hasta 8 horas). <br /><span id="textoCoral">Incluye:</span> Transporte privado, guía experto y almuerzo en restaurante auténtico local.<br /><span id="textoCoral">Qué llevar:</span> Ropa fresca y casual con zapatos cerrados (zapatillas.) Recomendamos llevar repelente de mosquitos.</p>
                    <img className="daytripPic" src={Fuerte} alt="Vista aérea del Fuerte de San Lorenzo" />
                </div>

                <div className="paragraphLeft2">
                    <p className="basicInfoRight"><span id="textoCoral">Detalles:</span> Saldremos de su hotel y nos dirigiremos a Portobelo ubicado en la provincia de Colón a conocer un poco de la historia Española en Panamá. Durante los siglos XVII y XVIII, Portobelo era considerado una fortaleza española y un puerto caribeño. Productos tales como especias, oro y plata que venían de Perú y de otras colonias españolas cruzaban el istmo por el “Camino Real” hacia Portobelo. Aquí los tesoros esperaban para ser enviados en barco a España. Como los ricos guardaban sus tesoros en Portobelo, los piratas solían atacar el pueblo. El ataque más conocido fue el de Henry Morgan.</p>
                    <p className="basicInfoRight">Visitaremos los fuertes de San Geronimo y Santiago de la Gloria y seguido a esto el Fuerte San Lorenzo, considerado sitio de Patrimonio Cultural por la UNESCO. Este último fue construido en la entrada del Río Chagres. Este bastión Español servía para fortificar y proteger la entrada del río al sendero de las Cruces que conducía hacia la ciudad de Panamá. Esta misma entrada se utilizó más adelante como puerto de entrada para los buscadores de oro que se dirigían hacia California durante la segunda mitad del siglo XIX. En esta aventura viajarás a través de una exuberante selva dentro del Parque Nacional San Lorenzo donde es posible tener la oportunidad de ver monos perezosos, coatíes, tucanes y otros animales salvajes. Terminaremos con un almuerzo (incluido) en un restaurante local.</p>
                </div>
            </div>

            <div className="paragraph">
                <p id="subtitle2">DÍA COMPLETO EN EL VALLE DE ANTÓN</p>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight2">
                    <p className="basicInfo"><span id="textoCoral">Duración:</span> Día completo (hasta 8 horas). Recogida en hotel a las 8AM.<br /><span id="textoCoral">Incluye:</span> Transporte privado, conductor, guía experto, entradas, snacks, botella de agua y almuerzo.<br /><span id="textoCoral">Qué llevar:</span> Ropa cómoda (puede ser pantalón largo o corto). Recomendamos zapatos cómodos para caminar y de ser posible chaqueta impermeable.</p>
                    <img className="daytripPic" src={Valle} alt="Vista aérea de Montaña" />
                </div>
                <div className="paragraphLeft2">
                    <p className="basicInfoRight"><span id="textoCoral">Detalles:</span> Los buscaremos en su hotel temprano y manejaremos hacia el “interior” por la famosa Carretera Interamericana que conecta desde Panamá hasta México. En el camino disfrutarán de hermosas vistas. Después de aproximadamente 2 horas de camino, llegaremos el pintoresco pueblo del Valle de Antón. Está ubicado a 600 metros sobre el nivel del mar en el cráter de un volcán. “El Valle,” como le llaman los locales, es conocido por tener una temperatura más fresca que la ciudad, sus hermosos paisajes, por las múltiples aves que lo habitan y por estar rodeado de colinas y montañas. En El Valle podrán disfrutar de distintas actividades como ver jeroglíficos de indígenas pre colombinos, aguas termales, tirolina, cascadas, mariposarios, cerros y vistosos senderos. Durante el día también visitaremos el mercado del pueblo donde podrán encontrar auténticas artesanías panameñas al a venta.</p>
                </div>
            </div>

            
            <div className="paragraph">
                <p id="subtitle2">SAN BLAS POR EL DÍA</p>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight2">
                    <img className="daytripPic" src={Sanblas} alt="Vista aérea de isla en San Blas" />
                </div>
                <div className="paragraphLeft2">
                    <p className="basicInfoRight"><span id="textoCoral">Duración:</span> Día completo (8 horas).<br /><span id="textoCoral">Incluye:</span> Traslado al hotel ida y vuelta, bebidas (cerveza, ron, sodas y agua), almuerzo (pollo, carne y pescado), guías bilingües, impuestos, entradas y cover. Animación, lanchas, snorkel, seguro contra accidentes, impuestos comarcales. Visita a atractivos históricos, hermosas Playa y bellos paisajes.<br /><span id="textoCoral">Qué llevar:</span> Ropa de playa, muda de ropa, bloqueador solar, gorra y lentes.</p>
                    <p className="basicInfoRight"><span id="textoCoral">Detalles:</span> Temprano en la mañana los buscaremos en el hotel para iniciar nuestro recorrido a uno de los destinos más paradisíacos de Panamá. Descubre este espectacular lugar y sus aguas cristalinas. En la visita a este espectacular archipiélago verás ríos, montañas, playas cristalinas, escenarios selváticos y mucho más. La Ruta terrestre a San Blas está llena de lindos paisajes.</p>
                    <p className="basicInfoRight">Llegaremos al muelle de San Blas para abordar una lancha que nos llevará a visitar la comunidad Guna Yala en Isla Cangrejo. También efectuaremos un recorrido en lancha hasta Isla Aguja donde almorzaremos ricos platos típicos de la comunidad. Podrás realizar actividades de agua como nadar y snorkeling.</p>
                </div>
            </div>


            <div className="paragraph">
                <p id="subtitle2">TOUR DE KAYAKS POR EL CANAL DE PANAMÁ</p>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight2">
                    <p className="basicInfoRight"><span id="textoCoral">Duración:</span> 4-5 horas.<br /><span id="textoCoral">Incluye:</span> Transporte privado, guía experto, entradas, snacks y agua embotellada.<br /><span id="textoCoral">Qué llevar:</span> Ropa cómoda deportiva, zapatillas y repelente de mosquitos.</p>
                    <p className="basicInfoRight"><span id="textoCoral">Detalles:</span> Después de una pequeña lección de remo, navegaremos en kayak por los alrededores del
                    Canal de Panamá. Paseando por estas aguas tendrán una nueva perspectiva del famoso e icónico Canal de Panamá.</p>
                    <p className="basicInfoRight">El guía los llevará a los mejores lugares de interés mientras comparte datos sobre la flora y fauna del área. Si observas atentamente podrías ver tucanes, osos perezosos y otros animales en su ambiente natural.</p>
                </div>
                <div className="paragraphLeft2">
                    <img className="daytripPic" src={Canal} alt="Vista aérea del Canal de Panamá" />
                </div>
            </div>


            <div className="paragraph">
                <p id="subtitle2">CRUCE PARCIAL DEL CANAL DE PANAMÁ</p>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight2">
                    <p className="basicInfo2"><span id="textoCoral">Duración:</span> 5-6 horas.<br /><span id="textoCoral">Incluye:</span> Traslado compartido desde y hacia Flamenco Marina, desayuno continental, almuerzo, soda y agua, narradores bilingües, transporte desde Gamboa hasta Flamenco Marina.<br /><span id="textoCoral">Qué llevar:</span> Ropa fresca y cómoda.</p>
                    <img className="daytripPic" src={Canal2} alt="Vista aérea del Canal de Panamá" />
                </div>
                <div className="paragraphLeft2">
                    <p className="basicInfoRight2"><span id="textoCoral">Detalles:</span> Esta travesía nos llevará a cruzar (parcialmente) el Canal de Panamá. Saldremos desde Flamenco Marina ubicada en el Causeway de Amador. La hora será confirmada el día antes del tour por la Autoridad del Canal de Panamá. Desembarcaremos en Gamboa donde un bus nos transportará de regreso a Flamenco Marina (recorrido de aproximadamente 40 minutos.)</p>
                    <img className="daytripPic2" src={Canal3} alt="Vista aérea del Canal de Panamá" />
                </div>
            </div>


            <div className="paragraph">
                <p id="subtitle2">TOUR COMPLETO DE CIUDAD DE PANAMÁ</p>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight2">
                    <p className="basicInfo"><span id="textoCoral">Duración:</span> 7 horas.<br /><span id="textoCoral">Incluye:</span> Recogida y traslado de regreso al hotel, guía acompañante en español, entradas al canal de Panamá y al Centro de Visitantes, transporte durante todo el día, visita guiada en español en el Casco Antiguo, Bebidas (jugos, gaseosas o agua).<br /><span id="textoCoral">Qué llevar:</span> Ropa fresca y cómoda, gorra y lentes de sol.</p>
                    <img className="daytripPic" src={Casco} alt="Vista aérea del Casco Viejo" />
                    <img className="daytripPic" src={Pty} alt="Vista aérea de noche, Ciudad de Panama" />
                </div>
                <div className="paragraphLeft2">
                    <p className="basicInfoRight"><span id="textoCoral">Detalles:</span> Pasaremos a buscarlos al hotel y los llevaremos hasta las esclusas de Miraflores, a veinte minutos de Ciudad de Panamá.</p>
                    <p className="basicInfoRight">Las esclusas de Miraflores se encuentran del lado del océano Pacífico del canal de Panamá. En esta sección, los barcos suben (o bajan, dependiendo del sentido en que circulen) 16 metros. Visitaremos el Centro de Visitantes del canal y asistiremos al paso de un barco por Miraflores, un proceso que lleva media hora y que se repite decenas de veces cada día en las diversas esclusas del canal.</p>
                    <p className="basicInfoRight">Dejaremos atrás esta maravilla de la ingeniería para acercarnos al casco antiguo de Ciudad de Panamá. Recorreremos sus calles coloniales mientras descubrimos la historia de este barrio, construido tras un terrible ataque pirata que destruyó el asentamiento anterior. El Casco Viejo de Panamá es el núcleo a partir del que se desarrolló la actual capital.</p>
                    <p className="basicInfoRight">Dispondrás de dos horas de tiempo libre para comer a vuestro aire y pasear, disfrutando del ambiente histórico del barrio donde se encuentran aún hoy los principales edificios gubernamentales de Ciudad de Panamá.</p>
                    <p className="basicInfoRight">Con las pilas recargadas, nos dirigiremos a la calzada de Amador, un paseo marítimo que conecta cuatro islas del Pacífico con Ciudad de Panamá. Caminando junto a los cafés y las tiendas visitaremos la marina deportiva, desde donde podréis disfrutar de unas vistas inigualables del skyline de la ciudad.</p>
                    <p className="basicInfoRight">Nuestra última parada será el centro moderno de Ciudad de Panamá, donde se encuentran el distrito financiero y todos los rascacielos. Tendréis tiempo para recorrer esta zona, repleta de tiendas y parques, a vuestro aire.</p>
                    <p className="basicInfoRight">El tour de Ciudad de Panamá al completo termina de regreso al hotel.</p>
                </div>
            </div>


            <div className="paragraph">
                <p id="subtitle2">SENDERISMO EN CAMINO DE CRUCES</p>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight2">
                    <p className="basicInfo"><span id="textoCoral">Duración:</span> Día completo (hasta 10 horas) Recogida en hotel a las 6:45am.<br /><span id="textoCoral">Incluye:</span> Transporte privado, conductor, guía experto, entradas, snacks, botella de agua y almuerzo.<br /><span id="textoCoral">Qué llevar:</span> Ropa cómoda de senderismo (preferiblemente pantalón largo ). Recomendamos zapatos cómodos para caminar y llevar una muda de ropa.<br /><span id="textoCoral">Nota:</span> Se requieren buenas condiciones físicas y es necesario firmar un formulario de liberación de responsabilidad.</p>
                    <img className="daytripPic" src={Hike} alt="Vista de senderismo dentro del parque Camino de Cruces" />
                </div>
                <div className="paragraphLeft2">
                    <p className="basicInfoRight"><span id="textoCoral">Detalles:</span> Temprano en la mañana saldremos de su hotel. Después de una manejada de aproximadamente 45 minutos llegaremos a Camino de Cruces. Este histórico camino de piedras fue construido por los españoles en los primeros años de la colonia para unir la Ciudad de Panamá Vieja ubicada en las orillas del Océano Pacífico con el Fuerte San Lorenzo. Caminaremos un tramo de 9.5km (aproximadamente 5 horas) que ha sido protegido dentro del Parque Nacional Soberanía. </p>
                    <p className="basicInfoRight">El sendero, en su mayoría plano, los llevará a través de magníficas selvas tropicales repletas de vida silvestre exótica y monumentos históricos. Este camino sirvió mucho a los españoles por más de tres siglos. Muchos tesoros pasaron por aquí mientras hacían su travesía desde Perú y el Pacífico al Atlántico y luego a España. Esta mercancía de España y sus colonias fueron transportadas a Panamá que era el centro del comercio para centro y sur América. Más adelante durante la Fiebre del Oro en California (1849) utilizaron esta ruta de Panamá para llegar a California. </p>
                    <p className="basicInfoRight">Para este recorrido deben estar preparados para terrenos irregulares resbaladizos llenos de lodo y con charcos. Entre los animales que podríamos ver están las iguanas verdes, osos perezosos, monos capuchinos de cara blanca, monos aulladores, tucanes, entre otros animales salvajes y mucha flora.  Luego de completar los 9.5km llegaremos a unas ruinas ubicadas en las orillas del río Chagres donde nuestro guía local Emberá nos estará esperando para un traslado en bote a la comunidad a almorzar. En la comunidad conocerás las tradiciones y costumbres emberá y luego regresarás al muelle de Gamboa para el traslado a la ciudad. Por la tarde regresaremos al hotel.</p>
                </div>
            </div>


            <div className="paragraph">
                <p id="subtitle2">VISITA A PARQUE NATURAL METROPOLITANO, CERRO ANCÓN Y PUNTA CULEBRA</p>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight2">
                    <p className="basicInfo"><span id="textoCoral">Duración:</span> 6 horas.<br /><span id="textoCoral">Incluye:</span> Recogida en el hotel y traslado de regreso, transporte en autobús, guía en español, comida y bebida y entradas.<br /><span id="textoCoral">Qué llevar:</span> Ropa cómoda deportiva, bloqueador solar y gorra.</p>
                    <img className="daytripPic" src={Flag} alt="Vista del Cerro Ancon" />
                </div>
                <div className="paragraphLeft2">
                    <p className="basicInfoRight"><span id="textoCoral">Detalles:</span> Conoce la riqueza natural de la capital panameña y sus animales endémicos con este tour por el Parque Natural Metropolitano, el cerro Ancón y Punta Culebra.  A las 8:00AM los recogeremos en su hotel para visitar estos 3 sitios ubicados en Ciudad de Panamá.</p>
                    <p className="basicInfoRight">En primer lugar, nos dirigiremos al Parque Natural Metropolitano, donde conoceremos parte de las 256 hectáreas que lo conforman. Para ello, realizaremos una ruta de senderismo de una hora en busca de las ardillas, monos tití o guacamayos que habitan en este pulmón verde de la capital panameña.</p>
                    <p className="basicInfoRight">Después, volveremos al autobús y subiremos al cerro Ancón, un montículo de casi 200 metros de altitud desde donde hay unas vistas excepcionales de Ciudad de Panamá. Muy atentos al cielo, es posible que veamos tucanes y gavilanes. ¿Sabías que más de tres millones de aves pasan por este lugar cada año?</p>
                    <p className="basicInfoRight">A continuación, visitaremos el Centro de Exhibiciones Marinas Punta Culebra. Este lugar tiene como objetivo la promoción del conocimiento sobre la biodiversidad de los trópicos y en él tendremos la oportunidad de ver anfibios e incluso perezosos.</p>
                    <p className="basicInfoRight">Para poner el broche de oro al tour, nos deleitaremos con un almuerzo tradicional de marisco y pescado en el restaurante Sirena. ¿Se os ocurre una forma mejor de terminar la mañana?</p>
                    <p className="basicInfoRight">Finalmente, regresaremos a su hotel de Ciudad de Panamá a las 2:00PM.</p>
                </div>
            </div>


            <hr class="solid" />
            
            <div className="fullWidth2">
                <div className="paragraphRight2">
                    <h2 className="locationText">TOURS DESDE GAMBOA</h2>
                    <ul className="basicInfo">
                        <li>Teleférico y visita al mirador</li>
                        <li>Tour en lancha por el Gatún</li>
                        <li>Tour de pesca por el Gatún</li>
                        <li>Visita al mariposario</li>
                        <li>Visita al santuario de osos perezosos</li>
                        <li>Almuerzo en Don Caimán</li>
                        <li>Visita a comunidad Emberá</li>
                        <li>Senderismo</li>
                        <li>Tour de aves</li>
                    </ul>
                </div>
                <div className="paragraphLeft2">
                    <h2 className="locationText2">RECOMENDAMOS VISITAR DESDE LA CIUDAD:</h2>
                    <p className="basicInfoRight3">Se puede coordinar traslado privado también en Uber.</p>
                    <ul className="basicInfoRight">
                        <li>Biomuseo</li>
                        <li>Causeway de Amador</li>
                        <li>Museo de la Mola</li>
                        <li>Tour del Casco Viejo (caminando)</li>
                        <li>Centro de Visitantes del Canal de Panamá</li>
                    </ul>
                </div>
            </div>

            <hr class="solid" />

            <div className="paragraph">
                <h2 className="titleText">WEEKEND TRIPS</h2>
            </div>
            <div className="fullWidth">
                <div className="paragraphRight4">
                    <img className="LocationPic" src={Bocas} alt="Bocas del Toro" />
                    <h2 className="locationText3">BOCAS DEL TORO</h2>
                    <ul className="LocationInfoRight">
                        <li>Azul Paradise</li>
                        <li>Sol Bungalows</li>
                        <li>Red Frog Beach Resort</li>
                        <li>Tropical Suites</li>
                        <li>Playa Tortuga</li>
                        <li>Selina Bocas del Toro</li>
                        <li>Hotel Swan Cay</li>
                    </ul>
                </div>

                <div className="paragraphCenter">
                    <img className="LocationPic" src={Valle} alt="Vista aérea de montaña en el Valle de Antón" />
                    <h2 className="locationText3">VALLE DE ANTÓN</h2>
                    <ul className="LocationInfoRight">
                        <li>Hotel los Mandarinos</li>
                        <li>Caracol Hotel</li>
                        <li>Hotel Crater Valley</li>
                    </ul>
                </div>

                <div className="paragraphLeft4">
                    <img className="LocationPic" src={Venao} alt="Hotel Selina, Playa Venao" />
                    <h2 className="locationText3">PEDASÍ / PLAYA VENAO</h2>
                    <ul className="LocationInfoRight">
                        <li>Selina Playa Venao</li>
                        <li>Villa Marina Lodge</li>
                        <li>Playa Venao Hotel Resort</li>
                        <li>El Sitio Hotel</li>
                    </ul>
                </div>
            </div>

            <div className="fullWidth">
                <div className="paragraphRight4">
                    <img className="LocationPic" src={Catalina} alt="Playa Santa Catalina" />
                    <h2 className="locationText3">SANTA CATALINA</h2>
                    <ul className="LocationInfoRight">
                        <li>Catalina's Hideaway</li>
                        <li>Nativo Boutique Hotel</li>
                    </ul>
                </div>

                <div className="paragraphCenter">
                    <img className="LocationPic" src={Cambutal} alt="Playa Cambutal" />
                    <h2 className="locationText3">CAMBUTAL</h2>
                    <ul className="LocationInfoRight">
                        <li>Sansara Surf and Yoga</li>
                    </ul>
                </div>

                <div className="paragraphLeft4">
                    <img className="LocationPic" src={Golfo} alt="Playa en el Golfo de Chiriqui" />
                    <h2 className="locationText3">GOLFO DE CHIRIQUÍ</h2>
                    <ul className="LocationInfoRight">
                        <li>Seagull Cove Resort</li>
                        <li>Isla Palenque</li>
                        <li>Cala Mia Island Resort</li>
                        <li>Bocas del Mar</li>
                        <li>El regalo Resort</li>
                    </ul>
                </div>
            </div>

            <hr class="solid" />


            <div className="paragraph">
                <h2 className="titleText">RESTAURANTES</h2>
            </div>
            <div className="LastfullWidth">
                <div className="paragraphRight2">
                    <h2 className="locationText4">CASUALES</h2>
                    <p className="basicInfo">Tacos la Neta (comida mexicana) <br /> Gentile (comida mediteránea e internacional) <br /> Lucca Trattoria (comida italiana casual) <br /> Ciao Ragazzi (comida italiana casual) <br /> Magoo Fish Rcos (tacos de pescado) <br /> Republicano (hamburguesas) <br /> Beauty and the Butcher (comida americana) <br /> Café Bilal (comida libanesa e internacional) <br /> Amano (bar y comida casual) <br /> Blue Moon Tap House (cervecería y comida internacional) <br /> Casa Stizzoli (comida italiana) <br /> Segundo Muelle (comida peruana) <br /> Londoners Restaurant (comida internacional) <br /> Panos Kretan House (pizzas/ comida griega) <br /> Slabón (hamburguesas) <br /> Botánica Pizza <br /> Esa Flaca Rica (hamburguesas) <br /> Antiburger <br /> Cantina del Tigre (ceviche/ mariscos) <br /> Parrillada Jimmy's (griego) </p>
                    <h2 className="locationText4">COMIDA PANAMEÑA</h2>
                    <p className="basicInfo">Fonda lo que Hay (comida gourment panameña) <br />Salsipuedes (comida gourment panameña) <br /> Tinajas (comida típica panameña con show folclórico) <br /> El Trapiche (desayuno, almuerzo y cena autónomo panameño) </p>
                </div>
                <div className="paragraphLeft2">
                    <h2 className="locationText5">MÁS UPSCALE</h2>
                    <p className="basicInfoRight">Maito (comida internacional, Latam 50 Best Restaurants) <br /> Makoto (comida fusión asiática) <br /> Acha, La casa del Marisco (mariscos e internacional) <br /> Los Años Locos (steak house e internacional) <br /> Gauchos (steak house) <br /> Meze (comida mediteránea/ griega) <br /> Siete Mares (mariscos e internacional) <br /> Isaki (japonesa y fusión) <br /> Azahar (fusión internacional) <br /> Azafrán (comida internacional) <br /> Brutto (comida internacional) <br /> Salvaje Rooftop (comida japonesa) <br /> Vinoteca (comida italiana)</p>
                    <h2 className="locationText5">BRUNCH/DESAYUNO</h2>
                    <p className="basicInfoRight">Café Unido <br /> LOCAL <br /> Mika Bazar <br /> Mentiritas Blancas <br /> NY Bagel <br /> Brew Coffee Company <br /> Leto Coffee Brew Bar <br /> Vitali <br /> Dos Cucharas <br /> Golden Unicorn (desayuno chino) <br />Palacio Lung Fung (desayuno chino)</p>
                </div>
            </div>

           

        </>
    )
}

export default PanamaPage