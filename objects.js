var playlist = {
  'metallica': 'one',
}

// Object.assign playlist['Phil Ochs'] = "Here's to the State of Mississippi"

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
