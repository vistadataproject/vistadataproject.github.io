---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU SIGN RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU SIGN RECORD{:/}
 tag | {::nomarkdown}SIGN{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This API Supports the application of the user's electronic signature to aTIU document while evaluating authorization, and validating the user'selectronic signature.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | API for /es/
 Leading comment lines | For backward compatibility
Use SIGN^TIUSRVP2 now, please

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This it the record number (IEN) in the TIU DOCUMENT FILE (#8925) for therecord which has been electronically signed.{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the network-encrypted string of what the user entered as his/herelectronic signature code.  The SIGN API will call Kernel to validate thesignature code, determine the user's role and privilege with respect tothe document in question, and apply the signature to the document, ifappropriate.{:/} | 




 Generated on January 13th 2017, 5:52:13 am