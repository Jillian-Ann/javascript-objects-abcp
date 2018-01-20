var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artist, song) {

  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist,artist,song) { delete playlist[artist] =song
return playlist
  
}