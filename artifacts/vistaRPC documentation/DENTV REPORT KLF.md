---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV REPORT KLF 

 property | value 
--- | --- 
 label | DENTV REPORT KLF
 tag | KLF
 routine | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieves Dental KLF Report data for specified time period.Rep

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM | LIST | 30 | true | The input parameter list contains the following:   PARAM(\RPT\) = Report to run:               0=all  1 through 11 or any combination,               separated by commas retrieves KLF tables 1-11   PARAM(\STN\) = station (external, e.g. 500, 500BZ), optional   PARAM(\START\)= start date in external format (11/1/2003)   PARAM(\END\) = end date in external format (11/30/2003)   PARAM(\FY\) = fiscal year (2005, 2004, etc) | 