import React,{useState,useEffect} from 'react'
import { useAppSelector } from "../redux/hooks";
import View from 'react-native'
import { Text } from 'react-native-elements';
import HotelSearchResult from '../pages/HotelSearchResult';
import { useGetHotelResultQuery } from '../redux/api/hotelApi';
const HotelResultContainer= ()=>  {
const [searchresults, setSearchResults]= useState(false)
const { searchId, searchTracingKey, apiKey, hotels} = useAppSelector(
        (state: any) => state.hotel,
        );
useEffect(() => {
            setSearchResults(true)
        },[searchId])  
useGetHotelResultQuery({ searchId: searchId, searchTracingKey: searchTracingKey, apiKey: apiKey })
        

return(     
    searchresults==true ?(<HotelSearchResult  searchId= {searchId}/>): null   
     )
} 
export default HotelResultContainer