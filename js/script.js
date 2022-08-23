console.log('(Настройки только начал, не оценивайте их, если они не готовы =)');
console.log('Ваша оценка - 105 баллов (Настройки только начал, не оценивайте их, если ои не готовы =)');
console.log('Отзыв по пунктам ТЗ:');
console.log('Не выполненные/не засчитанные пункты:');
console.log('1) переводится язык и меняется формат отображения даты ');
console.log('2) переводится приветствие и placeholder ');
console.log('3) переводится прогноз погоды в т.ч описание погоды и город по умолчанию ');
console.log('4) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая ');
console.log('5) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется ');
console.log('6) в качестве источника изображений может использоваться Unsplash API ');
console.log('7) в качестве источника изображений может использоваться Flickr API ');
console.log('8) в настройках приложения можно указать язык приложения (en/ru или en/be)  ');
console.log('9) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API ');
console.log('10) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото ');
console.log('11) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал ');
console.log('12) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их ');
console.log('13) настройки приложения сохраняются при перезагрузке страницы ');
console.log('14) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным ');
console.log('Выполненные пункты:');
console.log('1) время выводится в 24-часовом формате, например: 21:01:00 ');
console.log('2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) ');
console.log('3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" ');
console.log('4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток ');
console.log('5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется ');
console.log('6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз ');
console.log('7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) ');
console.log('8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) ');
console.log('9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения ');
console.log('10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage ');
console.log('11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел ');
console.log('12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) ');
console.log('13) при загрузке страницы приложения отображается рандомная цитата и её автор ');
console.log('14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) ');
console.log('15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause ');
console.log('16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play ');
console.log('17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) ');
console.log('18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем ');
console.log('19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. ');
console.log('20) добавлен прогресс-бар в котором отображается прогресс проигрывания ');
console.log('21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека ');
console.log('22) над прогресс-баром отображается название трека ');
console.log('23) отображается текущее и общее время воспроизведения трека ');
console.log('24) есть кнопка звука при клике по которой можно включить/отключить звук ');
console.log('25) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука ');
console.log('26) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте ');

import playList from './playList.js';
const TIME = document.querySelector('.time');
const DATE = document.querySelector('.date');
const GREETING = document.querySelector('.greeting');
const INPUT_NAME = document.querySelector('.name');
const BODY = document.querySelector('body');
const SLIDE_NEXT = document.querySelector('.slide-next')
const SLIDE_PREV = document.querySelector('.slide-prev')
const WEATHER_CITY = document.querySelector('.city')
const CHANGE_QUOTE_BUTTON = document.querySelector('.change-quote')
const QUOTE_TEXT = document.querySelector('.quote');
const QUOTE_AUTHOR = document.querySelector('.author')
const PLAY_BUTTON = document.querySelector('.play')
const PLAY_NEXT = document.querySelector('.play-next')
const PLAY_PREV = document.querySelector('.play-prev')
const PLAY_LIST = document.querySelector('.play-list')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherWind = document.querySelector('.wind')
const weatherHumidity = document.querySelector('.humidity')
const muteButton = document.querySelector('.mute-button')
const soundVolume = document.getElementById('soundVolume');
const durationTime = document.querySelector('.duration-player');
const durationProgress = document.getElementById('progress');
const timerProgress = document.getElementById('timer');
const audio = new Audio();
const playTrackName = document.querySelector('.player-track-name')
const SETTINGS_MENU_BUTTON = document.querySelector('.settings-button')
const CLOSE_SETTINGS_MENU = document.querySelector('.settings-close-button')
const settingsMenu = document.querySelector('.settings');
const BODY_BODY = document.querySelector('body');
const settingsType = document.querySelector('.settings__type');
const settingsList = document.querySelector('.settings__list');
const selectLanguage = document.querySelector('.item_language');
const settingsBG = document.querySelector('.item_bg-source');
const settingsDisplayBlocks = document.querySelector('.item_blocks');
const inputRu = document.getElementById('ruRU');
const inputEn = document.getElementById('enEN');
const bgApi = ['gitHub', 'unsplash', 'flickr'];
const selectTag = document.querySelector('select');

