$(document).ready(function() {
  var names = [
    "Abigail", 
    "Adam", 
    "Adda", 
    "Albert Vegelbud", 
    "Alina", 
    "Alvin", 
    "Anabelle", 
    "Anna Henrietta", 
    "Anna Strenger", 
    "Arnvald", 
    "Aryan La Valette", 
    "Avallach", 
    "Azar Javed", 
    "Barnabas Basil", 
    "Berengar", 
    "Bernard Loredo", 
    "Birna Bran", 
    "Blueboy Lugos", 
    "Bran", 
    "Brewess", 
    "Caleb Menge", 
    "Caranthir", 
    "Carmen", 
    "Cecil Burdon", 
    "Cedric", 
    "Celina", 
    "Cerys an Craite", 
    "Cirilla", 
    "Corinne Tilly", 
    "Crach an Craite", 
    "Cynthia", 
    "Damien", 
    "Dandelion", 
    "Dea", 
    "Declan Leuvaarden", 
    "Demavend", 
    "Dethmold", 
    "Dettlaff", 
    "Dijkstra", 
    "Dudu", 
    "Edna var Attre", 
    "Emhyr var Emreis", 
    "Eredin", 
    "Ermion", 
    "Eskel", 
    "Ewald Borsodi", 
    "Felicia", 
    "Foltest", 
    "Francesca", 
    "Fringilla", 
    "Gaunter ODimm", 
    "Geels", 
    "Geralt of Rivia", 
    "Golan Vivaldi", 
    "Graham", 
    "Gramps", 
    "Guillaume", 
    "Halbjorn", 
    "Henry var Attre", 
    "Henselt", 
    "Hermit", 
    "Hjalmar an Craite", 
    "Hjort", 
    "Horst Borsodi", 
    "Imlerith", 
    "Ingrid Vegelbud", 
    "Iorveth", 
    "Irina Renarde", 
    "Iris von Everec", 
    "Jacques de Aldersberg", 
    "Jean Pierre", 
    "Jethro", 
    "Johnny", 
    "Julian", 
    "Kalkstein", 
    "Kiera Metz", 
    "Lady of the Lake", 
    "Lambert", 
    "Leo", 
    "Letho of Gulet", 
    "Madman Lugos", 
    "Margarita", 
    "Mary La Valette", 
    "Milton", 
    "Morenn", 
    "Morkvarg", 
    "Morvran Voorhis", 
    "Olgierd von Everec", 
    "Orianna", 
    "Palmerin", 
    "Phillip Strenger", 
    "Philippa Eilhart", 
    "Priscilla", 
    "Radovid", 
    "Ramsmeat", 
    "Rayla", 
    "Raymond", 
    "Regis", 
    "Reverend", 
    "Roderick de Wett", 
    "Rosa var Attre", 
    "Sabrina", 
    "Saskia", 
    "Savolla", 
    "Shani", 
    "Sheldon Skaggs", 
    "Shilard", 
    "Siegfried", 
    "Sile de Tansarville", 
    "Skalen Burdon", 
    "Skjall", 
    "Stennis", 
    "Syanna", 
    "Tamara Strenger", 
    "Thaler", 
    "The Pellar", 
    "The Professor", 
    "Toruviel", 
    "Triss Merigold", 
    "Udalryk", 
    "Uma", 
    "Vaska", 
    "Velerad", 
    "Vernon Roche", 
    "Ves", 
    "Vesemir", 
    "Vimme Vivaldi", 
    "Vincent Meis", 
    "Vivienne", 
    "Vlodimir von Everec", 
    "Weavess", 
    "Whispess", 
    "Yaevinn", 
    "Yarpen Zigrin", 
    "Yennefer", 
    "Zoltan Chivay"];

  var sources = [
    "https://vignette.wikia.nocookie.net/witcher/images/9/90/People_Abigail_full.png/revision/latest/scale-to-width-down/158?cb=20080923003726", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b3/People_Adam_full.png/revision/latest/scale-to-width-down/179?cb=20080923114259", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f5/Tw1_Adda_the_White.png/revision/latest?cb=20161013150533", 
    "https://vignette.wikia.nocookie.net/witcher/images/7/74/Albert.jpg/revision/latest/scale-to-width-down/350?cb=20160105190654", 
    "https://vignette.wikia.nocookie.net/witcher/images/5/54/People_Alina_full.png/revision/latest/scale-to-width-down/170?cb=20080924092529", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/61/People_Alvin_full.png/revision/latest/scale-to-width-down/176?cb=20080922231930", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/33/Tw3_journal_anabelle.png/revision/latest/scale-to-width-down/350?cb=20151023190914", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/2d/Tw3_journal_henrietta.png/revision/latest/scale-to-width-down/350?cb=20160601212052", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/3c/Tw3_journal_anna.png/revision/latest?cb=20160528113538", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/38/Tw3_journal_arnvald.png/revision/latest/scale-to-width-down/350?cb=20160610152305", 
    "https://vignette.wikia.nocookie.net/witcher/images/a/a9/Tw2_journal_Aryan.png/revision/latest?cb=20110524214145", 
    "https://vignette.wikia.nocookie.net/witcher/images/7/75/Tw3_journal_avallachunlocked.png/revision/latest/scale-to-width-down/350?cb=20160507171053", 
    "https://vignette.wikia.nocookie.net/witcher/images/d/db/Azar.png/revision/latest?cb=20140615185705", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/33/Tw3_journal_majordomus.png/revision/latest/scale-to-width-down/350?cb=20160603204009", 
    "https://vignette.wikia.nocookie.net/witcher/images/0/07/People_Berengar_full.png/revision/latest/scale-to-width-down/194?cb=20080923015337", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/bc/Tw2_journal_Loredo.png/revision/latest?cb=20110529034752", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/35/Tw3_journal_birna.png/revision/latest/scale-to-width-down/350?cb=20160706102856", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/39/Tw3_journal_blueboylugos.png/revision/latest/scale-to-width-down/350?cb=20160421125035", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/bc/Tw3_journal_kingbran.png/revision/latest/scale-to-width-down/350?cb=20170315190356", 
    "https://vignette.wikia.nocookie.net/witcher/images/a/ac/Tw3_journal_brewess.png/revision/latest/scale-to-width-down/350?cb=20160320063421", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/38/Tw3_journal_caleb_menge.png/revision/latest/scale-to-width-down/350?cb=20170315191047", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/3e/Tw3_journal_caranthir.png/revision/latest/scale-to-width-down/350?cb=20170315175924", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/16/People_Carmen_full.png/revision/latest/scale-to-width-down/138?cb=20081119220435", 
    "https://vignette.wikia.nocookie.net/witcher/images/9/9f/Tw2_journal_Cecil.png/revision/latest?cb=20110529031302", 
    "https://vignette.wikia.nocookie.net/witcher/images/d/db/Tw2_journal_Cedric.png/revision/latest?cb=20110529031423", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/23/People_Celina_full.png/revision/latest/scale-to-width-down/169?cb=20080923105656", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/35/Tw3_journal_cerys.png/revision/latest/scale-to-width-down/350?cb=20170315183223", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f5/Tw3_journal_ciri.png/revision/latest?cb=20160527150710", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/1e/Tw3_journal_corinnetilly.png/revision/latest/scale-to-width-down/350?cb=20170315183408", 
    "https://vignette.wikia.nocookie.net/witcher/images/a/af/Tw3_journal_crach.png/revision/latest/scale-to-width-down/350?cb=20150906183916", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f2/Tw2_Cynthia_in_mage_attire.png/revision/latest?cb=20161014190004", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/10/Tw3_journal_damien.png/revision/latest/scale-to-width-down/350?cb=20160601212700", 
    "https://vignette.wikia.nocookie.net/witcher/images/a/a6/Tw3_journal_dandelion.png/revision/latest?cb=20160411194949", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/6c/Lubberkin.PNG/revision/latest/scale-to-width-down/350?cb=20151026232902", 
    "https://vignette.wikia.nocookie.net/witcher/images/d/db/People_Leuvaarden_full.png/revision/latest/scale-to-width-down/202?cb=20150912155524", 
    "https://vignette.wikia.nocookie.net/witcher/images/0/06/Gwent_cardart_northern_king_demavend_III.jpg/revision/latest/scale-to-width-down/348?cb=20180116210807", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/20/Tw2_journal_Dethmold.png/revision/latest?cb=20110531072951", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f6/Tw3_journal_dettlaff.png/revision/latest/scale-to-width-down/350?cb=20160601043123", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/c7/Tw3_journal_dijkstra.png/revision/latest/scale-to-width-down/350?cb=20170315181519", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f1/Tw3_journal_dudu.png/revision/latest/scale-to-width-down/350?cb=20160515163738", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/11/Tw3_edna_var_attre.png/revision/latest/scale-to-width-down/350?cb=20180130042833", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b6/Tw3_journal_emhyr.png/revision/latest?cb=20160809182843", 
    "https://vignette.wikia.nocookie.net/witcher/images/4/49/Tw3_journal_eredin.png/revision/latest/scale-to-width-down/350?cb=20160508060422", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/63/Tw3_journal_mousesack.png/revision/latest/scale-to-width-down/350?cb=20160905133812", 
    "https://vignette.wikia.nocookie.net/witcher/images/9/9b/Tw3_journal_eskel.png/revision/latest/scale-to-width-down/350?cb=20160708060530", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b0/Tw3_journal_Ewald.png/revision/latest/scale-to-width-down/350?cb=20151103193111", 
    "https://vignette.wikia.nocookie.net/witcher/images/0/07/Tw3_journal_feliciacori.png/revision/latest/scale-to-width-down/350?cb=20150906183634", 
    "https://vignette.wikia.nocookie.net/witcher/images/0/0d/Tw2_Foltest.png/revision/latest?cb=20161012183635", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/2b/Gwent_cardart_scoiatael_francesca.jpg/revision/latest?cb=20180528185357", 
    "https://vignette.wikia.nocookie.net/witcher/images/4/4b/Tw3_journal_fringilla.png/revision/latest/scale-to-width-down/350?cb=20150906184013", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f3/Tw3_journal_mirrorman.png/revision/latest/scale-to-width-down/350?cb=20170501180556", 
    "https://vignette.wikia.nocookie.net/witcher/images/e/ee/Tw3_journal_geels.png/revision/latest?cb=20170315180452", 
    "https://vignette.wikia.nocookie.net/witcher/images/5/54/Tw3_journal_geralt.png/revision/latest?cb=20170315185100", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/82/People_Vivaldi_full.png/revision/latest/scale-to-width-down/227?cb=20080924183521", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/62/Tw3_journal_graham.png/revision/latest/scale-to-width-down/350?cb=20160610153352", 
    "https://vignette.wikia.nocookie.net/witcher/images/d/d7/People_Gramps_full.png/revision/latest/scale-to-width-down/183?cb=20080927121902", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/6b/Tw3_journal_guillaume.png/revision/latest/scale-to-width-down/350?cb=20160603204610", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/8d/Tw3_journal_halbjorn.png/revision/latest/scale-to-width-down/350?cb=20160610153950", 
    "https://vignette.wikia.nocookie.net/witcher/images/5/5e/Var_attre_ambasador.png/revision/latest/scale-to-width-down/350?cb=20160619130049", 
    "https://vignette.wikia.nocookie.net/witcher/images/4/48/Tw2_journal_Henselt.png/revision/latest?cb=20110615115142", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/fc/Tw3_journal_hermit.png/revision/latest/scale-to-width-down/350?cb=20160606131714", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/23/Tw3_journal_hjalmar.png/revision/latest/scale-to-width-down/350?cb=20150906184223", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/c7/Tw3_journal_hjort.png/revision/latest/scale-to-width-down/350?cb=20170315181829", 
    "https://vignette.wikia.nocookie.net/witcher/images/d/d8/Tw3_journal_horst.png/revision/latest/scale-to-width-down/350?cb=20151102193817", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/83/Tw3_journal_imlerith.png/revision/latest/scale-to-width-down/350?cb=20160623071318", 
    "https://vignette.wikia.nocookie.net/witcher/images/e/ee/Tw3_ingrid_vegelbud.png/revision/latest/scale-to-width-down/350?cb=20180715025752", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/cd/Tw2_journal_Iorveth.png/revision/latest?cb=20110524212434", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/cb/Tw3_journal_irina.png/revision/latest/scale-to-width-down/350?cb=20160610175607", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/14/Tw3_journal_iris.png/revision/latest/scale-to-width-down/350?cb=20160324194014", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/60/People_GM_full.png/revision/latest/scale-to-width-down/195?cb=20080923015827", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/2e/People_Jean-Pierre_full.png/revision/latest/scale-to-width-down/182?cb=20080927091200", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/36/People_Jethro_full.png/revision/latest/scale-to-width-down/179?cb=20080926180004", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/1b/Tw3_journal_godlings.png/revision/latest/scale-to-width-down/350?cb=20170315192531", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/8e/People_Julian_full.png/revision/latest/scale-to-width-down/178?cb=20080926193332", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b4/People_kalkstein_full.png/revision/latest/scale-to-width-down/180?cb=20080927115257", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/6f/Tw3_journal_keira.png/revision/latest/scale-to-width-down/350?cb=20160327100213", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/be/Tw3_journal_ladyofthelake.png/revision/latest/scale-to-width-down/350?cb=20160605210213", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/cd/Tw3_journal_lambert.png/revision/latest/scale-to-width-down/350?cb=20160417204903", 
    "https://vignette.wikia.nocookie.net/witcher/images/d/d9/People_Leo_full.png/revision/latest/scale-to-width-down/175?cb=20170504012135", 
    "https://vignette.wikia.nocookie.net/witcher/images/a/a9/Tw3_journal_letho.png/revision/latest?cb=20160527152710", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/14/Tw3_journal_madman_lugos.png/revision/latest/scale-to-width-down/350?cb=20170315190708", 
    "https://vignette.wikia.nocookie.net/witcher/images/9/97/Tw3_journal_margarita.png/revision/latest/scale-to-width-down/350?cb=20160329074717", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/66/Tw3_journal_louisa.png/revision/latest/scale-to-width-down/350?cb=20170315190827", 
    "https://vignette.wikia.nocookie.net/witcher/images/7/72/Tw3_journal_milton.png/revision/latest/scale-to-width-down/350?cb=20160531184943", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b5/People_Dryad_full_censored.png/revision/latest?cb=20080927140304", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/25/Gwent_cardart_skellige_morkvarg.jpg/revision/latest?cb=20170608210231", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/8c/Tw3_journal_morvran_voorhis.png/revision/latest/scale-to-width-down/350?cb=20150912153049", 
    "https://vignette.wikia.nocookie.net/witcher/images/7/73/Tw3_journal_olgierd.png/revision/latest?cb=20160207081620", 
    "https://vignette.wikia.nocookie.net/witcher/images/9/9b/Tw3_journal_oriana.png/revision/latest/scale-to-width-down/350?cb=20160626084838", 
    "https://vignette.wikia.nocookie.net/witcher/images/7/7c/Tw3_journal_palmerin.png/revision/latest/scale-to-width-down/350?cb=20160531184854", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/20/Tw3_journal_baron.png/revision/latest/scale-to-width-down/350?cb=20160702134425", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/12/Tw3_journal_philippa.png/revision/latest/scale-to-width-down/350?cb=20160324195257", 
    "https://vignette.wikia.nocookie.net/witcher/images/e/e1/Tw3_journal_priscilla.png/revision/latest/scale-to-width-down/350?cb=20160503060433", 
    "https://vignette.wikia.nocookie.net/witcher/images/a/ad/Tw3_journal_radovid.png/revision/latest/scale-to-width-down/350?cb=20150906175743", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/2a/People_Ramsmeat_full.png/revision/latest/scale-to-width-down/176?cb=20080924000844", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/25/Gwent_cardart_northern_black_rayla.png/revision/latest/scale-to-width-down/349?cb=20181028232155", 
    "https://vignette.wikia.nocookie.net/witcher/images/e/ea/People_Raymond_full.png/revision/latest/scale-to-width-down/162?cb=20080923102821", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/bd/Tw3_journal_regis.png/revision/latest/scale-to-width-down/350?cb=20160601040011", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/6b/People_Reverend_full.png/revision/latest/scale-to-width-down/190?cb=20080922231316", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/89/People_DeWett_full.png/revision/latest/scale-to-width-down/186?cb=20080924001154", 
    "https://vignette.wikia.nocookie.net/witcher/images/0/0d/Tw3_rosa_var_attre.png/revision/latest/scale-to-width-down/350?cb=20180204175048", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/82/Tw2_journal_Sabrina.png/revision/latest?cb=20110531081455", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f7/Tw2_journal_Saskia.png/revision/latest?cb=20110528230950", 
    "https://vignette.wikia.nocookie.net/witcher/images/4/45/People_Savolla.png/revision/latest/scale-to-width-down/182?cb=20080927171920", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/2a/Tw3_journal_shani.png/revision/latest?cb=20160408125659", 
    "https://vignette.wikia.nocookie.net/witcher/images/0/0a/Tw2_journal_Sheldonskaggs.png/revision/latest?cb=20110530062022", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/c0/Tw2_journal_Shilard.png/revision/latest?cb=20110524212719", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/86/W1_concept_zygfryd.png/revision/latest/scale-to-width-down/307?cb=20151017150250", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/17/Tw2_journal_Sile.png/revision/latest?cb=20110524214752", 
    "https://vignette.wikia.nocookie.net/witcher/images/a/aa/Tw2_journal_Skalenburdon.png/revision/latest?cb=20110530063235", 
    "https://vignette.wikia.nocookie.net/witcher/images/f/f6/Tw3_journal_Skjall_alive.png/revision/latest/scale-to-width-down/350?cb=20170304213558", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/22/Tw2_journal_Stennis.png/revision/latest?cb=20110531170245", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/32/Tw3_journal_syanna.png/revision/latest/scale-to-width-down/350?cb=20160605145358", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/35/Tw3_journal_tamara.png/revision/latest?cb=20170315182134", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/c6/Tw3_journal_thaler.png/revision/latest?cb=20160528170826", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b4/Tw3_journal_pellar.png/revision/latest/scale-to-width-down/350?cb=20170315185639", 
    "https://vignette.wikia.nocookie.net/witcher/images/3/34/People_Professor_full.png/revision/latest/scale-to-width-down/175?cb=20080922230232", 
    "https://vignette.wikia.nocookie.net/witcher/images/c/c1/People_Toruviel_full.png/revision/latest/scale-to-width-down/154?cb=20080923020643", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/64/Tw3_journal_triss.png/revision/latest?cb=20170315180202", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/6d/Tw3_journal_udalryk.png/revision/latest/scale-to-width-down/350?cb=20160526192113", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b3/Tw3_journal_uma.png/revision/latest/scale-to-width-down/350?cb=20160912150822", 
    "https://vignette.wikia.nocookie.net/witcher/images/7/7d/People_Grandma_full.png/revision/latest/scale-to-width-down/205?cb=20170504012234", 
    "https://vignette.wikia.nocookie.net/witcher/images/2/2d/People_Velerad_full.png/revision/latest/scale-to-width-down/185?cb=20080923210917", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/84/Tw3_journal_roche.png/revision/latest?cb=20160420171523", 
    "https://vignette.wikia.nocookie.net/witcher/images/d/dd/Tw3_journal_ves.png/revision/latest/scale-to-width-down/350?cb=20160706171628", 
    "https://vignette.wikia.nocookie.net/witcher/images/9/92/Tw3_journal_vesemir.png/revision/latest/scale-to-width-down/350?cb=20170315191944", 
    "https://vignette.wikia.nocookie.net/witcher/images/1/17/Tw3_journal_vivaldi.png/revision/latest?cb=20150916144555", 
    "https://vignette.wikia.nocookie.net/witcher/images/4/44/People_Vincent_full.png/revision/latest/scale-to-width-down/186?cb=20081017033427", 
    "https://vignette.wikia.nocookie.net/witcher/images/4/45/Tw3_journal_vivienne.png/revision/latest/scale-to-width-down/350?cb=20160603205558", 
    "https://vignette.wikia.nocookie.net/witcher/images/7/70/Tw3_journal_Vlodimir.png/revision/latest/scale-to-width-down/350?cb=20160405192102", 
    "https://vignette.wikia.nocookie.net/witcher/images/8/87/Tw3_journal_weavess.png/revision/latest/scale-to-width-down/350?cb=20160320065023", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/bb/Tw3_journal_whispess.png/revision/latest/scale-to-width-down/350?cb=20160320065936", 
    "https://vignette.wikia.nocookie.net/witcher/images/b/b4/People_Yaevinn_full.png/revision/latest/scale-to-width-down/167?cb=20080923105229", 
    "https://vignette.wikia.nocookie.net/witcher/images/6/65/Tw2_journal_Yarpenzigrin.png/revision/latest?cb=20110705212418", 
    "https://vignette.wikia.nocookie.net/witcher/images/4/47/Tw3_journal_yennefer.png/revision/latest?cb=20160328143927", 
    "https://vignette.wikia.nocookie.net/witcher/images/9/9e/Tw3_journal_zoltan.png/revision/latest/scale-to-width-down/350?cb=20170315175743"];

  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var name = "";
  var lettersRemaining = 0;
  var guessesRemaining = -1;

  var wins = 0;
  var losses = 0;

  // Reset the game after a win/loss
  function Game() {
    if (guessesRemaining > 0) {
      wins++
    }
    else if (guessesRemaining == 0) {
      losses++
    }

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    $("#name").empty();
    name = names[Math.floor(Math.random() * names.length)];
    document.getElementById("nameImg").src = "";

    lettersRemaining = 0;

    if (name.length > 10)
      guessesRemaining = 6;
    else if (name.length <= 10 & name.length >= 8)
      guessesRemaining = 7;
    else if (name.length < 8)
      guessesRemaining = 8;

    for (var i = 0; i < alphabet.length; i++) {
      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("id", alphabet[i]);
      letterBtn.text(alphabet[i]);
      $("#buttons").append(letterBtn);
    }

    for (var i = 0; i < name.length; i++){
      var correct = $("<p>");

      if (name[i] !== " ") {
        correct.attr("id", i);
        correct.text(" _ ");
        lettersRemaining++;
      }
      else {
        correct.attr("id", "_");
        correct.html("&nbsp;&nbsp;");
      }
      $("#name").append(correct);
    }

    $("#guessesLeft").text("Guesses Remaining: " + guessesRemaining);

    console.log("Correct Name: " + name);
    console.log("Remaining Letters: " + lettersRemaining);
    console.log("Remaining Guesses: " + guessesRemaining);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("");

    $(".letter-button").on("click", function() {
      var userGuess = document.getElementById(this.id).id;
      var correctGuess = false;
      $("#" + userGuess).remove();
  
      for (var i = 0; i < name.length; i++) {
        if (userGuess === name[i].toUpperCase()) {
          document.getElementById(i).textContent = " " + name[i].toUpperCase() + " ";
          lettersRemaining--;
          correctGuess = true;
        }
      }
  
      if (!correctGuess) {
        guessesRemaining--;
      }
  
      $("#guessesLeft").text("Guesses Remaining: " + guessesRemaining);

      console.log("User Guessed: " + userGuess);
      console.log("Remaining Letters: " + lettersRemaining);
      console.log("Remaining Guesses: " + guessesRemaining);
      console.log("");
  
      correctGuess = false;

      if (guessesRemaining == 0 || lettersRemaining == 0) {
        $("#name").empty();
        $("#guessesLeft").text("");
        $("#wins").text("");
        $("#losses").text("");

        for (var i = 0; i < names.length; i++){
          if (names[i] == name) {
            document.getElementById("nameImg").src = sources[i];
          }
        }

        for (var i = 0; i < name.length; i++){
          var correct = $("<p>");
    
          if (name[i] !== " ") {
            correct.attr("id", i);
            correct.text(name[i]);
            lettersRemaining++;
          }
          else {
            correct.attr("id", "_");
            correct.html("&nbsp;");
          }
          $("#name").append(correct);
        }

        for (var i = 0; i < alphabet.length; i++) {
          $("#" + alphabet[i]).remove();
        }
        
        var resetBtn = $("<button>");
        resetBtn.addClass("btn btn-dark");
        resetBtn.attr("id", "reset");
        resetBtn.text("Play Again");
        $("#buttons").append(resetBtn);
  
        if (guessesRemaining == 0) {
          $("#winLose").css("color", "orangered");
          $("#winLose").text("YOU LOSE!");
        }
        else {
          $("#winLose").css("color", "lime");
          $("#winLose").text("YOU WIN!");
        }
  
        $("#reset").on("click", function() {
          $("#reset").remove();
          $("#winLose").text("");
          Game();
        });
      }
    });
  }

  Game();

});