let alertPlaceholder=document.getElementById("liveAlertPlaceholder");function clear_alert(){let e=document.querySelectorAll(".alert");[].slice.call(e).map(function(e){return new bootstrap.Alert(e)}).map(function(e){e.close()})}function alert(e,t,l){clear_alert();let a=document.createElement("div");a.innerHTML='<div class="alert alert-'+t+' d-flex align-items-center alert-dismissible mx-auto w_custom" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img"><use xlink:href="#'+l+'"/></svg>'+e+'<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>',alertPlaceholder.appendChild(a),setTimeout(function(){a.innerHTML=""},2e3)}let nowDate=new Date,nowHour=nowDate.getHours(),now_img=document.getElementById("now_img");function getChineseCharacter(){let randomNum,unicodeString,chineseCharacter;return eval("'\\u"+Math.floor(-20901*Math.random()+40869).toString(16)+"'")}function getFirstname(){let e=getChineseCharacter();return .5>Math.random()&&(e+=getChineseCharacter()),e}function getLastname(){let e=["赵","钱","孙","李","周","吴","郑","王","冯","陈","褚","卫","蒋","沈","韩","杨","朱","秦","尤","许","何","吕","施","张","孔","曹","严","华","金","魏","陶","姜","戚","谢","邹","喻","柏","水","窦","章","云","苏","潘","葛","奚","范","彭","郎","鲁","韦","昌","马","苗","凤","花","方","俞","任","袁","柳","酆","鲍","史","唐","费","廉","岑","薛","雷","贺","倪","汤","滕","殷","罗","毕","郝","邬","安","常","乐","于","时","傅","皮","卞","齐","康","伍","余","元","卜","顾","孟","平","黄","和","穆","萧","尹","姚","邵","湛","汪","祁","毛","禹","狄","米","贝","明","臧","计","伏","成","戴","谈","宋","茅","庞","熊","纪","舒","屈","项","祝","董","梁","杜","阮","蓝","闵","席","季","麻","强","贾","路","娄","危","江","童","颜","郭","梅","盛","林","刁","钟","徐","邱","骆","高","夏","蔡","田","樊","胡","凌","霍","虞","万","支","柯","昝","管","卢","莫","经","房","裘","缪","干","解","应","宗","丁","宣","贲","邓","郁","单","杭","洪","包","诸","左","石","崔","吉","钮","龚","程","嵇","邢","滑","裴","陆","荣","翁","荀","羊","於","惠","甄","曲","家","封","芮","羿","储","靳","汲","邴","糜","松","井","段","富","巫","乌","焦","巴","弓","牧","隗","山","谷","车","侯","宓","蓬","全","郗","班","仰","秋","仲","伊","宫","宁","仇","栾","暴","甘","钭","厉","戎","祖","武","符","刘","景","詹","束","龙","叶","幸","司","韶","郜","黎","蓟","薄","印","宿","白","怀","蒲","邰","从","鄂","索","咸","籍","赖","卓","蔺","屠","蒙","池","乔","阴","胥","能","苍","双","闻","莘","党","翟","谭","贡","劳","逄","姬","申","扶","堵","冉","宰","郦","雍","郤","璩","桑","桂","濮","牛","寿","通","边","扈","燕","冀","郏","浦","尚","农","温","别","庄","晏","柴","瞿","阎","充","慕","连","茹","习","宦","艾","鱼","容","向","古","易","慎","戈","廖","庾","终","暨","居","衡","步","都","耿","满","弘","匡","国","文","寇","广","禄","阙","东","欧","殳","沃","利","蔚","越","夔","隆","师","巩","厍","聂","晁","勾","敖","融","冷","訾","辛","阚","那","简","饶","空","曾","毋","沙","乜","养","鞠","须","丰","巢","关","蒯","相","查","後","荆","红","游","竺","权","逯","盖","益","桓","公","万俟","司马","上官","欧阳","夏侯","诸葛","闻人","东方","赫连","皇甫","尉迟","公羊","澹台","公冶","宗政","濮阳","淳于","单于","太叔","申屠","公孙","仲孙","轩辕","令狐","钟离","宇文","长孙","慕容","鲜于","闾丘","司徒","司空","亓官","司寇","仉","督","子车","颛孙","端木","巫马","公西","漆雕","乐正","壤驷","公良","拓跋","夹谷","宰父","谷梁","晋","楚","闫","法","汝","鄢","涂","钦","段干","百里","东郭","南门","呼延","归","海","羊舌","微生","岳","帅","缑","亢","况","后","有","琴","梁丘","左丘","东门","西门","商","牟","佘","佴","伯","赏","南宫","墨","哈","谯","笪","年","爱","阳","佟","第五","言","福"];return e[Math.floor(Math.random()*e.length)]}function getName(){return getLastname()+getFirstname()}function getCardID(e,t,l){let a="330101",n=Math.floor(Math.random()*(e-t)+t),i=new Date().getFullYear();if(a+=(i-n).toString(),n==e||n==t)a+="0101";else{let s=Math.floor(12*Math.random()+1);a+=([,,].join(0)+parseInt(s)).slice(-2);let c=0;switch(s){case 1:case 3:case 5:case 7:case 8:case 10:case 12:c=Math.floor(31*Math.random()+1);break;case 4:case 6:case 9:case 11:c=Math.floor(30*Math.random()+1);break;case 2:c=i%4==0&&i%100!=0?Math.floor(29*Math.random()+1):Math.floor(28*Math.random()+1)}a+=([,,].join(0)+parseInt(c)).slice(-2)}let r="all";switch(l){case 1:r="female";break;case 2:r="male"}let o=0;if("all"===r)o=Math.floor(1e3*Math.random());else if("female"===r)do o=Math.floor(1e3*Math.random());while(o%2>0);else do o=Math.floor(1e3*Math.random());while(o%2==0);let d=(7*(a+=([,,,].join(0)+o).slice(-3))[0]+9*a[1]+10*a[2]+5*a[3]+8*a[4]+4*a[5]+2*a[6]+1*a[7]+6*a[8]+3*a[9]+7*a[10]+9*a[11]+10*a[12]+5*a[13]+8*a[14]+4*a[15]+2*a[16])%11;switch(d){case 0:a+="1";break;case 1:a+="0";break;case 2:a+="X";break;case 3:a+="9";break;case 4:a+="8";break;case 5:a+="7";break;case 6:a+="6";break;case 7:a+="5";break;case 8:a+="4";break;case 9:a+="3";break;case 10:a+="2"}return a}function getMobile(e){let t=[],l=[192],a=[134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188,195,197,198],n=[133,153,173,177,180,181,189,190,191,193,199],i=[130,131,132,145,155,156,166,175,176,185,186,196];switch(e){case 0:return"";case 1:t.splice(1,0,l);break;case 3:t.splice(1,0,a);break;case 5:t.splice(1,0,n);break;case 10:t.splice(1,0,i);break;case 4:t.splice(1,0,l),t.splice(1,0,a);break;case 6:t.splice(1,0,l),t.splice(1,0,n);break;case 11:t.splice(1,0,l),t.splice(1,0,i);break;case 13:t.splice(1,0,a),t.splice(1,0,n);break;case 15:t.splice(1,0,n),t.splice(1,0,i);break;case 9:t.splice(1,0,l),t.splice(1,0,a),t.splice(1,0,n);break;case 16:t.splice(1,0,l),t.splice(1,0,n),t.splice(1,0,i);break;case 18:t.splice(1,0,a),t.splice(1,0,n),t.splice(1,0,i);break;case 19:t.splice(1,0,l),t.splice(1,0,a),t.splice(1,0,n),t.splice(1,0,i)}let s=0;for(let c=0;c<t.length;c++)s+=t[c].length;let r=Math.floor(Math.random()*s),o=0;for(let d=0;d<t.length;d++)if(r>=t[d].length)r-=t[d].length;else{o=t[d][r];break}let h=o.toString();for(let m=0;m<8;m++)h+=t_char=String.fromCharCode(Math.floor(10*Math.random())+48);return h}function getRandomString(e,t){let l="",a;if(t)for(let n=0;n<e;n++){let i=Math.floor(36*Math.random());l+=a=i<10?String.fromCharCode(i+48):String.fromCharCode(i+87)}else for(let s=0;s<e;s++)l+=a=String.fromCharCode(Math.floor(10*Math.random())+48);return l}function download(e,t){let l=document.createElement("a"),a="\uFEFF";return l.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(a+t)),l.setAttribute("download",e),l.style.display="none",document.body.appendChild(l),l.click(),document.body.removeChild(l),new Date().getTime()}null!==now_img&&nowHour>6&&nowHour<19&&(document.getElementById("now_img").src="../../assets/img/random/sun.png"),function(){let e=document.getElementById("export_row_num"),t=1,l=document.getElementById("export_row_num_disp");e.addEventListener("change",function(){if(this.classList.contains("is-valid")?this.classList.remove("is-valid"):this.classList.contains("is-invalid")&&this.classList.remove("is-invalid"),""===this.value)return;let e=document.getElementById("export_row_num_tip"),a=1*this.value;a<1||a>524288?(e.innerHTML="Length in 2^0~2^19 are allowed",this.classList.add("is-invalid")):(this.classList.add("is-valid"),a!==parseInt(l.innerText)&&(l.innerText=a),t=a)});let a=document.getElementById("check_box_female"),n=document.getElementById("check_box_male");a.addEventListener("change",function(){clear_alert(),a.checked||n.checked||(setTimeout('alert("Choose at least one gender.", "danger", "ban")',150),a.checked=!0)}),n.addEventListener("change",function(){clear_alert(),a.checked||n.checked||(setTimeout('alert("Choose at least one gender.", "danger", "ban")',150),n.checked=!0)});let i=document.getElementById("minimum_age"),s=document.getElementById("maximum_age");i.addEventListener("change",function(){if(this.classList.contains("is-valid")?this.classList.remove("is-valid"):this.classList.contains("is-invalid")&&this.classList.remove("is-invalid"),""===this.value)return;let e=document.getElementById("minimum_age_tip"),t=1*this.value;t>s.value?(e.innerHTML="Over the maximum age",this.classList.add("is-invalid")):t<1||t>122?(e.innerHTML="Age in 1~122 are allowed",this.classList.add("is-invalid")):this.classList.add("is-valid")}),s.addEventListener("change",function(){if(this.classList.contains("is-valid")?this.classList.remove("is-valid"):this.classList.contains("is-invalid")&&this.classList.remove("is-invalid"),""===this.value)return;let e=document.getElementById("maximum_age_tip"),t=1*this.value;t<i.value?(e.innerHTML="Less than the maximum age",this.classList.add("is-invalid")):t<1||t>122?(e.innerHTML="Age in 1~122 are allowed",this.classList.add("is-invalid")):this.classList.add("is-valid")});let c=document.getElementById("check_box_cb"),r=document.getElementById("check_box_cm"),o=document.getElementById("check_box_ct"),d=document.getElementById("check_box_cu");c.addEventListener("change",function(){clear_alert(),c.checked||c.checked||o.checked||d.checked||(setTimeout('alert("Choose at least one operator.", "danger", "ban")',150),c.checked=!0)}),r.addEventListener("change",function(){clear_alert(),c.checked||c.checked||o.checked||d.checked||(setTimeout('alert("Choose at least one operator.", "danger", "ban")',150),r.checked=!0)}),o.addEventListener("change",function(){clear_alert(),c.checked||c.checked||o.checked||d.checked||(setTimeout('alert("Choose at least one operator.", "danger", "ban")',150),o.checked=!0)}),d.addEventListener("change",function(){clear_alert(),c.checked||c.checked||o.checked||d.checked||(setTimeout('alert("Choose at least one operator.", "danger", "ban")',150),d.checked=!0)});let h=document.getElementById("rows_new"),m=document.getElementById("random_string_rows"),_=document.getElementById("str_disp_div"),g=document.getElementById("random_col_len"),u=document.getElementById("export_col_len"),$=[];h.addEventListener("click",function(){let e=$.length,t={col_name:"",col_len:0,col_contain:!1};$.splice(e,0,t);let l=$.length-1,a=document.createElement("div");a.innerHTML="<hr class='my-4 mx-5'>        <div class='row g-3'>        <div class='col-sm-6'>          <label for='row_"+l+"_col_name' class='form-label'>Column name</label>          <input type='text' class='form-control' id='row_"+l+"_col_name' placeholder='' value='' data-rows='"+l+"' required>          <div class='invalid-feedback'>            Length in 1~32 are allowed          </div>        </div>        <div class='col-sm-6'>          <label for='row_"+l+"_col_len' class='form-label'>Column length</label>          <input type='number' class='form-control' id='row_"+l+"_col_len' placeholder='' value='' data-rows='"+l+"' required>          <div class='invalid-feedback'>            Length in 1~32 are allowed          </div>        </div>        <div class='col-12'>          <div class='form-check'>            <input class='form-check-input' type='checkbox' value='' id='row_"+l+"_check' data-rows='"+l+"'>            <label class='form-check-label' for='row_"+l+"_check'>              Contain both numbers and letters            </label>          </div>        </div>      </div>",m.appendChild(a);let n=document.createElement("div");n.innerHTML="<li class='list-group-item d-flex justify-content-between lh-sm'>        <div>          <h6 class='my-0' id='string_"+l+"_name'>Random string "+(l+1)+"</h6>          <small class='text-muted' id='string_"+l+"_desc'>Contains only numbers</small>        </div>        <span class='text-muted'>          <input class='form-check-input' type='checkbox' value='' checked disabled>        </span>      </li>",_.appendChild(n);document.getElementById("row_"+l+"_col_name").addEventListener("change",function(){if(this.classList.contains("is-valid")?this.classList.remove("is-valid"):this.classList.contains("is-invalid")&&this.classList.remove("is-invalid"),""===this.value)return;let e=this.value.length;if(e<1||e>32)this.classList.add("is-invalid");else{this.classList.add("is-valid");let t=parseInt(this.getAttribute("data-rows"));$[t].col_name=this.value;document.getElementById("string_"+t+"_name").innerText="Random string "+(t+1)+": "+this.value}});document.getElementById("row_"+l+"_col_len").addEventListener("change",function(){if(this.classList.contains("is-valid")?this.classList.remove("is-valid"):this.classList.contains("is-invalid")&&this.classList.remove("is-invalid"),""===this.value)return;let e=this.value;if(e<1||e>32)this.classList.add("is-invalid");else{this.classList.add("is-valid");$[parseInt(this.getAttribute("data-rows"))].col_len=this.value}});document.getElementById("row_"+l+"_check").addEventListener("change",function(){let e=parseInt(this.getAttribute("data-rows")),t=document.getElementById("string_"+e+"_desc");this.checked?($[e].col_contain=!0,t.innerText="Contain both numbers and letters"):($[e].col_contain=!1,t.innerText="Contain only numbers")}),g.innerText=$.length,u.innerText=$.length+3});document.getElementById("rows_empty").addEventListener("click",function(){m.innerHTML="",_.innerHTML="",$=[],g.innerText=0,u.innerText=3});let v=document.getElementById("go_generate"),f=document.getElementById("generate"),k=document.getElementById("col_name_check"),b=document.getElementById("export_filename"),p="";b.addEventListener("change",function(){if(clear_alert(),""===this.value)return;let e=this.value.length;e<1||e>32?setTimeout('alert("Choose at least one operator.", "danger", "ban")',150):p=this.value});let L=0,E=0,w=function(){clear_alert(),L=new Date().getTime(),E=0;let l="",h=["name","id_card_no","mobile_no"];for(let m=0;m<$.length;m++)h.splice(m+3,0,$[m].col_name);if(k.checked){l=h[0];for(let _=1;_<h.length;_++)l+=","+h[_];l+="\r\n";document.getElementById("modal_tip").innerText="Export with column names?"}else document.getElementById("modal_tip").innerText="Export without column names?";if(""==b.value&&(p=getRandomString(8,!0)),e.value<1)document.getElementById("export_row_num_tip").innerHTML="It is required",e.classList.add("is-invalid"),setTimeout('alert("Generate at least one row.", "warning", "exclamation-triangle-fill")',150);else{let g=!0;for(let u=0;u<$.length;u++)if(""==$[u].col_name||0==$[u].col_len){g=!1,setTimeout('alert("Check the random string columns.", "warning", "exclamation-triangle-fill")',150);document.getElementById("the_form").classList.add("was-validated");break}if(g){let v=[],f=0;a.checked&&(f+=1),n.checked&&(f+=2);let w=0;c.checked&&(w+=1),r.checked&&(w+=3),o.checked&&(w+=5),d.checked&&(w+=10);for(let y=0;y<t;y++){let x=[getName(),getCardID(parseInt(i.value),parseInt(s.value),f),getMobile(w)],I=getName()+","+getCardID(parseInt(i.value),parseInt(s.value),f)+","+getMobile(w);for(let B=0;B<$.length;B++)x.splice(B+3,0,getRandomString($[B].col_len,$[B].col_contain)),I+=","+getRandomString($[B].col_len,$[B].col_contain);v.splice(y,0,x),l+=I,y!=t-1&&(l+="\r\n")}E=download(p+".txt",l)}}return E},y=new bootstrap.Modal(document.getElementById("modalChoice"),{keyboard:!1});v.addEventListener("click",function(){y.show()}),f.addEventListener("click",function(){y.show()});document.getElementById("export_confirm_btn").addEventListener("click",function(){clear_alert(),document.getElementById("export_confirm_btn").disabled=!0,document.getElementById("export_cancel_btn").disabled=!0;let e=w();if(0!==e){let t=e-L,l=t+" ms";t>=1e3&&(l=(t=(t/1e3).toFixed(2))+" s"),setTimeout('alert("Generated successfully! It took '+l+'", "success", "check-circle-fill")',150)}document.getElementById("export_confirm_btn").disabled=!1,document.getElementById("export_cancel_btn").disabled=!1})}();