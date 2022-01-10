module.exports = function toReadable(number) {


	let ones = ['', "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	let teen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
	let nty = ['', teen, "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	let hundred = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

	let result = ""
	let s = '';
	let d = '';
	let e = '';
	let n = number.toString()
	if (n >= 100) {
		s = hundred[n[n.length - 3]] + " ";
	} else s = "";
	if (n >= 20) {
		d = nty[n[n.length - 2]] + " ";
	} else d = "";


	if (n.length = 2 && 10 <= n <= 19) {
		if (number == 10) return "ten"
		if (number == 11) return "eleven"
		if (number == 12) return "twelve"
		if (number == 13) return "thirteen"
		if (number == 14) return "fourteen"
		if (number == 15) return "fifteen"
		if (number == 16) return "sixteen"
		if (number == 17) return "seventeen"
		if (number == 18) return "eighteen"
		if (number == 19) return "nineteen"
	}
	if (n.length = 3 && 110 <= n <= 119) {
		if (number == 110) return "one hundred ten"
		if (number == 111) return "one hundred eleven"
		if (number == 112) return "one hundred twelve"
		if (number == 113) return "one hundred thirteen"
		if (number == 114) return "one hundred fourteen"
		if (number == 115) return "one hundred fifteen"
		if (number == 116) return "one hundred sixteen"
		if (number == 117) return "one hundred seventeen"
		if (number == 118) return "one hundred eighteen"
		if (number == 119) return "one hundred nineteen"
	}
	if (n.length = 3 && 210 <= n <= 219) {
		if (number == 210) return "two hundred ten"
		if (number == 211) return "two hundred eleven"
		if (number == 212) return "two hundred twelve"
		if (number == 213) return "two hundred thirteen"
		if (number == 214) return "two hundred fourteen"
		if (number == 215) return "two hundred fifteen"
		if (number == 216) return "two hundred sixteen"
		if (number == 217) return "two hundred seventeen"
		if (number == 218) return "two hundred eighteen"
		if (number == 219) return "two hundred nineteen"
	}
	if (n.length = 3 && 310 <= n <= 319) {
		if (number == 310) return "three hundred ten"
		if (number == 311) return "three hundred eleven"
		if (number == 312) return "three hundred twelve"
		if (number == 313) return "three hundred thirteen"
		if (number == 314) return "three hundred fourteen"
		if (number == 315) return "three hundred fifteen"
		if (number == 316) return "three hundred sixteen"
		if (number == 317) return "three hundred seventeen"
		if (number == 318) return "three hundred eighteen"
		if (number == 319) return "three hundred nineteen"
	}
	if (n.length = 3 && 410 <= n <= 419) {
		if (number == 410) return "four hundred ten"
		if (number == 411) return "four hundred eleven"
		if (number == 412) return "four hundred twelve"
		if (number == 413) return "four hundred thirteen"
		if (number == 414) return "four hundred fourteen"
		if (number == 415) return "four hundred fifteen"
		if (number == 416) return "four hundred sixteen"
		if (number == 417) return "four hundred seventeen"
		if (number == 418) return "four hundred eighteen"
		if (number == 419) return "four hundred nineteen"
	}
	if (n.length = 3 && 510 <= n <= 519) {
		if (number == 510) return "five hundred ten"
		if (number == 511) return "five hundred eleven"
		if (number == 512) return "five hundred twelve"
		if (number == 513) return "five hundred thirteen"
		if (number == 514) return "five hundred fourteen"
		if (number == 515) return "five hundred fifteen"
		if (number == 516) return "five hundred sixteen"
		if (number == 517) return "five hundred seventeen"
		if (number == 518) return "five hundred eighteen"
		if (number == 519) return "five hundred nineteen"
	}
	if (n.length = 3 && 610 <= n <= 619) {
		if (number == 610) return "six hundred ten"
		if (number == 611) return "six hundred eleven"
		if (number == 612) return "six hundred twelve"
		if (number == 613) return "six hundred thirteen"
		if (number == 614) return "six hundred fourteen"
		if (number == 615) return "six hundred fifteen"
		if (number == 616) return "six hundred sixteen"
		if (number == 617) return "six hundred seventeen"
		if (number == 618) return "six hundred eighteen"
		if (number == 619) return "six hundred nineteen"
	}
	if (n.length = 3 && 710 <= n <= 719) {
		if (number == 710) return "seven hundred ten"
		if (number == 711) return "seven hundred eleven"
		if (number == 712) return "seven hundred twelve"
		if (number == 713) return "seven hundred thirteen"
		if (number == 714) return "seven hundred fourteen"
		if (number == 715) return "seven hundred fifteen"
		if (number == 716) return "seven hundred sixteen"
		if (number == 717) return "seven hundred seventeen"
		if (number == 718) return "seven hundred eighteen"
		if (number == 719) return "seven hundred nineteen"
	}
	if (n.length = 3 && 810 <= n <= 819) {
		if (number == 810) return "eight hundred ten"
		if (number == 811) return "eight hundred eleven"
		if (number == 812) return "eight hundred twelve"
		if (number == 813) return "eight hundred thirteen"
		if (number == 814) return "eight hundred fourteen"
		if (number == 815) return "eight hundred fifteen"
		if (number == 816) return "eight hundred sixteen"
		if (number == 817) return "eight hundred seventeen"
		if (number == 818) return "eight hundred eighteen"
		if (number == 819) return "eight hundred nineteen"
	}
	if (n.length = 3 && 910 <= n <= 919) {
		if (number == 910) return "nine hundred ten"
		if (number == 911) return "nine hundred eleven"
		if (number == 912) return "nine hundred twelve"
		if (number == 913) return "nine hundred thirteen"
		if (number == 914) return "nine hundred fourteen"
		if (number == 915) return "nine hundred fifteen"
		if (number == 916) return "nine hundred sixteen"
		if (number == 917) return "nine hundred seventeen"
		if (number == 918) return "nine hundred eighteen"
		if (number == 919) return "nine hundred nineteen"
	}
	if (n.length = 3) {
		if (number == 100) return "one hundred"
		if (number == 200) return "two hundred"
		if (number == 300) return "three hundred"
		if (number == 400) return "four hundred"
		if (number == 500) return "five hundred"
		if (number == 600) return "six hundred"
		if (number == 700) return "seven hundred"
		if (number == 800) return "eight hundred"
		if (number == 900) return "nine hundred"
	}

	if (0 < n < 10) {
		e = ones[n[n.length - 1]];
	}

	if (e == '') {
		let res = s + d + e;; //s + d + e;
		result = res.substring(0, res.length - 1)
		return result
	}

	if (d == ' ') {
		result = s + e

		return result
	}




	result = s + d + e
	return result

}

