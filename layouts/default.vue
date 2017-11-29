<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">POC cross social media</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Don't know</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="/javascript">#Javascript <span class="badge badge-primary">Hashtag</span></a>
            <a class="dropdown-item" href="#">Quincy Larson <span class="badge badge-info">Personne</span></a>
            <a class="dropdown-item" href="#">Lille <span class="badge badge-success">Lieu</span></a>
            <a class="dropdown-item" href="#">Dunno <span class="badge badge-warning">Warning</span></a>
            <a class="dropdown-item" href="#">Don't really know <span class="badge badge-dark">Dark</span></a>
          </div>
        </li>
        <button class="btn">
          What's new ? <span class="badge badge-secondary">9</span>
          <span class="sr-only">Unread messages</span>
        </button>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>