---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGRADPTR 

 property | value 
--- | --- 
 label | MAGGRADPTR
 tag | MAGPTR
 routine | [MAGGTRA](http://code.osehra.org/dox/Routine_MAGGTRA_source.html)
 return value type | SINGLE VALUE
 description | Files the image pointer into the Radiology package and the Radiologypointers into the Imaging package.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | XDUZ | LITERAL | 30 | true | Not being used anymore, kept for backward compatibility.DUZ of user.    | 
| vs:Input_Parameter-8994_02 | MAGIEN | LITERAL | 30 | true | Internal entry number of Image File entry  ^MAG(2005, | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 255 | true | First \^\ piece is MAGIEN, The IMAGE File Internal number.  ^MAG(2005,Next  \^\ pieces are the same RAD DATA that was sent in the  RPC Call MAGGRADLIST, as the return Array.    RADFN_\^\_RADTI_\^\_RACNI_\^\_RANME_\^\_RASSN_\^\   _RADATE_\^\_RADTE_\^\_RACN_\^\_RAPRC_\^\_RARPT_\^\_RASTThe same DATA that the RAD procedure RAPTLU saved in ^TMP($J,\RAEX\,RACNT) We saved the variables that the RAD Routine RAPTLU set up when creatingthe list of Rad Exams for the patient. We send it back as input here,Initialize the variables so when we need to call any Rad Procedure, wehave what we need. | 