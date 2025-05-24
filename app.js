const music=new Audio('audio/5.mp3');
// music.play();

const songs=[
    {
        id : '1',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/1.png"
    },
    {
        id : '2',
        songName:`East Duo <br>
        <div class="subtitle">Chubina</div> `,
        poster: "img/2.png"
    },
    {
        id : '3',
        songName:`Faded <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/3.png"
    },
    {
        id : '4',
        songName:`Ogryzek-Empire <br>
        <div class="subtitle">Ogryzek</div> `,
        poster: "img/4.png"
    },
    {
        id : '5',
        songName:`Next! <br>
        <div class="subtitle"> Max Goralczyk</div> `,
        poster: "img/5.png"
    },
    {
        id : '6',
        songName:`Prime Time <br>
        <div class="subtitle">Astral Johnoskii</div> `,
        poster: "img/6.png"
    },
    {
        id : '7',
        songName:`Rasputin <br>
        <div class="subtitle">Boney M.</div> `,
        poster: "img/7.png"
    },
    {
        id : '8',
        songName:`Don 2 <br>
        <div class="subtitle">Shaan</div> `,
        poster: "img/8.png"
    },
    {
        id : '9',
        songName:`The spectra <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/9.png"
    },
    {
        id : '10',
        songName:`Play <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/10.png"
    },
    {
        id : '11',
        songName:`Shape of You <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/11.png"
    },
    {
        id : '12',
        songName:`Chal Chaiya Chaiya <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/12.png"
    },
    {
        id : '13',
        songName:`Tum sa Milka dil ka <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/13.png"
    },
    {
        id : '14',
        songName:`Belki <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/14.png"
    },
    {
        id : '15',
        songName:`Ertugul Ghazi <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/15.png"
    },
    {
        id : '16',
        songName:`O Sahib<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/16.png"
    },
    {
        id : '17',
        songName:`Chaleya<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/17.png"
    },
    {
        id : '18',
        songName:`Finding Her<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/18.png"
    },
    {
        id : '19',
        songName:`Gate Only<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/19.png"
    },
    {
        id : '20',
        songName:`Mortis Funk<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/20.png"
    },
    {
        id : '21',
        songName:`Not Ramaiya Vastavaiya<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/21.png"
    },
    {
        id : '22',
        songName:`Massi Massi<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/22.png"
    },
    {
        id : '23',
        songName:`Ishq<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/23.png"
    },
    {
        id : '24',
        songName:`Jhol<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/24.png"
    },
    {
        id : '25',
        songName:`lets Go<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/25.png"
    },
    {
        id : '26',
        songName:`Dagestani <br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/26.png"
    },
    {
        id : '27',
        songName:`Darkside-Alan<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/27.png"
    },
    {
        id : '28',
        songName:`Ishq hai<br>
        <div class="subtitle">Alan Walker</div> `,
        poster: "img/28.png"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src =songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
});

let search_results=document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id,songName,poster} = element;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href='#' + id;
    card.innerHTML= ` <img src="${poster}" alt="">
                            <div class="content">
                        ${songName}
                            </div>`;
    search_results.appendChild(card);
});

let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
       let as= items[index].getElementsByClassName('content')[0];
       let text_value=as.textContent ||as.innerHTML;
       if (text_value.toUpperCase().indexOf(input_value) > -1) {
        items[index].style.display="flex";
       }
       else {
         items[index].style.display="none";
       }
       if(input.value == 0){
        search_results.style.display="none";
       }
       else{
        search_results.style.display=""; 
       }
    }
})
let follow = document.getElementById('follow');
let followerCount = document.getElementById('followerCount');

follow.addEventListener('click', () => {
    follow.innerText = "FOLLOWING";
    followerCount.innerHTML = `<span style="font-size:10px;color:#fff; padding: 4px 10px;">40.3M following</span>`;
});

  follow.addEventListener('dblclick',()=>{
    follow.innerHTML=`FOLLOW`;
     followerCount.innerHTML = "";
 });

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
       music.play();
       wave.classList.add('active1');
       masterPlay.classList.add('bi-pause-fill');
       masterPlay.classList.remove('bi-play-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
})

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
      
    })
}


const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,0)';
    })
}


let index =0;
// console.log(index);
// index++;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(index);
        music.src=`audio/alan/${index}.mp3`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
         download_music.href = `audio/alan/${index}.mp3`;

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster}=elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
            poster_master_play.src = poster;
        });
        makeAllBackground();
        Array.from(document.getElementById('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
})

let currentStart =document.getElementById('currentStart');
let currentEnd =document.getElementById('currentEnd');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let dot =document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    // console.log(music_dur);

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    // console.log(min1);
    // console.log(sec2);
    if(sec1<10)
    {
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(sec2<10)
        {
            sec2=`0${sec2}`;
        }
    currentStart.innerText=`${min2}:${sec2}`;
    
     let progressBar= parseInt((music_curr / music_dur)*100);
     seek.value=progressBar;
    //  console.log(seek.value);
    let seekbar =seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value* music.duration /100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value> 50)
    {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width =`${vol_a}%`;
    vol_dot.style.left =`${vol_a}%`;
    music.volume= vol_a /100;
});

let back= document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index <1){
        index=Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src=`audio/alan/${index}.mp3`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles=songs.filter((els)=>{
        return els.id== index;
    });
    songTitles.forEach(elss =>{
        let {songName,poster}=elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementById('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});


next.addEventListener('click',()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`audio/alan/${index}.mp3`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles=songs.filter((els)=>{
        return els.id== index;
    });
    songTitles.forEach(elss =>{
        let {songName,poster}=elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementById('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});






let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
});


let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
   item.scrollLeft+=330;
});

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML= 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML= 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML= 'next';
            break;
    }
})



const next_music = () =>{
       if (index ==songs.length) {
            index=1;
        }
        else{
             index++;
        }
        music.src=`audio/alan/${index}.mp3`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
         download_music.href = `audio/alan/${index}.mp3`;

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster}=elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
            poster_master_play.src = poster;
        });
        makeAllBackground();
        Array.from(document.getElementById('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}


const random_music = () =>{
      if (index ==songs.length) {
            index=1;
        }
        else{
             index=Math.floor((Math.random()*songs.length)+1);
        }
        music.src=`audio/alan/${index}.mp3`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
         download_music.href = `audio/alan/${index}.mp3`;

        let songTitles=songs.filter((els)=>{
            return els.id== index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster}=elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
            poster_master_play.src = poster;
        });
        makeAllBackground();
        Array.from(document.getElementById('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}


const repeat_music = () =>{
   index;
    music.src=`audio/alan/${index}.mp3`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
    download_music.href = `audio/alan/${index}.mp3`;

    let songTitles=songs.filter((els)=>{
        return els.id== index;
    });
    songTitles.forEach(elss =>{
        let {songName,poster}=elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
        poster_master_play.src = poster;
    });
        makeAllBackground();
        Array.from(document.getElementById('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML; 

    switch (b) {
        case 'repeat':
            repeat_music();
            break;

        case 'next':
            next_music();
            break;

        case 'random':
            random_music();
            break;
    }
});
