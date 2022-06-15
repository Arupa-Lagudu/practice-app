const ProdListWithSearch = () => {
    return(
        <Container style={{marginTop: "5%"}}>
          <SearchBar />
          <ListLoading Loading={appState.loading} prods={appState.prods} />
        </Container>
      );
  };
    
    export default ProdListWithSearch;