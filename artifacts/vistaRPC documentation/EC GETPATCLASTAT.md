---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETPATCLASTAT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETPATCLASTAT{:/}
 tag | {::nomarkdown}PATCLAST{:/}
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a patient in/out status and classification. Classifications are:Agent Orange, Ionizing Radiation, SC Condition, Environmental Contaminants andMilitary Sexual Trauma.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input variable ECARY contains the following values separated by up-arrow.  1. ECDFN - Patient ien (#2)  2. ECD   - DSS Unit ien (#724)  3. ECDT  - Procedure date and time (fileman format){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}