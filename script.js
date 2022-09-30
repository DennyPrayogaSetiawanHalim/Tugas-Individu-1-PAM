var tabelNilai = document.getElementById("tabelNilai");

for(var i=1; i<=tabelNilai.rows.length ; i++){
	if(tabelNilai.rows[i].cells[3].innerHTML >= 80){	
		tabelNilai.rows[i].cells[4].innerHTML = 'A'
	}else if(tabelNilai.rows[i].cells[3].innerHTML < 80 && tabelNilai.rows[i].cells[3].innerHTML >= 70){
		tabelNilai.rows[i].cells[4].innerHTML = 'AB'
	}else if(tabelNilai.rows[i].cells[3].innerHTML < 70 && tabelNilai.rows[i].cells[3].innerHTML >= 60){
		tabelNilai.rows[i].cells[4].innerHTML = 'B'
	}else if(tabelNilai.rows[i].cells[3].innerHTML < 60 && tabelNilai.rows[i].cells[3].innerHTML >= 50){
		tabelNilai.rows[i].cells[4].innerHTML = 'BC'
	}else if(tabelNilai.rows[i].cells[3].innerHTML < 50 && tabelNilai.rows[i].cells[3].innerHTML >= 40){
		tabelNilai.rows[i].cells[4].innerHTML = 'C'
	}else if(tabelNilai.rows[i].cells[3].innerHTML < 40 && tabelNilai.rows[i].cells[3].innerHTML >= 10){
		tabelNilai.rows[i].cells[4].innerHTML = 'D'
	}else if(tabelNilai.rows[i].cells[3].innerHTML < 10){
		tabelNilai.rows[i].cells[4].innerHTML = 'E'
	}else{
		tabelNilai.rows[i].cells[4].innerHTML = 'error'
	}
}
