import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./Layouts/Container/index";
import Section from "./Layouts/Section";
import MovieList from "./components/Movies/MovieList";
import Footer from "./Footer";
import "./index.css";

function App() {
    const [sectionToggle, setSectionToggle] = useState({
        trending: "Today",
        latestTrailers: "Popular",
        whatsPopular: "Streaming",
        freeToWatch: "Movies"
    });

    const handleToggledValue = (section, selectedValue) => {
        setSectionToggle(prev => ({
            ...prev,
            [section]: selectedValue
        }));
    };

    return (
        <>
            <Header />
            <Container>
                <Banner />
                <Section 
                    title="Trending"
                    items={["Today", "This Week"]}
                    onToggle={handleToggledValue.bind(null, "trending")}
                    isToggled={sectionToggle.trending === "Today" ? false : true}
                >
                    <MovieList fetchType={sectionToggle.trending} handleToggle={handleToggledValue} />
                </Section>
                <Section className ="trailers"
                    title="Latest Trailers"
                    items={["Popular", "Streaming", "On Tv", "For Rent", "In Theaters"]}
                    onToggle={handleToggledValue.bind(null, "latestTrailers")}
                    isToggled={sectionToggle.latestTrailers === "Popular" ? false : true}
                >
                    <MovieList fetchType={sectionToggle.latestTrailers}  handleToggle={handleToggledValue} />
                </Section>
                <Section
                    title="What's Popular"
                    items={["Streaming", "On Tv", "For Rent", "In Theaters"]}
                    onToggle={handleToggledValue.bind(null, "whatsPopular")}
                    isToggled={sectionToggle.whatsPopular === "Streaming" ? false : true}
                >
                    <MovieList fetchType={sectionToggle.whatsPopular} handleToggle={handleToggledValue} />
                </Section>
                <Section
                    title="Free To Watch"
                    items={["Movies", "Tv"]}
                    onToggle={handleToggledValue.bind(null, "freeToWatch")}
                    isToggled={sectionToggle.freeToWatch === "Movies" ? false : true}
                >
                    <MovieList fetchType={sectionToggle.freeToWatch} handleToggle={handleToggledValue}/>
                </Section>
            </Container>
        <Footer/>
        </>
    );
}

export default App;
