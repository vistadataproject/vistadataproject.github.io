---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH RETRANSMIT VOUCHER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH RETRANSMIT VOUCHER{:/}
 tag | {::nomarkdown}VOUCH{:/}
 routine | [DSIFBAT9](http://code.osehra.org/dox/Routine_DSIFBAT9_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} ; Input : FBN: batch IEN ; Output: FBOUT: returns 1 and success message if successful, -1 and error message if failed{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FBN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Batch IEN{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}