const dates = (dates) => {
	let datesList = `<div class="view-icons view-icons--top view-icons--person">
			<img src="assets/images/inperson.png" />
			</span><h2>In Person</h2>
			<img src="assets/images/inperson.png" />
		</div>
		<p class="dates-year">2019</p>
		<table id="dates-list" class="dates-list dates-list--2019">`;
	dates.forEach(date => {
		const elem = `<tr class="dates-list-item"><td class="dates-date">${date.date}</td><td>${date.title}</td></tr>`
		datesList += elem;
	});
	datesList += datesHTML;
	return datesList;
};

const datesHTML = `
</table>
<p class="dates-year">2018</p>
<table class="dates-list dates-list--2018">
	<tr class="dates-list-item"><td class="dates-date">6/9</td><td>NORTHSIDE FESTIVAL W/ PATRIARCHY [ACTUALLY HUIZENGA]; ROSE GOLD; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">5/23</td><td>TRANS PECOS; QUEENS, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">5/9</td><td>THE HUM SERIES W/  GLASSER, L’RAIN, MIHO HATORI, LOU TIDES, ARONE DYER’S DRONE CHOIR; HOUSE OF YES; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">2/14</td><td>W/ SSION; SECRET PROJECT ROBOT; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">1/17</td><td>H0L0; BROOKLYN, NY</td></tr>
</table>

<p class="dates-year">2017</p>
<table class="dates-list dates-list--2017">
	<tr class="dates-list-item"><td class="dates-date">11/18</td><td>SUNDAY SESSIONS; MOMA PS1; QUEENS, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/15</td><td>NATIONAL SAWDUST; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/26</td><td>BERLIN; NEW YORK, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/24</td><td>THE SPOTTED DOG; HUDSON, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/22</td><td>APOHADION THEATER; PORTLAND, ME</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/21</td><td>LIGHT CLUB LAMP SHOP; BURLINGTON, VT</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/20</td><td>BRASSERIE BEAUBIEN; MONTREAL, QT</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/19</td><td>RED KROSS; NORTHHAMPTON, MA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/18</td><td>DEEP THOUGHTS; BOSTON, MA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/17</td><td>LYRIC HALL; NEW HAVEN, CT</td></tr>
	<tr class="dates-list-item"><td class="dates-date">7/22</td><td>“ON THE DENSITY OF REFLECTED ENTITIES” FRAGRANT PERFORMANCE, SUPERCHIEF GALLERY; QUEENS, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/20</td><td>LPR PRESENTS A MIDSUMMER NIGHT’S EVE IMMERSIVE FANTASY; W/ HARIBO, ELISA, & JENNIFER VANILLA; SECRET PROJECT ROBOT; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/10</td><td>NORTHSIDE FESTIVAL W/ NIGHTSPACE, HNRY FLWR, COP FUNERAL; VITAL JOINT; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">5/21</td><td>W/ SIR RICHARD BISHOP; EL CLUB; DETROIT, MI</td></tr>
	<tr class="dates-list-item"><td class="dates-date">4/14</td><td>W/ PAVO PAVO, CHARLIE LOOKER; KNOCKDOWN CENTER; QUEENS, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">4/9</td><td>CREEP RECORDS; PHILADELPHIA, PA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">4/8</td><td>W/ XIU XIU, THOUSANDZ OF BEEZ; DER HARRISBURG MAENNERCOR; HARRISBURG, PA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">4/7</td><td>BIG HAIR HQ; LEXINGTON, KY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">4/6</td><td>NORTHSIDE YACHT CLUB; CINCINNATI, OH</td></tr> 
	<tr class="dates-list-item"><td class="dates-date">4/5</td><td>THE CRYING WOLF; NASHVILLE, TN</td></tr>
	<tr class="dates-list-item"><td class="dates-date">3/28</td><td>THE SHELF HOUSE; ROANOKE, VA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">3/26</td><td>THE CROWN; BALTIMORE, MD</td></tr>
	<tr class="dates-list-item"><td class="dates-date">3/11</td><td>TREVORSHAUS; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">3/9</td><td>SUPERCHIEF GALLERY; QUEENS, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">2/15</td><td>AFFECTIVELY HOW OPERA SCORE, EMBARRASSED OF THE WHOLE, PANOPLY PERFORMANCE LABORATORY; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">2/9-&nbsp;2/11</td><td>RAUL DE NIEVES & COLIN SELF: THE FOOL; THE KITCHEN; NEW YORK, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">1/21</td><td>SOUND DEPARTURES @ LA MAMA; NEW YORK, NY</td></tr>
</table>

<p class="dates-year">2016</p>
<table class="dates-list dates-list--2016">
	<tr class="dates-list-item">
		<td class="dates-date">12/4</td>
		<td>W/ STONE JACK JONES; BETTY’S BAR AND GRILL; NASHVILLE, TN</td>
	</tr>
	<tr class="dates-list-item"><td class="dates-date">12/3</td><td>“THE BAPTISM OF MOMMY FORTUNA” SOLO PERFORMANCE INSTALLATION; BRIKOLAJ RESIDENCY, THE NASHVILLE ARCADE; NASHVILLE, TN</td></tr>
	<tr class="dates-list-item"><td class="dates-date">11/26</td><td>W/ LETTERS TO NEPAL, CHASE WINTERS, POTTED PLANT; PARK CHURCH COOP; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">11/5</td><td>W/ HER; BABY’S ALL RIGHT; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/29</td><td>ROLL FOR THE SOUL; BRISTOL, UK</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/27</td><td>THE MARWOOD; BRIGHTON, UK</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/25</td><td>LE MOTEL; PARIS, FRANCE</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/24</td><td>LE POP IN; PARIS, FRANCE</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/20</td><td>KOLONIA ARTYSTÓW GDAŃSK; GDANSK, POLAND</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/17</td><td>SCHOKOLADEN; BERLIN, GERMANY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/13</td><td>WUNDERBAR; ROTTERDAM, NETHERLANDS</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/11</td><td>DAS WERK; VIENNA, AUSTRIA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">10/6</td><td>OPERAEN CHRISTIANIA; COPENHAGEN, DENMARK</td></tr>
	<tr class="dates-list-item"><td class="dates-date">9/24</td><td>PARK CHURCH COOP; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">9/11</td><td>W/ VOICE COILS, SNOWBLINK; TRANS PECOS; QUEENS, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/31</td><td>W/ DOUGIE POOLE, GABI; PRESENTED BY JMC AGGREGATE; SILENT BARN; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/24</td><td>W/ HNRY FLWR, GODMOTHER [GERMANY], GOON SOUL; THE GLOVE; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/12</td><td>W/ R. ARIEL; AVIV; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">8/11</td><td>W/ ZEN MANTRA [NZ], TRULY BLESSED [MN], YOHUNA; 603 ^ BUSHWICK AVE (ABOVE SILENT BARN); BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">7/8</td><td>W/ BERNARD HERMANN, LUXTRESS; CUE ART FOUNDATION; NEW YORK, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">7/3</td><td>THE CROWN; BALTIMORE, MD</td></tr>
	<tr class="dates-list-item"><td class="dates-date">7/2</td><td>SOUR HAUS; RICHMOND, VA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/30</td><td>MAMMAL GALLERY; ATLANTA, GA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">06/29</td><td>THE MOTHLIGHT; ASHEVILLE, NC</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/28</td><td>FOND OBJECT; NASHVILLE, TN</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/26</td><td>HOTEL VEGAS; AUSTIN, TX</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/24</td><td>WARSZAWA; EL PASO, TX</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/23</td><td>ART OBSCURA; LAS CRUCES, NM</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/21</td><td>HOTEL CONGRESS; TUCSON, AZ</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/18</td><td>MIAS; FLAGSTAFF, AZ</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/17</td><td>BASIC FLOWERS; LOS ANGELES, CA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/15</td><td>VACATION; SAN FRANCISCO, CA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/14</td><td>THE NIGHT LIGHT; OAKLAND, CA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/13</td><td>HOLLAND PROJECT; RENO, NV</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/12</td><td>RED MUSEUM; SACRAMENTO, CA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/10</td><td>LACUNA; PORTLAND, OR</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/9</td><td>BARBOZA; SEATTLE, WA</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/5</td><td>7TH ST ENTRY; MINNEAPOLIS, MN</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/4</td><td>ARTS AND LITERATURE LAB; MADISON, WI</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/3</td><td>CAFE MUSTACHE; CHICAGO, IL</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/2</td><td>DREAMLAND THEATER; YPSILANTI, MI</td></tr>
	<tr class="dates-list-item"><td class="dates-date">6/1</td><td>EL CLUB; DETROIT, MI</td></tr>
	<tr class="dates-list-item"><td class="dates-date">5/31</td><td>LO & BEHOLD RECORDS ALBUM RELEASE PARTY; HAMTRAMCK, MI</td></tr>
	<tr class="dates-list-item"><td class="dates-date">5/29</td><td>NYC TOUR KICKOFF W/ DEAN CERCONE, SAPROPELIC PYCNIC, TERMINAL INTRUSION, ANGELINA DREEM, & MORE; TRANS PECOS</td></tr>
	<tr class="dates-list-item"><td class="dates-date">5/7</td><td>W/ ERICA ESO; HOME AUDIO; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">4/4</td><td>UNION HALL; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">4/3</td><td>W/ SAPROPELIC PYCNIC, MUYASSAR KURDI WALTER WRIGHT AND AL MARGOLIS TRIO, LEA BERTUCCI; SILENT BARN; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">3/19</td><td>W/ LEGS, ERICA ESO, GEMMA; SECRET PROJECT ROBOT; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">3/10</td><td>W/ SICKDIN, LAURA ORTMAN, GODXSS, ALEXI TRANSPARENT, & READINGS FROM TAROT SOCIETY; OUT TO SEE FESTIVAL; NEW YORK, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">2/20</td><td>GODDESS PARTY W/ FIN, BACTERIA, DJ KAWIFA ANGELHAIR; SECRET PROJECT ROBOT; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">1/29</td><td>W/ HEIDI HARRIS, NATIVE NAIVE; TROOST; BROOKLYN, NY</td></tr>
	<tr class="dates-list-item"><td class="dates-date">1/14</td><td>POST-SHOW PERFORMANCE FOR “BITER: EVERY TIME I TURN AROUND,” EXPONENTIAL FESTIVAL; SILENT BARN; BROOKLYN, NY</td></tr>
</table>`

export default dates;
