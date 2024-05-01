import { createContext, useEffect, useState } from "react";


export const ProductsContext = createContext();
export const ProductProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [productsData, setProductsData] = useState([])
    const [searchText, setSearchText] = useState("")

    const [myFilters, setMyFilters] = useState({
        textFilter: "",
        priceFilter: 0,
        categoryFilter: [],
        ratingFilter: 0,
        sortFilter: ""
    })

    const fetchData = async () => {
        try {
            const response = await fetch("/api/products")
            const { products } = await response.json()

            setProductsData(products)


        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const searchTextHandler = (text) => {
        setSearchText(text);
    }


    const searchClickHandler = () => {
        setMyFilters({ ...myFilters, textFilter: searchText })
    }
    const priceSliderHandler = (price) => {

        setMyFilters({ ...myFilters, priceFilter: Number(price) })
    }

    const checkboxHandler = (category) => {

        myFilters.categoryFilter.includes(category)
            ? setMyFilters({
                ...myFilters,
                categoryFilter: myFilters.categoryFilter.filter(
                    (categoryFilter) => categoryFilter !== category
                )
            })
            : setMyFilters({
                ...myFilters,
                categoryFilter: [...myFilters.categoryFilter, category]
            });
    }

    const radioHandler = (stars) => {

        setMyFilters({ ...myFilters, ratingFilter: Number(stars) })
    }
    const sortHandler = (sortOrder) => {

        setMyFilters({ ...myFilters, sortFilter: sortOrder })
    }



    const textFiltered = myFilters.textFilter?.length > 0 ? [...productsData].filter(({ name, author }) => name.toLowerCase().includes(myFilters.textFilter.toLowerCase()) || author.toLowerCase().includes(myFilters.textFilter.toLowerCase())) : [...productsData]



    const priceFiltered = myFilters.priceFilter > 0 ? [...textFiltered].filter(({ price }) => price <= myFilters.priceFilter) : [...textFiltered]



    const categoryFiltered = myFilters.categoryFilter.length > 0 ? [...priceFiltered].filter(({ category }) => myFilters.categoryFilter.includes(category)) : [...priceFiltered]


    const ratingFiltered = myFilters.ratingFilter > 0 ? [...categoryFiltered].filter(({ rating }) => rating >= myFilters.ratingFilter) : [...categoryFiltered];



    const sortFiltered = myFilters.sortFilter.length > 0 ? [...ratingFiltered].sort((item1, item2) => myFilters.sortFilter === "lToH" ? item1?.price - item2?.price : item2?.price - item1?.price) : [...ratingFiltered]

    const clearFilters = () => {
        setSearchText("");
        setMyFilters({
            textFilter: "",
            priceFilter: 0,
            categoryFilter: [],
            ratingFilter: 0,
            sortFilter: ""
        });
    }



    return (<ProductsContext.Provider value={{ productsData, myFilters, searchText, priceSliderHandler, radioHandler, sortHandler, searchTextHandler, checkboxHandler, searchClickHandler, sortFiltered, clearFilters,isLoading, setIsLoading }}>
        {children}
    </ProductsContext.Provider>)
}