---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS SIGN CA7 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SIGN CA7{:/}
 tag | {::nomarkdown}SIGNCA7{:/}
 routine | [OOPSGUIS](http://code.osehra.org/dox/Routine_OOPSGUIS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call accepts an encrypted electronic signature, validates the entry and files the signature fields in the ASISTS COMPENSATION CLAIM (CA7) File (#2264).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the file number, field number and internal recordnumber for verifying and filing the electronic signature.  The expected formatis:  FILE^FIELD^IEN.  An Example being 2264^84^5.{:/} | 
| {::nomarkdown}SIGN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the encrypted electronic signature code.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}