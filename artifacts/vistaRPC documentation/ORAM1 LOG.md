---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM1 LOG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORAM1 LOG{:/}
 tag | {::nomarkdown}LOGIT{:/}
 routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Updates Anticoagulation Flowsheet file (#103) and adds log entry.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FSARRAY{:/} | {::nomarkdown}LIST{:/} |  |  |  | 
| {::nomarkdown}COMP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}COMP=0 Will remove this entry's complication indication code (instead of1= Major Bleed, 2=Clot, 3=Minor Bleed), the original complicatons will stay in the file, but they will no longer be visible or considered in reports based on the COMPLICATION code (104).{:/} | 




 Generated on January 13th 2017, 5:52:13 am