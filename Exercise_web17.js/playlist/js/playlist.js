/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const newPlaylists = [...playlists, {
      name: playlistName,
      songs: [],
    }];
    playlists = newPlaylists;
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter(removePLay => {
        return removePLay.name !== playlistName;
      })
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    const playlist = playlists.find(thePlaylist => thePlaylist.name === playlistName)//devuelve el primer elemento de la array que cumple la condicion
    if (playlist === undefined){ //si no lo cumple el find lo devuelve como undefined, entonces throw error
      throw new Error('can not find that playlist')
    };
    playlist.songs = [...playlist.songs,song]//Concatenas la nueva canción a la lista de canciones usando[...]
    playlists = playlists.map((element) => { //vuelves a mapear playlists para actualizar la lista
      if (element.name === playlist.name){
        return playlist
      };
      return element
    });
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const thePLaylist = playlists.find(playlist =>{
      return (playlist.name === playlistName); //busco el nombre que coincide con playlist
    });

    let theSongToRemove = []; 
    if(thePLaylist){ //si the playlist se encuentra:
      theSongToRemove = thePLaylist.songs.find(song => song.title === title); // busca en songs la cancion que coincida con title y la añade a removeSong
    };

    if (theSongToRemove){ //si encuentra la cancion:
      thePLaylist.songs = thePLaylist.songs.filter(song => song.title !== title); //crea una lista de canciones sin la canion que tiene title 
    }
    else {
      throw new Error(`the song: \n ${title} in  the playlist: \n ${playlistName} \n are not found`);
  };
  
  };
  
  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {};

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {};

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;