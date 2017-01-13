---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH NFSLOC READY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH NFSLOC READY{:/}
 tag | {::nomarkdown}OPLOCOK{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return '1' if hospital location has been entered in NUTRITION LOCATION file for outpatient meal ordering.Return '0' if not yet entered.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | OK to order OP Meals from this location
 Input Parameters | {::nomarkdown}ORLOC{:/}
 Lines | ```
 I 'ORLOC S ORY=0 Q
 S ORY=$S($L($$NFSLOC^FHOMAPI(ORLOC))>0:1,1:0)
```




 Generated on January 13th 2017, 6:55:29 am