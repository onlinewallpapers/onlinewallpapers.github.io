/* global location, $, localStorage, alert, jQuery, beloading, ARABIC, ENGLISH */ // to avoide false linter

var version = ' 0.1 beta' // current version to modify all, easily
var loader = false // global name for beloader to get duration
var noi = 44 // number of elements to translate
var WManager = false // to store redditWallpapers

// setting formspree emails with js to avoide spam
$('#femail').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#femailar').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#fnews').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#fnewsar').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')

var addStyle = function () {
  var fontFamilies = {
    all: {
      'font-family': '"Changa", sans-serif'
    }, // all font-families
    8: {
      'font-family': '"Lateef", cursive',
      'font-size': '170%'
    },
    12: {
      'font-family': '"Lateef", cursive',
      'font-size': '170%'
    },
    36: {
      'font-size': '250%',
      'font-family': '"Lateef", cursive'
    }
  }
  for (var i = 0; noi > i; i += 1) {
    if ($('#en' + i)) {
      if (fontFamilies.hasOwnProperty(i)) {
        $('#en' + i).css(fontFamilies[i])
      } else {
        $('#en' + i).css(fontFamilies.all)
      }
    }
  }
}

var tlock = function tlock () {
  // to toggle lock or unlock navbar
  if ($('#lockit').hasClass('fa-lock')) {
    localStorage.lock = 'No'
    $('#lockit').removeClass('fa-lock')
    $('#lockit').addClass('fa-unlock')
    $('#thev').removeClass('fixed-top')
  } else {
    localStorage.lock = 'Yes'
    $('#lockit').removeClass('fa-unlock')
    $('#lockit').addClass('fa-lock')
    $('#thev').addClass('fixed-top')
  }
}

jQuery(document).ready(function ($) {
  // things todo when jquery loads
  // setting loading screen
  $('.version').append(version)
  addStyle() // add fonts
  loader = beloading({
    trail: 'true',
    duration: 2,
    text: 'Online Wallpapers is loading ...'
  }, () => WManager = redditWallpapers({
    id: '.obit',
    isFixed: 'true',
    overlay: 'rgba(0,0,0,0.8)'
  }))
  WManager = redditWallpapers({
    id: '.obit',
    isFixed: 'true',
    overlay: 'rgba(0,0,0,0.8)'
  })
  if (localStorage.lock === undefined) localStorage.lock = 'No'
})

window.addEventListener('load', function () {
  // things todo, when everything loaded
  // locking if locked before
  if (localStorage.lock === 'Yes') {
    setTimeout(function () {
      tlock()
    }, loader.defaults.effect_duration)
  }
  // displaying messages if found urls hashtag
  if (location.href.substr(location.href.length - 6) === 'thanke') {
    $('#thanke').removeClass('hide')
    $(window).scrollTop('#thanke')
    setTimeout(function () {
      $('#thanke').fadeOut()
    }, 10000)
  }
  $('form').on('change', function (e) {
    var categories = []
    $('form :checked').each((index, item) => {
      categories.push(item.value)
    })
    var duration = $('form select').val()
    WManager.options.duration = duration
    WManager.options.categories = categories
    WManager.restart()
    console.log('will restart')
    // scroll effect stuff
  })
})
