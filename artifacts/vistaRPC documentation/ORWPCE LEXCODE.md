---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE LEXCODE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE LEXCODE{:/}
 tag | {::nomarkdown}LEXCODE{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a code associated with a lexicon entry.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return code for a lexicon entry
 Input Parameters | {::nomarkdown}IEN<br/>APP<br/>ORDATE{:/}
 Lines | ```
 S VAL=""
 S:'+$G(ORDATE) ORDATE=DT
 I APP="ICD"!(APP="10D") S VAL=$$ONE^LEXU(IEN,ORDATE,APP)_U_$S(APP="ICD":"ICD-9-CM",1:"ICD-10-CM")
 I APP="CPT"!(APP="CHP") S VAL=$$CPTONE^LEXU(IEN,ORDATE)_U_"CPT-4"
 I $P(VAL,U)="",(APP="CHP") S VAL=$$CPCONE^LEXU(IEN,ORDATE)_U_"HCPCS"```




 Generated on January 13th 2017, 6:55:29 am