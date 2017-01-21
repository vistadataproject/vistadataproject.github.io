---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGRADPTR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGRADPTR{:/}
 tag | {::nomarkdown}MAGPTR{:/}
 routine | [MAGGTRA](http://code.osehra.org/dox/Routine_MAGGTRA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Files the image pointer into the Radiology package and the Radiologypointers into the Imaging package.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XDUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Not being used anymore, kept for backward compatibility.DUZ of user.   {:/} | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of Image File entry  ^MAG(2005,{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}First \^\ piece is MAGIEN, The IMAGE File Internal number.  ^MAG(2005,Next  \^\ pieces are the same RAD DATA that was sent in the  RPC Call MAGGRADLIST, as the return Array.    RADFN_\^\_RADTI_\^\_RACNI_\^\_RANME_\^\_RASSN_\^\   _RADATE_\^\_RADTE_\^\_RACN_\^\_RAPRC_\^\_RARPT_\^\_RASTThe same DATA that the RAD procedure RAPTLU saved in ^TMP($J,\RAEX\,RACNT) We saved the variables that the RAD Routine RAPTLU set up when creatingthe list of Rad Exams for the patient. We send it back as input here,Initialize the variables so when we need to call any Rad Procedure, wehave what we need.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}