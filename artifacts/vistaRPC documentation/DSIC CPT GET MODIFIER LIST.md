---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT GET MODIFIER LIST 

 property | value 
--- | --- 
 label | DSIC CPT GET MODIFIER LIST
 tag | CODM
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | ARRAY
 description | Return a list of all acceptable modifiers for a CPT code

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code in either internal or external format. | 
| CDT | LITERAL | 14 | true | This date in internal Fileman format is optional.Other acceptable input values: 0                               TODAY, NOW, or <null> for today's date If CDT is 0 then both active and inactive modifiers will be returned.Else, only return modifiers active as of that date. | 
| SRC | LITERAL | 1 | true | This Boolean flag (1 or 0) indicates whether or not level III codes should be returned | 
| DFN | LITERAL | 14 | true | This is the ien to the PATIENT file.  It is not used at this time. | 




 ###### Generated on January 11th 2017, 6:39:43 am