---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE SAVEGAF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SAVEGAF{:/}
 tag | {::nomarkdown}SAVEGAF{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves a GAF Score.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORINPUT{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ORINPUT(\DFN\) = Patient IENORINPUT(\GAF\) = GAF ScoreORINPUT(\DATE\) = Date/Time of DiagnosisORINPUT(\STAFF\) = Diagnosis By DUZ{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVEGAF^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Save new GAF score
 Input parameters | {::nomarkdown}ORINPUT{:/}
 Code | ```  N ORDATA
 D ENT^YSGAFAP1(.ORDATA,.ORINPUT)
 S ORY=($G(ORDATA(1))="[DATA]")```




 Generated on January 14th 2017, 7:26:35 am