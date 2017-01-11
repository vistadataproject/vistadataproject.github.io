---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NHIN GET VISTA DATA 

 property | value 
--- | --- 
 label | NHIN GET VISTA DATA
 tag | GET
 routine | [NHINV](http://code.osehra.org/dox/Routine_NHINV_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC retrieves the requested data from VistA, and returns it in^TMP($J,\NHINV\,n) as XML.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number from Patient file #2[optionally DFN;ICN for remote calls] | 
| TYPE | LITERAL | 100 | true | The kind(s) of data to return, which may include:  patient;allergy;problem;vital;lab;med;xray;  consult;procedure;surgery;document;encounter | 
| START | LITERAL | 20 | true | The date/time from which to begin searching for data [optional]. | 
| STOP | LITERAL | 20 | true | The date/time at which to end searching for data [optional]. | 
| MAX | LITERAL | 7 | true | The maximum number of items to return per data type [optional]. | 
| ITEM | LITERAL | 30 | true | The identifier of a single item to return [optional, but TYPE mustalso be defined when used]. | 




 ###### Generated on January 11th 2017, 6:39:43 am