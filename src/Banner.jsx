import React from 'react'
import { Container, Typography, CssBaseline, Button } from '@material-ui/core';


function Banner(props) {

  return (

    <>
      <CssBaseline />

      <Container style = {{backgroundAttachment : "fixed" , backgroundPosition : "center" }} className="bgcontainer" maxWidth="large" >

        <Container className="svgdiv" maxWidth="small" align="center">

          <svg className="bgsvg" id="ee1442bd-1906-4669-896c-455205bcea2c" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1013.94928" height="503" viewBox="0 0 1013.94928 503"><title>moonlight</title><path d="M600,198.5c-278.673,0-504.824,224.83411-506.97467,503H1106.97464C1104.824,423.33411,878.67307,198.5,600,198.5Z" transform="translate(-93.02536 -198.5)" fill="#2f2e41" /><circle cx="480.78756" cy="52.54395" r="5" fill="#f2f2f2" /><circle cx="323.78756" cy="217.54395" r="2" fill="#f2f2f2" /><circle cx="618.78756" cy="311.54395" r="2" fill="#f2f2f2" /><circle cx="97.78756" cy="286.54395" r="2" fill="#f2f2f2" /><circle cx="877.78756" cy="215.54395" r="2" fill="#f2f2f2" /><circle cx="235.78756" cy="236.54395" r="2" fill="#f2f2f2" /><circle cx="563.78756" cy="196.54395" r="2" fill="#f2f2f2" /><circle cx="629.78756" cy="52.54395" r="2" fill="#f2f2f2" /><rect x="211.78756" y="288.54395" width="2" height="1" fill="#f2f2f2" /><rect x="270.78756" y="135.54395" width="2" height="1" fill="#f2f2f2" /><rect x="414.78756" y="249.54395" width="2" height="1" fill="#f2f2f2" /><rect x="796.78756" y="293.54395" width="2" height="1" fill="#f2f2f2" /><rect x="677.78756" y="140.54395" width="2" height="1" fill="#f2f2f2" /><rect x="225.08928" y="363.68007" width="3.51907" height="139.0033" fill="#3f3d56" /><path d="M354.11075,537.89444c.224,48.606-33.97287,88.16737-33.97287,88.16737s-34.56009-39.24449-34.78411-87.85048S319.32664,450.044,319.32664,450.044,353.88673,489.28845,354.11075,537.89444Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><rect x="180.60974" y="322.47213" width="4.56231" height="180.21124" fill="#3f3d56" /><path d="M320.30235,501.938c.29043,63.01538-44.04422,114.30486-44.04422,114.30486s-44.80554-50.87864-45.096-113.894S275.20639,388.044,275.20639,388.044,320.01192,438.92259,320.30235,501.938Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><rect x="712.08928" y="363.68007" width="3.51907" height="139.0033" fill="#6c63ff" /><path d="M841.11075,579.89444c.224,48.606-33.97287,88.16737-33.97287,88.16737s-34.56009-39.24449-34.78411-87.85048S806.32664,492.044,806.32664,492.044,840.88673,531.28845,841.11075,579.89444Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><rect x="141.08928" y="363.68007" width="3.51907" height="139.0033" fill="#3f3d56" /><path d="M270.11075,537.89444c.224,48.606-33.97287,88.16737-33.97287,88.16737s-34.56009-39.24449-34.78411-87.85048S235.32664,450.044,235.32664,450.044,269.88673,489.28845,270.11075,537.89444Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><rect x="451.08928" y="363.68007" width="3.51907" height="139.0033" fill="#3f3d56" /><path d="M580.11075,537.89444c.224,48.606-33.97287,88.16737-33.97287,88.16737s-34.56009-39.24449-34.78411-87.85048S545.32664,450.044,545.32664,450.044,579.88673,489.28845,580.11075,537.89444Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><rect x="406.60974" y="322.47213" width="4.56231" height="180.21124" fill="#3f3d56" /><path d="M546.30235,501.938c.29043,63.01538-44.04422,114.30486-44.04422,114.30486s-44.80554-50.87864-45.096-113.894S501.20639,388.044,501.20639,388.044,546.01192,438.92259,546.30235,501.938Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><rect x="367.08928" y="363.68007" width="3.51907" height="139.0033" fill="#3f3d56" /><path d="M496.11075,537.89444c.224,48.606-33.97287,88.16737-33.97287,88.16737s-34.56009-39.24449-34.78411-87.85048S461.32664,450.044,461.32664,450.044,495.88673,489.28845,496.11075,537.89444Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><path d="M831.38738,626.91334l-58.80359-54.06855c-.15881,2.42975-.24146,4.88556-.2301,7.36652.22412,48.60608,34.78418,87.85046,34.78418,87.85046A162.81545,162.81545,0,0,0,831.38738,626.91334Z" transform="translate(-93.02536 -198.5)" fill="#6c63ff" /><path d="M393.6691,688.7839c2.01475,7.44773,8.91572,12.0603,8.91572,12.0603s3.63442-7.46259,1.61967-14.91032-8.91572-12.06029-8.91572-12.06029S391.65435,681.33617,393.6691,688.7839Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><path d="M396.62963,687.18331c5.5285,5.38177,6.20377,13.65481,6.20377,13.65481s-8.28821-.45254-13.81671-5.83431-6.20377-13.65482-6.20377-13.65482S391.10113,681.80153,396.62963,687.18331Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><path d="M677.6691,688.7839c2.01475,7.44773,8.91572,12.0603,8.91572,12.0603s3.63442-7.46259,1.61967-14.91032-8.91572-12.06029-8.91572-12.06029S675.65435,681.33617,677.6691,688.7839Z" transform="translate(-93.02536 -198.5)" fill="#6c63ff" /><path d="M680.62963,687.18331c5.5285,5.38177,6.20377,13.65481,6.20377,13.65481s-8.28821-.45254-13.81671-5.83431-6.20377-13.65482-6.20377-13.65482S675.10113,681.80153,680.62963,687.18331Z" transform="translate(-93.02536 -198.5)" fill="#6c63ff" /><path d="M169.6691,688.7839c2.01475,7.44773,8.91572,12.0603,8.91572,12.0603s3.63442-7.46259,1.61967-14.91032-8.91572-12.06029-8.91572-12.06029S167.65435,681.33617,169.6691,688.7839Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><path d="M172.62963,687.18331c5.5285,5.38177,6.20377,13.65481,6.20377,13.65481s-8.28821-.45254-13.81671-5.83431-6.20377-13.65482-6.20377-13.65482S167.10113,681.80153,172.62963,687.18331Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><path d="M480.35814,419.20747,576.8684,564.86915a113.62605,113.62605,0,0,0,3.24237-26.97473c-.10926-23.702-8.3833-45.17511-16.83319-60.96l-4.46466,1.1095,4.19915-1.60193A155.07209,155.07209,0,0,0,545.32665,450.044s-2.4624,2.85-6.05945,7.95465c-12.67957-41.12823-38.06079-69.95465-38.06079-69.95465A197.509,197.509,0,0,0,480.35814,419.20747Z" transform="translate(-93.02536 -198.5)" fill="#6c63ff" /><path d="M1035.64285,695.28885a2.87755,2.87755,0,1,0,0-5.7551H1011.983a6.4344,6.4344,0,0,1-2.87755,8.63265,2.87755,2.87755,0,0,0,2.87755,2.87755h23.65987a2.87755,2.87755,0,1,0,0-5.7551Z" transform="translate(-93.02536 -198.5)" fill="#f2f2f2" opacity="0.1" /><path d="M979.40863,689.35125c.40429,15.6927-9.088,11.6927-20.59571,11.6927s-21,2-21.07755-11.6927c-.03819-6.74272,9.39741-8.20933,20.90516-8.20933S979.235,682.61066,979.40863,689.35125Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><path d="M1006.33049,695.55305a1.76355,1.76355,0,0,0-.59643-.192,29.82582,29.82582,0,0,1-3.09937-.6626,6.5294,6.5294,0,0,1-2.74328-1.52636,6.6057,6.6057,0,0,0-.96619-.92542,1.1618,1.1618,0,0,0-1.25977-.09051.83037.83037,0,0,0-.11157.106q-.21423-.14154-.42871-.283-1.14221-.75183-2.29541-1.48675l-.03125-.0199a1.05655,1.05655,0,0,0,.0022-.36548,1.76634,1.76634,0,0,0-.76563-.95007c.99219-.00952,1.98951-.1001,2.97559-.20435a3.56935,3.56935,0,0,0,2.52612-.98742.68615.68615,0,0,0,.176-.40808c.00122-.31067-.31934-.51386-.60681-.6316a6.10058,6.10058,0,0,0-1.18665-.35009,6.49543,6.49543,0,0,1-.84155-.17566,4.24172,4.24172,0,0,1-.7085-.33478q-.73316-.40356-1.46631-.80707a2.23769,2.23769,0,0,1-.56714-.39355c-.249-.26349-.35913-.63587-.61291-.89478-.23377-.23859-1.1792-.55267-1.31445-.06384-.05347.19305.15051.40674.17517.62262a9.90818,9.90818,0,0,0-1.01477-.55756c.01892-.04315.04406-.08233.06042-.127a13.07328,13.07328,0,0,1-3.75952-4.86737c.14539.00323.29065.01251.436.01135a1.11456,1.11456,0,0,0,.70434-.17206.76909.76909,0,0,0,.24963-.62463,2.11712,2.11712,0,0,0-.16857-.6731,5.15129,5.15129,0,0,0-.97339-1.74627,5.841,5.841,0,0,0-1.426-1.013l-.08447-.04748c-.03565-.108-.06812-.217-.11121-.32257a17.17213,17.17213,0,0,0-1.06946-1.90283,12.45233,12.45233,0,0,1-1.22277-3.25666,4.19574,4.19574,0,0,0-.77185-1.91565c-.76319-.84106-2.072-.81982-3.20044-.69262-.6438.07257-1.28467.16955-1.92481.269-.0061-.01605-.00647-.03375-.01294-.04968a1.3106,1.3106,0,0,1-.14734-.48548,2.01263,2.01263,0,0,1,.0907-.40838,1.00286,1.00286,0,0,0-.28-.92139c-.02661-.02551-.053-.05426-.07947-.08228q.10566-.24939.194-.50317a.6043.6043,0,0,0,.14075-.45569,4.82416,4.82416,0,0,0,.18274-1.25915,13.78848,13.78848,0,0,1-.10107-2.841,1.59086,1.59086,0,0,0-.25-.65673c-.02344-.03156-.0625-.046-.08911-.0741a4.02209,4.02209,0,0,1,.67089-.69659,10.09259,10.09259,0,0,1,1.57447-.99775c.13281-.07312.31811-.12512.44506-.20892a4.45646,4.45646,0,0,0,.58863.05933,4.48869,4.48869,0,0,0,4.20776-6.12317,1.57362,1.57362,0,0,0,.98-.72315,2.94537,2.94537,0,0,0,.38452-1.2456,1.30425,1.30425,0,0,0-.18823-.98468,2.20151,2.20151,0,0,0-.57263-.40058,2.19494,2.19494,0,0,1-.71338-.72229c-.12646-.20874-.217-.43689-.33069-.65283a2.4202,2.4202,0,0,0-2.09118-1.38586,9.03817,9.03817,0,0,0-1.244.24792c-1.39991.24549-2.92176-.49524-4.22046.08246a3.9278,3.9278,0,0,0-.88306.58887q-.54858.45236-1.05444.95306a2.1824,2.1824,0,0,0-.64258.9353c-.17639.66254.24316,1.40284-.0238,2.03437a3.07119,3.07119,0,0,1-.32557.51135c-.29467.43213.02539,2.11914-.00708,2.64117a.97881.97881,0,0,0,.18067.72358.61087.61087,0,0,0,.13147.1004,58.57379,58.57379,0,0,0-6.3794,2.71124,13.67072,13.67072,0,0,0-5.91955,5.52924c-.35156.68554-.6189,1.41064-.937,2.11242-.42395.93586-.937,1.82819-1.44934,2.71888-.62488,1.08636-1.25086,2.17462-1.97352,3.19854a18.33463,18.33463,0,0,0-1.14257,1.69361,1.625,1.625,0,0,0-.00757.25689.45932.45932,0,0,1-.0232.2406.37171.37171,0,0,1-.27331.15638l-.017.04406a15.66155,15.66155,0,0,0-.40552,1.60138c-.21337.859-.55346,1.68811-.68432,2.56354a.68174.68174,0,0,0,.66528,1.06226c.74915.33319,1.47095.72332,2.19043,1.11682-.01062.05279-.0271.10364-.03381.15759a2.9519,2.9519,0,0,0,1.56445,2.73352,8.05082,8.05082,0,0,0,3.19275.86768c.4314.05176.86548.07586,1.29761.11993a8.81934,8.81934,0,0,0,1.99853.80982,1.85314,1.85314,0,0,0,.46778.0733,1.42218,1.42218,0,0,0,1.06933-.60242,73.85972,73.85972,0,0,0,11.15405-.2276,4.08064,4.08064,0,0,1,3.01038.46668c.80408.65344.9657,1.81176,1.56311,2.65844a9.80322,9.80322,0,0,0,1.45435,1.41871,21.66952,21.66952,0,0,1,2.79272,3.67083,8.24067,8.24067,0,0,0,3.36475,3.1059,2.381,2.381,0,0,1,1.04443-.90851c.11133-.06622.21753-.14349.3269-.21472a4.109,4.109,0,0,0,.51062.66565c.14319.15491.28577.31854.41968.48736-.00427.00043-.00793-.00207-.0122-.0014-.19471.03058-.25989.27386-.28223.46967q-.12835,1.12462-.257,2.2492a.83679.83679,0,0,0,.03.44452.78577.78577,0,0,0,.40454.33569,6.09134,6.09134,0,0,0,2.21875.58533c.38745.02631.77686.0155,1.16358.04956a14.05834,14.05834,0,0,1,1.87963.37525,17.67309,17.67309,0,0,0,5.1272.40149,3.26142,3.26142,0,0,0,1.03992-.197,3.092,3.092,0,0,0,1.02649-.79467,2.90688,2.90688,0,0,0,.77221-1.23688A1.20147,1.20147,0,0,0,1006.33049,695.55305Z" transform="translate(-93.02536 -198.5)" fill="#3f3d56" /><path d="M978.66619,645.31873c.166-.02911.32959-.07428.4934-.11645a3.60492,3.60492,0,0,0-1.56518.15124A4.36632,4.36632,0,0,0,978.66619,645.31873Z" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M982.00139,646.45667c.11365.21594.20423.44409.33069.65283a2.19494,2.19494,0,0,0,.71338.72229,2.20151,2.20151,0,0,1,.57263.40058,1.30425,1.30425,0,0,1,.18823.98468,2.94537,2.94537,0,0,1-.38452,1.2456,1.57362,1.57362,0,0,1-.98.72315,4.40889,4.40889,0,0,1-4.79639,6.06384c-.127.0838-.31225.1358-.44506.20892a10.09259,10.09259,0,0,0-1.57447.99775,4.02209,4.02209,0,0,0-.67089.69659c.02661.02814.06567.04254.08911.0741a1.59086,1.59086,0,0,1,.25.65673,13.78848,13.78848,0,0,0,.10107,2.841,4.82416,4.82416,0,0,1-.18274,1.25915.6043.6043,0,0,1-.14075.45569q-.0888.25378-.194.50317c.02649.028.05286.05677.07947.08228a1.00286,1.00286,0,0,1,.28.92139,2.01263,2.01263,0,0,0-.0907.40838,1.3106,1.3106,0,0,0,.14734.48548c.00647.01593.00684.03363.01294.04968.64014-.09943,1.281-.19641,1.92481-.269a9.45448,9.45448,0,0,1,.95532-.06269.66.66,0,0,1-.04041-.20349,2.01263,2.01263,0,0,1,.0907-.40838,1.00286,1.00286,0,0,0-.28-.92139c-.02661-.02551-.053-.05426-.07947-.08228q.10566-.24939.194-.50317a.6043.6043,0,0,0,.14075-.45569,4.82416,4.82416,0,0,0,.18274-1.25915,13.78848,13.78848,0,0,1-.10107-2.841,1.59086,1.59086,0,0,0-.25-.65673c-.02344-.03156-.0625-.046-.08911-.0741a4.02209,4.02209,0,0,1,.67089-.69659,10.09259,10.09259,0,0,1,1.57447-.99775c.13281-.07312.31811-.12512.44506-.20892a4.45646,4.45646,0,0,0,.58863.05933,4.48869,4.48869,0,0,0,4.20776-6.12317,1.57362,1.57362,0,0,0,.98-.72315,2.94537,2.94537,0,0,0,.38452-1.2456,1.30425,1.30425,0,0,0-.18823-.98468,2.20151,2.20151,0,0,0-.57263-.40058,2.19494,2.19494,0,0,1-.71338-.72229c-.12646-.20874-.217-.43689-.33069-.65283a2.4202,2.4202,0,0,0-2.09118-1.38586,9.03817,9.03817,0,0,0-1.244.24792,3.78441,3.78441,0,0,1-.69312.04578A2.792,2.792,0,0,1,982.00139,646.45667Z" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1006.33049,695.55305a1.76355,1.76355,0,0,0-.59643-.192,29.82582,29.82582,0,0,1-3.09937-.6626,6.5294,6.5294,0,0,1-2.74328-1.52636,6.6057,6.6057,0,0,0-.96619-.92542,1.1618,1.1618,0,0,0-1.25977-.09051.83037.83037,0,0,0-.11157.106q-.21423-.14154-.42871-.283-1.14221-.75183-2.29541-1.48675l-.03125-.0199a1.05655,1.05655,0,0,0,.0022-.36548,1.76634,1.76634,0,0,0-.76563-.95007c.99219-.00952,1.98951-.1001,2.97559-.20435a3.56935,3.56935,0,0,0,2.52612-.98742.68615.68615,0,0,0,.176-.40808c.00122-.31067-.31934-.51386-.60681-.6316a6.10058,6.10058,0,0,0-1.18665-.35009,6.49543,6.49543,0,0,1-.84155-.17566,4.24172,4.24172,0,0,1-.7085-.33478q-.73316-.40356-1.46631-.80707a2.23769,2.23769,0,0,1-.56714-.39355c-.249-.26349-.35913-.63587-.61291-.89478-.23377-.23859-1.1792-.55267-1.31445-.06384-.05347.19305.15051.40674.17517.62262a9.90818,9.90818,0,0,0-1.01477-.55756c.01892-.04315.04406-.08233.06042-.127a13.07328,13.07328,0,0,1-3.75952-4.86737c.14539.00323.29065.01251.436.01135a1.11456,1.11456,0,0,0,.70434-.17206.76909.76909,0,0,0,.24963-.62463,2.11712,2.11712,0,0,0-.16857-.6731,5.15129,5.15129,0,0,0-.97339-1.74627,5.841,5.841,0,0,0-1.426-1.013l-.08447-.04748c-.03565-.108-.06812-.217-.11121-.32257a17.17213,17.17213,0,0,0-1.06946-1.90283,12.45233,12.45233,0,0,1-1.22277-3.25666,4.19574,4.19574,0,0,0-.77185-1.91565c-.76319-.84106-2.072-.81982-3.20044-.69262-.2522.02844-.50257.07074-.754.10534a2.1324,2.1324,0,0,1,.95447.58728,4.19574,4.19574,0,0,1,.77185,1.91565,12.45233,12.45233,0,0,0,1.22277,3.25666,17.17213,17.17213,0,0,1,1.06946,1.90283c.04309.10559.07556.2146.11121.32257l.08447.04748a5.841,5.841,0,0,1,1.426,1.013,5.15129,5.15129,0,0,1,.97339,1.74627,2.11712,2.11712,0,0,1,.16857.6731.76909.76909,0,0,1-.24963.62463,1.11456,1.11456,0,0,1-.70434.17206c-.14539.00116-.29065-.00812-.436-.01135a13.07328,13.07328,0,0,0,3.75952,4.86737c-.01636.04468-.0415.08386-.06042.127a9.90818,9.90818,0,0,1,1.01477.55756c-.02466-.21588-.22864-.42957-.17517-.62262.13525-.48883,1.08068-.17475,1.31445.06384.25378.25891.36389.63129.61291.89478a2.23769,2.23769,0,0,0,.56714.39355q.73315.40347,1.46631.80707a4.24172,4.24172,0,0,0,.7085.33478,6.49543,6.49543,0,0,0,.84155.17566,6.10058,6.10058,0,0,1,1.18665.35009c.28747.11774.608.32093.60681.6316a.68615.68615,0,0,1-.176.40808,3.56935,3.56935,0,0,1-2.52612.98742c-.98608.10425-1.9834.19483-2.97559.20435a1.76634,1.76634,0,0,1,.76563.95007,1.05655,1.05655,0,0,1-.0022.36548l.03125.0199q1.1532.73489,2.29541,1.48675.2146.14118.42871.283a.83037.83037,0,0,1,.11157-.106,1.1618,1.1618,0,0,1,1.25977.09051,6.6057,6.6057,0,0,1,.96619.92542,6.5294,6.5294,0,0,0,2.74328,1.52636,29.82582,29.82582,0,0,0,3.09937.6626,1.76355,1.76355,0,0,1,.59643.192,1.20147,1.20147,0,0,1,.44287,1.30505,2.90688,2.90688,0,0,1-.77221,1.23688,3.092,3.092,0,0,1-1.02649.79467,2.675,2.675,0,0,1-.76111.1673,17.64941,17.64941,0,0,0,2.72119.02967,3.26142,3.26142,0,0,0,1.03992-.197,3.092,3.092,0,0,0,1.02649-.79467,2.90688,2.90688,0,0,0,.77221-1.23688A1.20147,1.20147,0,0,0,1006.33049,695.55305Z" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M989.69426,693.04914c.04956.04535.098.09222.14868.13605-.03686-.05384-.07775-.10553-.11084-.16089Z" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1034.36394,684.73783c0,10.59485-4.72386,7.67347-10.551,7.67347s-10.551,2.92138-10.551-7.67347,10.551-30.69388,10.551-30.69388S1034.36394,674.143,1034.36394,684.73783Z" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1028.60883,688.79149c0,4.81584-2.1472,3.48794-4.79591,3.48794s-4.79592,1.3279-4.79592-3.48794,4.79592-13.95176,4.79592-13.95176S1028.60883,683.97565,1028.60883,688.79149Z" transform="translate(-93.02536 -198.5)" opacity="0.1" /><path d="M1037.03806,656.42815s2.192-2.27928,2.14838-4.51492" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1014.57452,637.4359s-.9151-3.027-2.88614-4.08291" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M992.57452,596.4359s-.9151-3.027-2.88614-4.08291" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1018.57452,651.4359s-.9151-3.027-2.88614-4.08291" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1015.57452,602.4359s-.9151-3.027-2.88614-4.08291" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1009.57452,620.4359s-.9151-3.027-2.88614-4.08291" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1035.03806,687.42815s2.192-2.27928,2.14838-4.51492" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><path d="M1039.03806,670.42815s2.192-2.27928,2.14838-4.51492" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><rect x="987.1638" y="671.54367" width="25.29822" height="1.00056" transform="translate(-254.23722 152.15568) rotate(-18.43495)" fill="#ff6584" /><path d="M1009.91214,668.52342c.90078,3.52053-.61161,2.67955-1.99108,2.965s-1.10814,1.55549-3.00439-1.9312c-1.31147-2.41144.61162-2.67955,1.99108-2.965S1009.29705,666.11941,1009.91214,668.52342Z" transform="translate(-93.02536 -198.5)" fill="#ff6584" /><polygon points="574.728 277.957 574.728 277.957 574.727 277.956 552.908 257.894 552.712 257.943 543.975 250 543.553 249.877 544.008 249.704 451.089 164.271 451.089 164.271 361.353 81.762 315.628 106.016 311.888 106.844 366.685 189.544 574.068 502.544 818.988 502.544 574.728 277.957" fill="#f2f2f2" opacity="0.1" /><circle cx="334.78756" cy="92.54395" r="27" fill="#f2f2f2" /></svg>

        </Container>


        <Typography className="bgh1" variant="h2" align="center" guttuerBottom > <b> Wanna Explore World! </b> </Typography>
        <Typography className="bgp" varient="h5" align="center" > <b>  In its most general sense,  the term "world" refers to the totality <br></br> of entities, to the whole of reality or to <br></br> everything that was, is and will be. </b> </Typography>

        <Container maxWidth="large" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="bgbtn">
          <Button style={{ marginTop: "5%" }} variant="contained" color="secondary" align="center" > Dark theme </Button>
          <Button style={{ marginTop: "5%", border: "2px solid #FF0378" }} variant="outlined" color="secondary" align="center" > Light theme </Button>
        </Container>

      </Container>

    </>

  )

}


export default Banner