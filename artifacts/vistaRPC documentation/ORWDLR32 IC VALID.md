---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 IC VALID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 IC VALID{:/}
 tag | {::nomarkdown}ICVALID{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Determines whether the suplied time is a valid lab immediate collect time.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is the time a valid immediate collect time?
 Input Parameters | {::nomarkdown}ORTIME{:/}
 Lines | ```
 S ORTIME=$P(ORTIME,".",1)_"."_$E($P(ORTIME,".",2),1,4)
 S ORY=$$VALID^LR7OV4(DUZ(2),ORTIME)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am