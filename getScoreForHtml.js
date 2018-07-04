document.write("<script type='text/javascript' src='./answer.js'></script>");
document.write("<script type='text/javascript' src='./getScore.js'></script>");
document.write("<script type='text/javascript' src='getUserAnswer.js'></script>");
function getScoreForHtml(){
    let system_answer=systemAnswer();
    let user_answer=getUserAnswer();
    let score=getScore(system_answer,user_answer);
    $("#score").val(score+"分");

    let id_arr=$("input")
    for(let i in id_arr){
        id_arr[i].disabled=true;
    }
     document.getElementById("short_answer_text").disabled=true;
}
