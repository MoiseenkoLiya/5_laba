

function dyn(test){
BodyJS = [$("div#BodyImgText"),$('img#Img_body'),$('img#Img_body1'),$('p#text_body'),$('p#txt_body'),$('p#w_body'),$('p#txt_body1'),$('p#w_body1')];
	try {
		var mysql = require('mysql');
		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "mysql"
		});

		con.connect(function (err) {
			if (err) throw err;

			con.query("SELECT * FROM l_data_js ", function (err, result, fields) {
				if (err) throw err;
				BodyJS[0].text(result[test].nameOsnova);
				BodyJS[1].attr("src", result[test].ImgOsnova);
				BodyJS[2].text(result[test].TextOsnova);
				BodyJS[4].text(result[test].txtOsnova);
				BodyJS[5].text(result[test].wOsnova);
				BodyJS[6].text(result[test].txtOsnova1);
				BodyJS[7].text(result[test].wOsnova1);
			});
		});
	}
	catch (err) {
	BodyJS[0].text( nameOsnova[test]);
	BodyJS[1].attr("src",ImgOsnova[test]);
	BodyJS[2].attr("src",ImgOsnova1[test]);
	BodyJS[3].text( TextOsnova [test]);
	BodyJS[4].text( txtOsnova[test]);
	BodyJS[5].text(wOsnova[test]);
	BodyJS[6].text(txtOsnova1[test]);
	BodyJS[7].text( wOsnova1 [test]);
	}
}
