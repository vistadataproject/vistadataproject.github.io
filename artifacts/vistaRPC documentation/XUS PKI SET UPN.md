---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS PKI SET UPN 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS PKI SET UPN{:/}
 tag | {::nomarkdown}SETUPN{:/}
 routine | [XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to set the SUBJECT ALTERNATIVE NAME in the New Person #(200) file field 501.2. {:/}


### Method description

 property | value 
--- | --- 
 Method comment | Set the SUBJECT ALTERNATIVE NAME from the PIV card. -p580

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UPN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the SUBJECT ALTERNATIVE NAME from the PIV card.{:/} | 




 Generated on January 13th 2017, 5:52:13 am