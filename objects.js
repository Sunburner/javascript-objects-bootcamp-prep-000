var playlist = {
  metallica: 'one',
  ozzy: 'paranoid'
}

// Object.assign playlist['Phil Ochs'] = "Here's to the State of Mississippi"

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist.assign({['Phil Ochs'] = "Here's to the State of Mississippi"})
}
