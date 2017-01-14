---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDLR32 IC VALID 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 IC VALID{:/}
 tag | {::nomarkdown}ICVALID{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Determines whether the suplied time is a valid lab immediate collect time.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ICVALID^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Is the time a valid immediate collect time?
 Input parameters | {::nomarkdown}ORTIME{:/}
 Code | ```  S ORTIME=$P(ORTIME,".",1)_"."_$E($P(ORTIME,".",2),1,4)<br/> S ORY=$$VALID^LR7OV4(DUZ(2),ORTIME)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}