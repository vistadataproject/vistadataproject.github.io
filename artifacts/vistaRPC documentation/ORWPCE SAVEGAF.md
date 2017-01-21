---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE SAVEGAF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SAVEGAF{:/}
 tag | {::nomarkdown}SAVEGAF{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves a GAF Score.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORINPUT{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ORINPUT(\DFN\) = Patient IENORINPUT(\GAF\) = GAF ScoreORINPUT(\DATE\) = Date/Time of DiagnosisORINPUT(\STAFF\) = Diagnosis By DUZ{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVEGAF^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Save new GAF score
 Input parameters | {::nomarkdown}ORINPUT{:/}
 Code | {::nomarkdown}  N ORDATA<br> D ENT^YSGAFAP1(.ORDATA,.ORINPUT)<br> S ORY=($G(ORDATA(1))="[DATA]"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}