<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" class="nav-item" tag="li">
          <a class="nav-link">Home</a>
        </router-link>

        <router-link to="/port" class="nav-item" tag="li">
          <a class="nav-link">PortFolio</a>
        </router-link>

        <router-link to="/stock" class="nav-item" tag="li">
          <a class="nav-link">Stocks</a>
        </router-link>

        <router-link to="/end" class="nav-item float-right" tag="li">
          <a class="nav-link">End Day</a>
        </router-link>
        <strong class="navbar-text navbar-right">Funds: $10000</strong>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle open"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>