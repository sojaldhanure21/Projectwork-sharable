import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import HotelSearchResult from './pages/HotelSearchResult';
import Header from './components/desktop/Header';
import Footer from './components/desktop/Footer';
import HotelDetailsResult from './pages/HotelDetailsResult';
import HotelSearchLanding from './pages/HotelSearchLanding';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import HotelSearchLandingMobile from './screens/HotelSearchLandingMobile';
import HotelSearchResultMobile from './screens/HotelSearchResultMobile';
import HeaderMobile from './components/mobile/HeaderMobile';
import SearchDestinationMobile from './components/mobile/SearchDestinationMobile';
import DateToAndFromMobile from './components/mobile/DateToAndFromMobile';
import GuestCountMobile from './components/mobile/GuestCountMobile';
import HotelFilterMobile from './components/mobile/HotelFiltersMobile';
import HotelDetailsResultMobile from './screens/HotelDetailsResultMobile';
import HotelResultContainer from './screens/HotelResultContainer';

const Layout = () => {
  return (
    <>
      {Dimensions.get('window').width > 768 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View>
            <View>
              <Header />
            </View>
            <View style={{backgroundColor: '#F4F5F9', paddingBottom: '10vh'}}>
              <Router basename="/">
                <Routes>
                  <Route path="/" element={<HotelSearchLanding />} />
                  <Route path="hotel_search" element={<HotelResultContainer />} />
                  <Route path="hotel_detail" element={<HotelDetailsResult />} />
                  {/* <Route path="hotel_rooms" element={<ExploreRoomsCard/>}/> */}
                </Routes>
              </Router>
            </View>
            <View>
              <Footer />
            </View>
          </View>
        </ScrollView>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View>
              <HeaderMobile />
            </View>
            <View>
              <Router basename="/">
                <Routes>
                  <Route path="/" element={<HotelSearchLandingMobile />} />
                  <Route
                    path="hotel_search"
                    element={<HotelSearchResultMobile />}
                  />
                  <Route path='hotel_detail' element={<HotelDetailsResultMobile />}/>
                  <Route
                    path="search_destination"
                    element={<SearchDestinationMobile />}
                  />
                  <Route
                    path="date_to_and_from"
                    element={<DateToAndFromMobile />}
                  />
                  <Route path="guest_count" element={<GuestCountMobile />} />
                  <Route path="HotelFilter" element={<HotelFilterMobile />}/>
                </Routes>
              </Router>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Layout;
