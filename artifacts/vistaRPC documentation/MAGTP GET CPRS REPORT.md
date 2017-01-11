---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP GET CPRS REPORT 

 property | value 
--- | --- 
 label | MAGTP GET CPRS REPORT
 tag | GETREP
 routine | [MAGTP007](http://code.osehra.org/dox/Routine_MAGTP007_source.html)
 return value type | ARRAY
 description | Get lab info for a case (ex.: SP 12 2). The layout is similar to the one in CPRS.The original code has been used by RPC call ORWRP REPORT TEXT.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LRSS | LITERAL | 2 | true | AP Section | 
| YEAR | LITERAL | 4 | true | Year | 
| LRAN | LITERAL | 5 | true | Accession Number | 




 ###### Generated on January 11th 2017, 6:39:43 am