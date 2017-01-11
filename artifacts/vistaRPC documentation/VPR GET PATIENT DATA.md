---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPR GET PATIENT DATA 

 property | value 
--- | --- 
 label | VPR GET PATIENT DATA
 tag | GET
 routine | [VPRD](http://code.osehra.org/dox/Routine_VPRD_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC retrieves the requested data from VistA, and returns it in^TMP(\VPR\,$J,n) as XML.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number from Patient file #2[optionally DFN;ICN for remote calls] | 
| TYPE | LITERAL | 100 | true | The kind(s) of data to return, which may include:  demographics;reactions;problems;vitals;labs;meds;  immunizations;visits;appointments;documents;  procedures;consults | 
| START | LITERAL | 20 | true | The date/time from which to begin searching for data [optional]. | 
| STOP | LITERAL | 20 | true | The date/time at which to end searching for data [optional]. | 
| MAX | LITERAL | 7 | true | The maximum number of items to return per data type [optional]. | 
| ITEM | LITERAL | 30 | true | The identifier of a single item to return [optional, but TYPE mustalso be defined when used]. | 
| FILTER | LIST |  | true | List of name-value pairs, further refining the search. | 




 Generated on January 11th 2017, 7:15:04 am