/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var productsRouter = express.Router();

  productsRouter.get('/', function(req, res) {
    res.send({
      "products": [{
        "id": "Architektura ogrodowa - balkony 1",
        "Title": "Architektura ogrodowa - balkony 1",
        "Description": "Architektura ogrodowa - balkony 1",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02677.JPG?itok=GnP6rAOV",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02681.JPG?itok=cHhCmcHq",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02682.JPG?itok=aCh52FFg",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02684.JPG?itok=F6yEGLBR",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02686.JPG?itok=okD_HL08",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02691.JPG?itok=Kd13kO1X",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Architektura ogrodowa, Balkony",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02677.JPG?itok=S8n42naa",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02681.JPG?itok=q5WW7XqV",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02682.JPG?itok=zDX14mth",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02684.JPG?itok=1dt4jADX",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02686.JPG?itok=rWpraEVq",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02691.JPG?itok=NlA-CT_T",
            "alt": ""
          }
        ],
        "Category": "Architektura ogrodowa",
        "ProductType": "Balkony"

      }, {

        "id": "Architektura ogrodowa - balkony 2",
        "Title": "Architektura ogrodowa - balkony 2",
        "Description": "Architektura ogrodowa - balkony 2",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/117_1763.JPG?itok=bEJoKHzR",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/010654.JPG?itok=qhoZv7_4",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Architektura ogrodowa, Balkony",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/117_1763.JPG?itok=1V2nIrb-",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/010654.JPG?itok=cAt3xAmt",
            "alt": ""
          }
        ],
        "Category": "Architektura ogrodowa",
        "ProductType": "Balkony"

      }, {

        "id": "Architektura ogrodowa - balkony 3",
        "Title": "Architektura ogrodowa - balkony 3",
        "Description": "Architektura ogrodowa - balkony 3",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8126.JPG?itok=489W3-4r",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8152.JPG?itok=kC681dtq",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8163.JPG?itok=v7PiTHUx",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8164.JPG?itok=4eEj3-L4",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8165.JPG?itok=DmGs9801",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8166.JPG?itok=9bGUv2_m",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8167.JPG?itok=HL9y3zMn",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Balkony, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8126.JPG?itok=qGTaaxJV",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8152.JPG?itok=g8nWLpkP",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8163.JPG?itok=TpuZu1Hk",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8164.JPG?itok=7ed7w9Ed",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8165.JPG?itok=lJBP3gtL",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8166.JPG?itok=eMQ5hKHL",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8167.JPG?itok=nhQkIfTZ",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Balkony"

      }, {

        "id": "Wnętrze - drzwi galeria 1",
        "Title": "Wnętrze - drzwi galeria 1",
        "Description": "Wnętrze - drzwi galeria 1",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2354.JPG?itok=aSql04C2",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2356.JPG?itok=9nCeMmqh",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Drzwi, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2354.JPG?itok=6k6u_P93",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2356.JPG?itok=fq3abJVw",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Drzwi"

      }, {

        "id": "Wnętrze - drzwi galeria 2",
        "Title": "Wnętrze - drzwi galeria 2",
        "Description": "Wnętrze - drzwi galeria 2",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010730.JPG?itok=57hqU8UB",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010805.JPG?itok=890oUj6V",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010806.JPG?itok=lIisJ1O1",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Drzwi, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010730.JPG?itok=z-FIlC2K",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010805.JPG?itok=wdfQcJmM",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010806.JPG?itok=HCEXJSmB",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Drzwi"

      }, {

        "id": "Wnętrze - kuchnie - kuchnie z drewna",
        "Title": "Wnętrze - kuchnie - kuchnie z drewna",
        "Description": "Wnętrze - kuchnie - kuchnie z drewna",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_1985.JPG?itok=fcNi1ima",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_1986.JPG?itok=eKlCNjaz",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_1987.JPG?itok=4Jfp9ofb",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2037.JPG?itok=_AJeW8hA",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2037_0.JPG?itok=zQZaB1E7",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2038.JPG?itok=Oxxszmy8",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2041.JPG?itok=Wq3VY8U6",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2042.JPG?itok=_thOoYio",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Kuchnie z drewna, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_1985.JPG?itok=dGFD3dcR",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_1986.JPG?itok=1XQHagrK",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_1987.JPG?itok=YdA6J04l",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2037.JPG?itok=HayFUrUw",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2037_0.JPG?itok=2JFpvKJu",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2038.JPG?itok=7ZvDsspp",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2041.JPG?itok=gWJIDwl_",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2042.JPG?itok=8NkPvRtw",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Kuchnie z drewna"

      }, {

        "id": "Wnętrze - kuchnie - kuchnie nowoczesne",
        "Title": "Wnętrze - kuchnie - kuchnie nowoczesne",
        "Description": "Wnętrze - kuchnie - kuchnie nowoczesne",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2272.JPG?itok=Jb8T2qRS",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2273.JPG?itok=L23ndTX8",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_2716.JPG?itok=LF2ZDsVt",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7469.JPG?itok=2Ojent2P",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7473.JPG?itok=C8QX4uIf",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7474.JPG?itok=YhSpKgrZ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7476.JPG?itok=cqkwuFXg",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7478.JPG?itok=2Bl8VSoP",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7478_0.JPG?itok=iRS0A8Wz",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7479.JPG?itok=cgozZnJg",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7481.JPG?itok=xIIL7UA4",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7483.JPG?itok=KFv1PvPd",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7485.JPG?itok=-_oY-9Jm",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7487.JPG?itok=k_RDjBKu",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7488.JPG?itok=xKb_p4y7",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7489.JPG?itok=D6EW-U02",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7491.JPG?itok=hBg8Dii3",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7512.JPG?itok=dfh1MfT-",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010873.JPG?itok=8KMUUelz",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010873_0.JPG?itok=khebRWRa",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010874.JPG?itok=EYS3iHiU",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010875.JPG?itok=AgmF6dQB",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010876.JPG?itok=rXaxYoEz",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Kuchnie nowoczesne, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2272.JPG?itok=WRYjxJqJ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2273.JPG?itok=-u8e75fj",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_2716.JPG?itok=fETU43yL",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7469.JPG?itok=k_ANWubU",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7473.JPG?itok=rsW4olc8",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7474.JPG?itok=Gnb6ewhC",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7476.JPG?itok=99gZYf3Y",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7478.JPG?itok=dSeN70V8",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7478_0.JPG?itok=RDtG1DgO",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7479.JPG?itok=IopSoHfc",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7481.JPG?itok=Rzf2zLrK",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7483.JPG?itok=kwtO7XJV",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7485.JPG?itok=GZUMndFx",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7487.JPG?itok=63y87pY2",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7488.JPG?itok=JkRGtLA_",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7489.JPG?itok=O7PUNE7T",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7491.JPG?itok=L0Jel7UO",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7512.JPG?itok=RhLiSfq5",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010873.JPG?itok=GQGxvWCt",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010873_0.JPG?itok=E39vrd1k",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010874.JPG?itok=4bw7P4l2",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010875.JPG?itok=ad59H_-r",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010876.JPG?itok=diNygNFW",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Kuchnie nowoczesne"

      }, {

        "id": "Wnętrze - meble dla dzieci",
        "Title": "Wnętrze - meble dla dzieci",
        "Description": "Wnętrze - meble dla dzieci",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/105_0551%20Antresolka.jpg?itok=AElMaa-z",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/105_0552%20Antresolka.JPG?itok=gAxcK8S0",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/106_0660.JPG?itok=AMdQvxGA",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/106_0662.JPG?itok=2nXqeK_d",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC_0314.JPG?itok=7ln3rMwP",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC_0316.JPG?itok=_-G6Qr_t",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC_0317.JPG?itok=bnKcBKtd",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC_0318.JPG?itok=c7O5Jt-o",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1000999.JPG?itok=5-DYlr3X",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010001.JPG?itok=21PT_6We",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010002.JPG?itok=x-jdknDB",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010003.JPG?itok=DnzYL4Si",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010004.JPG?itok=jSkFpt8j",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Meble dziecięce, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/105_0551%20Antresolka.jpg?itok=FkDbSNS8",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/105_0552%20Antresolka.JPG?itok=DyLkpFOw",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/106_0660.JPG?itok=oQbkRV9S",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/106_0662.JPG?itok=8G6WaAEY",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC_0314.JPG?itok=b43E_9ff",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC_0316.JPG?itok=BBkIUXxf",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC_0317.JPG?itok=RxAPo9Ly",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC_0318.JPG?itok=FpMlEWcx",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1000999.JPG?itok=cCxCBUeJ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010001.JPG?itok=Celtf4F5",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010002.JPG?itok=YopfEi5P",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010003.JPG?itok=lZY4fdS5",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010004.JPG?itok=hByEaEea",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Meble dziecięce"

      }, {

        "id": "Wnętrze - meble mdf",
        "Title": "Wnętrze - meble mdf",
        "Description": "Wnętrze - meble mdf",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7501.JPG?itok=numBmtpx",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7526.JPG?itok=smGJN6Z8",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7536.JPG?itok=j6AYZgWX",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7592.JPG?itok=gAp6sn1A",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7595.JPG?itok=w9ZD_YHn",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Meble z płyty, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7501.JPG?itok=H9mRC9Er",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7526.JPG?itok=27oOUMec",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7536.JPG?itok=eFBVj8SN",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7592.JPG?itok=Qn-2HWex",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7595.JPG?itok=hu2g7rLJ",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Meble z płyty"

      }, {

        "id": "Wnętrze - meble z drewna",
        "Title": "Wnętrze - meble z drewna",
        "Description": "Wnętrze - meble z drewna",
        "Images":

          [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02407.JPG?itok=poNoSRK4",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02414.JPG?itok=7WWOr6tJ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02415.JPG?itok=iHSVbb6m",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/DSC02416.JPG?itok=VV8VqfiE",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_0006.JPG?itok=qYrgkHhf",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_5142.JPG?itok=n6UEuTOZ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_5152.JPG?itok=Te1E-fMG",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_5154.JPG?itok=j_Zm7xI1",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_5155.JPG?itok=gc1cOJ4u",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_5962.JPG?itok=clXMdYew",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_5966.JPG?itok=WzTs_3ZC",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7504.JPG?itok=TwpMOhAt",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_7504_0.JPG?itok=DgHni8tY",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8572.JPG?itok=6Qcfo_rJ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8577.JPG?itok=nIxXh09m",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/IMG_8578.JPG?itok=DPHzeefD",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010474.JPG?itok=805SUELI",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010476.JPG?itok=yJ86QlsV",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010476_0.JPG?itok=xJCbc7q6",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010479.JPG?itok=IwmyQZEg",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010720.JPG?itok=-AAbHXGL",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1010721.JPG?itok=lkHljQlL",
            "alt": ""
          }

        ],
        "ProductsTaxonomy": "Meble z drewna, Wnętrza",
        "Thumbnails": [

          {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02407.JPG?itok=7mZo7Aac",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02414.JPG?itok=stdER9or",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02415.JPG?itok=CoO2pdQ_",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/DSC02416.JPG?itok=cIN9Lx-r",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_0006.JPG?itok=jvwyrBFO",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_5142.JPG?itok=K2UlVcH9",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_5152.JPG?itok=Dg4n6OkH",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_5154.JPG?itok=KtsiZRUz",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_5155.JPG?itok=LksimhPZ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_5962.JPG?itok=4RIkVyin",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_5966.JPG?itok=leOmk_p_",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7504.JPG?itok=Ik02mI9H",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_7504_0.JPG?itok=Cqob6pOf",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8572.JPG?itok=OUZTY5fc",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8577.JPG?itok=4VfbwTCZ",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/IMG_8578.JPG?itok=H4NgLz_R",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010474.JPG?itok=PcRoheWB",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010476.JPG?itok=yM98Vj7L",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010476_0.JPG?itok=zMr2R_Wg",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010479.JPG?itok=NdRVyGmL",
            "alt": ""

          }, {

            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010720.JPG?itok=6obwbyYZ",
            "alt": ""

          },

          {
            "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1010721.JPG?itok=-irngrBS",
            "alt": ""
          }
        ],
        "Category": "Wnętrza",
        "ProductType": "Meble z drewna"
      }]
    });
  });
  app.use('/api/products', productsRouter);
};
