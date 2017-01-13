---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET SITES 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET SITES{:/}
 tag | {::nomarkdown}GETSITES{:/}
 routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by the Vetlink Kiosk system.  Patient SSN is the input value.  Return value is a list of treating facilities associated with the patient given the SSN.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient SSN{:/} | 




 Generated on January 13th 2017, 6:55:29 am