let currentPlaybutton;
let playlistArray;
let isTrackChanged = false;
let audioStopTime = 0;
let progressInterval;
let playliList = document.querySelectorAll('.play-item')
let pictureNumber = Math.floor((Math.random() * 20 + 1))
let currentSong = 0;
let isPlay = false;
let isMute = false;
let restoreVolume = 0;
let lastTrack;
let isMenuOpen = false;

let state = {
    language: 'ru',
    photoSource: 'gitHub',
    photoSourceTag: 'nature',
    blocks: ['time', 'date', 'greeting-container', 'quote-container', 'weather', 'player', 'todolist'],
    saveblocks: [true, true, true, true, true, true]
}



const settingsHandler = () => {
    // state.blocks; //   blocks: ['time', 'date', 'greeting', 'quote', 'weather', 'audio', 'todolist']
    // const checkboxSettings = document.querySelector('.checkbox-settings');
    const sliderCheckbox = document.querySelectorAll('.checkbox-settings');
    sliderCheckbox.forEach((element, index) => {
        element.addEventListener('input', () => {
            if (state.saveblocks[index] && sliderCheckbox[index].checked) {
                document.querySelector(`.${state.blocks[index]}`).classList.add('oppacity-invis');
                state.saveblocks[index] = false;
            }
            else {
                document.querySelector(`.${state.blocks[index]}`).classList.remove('oppacity-invis');
                state.saveblocks[index] = true;
            }
        })
    })

}

// let WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=Саратов&lang=ru&appid=492a828738e1d52d953d982da4a19666&units=metric`;
let WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=492a828738e1d52d953d982da4a19666&units=metric`;

const showTime = () => {
    const date = new Date();
    TIME.textContent = date.toLocaleTimeString();
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

const showDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    DATE.textContent = date.toLocaleDateString('en-EN', options);
}

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    const TIME_OF_DAY = ['night', 'morning', 'afternoon', 'evening'];
    return TIME_OF_DAY[Math.floor(hours / 6)]
}

const showGreeting = () => {
    GREETING.textContent = `Good ${getTimeOfDay()},`;//my dear friend
}

function setLocalStorage() {
    localStorage.setItem('name', INPUT_NAME.value);
    localStorage.setItem('city', WEATHER_CITY.value);
    localStorage.setItem('settingsBlocks', state.saveblocks);
    localStorage.setItem('lang', state.language);
    localStorage.setItem('photoSource', state.photoSource);
    localStorage.setItem('photoSourceTag', state.photoSourceTag);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        INPUT_NAME.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        WEATHER_CITY.value = localStorage.getItem('city');
        WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY.value}&lang=ru&appid=492a828738e1d52d953d982da4a19666&units=metric`
    }
    else {
        WEATHER_CITY.value = 'Минск'
    }

    if (localStorage.getItem('lang')) {
        state.language = localStorage.getItem('lang');
        if (state.language === 'ru') {
            inputRu.checked = true;
        }
        else inputEn.checked = true;
    }

    if (localStorage.getItem('photoSource')) {
        state.photoSource = localStorage.getItem('photoSource');
        document.getElementById(`${state.photoSource}`).checked = true
    }
    else document.getElementById('gitHub').checked = true

    if (localStorage.getItem('photoSourceTag')) {
        state.photoSourceTag = localStorage.getItem('photoSourceTag');
        selectTag.value = state.photoSourceTag;
    }

    if (state.photoSource === 'gitHub')
        selectTag.setAttribute("disabled", "disabled");
    else
        selectTag.removeAttribute("disabled", "disabled");


    if (localStorage.getItem('settingsBlocks')) {
        state.saveblocks = localStorage.getItem('settingsBlocks').split(',');
    }

    const sliderCheckbox = document.querySelectorAll('.checkbox-settings');
    state.saveblocks.forEach((element, index) => {
        if (element === 'false') {
            document.querySelector(`.${state.blocks[index]}`).classList.add('oppacity-invis');
            sliderCheckbox[index].checked = true;
        }
        else {
            document.querySelector(`.${state.blocks[index]}`).classList.remove('oppacity-invis');
            sliderCheckbox[index].checked = false;
        }
    })
    //    const sliderCheckbox = document.querySelectorAll('.checkbox-settings');
    // sliderCheckbox.forEach((element, index) => {
    //     if (state.saveblocks[index]) {
    //         document.querySelector(`.${state.blocks[index]}`).classList.add('oppacity-invis');
    //         state.saveblocks[index] = false;
    //     }
    //     else {
    //         document.querySelector(`.${state.blocks[index]}`).classList.remove('oppacity-invis');
    //         state.saveblocks[index] = true;
    //     }
    // })
    getWeather()
    setQuote();
}
window.addEventListener('load', getLocalStorage)
// setTimeout(window.addEventListener('DOMContentLoaded', getLocalStorage),500)

