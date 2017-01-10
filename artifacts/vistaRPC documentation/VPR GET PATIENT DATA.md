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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Internal entry number from Patient file #2[optionally DFN;ICN for remote calls] | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL | 100 | true | The kind(s) of data to return, which may include:  demographics;reactions;problems;vitals;labs;meds;  immunizations;visits;appointments;documents;  procedures;consults | 
| vs:Input_Parameter-8994_02 | START | LITERAL | 20 | true | The date/time from which to begin searching for data [optional]. | 
| vs:Input_Parameter-8994_02 | STOP | LITERAL | 20 | true | The date/time at which to end searching for data [optional]. | 
| vs:Input_Parameter-8994_02 | MAX | LITERAL | 7 | true | The maximum number of items to return per data type [optional]. | 
| vs:Input_Parameter-8994_02 | ITEM | LITERAL | 30 | true | The identifier of a single item to return [optional, but TYPE mustalso be defined when used]. | 
| vs:Input_Parameter-8994_02 | FILTER | LIST |  | true | List of name-value pairs, further refining the search. | 