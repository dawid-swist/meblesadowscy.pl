/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var articlesRouter = express.Router();

  articlesRouter.get('/', function(req, res) {
    res.send({
      "articles": [{
        "title": "O firmie",
        "Language": "English",
        "Body": "<p>MEBLE Sadowscy has over 20 years of experience in the furniture and joinery industry. We offer quality workmanship and a professional service for all aspects of bespoke joinery and carpentry. Using our knowledge and experience our main objective is to offer are customers; reliable and honest advice, at competitive prices. We offer all types of joinery work, from domestic to commercial through to garden buildings (landscape architecture) and furniture renovation work. We specialise in softwood and hardwood joinery but also were using a laminated boards to produce modern furnitures, which are all designed to suit the customer requirements. Were focus on the Lower Silesian market but you can find ours realisations in Great Britain, USA and Australia.</p><br />\n",
        "nid": "16",
        "ShortUrl": "firma",
        "Image": null,
        "RouterName": "mainPage",
        "BackgroundColor": "amber",
        "ColorTone": "lighten-5",
        "id": "firma"
      }, {
        "title": "Wpolpraca",
        "Language": "English",
        "Body": "<p class=\"rtejustify\">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack! \" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch \"Jeopardy! \", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz<strong>. Brawny gods just</strong></p><br />\n",
        "nid": "21",
        "ShortUrl": "wpolpraca",
        "Image": null,
        "RouterName": "mainPage.nav",
        "BackgroundColor": "lime",
        "ColorTone": "darken-5",
        "id": "wpolpraca"
      }, {
        "title": "Kontakt",
        "Language": "English",
        "Body": "<p>Serdecznie zapraszam zapoznania się z naszymi realizacjami.<br /><br />\nMEBLE Sadowscy<br /><br />\ninż. Sławomir Sadowski<br /><br />\ntel. 787 759 659<br /><br />\ne-mail: <a href=\"mailto:s.sadowski@op.pl\">s.sadowski@op.pl</a><br /><br />\nbiuro: ul. Powstańców Śląskich 134 (p.II, lok 215), 53-315 Wrocław</p><br />\n",
        "nid": "25",
        "ShortUrl": null,
        "Image": null,
        "RouterName": null,
        "BackgroundColor": null,
        "ColorTone": null,
        "id": null
      }, {
        "title": "Referencje",
        "Language": "English",
        "Body": "<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p><br />\n<p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me? \" he thought. It wasn't a dream.</p><br />\n<p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</p><br />\n",
        "nid": "19",
        "ShortUrl": "referencje",
        "Image": null,
        "RouterName": null,
        "BackgroundColor": null,
        "ColorTone": null,
        "id": "referencje"
      }]
    });
  });

  app.use('/api/articles', articlesRouter);
};
