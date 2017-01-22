---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV UPDATE PCE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV UPDATE PCE{:/}
 tag | {::nomarkdown}UPD{:/}
 routine | [DENTVTPE](http://code.osehra.org/dox/Routine_DENTVTPE_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Deletes procedures, diagnosis and providers from PCE when users delete transactions from DRM Plus.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a list of transaction ids deleted from DRM Plus in the format:DATA(txnid).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}