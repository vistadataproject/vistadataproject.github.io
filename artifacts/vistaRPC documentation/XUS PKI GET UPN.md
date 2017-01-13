---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS PKI GET UPN 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS PKI GET UPN{:/}
 tag | {::nomarkdown}GETUPN{:/}
 routine | [XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC gets the SUBJECT ALTERNATIVE NAME field from the New Person (#200) file field 501.2.  It is used to check that the correct PIV card has been put into the reader.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get SUBJECT ALTERNATIVE NAME for PIV card check. -p580
 Lines | {::nomarkdown} S RET=$P($G(^VA(200,DUZ,501)),U,2){:/}




 Generated on January 13th 2017, 7:15:28 am