const setBg = () => {
    const img = new Image();
    const bgSource = `https://raw.githubusercontent.com/WhiteeST/Momentum-assets/assets/images/${getTimeOfDay()}/${pictureNumber < 10 ? '0' + pictureNumber : pictureNumber}.jpg`;
    img.src = bgSource;
    img.onload = () => {
        BODY.style.backgroundImage = "url('" + bgSource + "')";
        setTimeout(() => {
            document.querySelector('.content-container').classList.remove('oppacity-invis');
        }, 300);
    };
}

const getSlideNext = () => {
    pictureNumber = (pictureNumber === 20 ? pictureNumber = 1 : pictureNumber += 1);
    setBg();
}

const getSlidePrev = () => {
    pictureNumber = (pictureNumber === 1 ? pictureNumber = 20 : pictureNumber -= 1);
    setBg();
}

async function getWeather() {
    const url = WEATHER_API;
    try {
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        weatherWind.textContent = `Ветер ${Math.round(data.wind.speed)} м/c`;
        weatherHumidity.textContent = `Влажность ${Math.round(data.main.humidity)}%`;
    } catch (error) {
        console.error('Ошибка в getWeather:', error);
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        weatherWind.textContent = '';
        weatherHumidity.textContent = '';
        alert('City not found');
    }
}

