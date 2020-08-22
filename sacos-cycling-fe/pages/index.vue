<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        Sacos Cycling History
      </h1>
      <div class="description">
        We are trying to start a historical log of the SACOS cycling team, if you have anything to contribute, please contact the below email.
      </div>
      <div class="links">
        <a
          href="mailto:sacoshistoricalsite@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="button--sacos_yellow"
        >
          Contact email: sacoshistoricalsite@gmail.com
        </a>
      </div>
    </div>
    <footer class="footer">
      <div class="description">made with love, using github, hreoku, vue and flask</div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #00000F;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #FFF;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 2em;
}

.button--sacos_yellow {
  color: #e3b602;
  border: 1px solid #e3b602;
  border-radius: 30px;
  padding: 0.75em;
  text-decoration: none;
}

.button--sacos_yellow:hover {
  background: #e3b602;
  color: #00000F;
  border: 1px solid #e3b602;
  border-radius: 30px;
  padding: 0.75em;
}

.description {
  color: #FFF;
  padding-top: 1em;
}

.footer {
  bottom: 0;
  position: absolute;
  margin: 0 auto;
  width: auto;
  text-align: center;
}
</style>
