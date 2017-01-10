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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Internal entry number from Patient file #2[optionally DFN;ICN for remote calls] | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL | 100 | true | The kind(s) of data to return, which may include:  patient;allergy;problem;vital;lab;med;xray;  consult;procedure;surgery;document;encounter | 
| vs:Input_Parameter-8994_02 | START | LITERAL | 20 | true | The date/time from which to begin searching for data [optional]. | 
| vs:Input_Parameter-8994_02 | STOP | LITERAL | 20 | true | The date/time at which to end searching for data [optional]. | 
| vs:Input_Parameter-8994_02 | MAX | LITERAL | 7 | true | The maximum number of items to return per data type [optional]. | 
| vs:Input_Parameter-8994_02 | ITEM | LITERAL | 30 | true | The identifier of a single item to return [optional, but TYPE mustalso be defined when used]. | 