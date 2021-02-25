import { combineReducers } from 'redux';

const songsReducer = ()=>{
    return [
        { song : "Kanne", length:"3.04"},
        { song : "kavu", length:"3.09"},
        { song : "Kanne kalaymane", length:"9.04"}
    ];
}

const SelectedSongReducer = (selectedSong=null,action)=>{
    if(action.type === 'SONG_SELECT'){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : SelectedSongReducer
})