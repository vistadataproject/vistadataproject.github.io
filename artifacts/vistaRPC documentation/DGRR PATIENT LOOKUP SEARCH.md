---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR PATIENT LOOKUP SEARCH 

 property | value 
--- | --- 
 label | DGRR PATIENT LOOKUP SEARCH
 tag | SEARCH
 routine | [DGRRLU](http://code.osehra.org/dox/Routine_DGRRLU_source.html)
 return value type | GLOBAL ARRAY
 description | This rpc is set to return an xml document via VistaLink that containsthe display data for a gui patient lookup.   

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM | LIST | 999 | true | Input PARAM(\SEARCH TYPE\) = type of search requestedInput PARAM(\SEARCH VALUE\) = value to search onInput PARAM(\JOB\) = a unique job # used to check for cancelled jobs | 