---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP CODE CHECKS 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP CODE CHECKS{:/}
 tag | {::nomarkdown}CK{:/}
 routine | [DENTVCK](http://code.osehra.org/dox/Routine_DENTVCK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Processes coding compliance checks for ADA codes entered by the user.  {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains patient dfn.{:/} | 
| {::nomarkdown}ECODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the internal, or external ADA Code (e.g. 100268, or D0120) followed by a colon and the tooth# for the code entered by the user.{:/} | 
| {::nomarkdown}VISDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Contains the visit date to be used to look back for codes.  A visit date=0 means to only check the current session data, not the historical records.{:/} | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the provider (DUZ) to be used to check compliance.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains an array of the current session's completed procedures as DATA(n)=ADA Code{:/} | 




 Generated on January 13th 2017, 6:24:32 am