WEATHER_CITY.addEventListener('change', (event) => {
    if (WEATHER_CITY.value) {
        WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY.value}&lang=ru&appid=492a828738e1d52d953d982da4a19666&units=metric`;
        getWeather()
    }
    else {
        alert('City not found');
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        weatherWind.textContent = '';
        weatherHumidity.textContent = '';
    }
})

async function getQuotes() {
    try {
        const quotes = './assets/data.json';
        // const quotes = 'https://favqs.com/api/qotd';
        const res = await fetch(quotes);
        const data = await res.json();
        let randomQuote = Math.floor((Math.random() * data.length))
        do {
            randomQuote = Math.floor((Math.random() * data.length))
        } while (data[randomQuote].text === QUOTE_TEXT.textContent);
        return data[randomQuote];
        // return data.quote;
    } catch (error) {
        console.error('error in getQuotes:', error);
        return 'Ошибка'
    }
}
// getQuotes();
const setQuote = async () => {
    const quote = await getQuotes()
    QUOTE_TEXT.textContent = quote.text || quote.body;
    QUOTE_AUTHOR.textContent = quote.author;
}

function playAudio() {
    if (isPlay) {
        lastTrack.classList.remove('pause');
        PLAY_BUTTON.classList.remove('pause')
        audio.pause();
        isPlay = false;
        audioStopTime = audio.currentTime
        clearInterval(progressInterval)
    }
    else {
        if (isTrackChanged) {
            audio.src = playList[currentSong].src;//берем src и название
            playTrackName.innerText = playList[currentSong].title;
            playliList[currentSong].classList.add('highlight-track');
            isTrackChanged = false;
            lastTrack.classList.remove('pause');
        }
        audio.play();
        isPlay = true;

        //добавляем pause большой и миникнопке
        PLAY_BUTTON.classList.add('pause');
        currentPlaybutton = playliList[currentSong].querySelector('.play');
        currentPlaybutton.classList.add('pause');

        //запоминаем последний трек для уборки pause и убираем с прошлой        
        lastTrack = currentPlaybutton;

        // Устанавливаем прогресс трека
        progressInterval = setInterval(() => {
            durationProgress.style.width = audio.currentTime / audio.duration * 100 + "%";
            timerProgress.innerText = getSongTime(audio.currentTime);
            if (audio.currentTime === audio.duration) {
                playNext();
            }
            // audioStopTime = audio.currentTime
        }, 500);
    }
}

audio.addEventListener('loadeddata', () => {
    const songDuration = document.getElementById('duration');
    const getTime = Math.floor(audio.duration);
    songDuration.innerText = getSongTime(getTime)
    audio.volume = soundVolume.value
});

function getSongTime(getTime) {
    let hours = Math.floor(getTime / 3600);
    let minutes = Math.floor(getTime / 60)
    let seconds = Math.floor(getTime % 60);
    hours === 0 ? hours = '' : hours < 10 ? hours = '0' + hours + ':' : hours = hours + ':';
    minutes === 0 ? minutes = '00' : minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
    seconds === 0 ? seconds = '00' : seconds < 10 ? seconds = '0' + seconds : seconds = seconds;
    return hours + minutes + ':' + seconds;
}

const playPrev = () => {
    isPlay = false;
    isTrackChanged = true;
    playliList[currentSong].classList.remove('highlight-track')
    currentSong === 0 ? currentSong = playliList.length - 1 : currentSong--;
    lastTrack.classList.remove('pause');
    playAudio();
}
const playNext = () => {
    isPlay = false;
    isTrackChanged = true;
    playliList[currentSong].classList.remove('highlight-track')
    currentSong === playliList.length - 1 ? currentSong = 0 : currentSong++;
    lastTrack.classList.remove('pause');
    currentPlaybutton = playliList[currentSong].querySelector('.play');
    lastTrack = currentPlaybutton;
    playAudio();
}
//Добавляем список треков на страницу
const addPlaylist = () => {
    // Загружаем и создаем плейлист
    playList.forEach(element => {
        const li = document.createElement('li');
        const button = document.createElement('button')
        button.className = 'play player-icon button-li';
        li.classList.add('play-item');
        li.append(button);
        li.append(element.title);
        PLAY_LIST.append(li);
    })
    playliList = document.querySelectorAll('.play-item');
    currentSong = 0;
    currentPlaybutton = playliList[currentSong].querySelector('.play'); //текущая мини-кнопка проиглывателя
    lastTrack = currentPlaybutton;//запомнили последний трек, чтобы убрать 'pause' при переключении

    audio.src = playList[currentSong].src;
    playliList[currentSong].classList.add('highlight-track');
    playTrackName.innerText = playList[currentSong].title;
    playlistArray = Array.from(playliList);
    //после загрузгки плейлиста вешаем на него listener
    playListListener();
}

const playListListener = () => {
    playliList.forEach(audioTrack => {
        audioTrack.addEventListener('click', (event) => {
            const saveCurrentSong = currentSong
            if (event.target.classList.contains('play')) { //если клик по кнопке
                // lastTrack.classList.remove('pause');
                currentSong = playlistArray.indexOf(event.currentTarget)
                // отключаем флаг, чтобы запустить заново
                if (event.target.classList.contains('pause'))
                    isPlay = true;
                else isPlay = false;
            }
            else {
                currentSong = playlistArray.indexOf(event.target);
                isPlay = false;
            }

            //передаем параметры нажатой кнопки 
            const checkLastSong = playliList[currentSong].querySelector('.play');
            lastTrack === checkLastSong ? isTrackChanged = false : isTrackChanged = true;
            if (isTrackChanged)
                playliList[saveCurrentSong].classList.remove('highlight-track');//удаляем выделение с прошлого трека
            // lastTrack = currentPlaybutton;
            playAudio()
        })
    })
}

const muteAudio = () => {
    if (!isMute) {
        restoreVolume = audio.volume;
        audio.volume = 0;
        soundVolume.value = 0;
        muteButton.classList.toggle('mute-button-active')
        isMute = true
    }
    else {
        audio.volume = restoreVolume;
        soundVolume.value = restoreVolume;
        muteButton.classList.toggle('mute-button-active')
        isMute = false
    }
}

//обработчик на ползунок громкости
soundVolume.addEventListener('input', () => {
    audio.volume = soundVolume.value;
    muteButton.classList.remove('mute-button-active')
    isMute = false
    if (!audio.volume) {
        isMute = true
        muteButton.classList.add('mute-button-active')
    }

})
muteButton.addEventListener('click', muteAudio);

//вешаем обработчик на перемотку трека
durationTime.addEventListener('click', (event) => {
    const durationTimeWidth = window.getComputedStyle(durationTime).width;
    const timeToSeek = event.offsetX / parseInt(durationTimeWidth) * audio.duration;
    audio.currentTime = timeToSeek;
    durationProgress.style.width = audio.currentTime / audio.duration * 100 + "%";
    timerProgress.innerText = getSongTime(audio.currentTime);
    audioStopTime = audio.currentTime;
})

settingsMenu.addEventListener('transitionend', () => {
    if (isMenuOpen) {
        settingsType.classList.remove('none-display');
        settingsList.classList.remove('none-display');
        CLOSE_SETTINGS_MENU.classList.remove('invisible');
        isMenuOpen = true;
    }
})

SETTINGS_MENU_BUTTON.addEventListener('click', (event) => {
    settingsMenu.classList.remove('invisible');
    settingsMenu.classList.remove('none-display');
    // settingsList.classList.remove('none-display');
    isMenuOpen = true;
    // settingsToolBar.classList.remove('none-display');
    // event.stopPropagation();

})
CLOSE_SETTINGS_MENU.addEventListener('click', () => {
    settingsMenu.classList.add('invisible');
    settingsList.classList.add('none-display');
    settingsType.classList.add('none-display');
    isMenuOpen = false
})


//закрытие меню по клику вне settings
BODY_BODY.addEventListener('click', (event) => {
    if (!event.path.find(element => element.classList != undefined ? element.classList.contains('settings') : false) && event.target != SETTINGS_MENU_BUTTON) {
        settingsType.classList.add('none-display')
        settingsMenu.classList.add('invisible');
        settingsList.classList.add('none-display');
        isMenuOpen = false;
    }
});



PLAY_BUTTON.addEventListener('click', playAudio);
PLAY_PREV.addEventListener('click', playPrev);
PLAY_NEXT.addEventListener('click', playNext);

window.addEventListener('load', addPlaylist)

SLIDE_NEXT.addEventListener('click', getSlideNext);
SLIDE_PREV.addEventListener('click', getSlidePrev);

CHANGE_QUOTE_BUTTON.addEventListener('click', setQuote)

selectLanguage.addEventListener('click', () => {
    document.querySelector('.settings__block_view').classList.remove('active');
    document.querySelector('.settings__bg-img').classList.remove('active')
    document.querySelector('.settings__lang').classList.add('active')
})
settingsBG.addEventListener('click', () => {
    document.querySelector('.settings__block_view').classList.remove('active');
    document.querySelector('.settings__lang').classList.remove('active')
    document.querySelector('.settings__bg-img').classList.add('active')
})

settingsDisplayBlocks.addEventListener('click', () => {
    document.querySelector('.settings__block_view').classList.add('active');
    document.querySelector('.settings__lang').classList.remove('active')
    document.querySelector('.settings__bg-img').classList.remove('active')
})

inputRu.addEventListener('input', () => {
    if (inputEn.checked) {
        inputRu.checked = true;
        inputEn.checked = false;
        state.language = 'ru';
    }
})
inputEn.addEventListener('input', () => {
    if (inputRu.checked) {
        inputRu.checked = false;
        inputEn.checked = true;
        state.language = 'en';
    }
})

bgApi.forEach(element => {
    document.getElementById(`${element}`).addEventListener('input', () => {
        state.photoSource = element;
        bgApi.forEach(source => {
            source === element ? document.getElementById(`${source}`).checked = true : document.getElementById(`${source}`).checked = false;
        })
        if (state.photoSource === 'gitHub')
            selectTag.setAttribute("disabled", "disabled");
        else
            selectTag.removeAttribute("disabled", "disabled");

    })
})

selectTag.addEventListener('change', () => {
    state.photoSourceTag = selectTag.value;
})
settingsHandler();
setBg();
showTime();