---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBO MT LTC COPAY QUERY 

 property | value 
--- | --- 
 label | IBO MT LTC COPAY QUERY
 tag | RETURN
 routine | [IBOMTLTC](http://code.osehra.org/dox/Routine_IBOMTLTC_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure will produce a report showing both MT and LTC copay information at a remote facility.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBICN | LITERAL | 40 | true | This is the patient's ICN used to identify the patient at a remote facility.  This is an optional paramater, the patient's DFN if known my be passed instead. | 
| DFN | LITERAL | 30 | true | This is the patient's DFN, it is not required but will be used if passed.  If it is not passed, then the patient's ICN will be necessary. | 
| IBBDT | LITERAL | 7 | true | This is the starting date of the date range of the information requested.  It is required. | 
| IBEDT | LITERAL | 7 | true | This is the ending date of the date range requested. | 




Generated on January 11th 2017, 6:34:23 am