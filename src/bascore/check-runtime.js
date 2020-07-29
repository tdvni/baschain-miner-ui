export const SUPPORT_TYPES = ['chrome', 'firefox']

export class BrowserRuntime {
  constructor(ua) {
    this.ua = ua || window.navigator.userAgent
    this.info = {}

    const _info = _parseUserAgent.call(this)

    if (_info) {
      this.info = _info
    }
  }

  detectOS() {
    return this.info.detectOS
  }

  checkBrowserSupport() {

    if (!this.info || !this.info.name) return false

    const _name = this.info.name

    return SUPPORT_TYPES.find(n => _name.toLowerCase() === n ) ? true : false

  }

}

function _parseUserAgent() {

  const browserRules = getBrowserRules()
  const _ua = this.ua

  const detected = browserRules.map( (browser) => {
    const match = browser.rule.exec(_ua)

    let version = match && match[1].split(/[._]/).slice(0,3)
    if ( version && version.length < 3 ) {
      version = version.concat(version.length == 1 ? [0,0] : [0])
    }

    return match && {
      name: browser.name,
      version: version.join('.')
    }
  }).filter(Boolean)[0] || null

  if (detected) {
    detected.os = _detectOS.call(this)
  }

  return detected
}

function _detectOS() {
  const _ua = this.ua

  const rules = getOperatingSystemRules()

  const detected = rules.filter(
    os => os.rule && os.rule.test(_ua)
  )[0]

  this.info.detectOS = detected ? detected.name : null
  return detected
}

/**
 * the Browser rules
 */
function getBrowserRules() {
  return buildRules([
    ['edge', /Edge\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['vivaldi', /Vivaldi\/([0-9\.]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/]
  ]);
}

/**
 * The OS rules
 */
function getOperatingSystemRules() {
  return buildRules([
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
    ['Search Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]
  ]);
}

function buildRules(ruleTuples) {
  return ruleTuples.map( (tuple) => {
    return {
      name: tuple[0],
      rule: tuple[1]
    }
  });
}

export default {
  SUPPORT_TYPES,
  BrowserRuntime,
}
