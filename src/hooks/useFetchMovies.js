import { useState, useEffect } from "react";
import { getMovies } from "../api/moviesApi";

const useFetchMovies = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect (() => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies()
                setMovies(data.results || [])
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [])
    return { movies, loading, error}
}

export default useFetchMovies