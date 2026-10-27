import { ChangeEventHandler, useEffect, useState } from 'react'
import './index.css'
import apiRequest from '../../config/api'
import { useDebounce } from '../../hooks'
import { SearchIcon } from '../Icons/SearchIcon'
interface Movie{
    id:number,
    title:string,
    overview:string
}
export const SearchBar = () => {
    const [search, setSearch] = useState<string>('')
    const [currentRow,setCurrentRow]=useState<number|null>(null)
    const [rows,setRows]=useState<Array<{
        id:number,
        title:string,
        description:string
    }>>([])
    const debouncedSearch=useDebounce(search,500)
    useEffect(()=>{
        if(debouncedSearch){
            handleRequest(debouncedSearch)
        }else{
            setRows([])
        }
    },[debouncedSearch])
    useEffect(()=>{
        document.addEventListener('keydown',(event)=>{
            const {key}=event
            if(key==='ArrowUp'){
                if(currentRow){
                    const currentIndex = rows.findIndex((row)=>row.id===currentRow)
                    if(currentIndex===-1){
                        return setCurrentRow(rows[0].id)
                    }
                    if(currentIndex===0){
                        return setCurrentRow(rows[0].id)
                    }
                    const prevRow = rows[currentIndex-1]
                    setCurrentRow(prevRow.id)
                }
            }else if(key==='ArrowDown'){
                if(currentRow===null){
                    setCurrentRow(rows[0].id)
                }else{
                    const currentIndex = rows.findIndex((row)=>row.id===currentRow)
                    if(currentIndex===-1){
                        return setCurrentRow(rows[0].id)
                    }
                    if(currentIndex+1===rows.length){
                        return setCurrentRow(rows[currentIndex+1].id)
                    }
                    const nextRow = rows[currentIndex+1]
                    setCurrentRow(nextRow.id)
                }
            }
        })
        return ()=>{
            document.removeEventListener('keydown',(ev)=>{
                console.log('event',ev)
            })
        }
    },[rows,currentRow])
    const handleRequest=async (query:string)=>{
        try{
            const response=await apiRequest(`/search/movie?query=${query}`)
            setRows(response.results.map((movie:Movie)=>({
                id:movie.id,
                title:movie.title,
                description:movie.overview
            })))
        }catch(error){
            console.error('error',error)

        }
    }
    const handleChange: ChangeEventHandler<HTMLInputElement> =(event)=>{
        setSearch(event.target.value)
    }
    return (
        <div className="search-bar-container">
            <span>
                <SearchIcon/>
            </span>
            <input value={search} onChange={handleChange}  type="text" placeholder="Buscar..." className="search-bar-container__input" />
            {
                search && rows.length>0 && (
                    <div className="search-bar-container__results">
                        {
                            rows.map((row)=>(
                                <div key={row.id} className={`search-bar-container__results__row ${currentRow===row.id?'search-bar-container__results__row--selected':''}`}>
                                    <h3 className='search-bar-container__results__row__title' >{row.title}</h3>
                                    <p className='search-bar-container__results__row__description' >{row.description}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}