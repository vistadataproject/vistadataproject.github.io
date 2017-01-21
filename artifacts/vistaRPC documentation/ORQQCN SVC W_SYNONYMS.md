---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SVC W_SYNONYMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SVC W_SYNONYMS{:/}
 tag | {::nomarkdown}SVCSYN{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This is a modified version of ORQQCN GET SERVICE TREE that also includessynonyms for the services returned. It also allows passing of an optionalConsult IEN, for screening allowable services to forward the consult to,especially in the case of interfacility consults.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Start With{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} |  | {::nomarkdown}Which service in the hierarchy to begin with.{:/} | 
| {::nomarkdown}Purpose{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  | {::nomarkdown}0 for display purposes, 1 to order or forward a consult.{:/} | 
| {::nomarkdown}Include Synonyms{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  | {::nomarkdown}0 to exclude synonyms, 1 to include synonyms.{:/} | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}OPTIONAL - Include pointer to file 123, the Consult Request file.  Used when forwarding a consult, and screening needs to be done to limit the list of services.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}