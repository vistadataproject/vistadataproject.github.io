---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE SAVEGAF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SAVEGAF{:/}
 tag | {::nomarkdown}SAVEGAF{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves a GAF Score.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Save new GAF score
 Input Parameters | {::nomarkdown}ORINPUT{:/}
 Lines | ```
 N ORDATA
 D ENT^YSGAFAP1(.ORDATA,.ORINPUT)
 S ORY=($G(ORDATA(1))="[DATA]")```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORINPUT{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ORINPUT(\DFN\) = Patient IENORINPUT(\GAF\) = GAF ScoreORINPUT(\DATE\) = Date/Time of DiagnosisORINPUT(\STAFF\) = Diagnosis By DUZ{:/} | 




 Generated on January 13th 2017, 6:55:29 am