---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV REPORT DATA 

 property | value 
--- | --- 
 label | DENTV REPORT DATA
 tag | RPT
 routine | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieves Dental Report data for a specified time period and station. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM | LIST | 30 | true | The input parameter list contains the following:  PARAM(\RPT\) = Report to run:              0=Provider Summary,  1=Sittings by Provider              2=Clinic Summary     3=Individual Sittings              4=Non Clinical Time  5=Dental Fee Basis  PARAM(\STN\) = station (external, e.g. 500, 500BZ)  PARAM(\PROV\)= \ALL\, or p1^p2^p3 where the pieces are provider ids  PARAM(\START\)= start date in external format (11/1/2003)  PARAM(\END\) = end date in external format (11/30/2003) | 




 ###### Generated on January 11th 2017, 6:39:43 am