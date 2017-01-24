---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG3 TIU SIGN RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 TIU SIGN RECORD{:/}
 tag | {::nomarkdown}SIGN{:/}
 routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Calls TIU API : SIGN^TIUSRVPIf the call succeeds the Note will be changed to 'completed'If the call fails, the Note status will not be changed.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 
| {::nomarkdown}MAGTIUDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The TIU Document IEN from File ^TIU(8925{:/} | 
| {::nomarkdown}MAGES{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The users encrypted Electronic Signature.{:/} | 
| {::nomarkdown}MAGESBY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DUZ of the Signer (defaults to Partition Variable: DUZ){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}