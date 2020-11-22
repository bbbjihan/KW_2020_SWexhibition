var menus = ["샌드위치/토스트", "브리또", "토스트", "빵", "도넛", "컵밥", "도시락", "샐러드", "만두", "닭강정", "짬뽕", "마라탕", "짜장", "볶음밥", "양꼬치", "스파게티", "피자", "라면", "우동", "김밥", "떡볶이", "순대", "칼국수", "멸치국수", "비빔국수, 쫄면", "냉면", "덮밥", "볶음밥", "죽", "백반", "곱창", "고기", "닭갈비", "철판볶음", "만둣국, 떡국", "국밥", "찌개", "부대찌개", "쌀국수", "초밥", "회", "아구찜", "치킨", "돈가스", "샤브샤브", "족발", "카레"];
var rest_list_all =["rest_list_0","rest_list_1","rest_list_2","rest_list_3","rest_list_4","rest_list_5","rest_list_6","rest_list_7","rest_list_8","rest_list_9","rest_list_10","rest_list_11","rest_list_12","rest_list_13","rest_list_14","rest_list_15","rest_list_16","rest_list_17","rest_list_18","rest_list_19","rest_list_20","rest_list_21","rest_list_22","rest_list_23","rest_list_24","rest_list_25","rest_list_26","rest_list_27","rest_list_28","rest_list_29","rest_list_30","rest_list_31","rest_list_32","rest_list_33","rest_list_34","rest_list_35","rest_list_36","rest_list_37","rest_list_38","rest_list_39","rest_list_40","rest_list_41","rest_list_42","rest_list_43","rest_list_44","rest_list_45","rest_list_46"];

var rests = ["파리바게뜨", "던킨도넛", "지지고", "김밥천국", "레드컵스", "친친", "수해복", "광운양꼬치", "오스토테이블", "어께를피자", "본죽", "엄마의밥상", "만남곱창", "마포연탄불고기", "중화호반닭갈비", "한끼철판", "할매순대국", "베트남노상식당", "착한초밥", "여자만아구찜", "맛닭꼬", "윤스쿡", "쌈", "착한족발", "뚜레쥬르", "밥은", "김가네", "그옛날 1947 왕만두", "큰집닭강정", "미식성", "신연", "여우곱창", "로스2000", "이층집", "썬더치킨", "셰프의 돈까스", "브래댄코", "마루", "한솥", "진짜루", "작은집", "피자헤븐", "디델리", "진국", "월계숯불갈비", "놀부부대찌개", "오븐마루", "서브웨이", "경대컵밥", "더원", "파파존스", "다이천", "돈장군", "치킨플러스", "고씨네", "장수국수", "엽떡", "언니떡볶이동생브리또", "서초우동", "아그집", "베트남노상", "삼대냉면", "뚝배기", "후문식당", "학땡", "끝집", "BBQ", "이삭토스트", "신전", "도미노", "화로상회", "팔팔전어횟집"];
var rest_info_all =["rest_info_0","rest_info_1","rest_info_2","rest_info_3","rest_info_4","rest_info_5","rest_info_6","rest_info_7","rest_info_8","rest_info_9","rest_info_10","rest_info_11","rest_info_12","rest_info_13","rest_info_14","rest_info_15","rest_info_16","rest_info_17","rest_info_18","rest_info_19","rest_info_20","rest_info_21","rest_info_22","rest_info_23","rest_info_24","rest_info_25","rest_info_26","rest_info_27","rest_info_28","rest_info_29","rest_info_30","rest_info_31","rest_info_32","rest_info_33","rest_info_34","rest_info_35","rest_info_36","rest_info_37","rest_info_38","rest_info_39","rest_info_40","rest_info_41","rest_info_42","rest_info_43","rest_info_44","rest_info_45","rest_info_46","rest_info_47","rest_info_48","rest_info_49","rest_info_50","rest_info_51","rest_info_52","rest_info_53","rest_info_54","rest_info_55","rest_info_56","rest_info_57","rest_info_58","rest_info_59","rest_info_60","rest_info_61","rest_info_62","rest_info_63","rest_info_64","rest_info_65","rest_info_66","rest_info_67","rest_info_68","rest_info_69","rest_info_70","rest_info_71"];

