function getUserAnswer(){//获取用户答案
    let user_answer={};
    user_answer.blanks=getFillInTheBlanksAnswer();
    user_answer.select=getSelectAnswer();
    user_answer.multiselect=getMultiselectAnswer();
    user_answer.judge=getJudgeAnswer();
    user_answer.shortanswer=getShortAnswer();
    return user_answer;
}
function getFillInTheBlanksAnswer(){//获取填空题答案
    let fill_in_the_blanks=[];
    let blanks_1_value=$("#blanks_1").val();
    fill_in_the_blanks.push(blanks_1_value);
    let blanks_2_value=$("#blanks_2").val();
    fill_in_the_blanks.push(blanks_2_value);
    let blanks_3_value=$("#blanks_3").val();
    fill_in_the_blanks.push(blanks_3_value);
    let blanks_4_value=$("#blanks_4").val();
    fill_in_the_blanks.push(blanks_4_value);
    console.log("填空题答案:"+fill_in_the_blanks);
    return fill_in_the_blanks;
}

function getSelectAnswer(){//获取选择题答案
    let select_1_value = $("input[name='select_1']:checked").val();
    let select_2_value=$("input[name='select_2']:checked").val();
    let select_value=[];
    select_value.push(select_1_value);
    select_value.push(select_2_value);
    console.log("选择题答案:"+select_value);
    return select_value;
}

function getMultiselectAnswer(){//获取多选题答案
    let multiselect_value=[];
    let select1=[];
    let select2=[];
    $.each($("input[name='multiselect_1']:checked"),function(){
        select1.push($(this).val());
    })
    $.each($("input[name='multiselect_2']:checked"),function(){
        select2.push($(this).val());
    })
    let multiselect_1_value=$("input[name='multiselect_1']:checked").val();
    let multiselect_2_value=$("input[name='multiselect_1']:checked").val();
    multiselect_value.push(select1);
    multiselect_value.push(select2);
    console.log("多选题答案:"+multiselect_value);
    return multiselect_value;
}
function getMultiselectValue(radio){//获取多选选中的值
    let select_value=[];
    for(let i in radio){
        if(radio[i].checked==true){
            select_value.push(radio[i].value);
        }
    }
    return select_value;
}

function getJudgeAnswer(){//获取判断题答案
    let judge_value=[];
    let judge_1_value=$("input[name='judge_1']:checked").val();
    let judge_2_value=$("input[name='judge_2']:checked").val();
    judge_value.push(judge_1_value);
    judge_value.push(judge_2_value);
    console.log("判断题答案:"+judge_value);
    return judge_value;
}

function getShortAnswer(){//获取简答题答案
    let shortanswer_value=$("#short_answer_text").val();
    console.log("简答题答案:"+shortanswer_value);
    return shortanswer_value;
}