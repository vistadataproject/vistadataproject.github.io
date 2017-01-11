---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPATCLASTAT 

 property | value 
--- | --- 
 label | EC GETPATCLASTAT
 tag | PATCLAST
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | SINGLE VALUE
 description | Returns a patient in/out status and classification. Classifications are:Agent Orange, Ionizing Radiation, SC Condition, Environmental Contaminants andMilitary Sexual Trauma.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrow.  1. ECDFN - Patient ien (#2)  2. ECD   - DSS Unit ien (#724)  3. ECDT  - Procedure date and time (fileman format) | 




 ###### Generated on January 11th 2017, 6:39:42 am