var rest_list_0=["파리바게뜨", "뚜레쥬르", "브래댄코", "서브웨이", "이삭토스트", "언니떡볶이동생브리또"];
var rest_list_1=["파리바게뜨", "뚜레쥬르", "브래댄코", "서브웨이", "언니떡볶이동생브리또"];
var rest_list_2=["이삭토스트"];
var rest_list_3=["파리바게뜨", "뚜레쥬르", "브래댄코" ];
var rest_list_4=["던킨도넛", "끝집"];
var rest_list_5=["지지고", "밥은", "마루", "경대컵밥", "신전"];
var rest_list_6=["김밥천국", "김가네", "한솥"];
var rest_list_7=["파리바게뜨", "뚜레쥬르", "브래댄코", "서브웨이"];
var rest_list_8=["김밥천국", "그옛날 1947 왕만두", "끝집"];
var rest_list_9=["레드컵스", "큰집닭강정"];
var rest_list_10=["친친", "미식성", "진짜루", "더원"];
var rest_list_11=["수해복", "신연"];
var rest_list_12=["친친", "미식성", "진짜루", "더원"];
var rest_list_13=["친친", "미식성", "진짜루", "더원"];
var rest_list_14=["광운양꼬치"];
var rest_list_15=["오스토테이블", "작은집"];
var rest_list_16=["어께를피자", "오스토테이블", "피자헤븐", "파파존스", "도미노"];
var rest_list_17=["김밥천국", "김가네", "디델리", "작은집", "후문식당", "서초우동"];
var rest_list_18=["김밥천국", "김가네", "디델리", "작은집", "후문식당", "장수국수", "서초우동"];
var rest_list_19=["김밥천국", "김가네", "디델리", "다이천", "신전"];
var rest_list_20=["김밥천국", "김가네", "디델리", "다이천", "신전", "엽떡", "언니떡볶이동생브리또"];
var rest_list_21=["다이천"];
var rest_list_22=["김밥천국", "김가네", "작은집", "장수국수", "학땡", "끝집"];
var rest_list_23=["장수국수", "서초우동"];
var rest_list_24=["김밥천국", "김가네", "디델리", "장수국수", "서초우동"];
var rest_list_25=["김밥천국", "김가네", "진국", "학땡", "서초우동", "끝집", "삼대냉면"];
var rest_list_26=["김밥천국", "김가네", "디델리", "작은집", "후문식당", "뚝배기", "아그집", "한솥", "베트남노상", "윤스쿡", "밥은"];
var rest_list_27=["김밥천국", "김가네", "디델리", "작은집", "후문식당", "뚝배기", "아그집", "한솥", "베트남노상", "윤스쿡", "밥은"];
var rest_list_28=["본죽", "작은집"];
var rest_list_29=["엄마의밥상"];
var rest_list_30=["만남곱창", "여우곱창"];
var rest_list_31=["마포연탄불고기", "로스2000", "월계숯불갈비", "돈장군", "화로상회", "쌈"];
var rest_list_32=["중화호반닭갈비"];
var rest_list_33=["한끼철판"];
var rest_list_34=["김밥천국", "김가네", "작은집", "후문식당"];
var rest_list_35=["할매순대국"];
var rest_list_36=["김밥천국", "김가네", "작은집", "학땡", "후문식당", "뚝배기", "아그집", "한솥"];
var rest_list_37=["김밥천국", "이층집", "놀부부대찌개"];
var rest_list_38=["베트남노상식당"];
var rest_list_39=["착한초밥"];
var rest_list_40=["팔팔전어횟집"];
var rest_list_41=["여자만아구찜"];
var rest_list_42=["맛닭꼬", "썬더치킨", "오븐마루", "치킨플러스", "BBQ"];
var rest_list_43=["윤스쿡", "셰프의 돈까스", "고씨네"];
var rest_list_44=["쌈"];
var rest_list_45=["착한족발"];
var rest_list_46=["디델리", "고씨네"];
var rest_info_0=["파리바게뜨", "http://naver.me/Fh6lTEMt", "샌드위치/토스트, 브리또, 빵, 샐러드"];
var rest_info_1=["던킨도넛", "http://naver.me/Ff4xzlgB", "도넛"];
var rest_info_2=["지지고", "http://naver.me/GpPW0ItW", "컵밥"];
var rest_info_3=["김밥천국", "http://naver.me/GAn01waL", "도시락, 만두, 라면, 우동, 김밥, 떡볶이, 칼국수, 비빔국수/쫄면, 냉면, 덮밥, 볶음밥, 만둣국/떡국, 찌개, 부대찌개"];
var rest_info_4=["레드컵스", "http://naver.me/GGu3JSjS", "닭강정"];
var rest_info_5=["친친", "http://naver.me/5gxmrErP", "짬뽕, 짜장, 볶음밥"];
var rest_info_6=["수해복", "http://naver.me/GxsERIKD", "마라탕"];
var rest_info_7=["광운양꼬치", "http://naver.me/5I4NsyQF", "양꼬치"];
var rest_info_8=["오스토테이블", "http://naver.me/xT7JSvhw", "스파게티, 피자"];
var rest_info_9=["어께를피자", "http://naver.me/5Pij2tlz", "피자"];
var rest_info_10=["본죽", "http://naver.me/GP4LVffF", "죽"];
var rest_info_11=["엄마의밥상", "http://naver.me/5G4Be7D1", "백반"];
var rest_info_12=["만남곱창", "http://naver.me/GmaDQXpZ", "곱창"];
var rest_info_13=["마포연탄불고기", "http://naver.me/G4Iesm4F", "고기"];
var rest_info_14=["중화호반닭갈비", "http://naver.me/5fEk9aZM", "닭갈비"];
var rest_info_15=["한끼철판", "http://naver.me/xy2w80MZ", "철판볶음"];
var rest_info_16=["할매순대국", "http://naver.me/5aI9tOgq", "국밥"];
var rest_info_17=["베트남노상식당", "http://naver.me/GFDkel2v", "쌀국수"];
var rest_info_18=["착한초밥", "http://naver.me/5KlKr48E", "초밥"];
var rest_info_19=["여자만아구찜", "http://naver.me/5vBNobic", "아구찜"];
var rest_info_20=["맛닭꼬", "http://naver.me/58hlFSjm", "치킨"];
var rest_info_21=["윤스쿡", "http://naver.me/5QxvDXBq", "덮밥, 볶음밥, 돈가스"];
var rest_info_22=["쌈", "http://naver.me/GLYkAfMZ", "고기, 샤브샤브"];
var rest_info_23=["착한족발", "http://naver.me/5bawPpxM", "족발"];
var rest_info_24=["뚜레쥬르", "http://naver.me/5jWOqPS3", "샌드위치/토스트, 브리또, 빵, 샐러드"];
var rest_info_25=["밥은", "http://naver.me/GOxkCikP", "컵밥, 덮밥, 볶음밥"];
var rest_info_26=["김가네", "http://naver.me/51gxEmoS", "도시락, 라면, 우동, 김밥, 떡볶이, 칼국수, 비빔국수/쫄면, 냉면, 덮밥, 볶음밥, 만둣국/떡국, 찌개"];
var rest_info_27=["그옛날 1947 왕만두", "http://naver.me/55XQV4TQ", "만두"];
var rest_info_28=["큰집닭강정", "http://naver.me/57pGatCc", "닭강정"];
var rest_info_29=["미식성", "http://naver.me/FLSLKldW", "짬뽕, 짜장, 볶음밥"];
var rest_info_30=["신연", "http://naver.me/5G4W5PQT", "마라탕"];
var rest_info_31=["여우곱창", "http://naver.me/xBDvbzbH", "곱창"];
var rest_info_32=["로스2000", "http://naver.me/FtvFVC8n", "고기"];
var rest_info_33=["이층집", "http://naver.me/5jW5Ypc4", "부대찌개"];
var rest_info_34=["썬더치킨", "http://naver.me/GslvSHOc", "치킨"];
var rest_info_35=["셰프의 돈까스", "http://naver.me/GAnvGK8D", "돈가스"];
var rest_info_36=["브래댄코", "http://naver.me/GNKYArH4", "샌드위치/토스트, 브리또, 빵, 샐러드"];
var rest_info_37=["마루", "http://naver.me/x01jGC2w", "컵밥"];
var rest_info_38=["한솥", "http://naver.me/5w5LKodq", "도시락, 덮밥, 볶음밥, 찌개"];
var rest_info_39=["진짜루", "http://naver.me/5vBvYkgr", "짬뽕, 짜장, 볶음밥"];
var rest_info_40=["작은집", "http://naver.me/5zHIothl", "스파게티, 라면, 우동, 칼국수, 덮밥, 볶음밥, 죽, 만둣국/떡국, 찌개"];
var rest_info_41=["피자헤븐", "http://naver.me/GWKMrUoW", "피자"];
var rest_info_42=["디델리", "http://naver.me/xfh6OUSj", "라면, 우동, 김밥, 떡볶이, 비빔국수/쫄면, 덮밥, 볶음밥, 카레"];
var rest_info_43=["진국", "http://naver.me/F1RCMJUN ", "냉면"];
var rest_info_44=["월계숯불갈비", "http://naver.me/FsFAu1sE", "고기"];
var rest_info_45=["놀부부대찌개", "http://naver.me/xUJCrz97", "부대찌개"];
var rest_info_46=["오븐마루", "http://naver.me/GCMe1Rj2", "치킨"];
var rest_info_47=["서브웨이", "http://naver.me/F8Rt778M", "샌드위치/토스트, 브리또, 샐러드"];
var rest_info_48=["경대컵밥", "http://naver.me/5fEk99yG", "컵밥"];
var rest_info_49=["더원", "http://naver.me/xjNIrrDe", "짬뽕, 짜장, 볶음밥"];
var rest_info_50=["파파존스", "http://naver.me/GEqnuVPs", "피자"];
var rest_info_51=["다이천", "http://naver.me/x1XT7U9Y", "김밥, 떡볶이, 순대"];
var rest_info_52=["돈장군", "http://naver.me/x4c8VV3j", "고기"];
var rest_info_53=["치킨플러스", "http://naver.me/xtbtXX2i", "치킨"];
var rest_info_54=["고씨네", "http://naver.me/G9bysQQp", "돈가스, 카레"];
var rest_info_55=["장수국수", "http://naver.me/5JYM77Me", "우동, 칼국수, 멸치국수, 비빔국수/쫄면"];
var rest_info_56=["엽떡", "http://naver.me/FkpDdlQg", "떡볶이"];
var rest_info_57=["언니떡볶이동생브리또", "http://naver.me/GP4LVVcc", "샌드위치/토스트, 브리또, 떡볶이"];
var rest_info_58=["서초우동", "http://naver.me/FqVjMkDa", "라면, 우동, 멸치국수, 비빔국수/쫄면, 냉면"];
var rest_info_59=["아그집", "http://naver.me/Gz7VH7ij", "덮밥, 볶음밥, 찌개"];
var rest_info_60=["베트남노상", "http://naver.me/GFDkel2v", "덮밥, 볶음밥"];
var rest_info_61=["삼대냉면", "http://naver.me/GVb3CsSY", "냉면"];
var rest_info_62=["뚝배기", "http://naver.me/5df5yXRQ", "덮밥, 볶음밥, 찌개"];
var rest_info_63=["후문식당", "http://naver.me/GKmKvGyB", "라면, 우동, 덮밥, 볶음밥, 만둣국/떡국, 찌개"];
var rest_info_64=["학땡", "http://naver.me/GGuLU1v5", "칼국수, 냉면, 찌개"];
var rest_info_65=["끝집", "http://naver.me/GtjFmlJq", "도넛, 만두, 칼국수, 냉면"];
var rest_info_66=["BBQ", "http://naver.me/x7tX0yfS", "치킨"];
var rest_info_67=["이삭토스트", "http://naver.me/Ff4xzmQY", "샌드위치/토스트, 토스트"];
var rest_info_68=["신전", "http://naver.me/FbBxiKLV", "컵밥, 김밥, 떡볶이"];
var rest_info_69=["도미노", "http://naver.me/FLSLKXG5", "피자"];
var rest_info_70=["화로상회", "http://naver.me/5sEan2d6", "고기"];
var rest_info_71=["팔팔전어횟집", "http://naver.me/GYpBXW1I", "회"];

