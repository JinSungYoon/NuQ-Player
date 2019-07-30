var express = require('express');
var router = express.Router();
var Youtube = require('youtube-node');
var youtube = new Youtube();

// 1.mongoose 모듈 가져오기
var mongoose = require('mongoose');
// 2. testDB 세팅
mongoose.connect('mongodb://localhost:27017/testDB');
// 3. 연결된 testDB 사용
var db = mongoose.connection;

// 4. 연결 실패
db.on('error',function(){
    console.log('Connection Failed');
});

db.once('open',function(){
    console.log('Connected!');
});

// 6. Schema 생성. 
var artistDB = mongoose.Schema({
  artistName : 'String',
  musicName : 'String',
  genre : 'String',
  releaseDate : 'String',
  lyrics : 'String'
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model()
var ArtistDB = mongoose.model('Schema',artistDB);

router.get('/', function(req, res, next) {
  res.render('home', { title: 'NuguFan Service'});
});

var artist;
var music;
var video_id;

// 한국어 check 함수
hangulCheck = (word) =>{
  var check = /[ㄱ-ㅎ]|ㅏ-ㅣ|가-힣]/g;
  var pattern_kor = /[ㄱ-ㅎ가-힣]/g;
  var temp=word;
  if(pattern_kor.test(temp)){
    temp.replace(/[A-Za-z]/g,"");
    console.log(temp);
    return temp;
  }
  else{
    console.log('한글이 없습니다.');
  }
}

function getRandomInt(min,max){
  return Math.floor(Math.random()*(max-min))+min;
}

router.get('/routes/index.js/search',function(req,res){
  artist = req.query.artist_name;
  //music = req.query.music_name;
  
  ArtistDB.findOne({artistName:artist,mNum:getRandomInt(1,7)},function(error,artistDB){
    console.log('--Read one---');
    if(error){
        console.log(error);
    }else{
        console.log
        music=artistDB.musicName;
    }
  });
  
  console.log(music);
  
  var word = artist+ " " + music;
  var limit = 1;

  youtube.setKey(''); // API 키 입력

  //// 검색 옵션 시작
  youtube.addParam('order', 'relevance'); // 평점 순으로 정렬
  youtube.addParam('type', 'video');   // 타입 지정

  youtube.search(word, limit, function (err, result) { // 검색 실행
      if (err) { console.log(err); return; } // 에러일 경우 에러공지하고 빠져나감
      var it ="";
      var title ="";
      video_id="";
      var url="";
      //console.log(JSON.stringify(result, null, 2)); // 받아온 전체 리스트 출력
  
      var items = result["items"]; // 결과 중 items 항목만 가져옴
      for (var i in items) { 
          it = items[i];
          title = it["snippet"]["title"];
          video_id = it["id"]["videoId"];
          url = "https://www.youtube.com/watch?v=" + video_id;
          console.log("제목 : " + title);
          console.log("URL : " + url);
          console.log("-----------");
          // 해당 url페이지를 열어서 보여준다.
      }
      console.log(title);
      res.render('streaming',{artist:artist,music:music,requrl:video_id,result:''});
  });

});

router.post('/routes/index.js/ans',function(req,res,next){
  var ans_artist = req.body.ans_artist_name;
  var ans_music = req.body.ans_music_name;
  console.log(ans_artist);
  console.log(ans_music);
  console.log(req.body.etime);
  if(artist===ans_artist && music===ans_music){
    res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'Correct'});
  }
  else if(artist===ans_artist){
    res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'Artist'});
  }
  else if(music==ans_music){
    res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'Music'});
  }
  else{
    res.render('streaming',{artist:artist,music:music,requrl:video_id,result:'None'});
  }
});

module.exports = router;
