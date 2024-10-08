const Navbar=() =>{
    return(
        <nav id="navbar-main" className="navbar navbar-expand-lg shadow-sm sticky-top">
      <div className="w-100 justify-content-md-center">
        <ul className="nav navbar-nav enable-mobile px-2">
          <li className="nav-item">
            <button type="button" className="btn nav-link p-0">
              <img src="assets/images/icons/theme/post-image.png" className="f-nav-icon" alt="Quick make post" />
            </button>
          </li>
          <li className="nav-item w-100 py-2">
            <form className="d-inline form-inline w-100 px-4">
              <div className="input-group">
                <input type="text" className="form-control search-input" placeholder="Search for people, companies, events and more..." aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn search-button" type="button">
                    <i className="bx bx-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </li>
          <li className="nav-item">
            <a href="messages.html" className="nav-link nav-icon nav-links message-drop drop-w-tooltip" data-placement="bottom" data-title="Messages">
              <img src="assets/images/icons/navbar/message.png" className="message-dropdown f-nav-icon" alt="navbar icon" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mr-5 flex-row" id="main_menu">
          <a className="navbar-brand nav-item mr-lg-5" href="index.html">
            <img src="assets/images/logo-64x64.png" width="40" height="40" className="mr-3" alt="Logo" />
          </a>
          <form className="w-30 mx-2 my-auto d-inline form-inline mr-5 dropdown search-form">
            <div className="input-group" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="searchDropdown">
              <input type="text" className="form-control search-input w-75" placeholder="Search for people, companies, events and more..." aria-label="Search" />
              <div className="input-group-append">
                <button className="btn search-button" type="button">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
            <ul className="dropdown-menu notify-drop nav-drop shadow-sm" aria-labelledby="searchDropdown">
              <div className="notify-drop-title">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6 fs-8">Search Results <span className="badge badge-pill badge-primary ml-2">29</span></div>
                </div>
              </div>
              <div className="drop-content">
                <h6 className="dropdown-header">Peoples</h6>
                { <li className="dropdown-item"> /*-- Add content here --*/</li> }
              </div>
            </ul>
          </form>
        </ul>
      </div>
    </nav>
    )
}
export default Navbar;