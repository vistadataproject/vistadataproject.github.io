---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GETMOD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GETMOD{:/}
 tag | {::nomarkdown}GETMOD{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns information for a specific CPT Code.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns info for a specific CPT Modifier
 Input Parameters | {::nomarkdown}ORMODIEN<br/>ORDATE{:/}
 Lines | ```
 N ORDATA
 S:'+$G(ORDATE) ORDATE=DT
 S ORDATA=$$MOD^ICPTMOD(ORMODIEN,"I",ORDATE,1)
 I +ORDATA>0 S MODINFO=ORMODIEN_U_$P(ORDATA,U,3)_U_$P(ORDATA,U,2)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MODIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}CPT MODIFIER IEN{:/} | 




 Generated on January 13th 2017, 6:55:29 am