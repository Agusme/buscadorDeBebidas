/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

export default function Header() {

    const [searchFilter, setSearchFilter]= useState({
        ingredient:'',
        category:''
    })

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)


    useEffect(() => {
        fetchCategories()
    }, [])
const hanldeChange =(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
    setSearchFilter({...searchFilter,
        [e.target.name]: e.target.value}
    )
}

const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    //TO DO validar
    if(Object.values(searchFilter).includes('')){
        console.log('Todos los campos son obligatorios')
        return
    }
searchRecipes(searchFilter)
//consultar la receta
}

    return (
        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'} >
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between item-center">
                    <div>
                        <img src="/logo.svg" alt="logoTipo" className="w-32" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'} >Inicio</NavLink>
                        <NavLink to="/favoritos" className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'} >Favoritos</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 " onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <label htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg">Nombre o Ingrediente</label>
                            <input type="text" id="ingredient" name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café "
                                onChange={hanldeChange}
                                value={searchFilter.ingredient}
                            />
                        </div>
                        <div className="space-y-4">
                            <label htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg">Categoría</label>
                            <select id="category" name="category"
                                className="p-3 w-full rounded-lg focus:outline-none"
                              onChange={hanldeChange}
                                value={searchFilter.category}
                            >
                                <option value="">Seleccione</option>
                                {categories.drinks.map((c) => (
                                    <option value={c.strCategory}
                                        key={c.strCategory}
                                    >{c.strCategory} </option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value='Buscar Recetas'
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase " />
                    </form>
                )}
            </div>
        </header>
    )
}
