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
var artist = mongoose.Schema({
    artistName : 'String',
    musicName : 'String',
    genre : 'String',
    releaseDate : 'String',
    lyrics : 'String',
    mNum : 'Number'
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model()
var Artist = mongoose.model('Schema',artist);

// 8. Artist 객체를 new로 생성해서 값을 입력
var btsBWL = new Artist({artistName:'BTS',musicName:'작은 것들을 위한 시(Boy With Luv)',genre:'K-PoP',releaseDate:'2019(year)',lyrics:"Oh my my my, oh my my my I've waited all my life 네 전부를 함께하고 싶어 Oh my my my, oh my my my…",mNum:1});
var btsIdol = new Artist({artistName:'BTS',musicName:'IDOL',genre:'K-PoP',releaseDate:'2018(year)',lyrics:'Oh oh ooh oh Oh oh ooh oh oh oh Oh oh ooh oh 덩기덕 쿵더러러 얼쑤…',mNum:2});
var btsDna = new Artist({artistName:'BTS',musicName:'DNA',genre:'K-PoP',releaseDate:'2018(year)',lyrics:'첫눈에 널 알아보게 됐어서롤 불러왔던 것처럼 내 혈관 속 DNA가 말해줘 ...',mNum:3});
var btsFire = new Artist({artistName:'BTS',musicName:'Fire',genre:'K-PoP',releaseDate:'2016(year)',lyrics:'싹 다 불태워라 Bow wow wow (Eh eh oh eh oh) 싹 다 불태워라 Bow wow wow…',mNum:4});
var btsMicdrop = new Artist({artistName:'BTS',musicName:'MIC Drop',genre:'K-PoP',releaseDate:'2018(year)',lyrics:"Did you see my bag? Did you see my bag? 트로피들로 백이 가득해 (가득해, 가득해) How you think about that?… ",mNum:5});
var btsFakelove = new Artist({artistName:'BTS',musicName:'FAKE LOVE',genre:'K-PoP',releaseDate:'2018(year)',lyrics:'널 위해서라면 난 슬퍼도 기쁜 척 할 수가 있었어 널 위해서라면 난 아파도 강한 척 할 수가 있었어 사랑이 사랑만으로 완벽하길 내 모든 약점들은 다 숨겨지길…',mNum:6});
var btsBST = new Artist({artistName:'BTS',musicName:'피 땀 눈물',genre:'K-PoP',releaseDate:'2016(year)',lyrics:'내 피 땀 눈물 내 마지막 춤을 다 가져가 가 내 피 땀 눈물…',mNum:7});
var btsINU = new Artist({artistName:'BTS',musicName:'I NEED U',genre:'K-PoP',releaseDate:'2015(year)',lyrics:'I need you girl 넌 아름다워 I need you girl 너무 차가워 I need you girl (I need you girl) I need you girl, I need you girl… ',mNum:8});

var blackpinkKTL = new Artist({artistName:'블랙핑크',musicName:'Kill This Love',genre:'K-PoP',releaseDate:'2019(year)',lyrics:'나 어떡해 나약한 날 견딜 수 없어 애써 두 눈을 가린 채 사랑의 숨통을 끊어야겠어…',mNum:1});
var blackpinkDDU = new Artist({artistName:'블랙핑크',musicName:'뚜두뚜두',genre:'K-PoP',releaseDate:'2019(year)',lyrics:"Oh wait til' I do what I do Hit you with that ddu-du ddu-du du Aye aye Hit you with that ddu-du ddu-du du…",mNum:2});
var blackpinkAIIYL = new Artist({artistName:'블랙핑크',musicName:'마지막처럼',genre:'K-PoP',releaseDate:'2016(year)',lyrics:"너 문데 자꾸 생각나 자존심 상해 애가 타 얼굴이 뜨겁고 가슴이 계속 뛰어 내 몸이 맘대로 안 돼 어지러워 넌 한줌의 모래 같아…",mNum:3});
var blackpinkBBY = new Artist({artistName:'블랙핑크',musicName:'붐바야',genre:'K-PoP',releaseDate:'2016(year)',lyrics:"붐바야 Yah yah yah 붐바야 Yah yah yah 붐바야 yah yah yah yah 붐붐바 붐붐바 (오빠!)…",mNum:4});
var blackpinkPWF = new Artist({artistName:'블랙핑크',musicName:'불장난',genre:'K-PoP',releaseDate:'2019(year)',lyrics:"우리 엄만 매일 내게 말했어 언제나 남자 조심하라고 사랑은 마치 불장난 같아서 다치니까 Eh…",mNum:5});
var blackpinkWhistle = new Artist({artistName:'블랙핑크',musicName:'휘파람',genre:'K-PoP',releaseDate:'2019(year)',lyrics:"Hey boy Make' em whistle like a missile bomb bomb Every time I show up, blow up (uh) Make' em whistle like a missile bomb bomb…",mNum:6});
var blackpinkFY = new Artist({artistName:'블랙핑크',musicName:'휘파람',genre:'K-PoP',releaseDate:'2019(year)',lyrics:"떠나지 마 just stay 지금 이 시간을 멈춘 채 너와 함게라면 난 I could die in this moment Forever young…",mNum:7});

// blackpinkFY.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('7 saved!');
//     }
// });

// blackpinkWhistle.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('6 saved!');
//     }
// });

// blackpinkPWF.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('5 saved!');
//     }
// });

// blackpinkBBY.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('4 saved!');
//     }
// });

// blackpinkAIIYL.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('3 saved!');
//     }
// });

// blackpinkDDU.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('2 saved!');
//     }
// });

// blackpinkKTL.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('1 saved!');
//     }
// });

// btsBWL.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('1 saved!');
//     }
// });

// btsIdol.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('2 saved!');
//     }
// });

// btsDna.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('3 saved!');
//     }
// });

// btsFire.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('4 saved!');
//     }
// });

// btsMicdrop.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('5 saved!');
//     }
// });

// btsFakelove.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('6 saved!');
//     }
// });

// btsBST.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('7 saved!');
//     }
// });

// btsINU.save(function(error,data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('8 saved!');
//     }
// });

// 9. 데이터 저장
// newArtist.save(function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Saved!');
//     }
// });

// 12. 특정 아이디값 가져오기
// Artist.findOne({artistName:'BTS'},function(error,artist){
//     console.log('--Read one---');
//     if(error){
//         console.log(error);
//     }else{
//         console.log(artist);
//     }
// });

// 12. 데이터 지우기
// Artist.remove({_id:'5d1b1315925ea623c4be4bc8'},function(error,output){
//     console.log('-- Delete --');
//     if(error){
//         console.log(error);
//     }
//     console.log('-- Delete Complete --');
// });

// 10. Student 레퍼런스 전체 데이터 가져오기
Artist.find(function(error,artist){
    console.log('--- Read all ---');
    if(error){
        console.log(error);
    }else{
        console.log(artist);
    }
});