function print_listpage(){
  var list_HTML = ""
  for (var i = 0; i < rest_info_all.length; i++) {
    var arrayname = rest_info_all[i]
    list_HTML = list_HTML + "<tr><td>"+ eval(arrayname)[0] +"</td></tr>"
  }
  document.all.rest_table.innerHTML = list_HTML
}
function move(n,m){
  n = n + Math.floor(Math.random()*m);
  location.replace( n +".html");
}
function print_menu(n){
  document.all.MENU.innerHTML = "<h3>" + menus[n] + "</h3>"
}
function rest_list(n){
	var list_name = rest_list_all[n];
	var list_HTML = ""
	for (var i = 0; i < eval(list_name).length; i++) {
		for (var j = 0; j < rests.length; j++) {
			if (eval(list_name)[i] == rests[j]){
				var URL = eval("rest_info_"+j+"[2]")
			}
		}
		URL = "location.href='"+ URL +"'"
		list_HTML = list_HTML + "<tr><td onclick="+ URL +">"+ eval(list_name)[i] +"</td></tr>"
	}
	document.all.rest_table.innerHTML = list_HTML
}

function text_onmouseover_1(object){
	object.style.background='rgb(244,186,147)';
	object.style.color='rgb(156,71,14)';
}//마우스오버(1번박스)
function text_onmouseout_1(object){
	object.style.background='rgb(251,229,215)';
}//마우스아웃(1번박스)
function text_onmouseover_2(object){
	object.style.background='rgb(244,186,147)';
	object.style.color='rgb(156,71,14)';
}//마우스오버(2번박스)
function text_onmouseout_2(object){
	object.style.background='rgb(248,203,172)';
}//마우스아웃(2번박스)
function text_onmouseover_3(object){
	object.style.background='rgb(240,150,89)';
	object.style.color='rgb(156,71,14)';
}//마우스오버(3번박스)
function text_onmouseout_3(object){
	object.style.background='rgb(244,177,132)';
}//마우스아웃(3번박스)
function url_1(){
		alert("테스트2입니다요.");
}
function url_2(){
		alert("테스트2입니다요.");
}
function url_3(){
		alert("테스트2입니다요.");
}
function loading_random(){
	var gif_num = Math.floor(1+Math.random()*3);
	document.all.loading.innerHTML = "<img src='random_"+gif_num+".gif'>"
}
function test(){
	var i = 37
	location.replace("question_1_1.html")
}
