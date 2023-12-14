import React, { useState } from "react";
export default function ProduitAdd() {
    return (
        <>
            <h1 className={"hover-effect"}>Ajouter un produit</h1>
            <div className="card">
                <div className="produit-add">
                    <div>
                        <form>
                            <div className="textInputWrapper">
                                <input placeholder={"Nom du produit"} type="text" name={"pro-nom"} id={"pro-nom"} className="textInput"/>
                            </div>
                            <br/>
                            <textarea type="text" placeholder={"Description du produit"} className={"cat-desc"} id={"pro-desc"}/>
                            <br/>
                            <div className="textInputWrapper">
                                <input placeholder={"Nombre en stock "} type="number" name={"pro-stock"} id={"pro-stock"} className="textInput"/>
                            </div>
                            <br/>
                            <div className="textInputWrapper">
                                <input type="number" placeholder={"Prix d'achat en €"} name={"prix-achat"} id={"prix-achat"} className="textInput"/>
                            </div>
                            <br/>
                            <div className="textInputWrapper">
                                <input type="number" placeholder={"Prix vente en €"} name={"prix-vente"} id={"prix-vente"} className="textInput"/>
                            </div>
                            <br/>
                            <input type="file" name={"pro-img"} id={"pro-img"}/>
                            <br/>
                            <input className={"button"} type="submit" value={"Ajouter Produit"}/>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}