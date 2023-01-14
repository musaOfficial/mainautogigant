import GigaCard from "./GigaCard";
import classes from "./Giga.module.css";
import { useState } from "react";
import Expand from "./../../../public/expand.svg";
import Closer from "./../../../public/closer.svg";
import Deleter from './../../../public/deleter.svg';

function Giga() {
  const [typeOpen1, setTypeOpen1] = useState(false);
  const [typeOpen2, setTypeOpen2] = useState(false);
  const [typeOpen3, setTypeOpen3] = useState(false);
  const [typeOpen4, setTypeOpen4] = useState(false);
  const [typeOpen5, setTypeOpen5] = useState(false);
  const [typeOpen6, setTypeOpen6] = useState(false);

  const [selectedItemPrice1, setSelectedItemPrice1] = useState(25);
  const [selectedItemPrice2, setSelectedItemPrice2] = useState(114);
  const [selectedItemPrice3, setSelectedItemPrice3] = useState(3);
  const [selectedItemPrice4, setSelectedItemPrice4] = useState(3);
  const [selectedItemPrice5, setSelectedItemPrice5] = useState(4);
  const [selectedItemPrice6, setSelectedItemPrice6] = useState(4);

  const [selectedItemName1, setSelectedItemName1] = useState("1 Woche");
  const [selectedItemName2, setSelectedItemName2] = useState("1 Woche");
  const [selectedItemName3, setSelectedItemName3] = useState("1 Tag");
  const [selectedItemName4, setSelectedItemName4] = useState("1-mal");
  const [selectedItemName5, setSelectedItemName5] = useState("30 Tage");
  const [selectedItemName6, setSelectedItemName6] = useState("1-mal");

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleAddToCart(value, name, price){
    var adder = [...cart];
    adder.push({value, name, price});
    setTotalPrice(pr => pr + price);
    setCart(adder);
  }

  function deleteFromCart(index, price){
    var reducer = [...cart];
    reducer.splice(index, 1);
    setTotalPrice(pr => pr - price);
    setCart(reducer);
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.c1}>
          <h1 className={classes.heading}>GIGA POWER</h1>
          <p className={classes.description}>
            GIGA POWER-Pakete bestehen aus Zusatzleistungen, mit denen Ihr
            Fahrzeug schneller verkauft werden kann. Wenn Sie wissen möchten,
            welcher Service für Sie geeignet ist, können Sie die Paketdetails
            unten überprüfen.
          </p>
          <div className={classes.gridcards}>
            <div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>STARTSEITE SCHAUFENSTER</h2>
                <p className={classes.carddescription}>
                  Sichern Sie sich Ihren Platz im Schaufenster auf der
                  Startseite und sorgen Sie dafür, dass Ihr Inserat sofort
                  gesehen wird.
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
                {/* <button className={classes.adasdf} onClick={() => {
                  handleAddToCart("STARTSEITE SCHAUFENSTER", selectedItemName1, selectedItemPrice1);
                }}>
                  Zum Warenkorb hinzufügen
                </button> */}
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen1 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen1((d) => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName1}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice1},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        STARTSEITE SCHAUFENSTER
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen1((d) => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice1(25);
                        setSelectedItemName1("1 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1 Woche</p>
                      <div className={classes.productpriceopen}>25,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice1(45);
                        setSelectedItemName1("2 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>2 Woche</p>
                      <div className={classes.productpriceopen}>45,00 €</div>
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice1(65);
                        setSelectedItemName1("3 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>3 Woche</p>
                      <div className={classes.productpriceopen}>65,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice1(85);
                        setSelectedItemName1("4 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>4 Woche</p>
                      <div className={classes.productpriceopen}>85,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("STARTSEITE SCHAUFENSTER", selectedItemName1, selectedItemPrice1);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
            </div>
            
            <div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>TOP INSERAT</h2>
                <p className={classes.carddescription}>
                Platzieren Sie Ihr Inserat ganz oben auf
der Auflistungsseite und zeigen Sie Ihren Beitrag
über anderen Ergebnissen an.
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen2 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen2(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName2}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice2},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        TOP INSERAT
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen2(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice2(114);
                        setSelectedItemName2("1 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1 Woche</p>
                      <div className={classes.productpriceopen}>114,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice2(228);
                        setSelectedItemName2("2 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>2 Woche</p>
                      <div className={classes.productpriceopen}>228,00 €</div>
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice2(342);
                        setSelectedItemName2("3 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>3 Woche</p>
                      <div className={classes.productpriceopen}>342,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice2(456);
                        setSelectedItemName2("4 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>4 Woche</p>
                      <div className={classes.productpriceopen}>456,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("TOP INSERAT", selectedItemName2, selectedItemPrice2);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
            </div>
            
            <div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>GIGA LABEL</h2>
                <p className={classes.carddescription}>
                Lassen Sie das Fahrzeug in der Liste mit dem Label 
„GIGA“ erscheinen 
und in der Kategorie „GIGA LABEL“ sein.
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen3 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen3((d) => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName3}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice3},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        GIGA LABEL
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen3(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice3(3);
                        setSelectedItemName3("1 Tag");
                        setTypeOpen3(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1 Tag</p>
                      <div className={classes.productpriceopen}>3,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice3(8);
                        setSelectedItemName3("3 Tage");
                        setTypeOpen3(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>3 Tage</p>
                      <div className={classes.productpriceopen}>8,00 €</div>
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice3(18);
                        setSelectedItemName3("7 Tage");
                        setTypeOpen3((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>7 Tage</p>
                      <div className={classes.productpriceopen}>18,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice3(30);
                        setSelectedItemName3("14 Tage");
                        setTypeOpen3(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>14 Tage</p>
                      <div className={classes.productpriceopen}>30,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("GIGA LABEL", selectedItemName3, selectedItemPrice3);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
            </div>
            <div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>DATUMSAKTUALISIERUNG</h2>
                <p className={classes.carddescription}>
                Aktualisieren Sie das Veröffentlichungsdatum, damit Ihre 
Anzeige bei Suchanfragen einen hohen Rang einnimmt.<br></br><br></br>
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen4 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen4(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName4}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice4},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        DATUMSAKTUALISIERUNG
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen4(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice4(3);
                        setSelectedItemName4("1-mal");
                        setTypeOpen4((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1-mal</p>
                      <div className={classes.productpriceopen}>3,00 €</div>
                    </div>
                  </div>
                )}
              </div>


            </div>
            <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("DATUMSAKTUALISIERUNG", selectedItemName4, selectedItemPrice4);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
            </div>
            <div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>FARBIGER HINTERGRUND UND FARBIGER RAHMEN</h2>
                <p className={classes.carddescription}>
                Der Titel der Anzeige wird fett geschrieben und findet auf 
einem farbigen Hintergrund statt.<br></br><br></br>
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen5 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen5(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName5}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice5},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        FARBIGER RAHMEN UND FARBIGER HINTERGRUND
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen5(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice5(4);
                        setSelectedItemName5("30 Tage");
                        setTypeOpen5(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>30 Tage</p>
                      <div className={classes.productpriceopen}>4,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("FARBIGER HINTERGRUND UND FARBIGER RAHMEN", selectedItemName5, selectedItemPrice5);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
            </div>
            <div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>50 FOTO RECHTE</h2>
                <p className={classes.carddescription}>
                Fügen Sie mehr Fotos hinzu, 
indem Sie das Limit von 25 auf 50 Fotos erhöhen.<br></br><br></br>
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen6 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen6(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName6}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice6},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        50 FOTO RECHTE
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen6(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice6(4);
                        setSelectedItemName6("1-mal");
                        setTypeOpen6((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1-mal</p>
                      <div className={classes.productpriceopen}>4,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("50 FOTO RECHTE", selectedItemName6, selectedItemPrice6);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
            </div>
          </div>
          {/* CARD-CONTENT */}
        </div>
      </div>
      <div className={classes.c2}>
        <div className={classes.orderleft}>
          {cart.length != 0 ? cart.map((item, index) => <div key={index} className={classes.ordercontainer}>
            <div className={classes.ordervalue}>{item.value}</div>
            <div className={classes.last}>
            <div className={classes.ordername}>{item.name}</div>
              <div className={classes.orderprice}>{item.price},00 €</div>
              <Deleter className={classes.deleter} onClick={() => {
                deleteFromCart(index, item.price);
              }} />
            </div>
          </div>) : <h1 className={classes.warning}>WARENKORB LEER!</h1>}
        </div>
        <div className={classes.orderright}>
            <div className={classes.right}>
              <div className={classes.total}>GESAMT</div>
              <div className={classes.totalprice}>{totalPrice},00 €</div>
              <button className={classes.purchasebtn}>KAUFEN</button>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default Giga;
