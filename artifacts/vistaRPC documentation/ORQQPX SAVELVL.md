---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX SAVELVL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX SAVELVL{:/}
 tag | {::nomarkdown}SAVELVL{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves Parameter Level settings.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Save cover sheet reminders at a specified level
 Input Parameters | {::nomarkdown}LVL<br/>CLASS<br/>DATA{:/}
 Lines | ```
 N ORERR,PARAM,I
 I LVL="CLASS" D  I 1
 .S PARAM="ORQQPX COVER SHEET REM CLASSES"
 .S LVL="SYS"
 .D DEL^XPAR(LVL,PARAM,"`"_CLASS,.ORERR)
 .D EN^XPAR(LVL,PARAM,"`"_CLASS,.DATA,.ORERR)
 E  D
 .S PARAM="ORQQPX COVER SHEET REMINDERS"
 .D NDEL^XPAR(LVL,PARAM,.ORERR)
 .S I=0
 .F  S I=$O(DATA(I)) Q:'I  D
 ..D EN^XPAR(LVL,PARAM,$P(DATA(I),U,1),$P(DATA(I),U,2),.ORERR)
 S ORY=1```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LVL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Parameter Level{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Optional User Class IEN if LVL is CLASS{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Data.{:/} | 




 Generated on January 13th 2017, 6:55:29 am