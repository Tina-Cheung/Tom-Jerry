	function save(){
			if(window.sessionStorage)
			{
				var rr=document.getElementById("d1").value;
				window.localStorage.setItem("answer",rr);			
			}
			else{
				alert("浏览器不支持");
			}
		}
		
	function get(){
			if(window.localStorage){
			var aa=window.localStorage.getItem("answer");
			if(aa=="是"){
				$('.wenzi7').hide();
				$('.Y3').show();
				$('.Y4').show();
				$('.Y5').show();
				$('.Y6').show();
			}else if(aa=="否"){
				$('.wenzi7').hide();
				$('.X3').show();
				$('.X4').show();
				$('.X5').show();
				$('.X6').show();
			}else{
				alert("只能输入是或否");
			}
			}else{
				alert("浏览器不支持");
			}
		}
		
	
	
