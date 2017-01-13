---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV UPDATE PCE 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV UPDATE PCE{:/}
 tag | {::nomarkdown}UPD{:/}
 routine | [DENTVTPE](http://code.osehra.org/dox/Routine_DENTVTPE_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Deletes procedures, diagnosis and providers from PCE when users delete transactions from DRM Plus.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a list of transaction ids deleted from DRM Plus in the format:DATA(txnid).{:/} | 




 Generated on January 13th 2017, 7:15:28 am