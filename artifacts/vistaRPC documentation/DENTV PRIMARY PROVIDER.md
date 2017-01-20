---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV PRIMARY PROVIDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV PRIMARY PROVIDER{:/}
 tag | {::nomarkdown}GS{:/}
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc gets or sets the primary and secondary providers for adental patient. It also sends back the User duz if the user is a dental provider for the Encounter Provider.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The first parameter is the patient ien (DFN) which is the ien tothe DENTAL PATIENT (#220) file.{:/} | 
| {::nomarkdown}PSPROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The second, optional, parameter is the primary and secondary provideriens, in the format p1^p2^p3.  P3 is the Encounter Provider.{:/} | 
| {::nomarkdown}OMIT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A flag which determines whether omissions are allowed or required.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}