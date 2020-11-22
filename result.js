import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

class result_menu{
  private string menu_name;
  private string rest_1;
  private string rest_2;
  private string rest_3;
  private string rest_4;
  private string rest_5;
  private string rest_6;
  private string rest_7;
  private string rest_8;
  private string rest_9;
  private string rest_10;
  private string rest_11;
  public result_menu(string menu_name, string rest_1, string rest_2, string rest_3, string rest_4, string rest_5, string rest_6, string rest_7, string rest_8, string rest_9, string rest_10, string rest_11) {
    this.menu_name = menu_name;
    this.rest_1 = rest_1;
    this.rest_2 = rest_2;
    this.rest_3 = rest_3;
    this.rest_4 = rest_4;
    this.rest_5 = rest_5;
    this.rest_6 = rest_6;
    this.rest_7 = rest_7;
    this.rest_8 = rest_8;
    this.rest_9 = rest_9;
    this.rest_10 = rest_10;
    this.rest_11 = rest_11;
  }
  public string get_menu_name(){
    return menu_name;
  }
  public string get_rest_1(){
    return rest_1;
  }
  public string get_rest_2(){
    return rest_2;
  }
  public string get_rest_3(){
    return rest_3;
  }
  public string get_rest_4(){
    return rest_4;
  }
  public string get_rest_5(){
    return rest_5;
  }
  public string get_rest_6(){
    return rest_6;
  }
  public string get_rest_7(){
    return rest_7;
  }
  public string get_rest_8(){
    return rest_8;
  }
  public string get_rest_9(){
    return rest_9;
  }
  public string get_rest_10(){
    return rest_10;
  }
  public string get_rest_11(){
    return rest_11;
  }
}

public class test_menu_name{

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
function loading_random(){
	var gif_num = Math.floor(1+Math.random()*3);
	document.all.loading.innerHTML = "<img src='random_"+gif_num+".gif'>"
}

  function viewStyle(obj)  {
    while(true)  {
      if((obj=obj.nextSibling).nodeName=="DIV")  {
        obj.style.display=(obj.style.display!='block')?'block':'none';
        obj.style.fontsize = "12px";
        break;
      }
    }
  }
