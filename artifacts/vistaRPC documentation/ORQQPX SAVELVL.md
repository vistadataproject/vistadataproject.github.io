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
 Lines | ```{::nomarkdown} N ORERR,PARAM,I<br/> I LVL="CLASS" D  I 1<br/> .S PARAM="ORQQPX COVER SHEET REM CLASSES"<br/> .S LVL="SYS"<br/> .D DEL^XPAR(LVL,PARAM,"`"_CLASS,.ORERR)<br/> .D EN^XPAR(LVL,PARAM,"`"_CLASS,.DATA,.ORERR)<br/> E  D<br/> .S PARAM="ORQQPX COVER SHEET REMINDERS"<br/> .D NDEL^XPAR(LVL,PARAM,.ORERR)<br/> .S I=0<br/> .F  S I=$O(DATA(I)) Q:'I  D<br/> ..D EN^XPAR(LVL,PARAM,$P(DATA(I),U,1),$P(DATA(I),U,2),.ORERR)<br/> S ORY=1```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LVL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Parameter Level{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Optional User Class IEN if LVL is CLASS{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Data.{:/} | 




 Generated on January 13th 2017, 7:11:27 am