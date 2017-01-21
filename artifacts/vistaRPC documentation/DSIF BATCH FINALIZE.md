---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH FINALIZE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH FINALIZE{:/}
 tag | {::nomarkdown}FINALIZE{:/}
 routine | [DSIFBAT5](http://code.osehra.org/dox/Routine_DSIFBAT5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BATCH IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}REJECT LINES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}B3 Batches: REJL(line)=Pmt ID^Invoice^reject reason (2-40 characters) B9 Batches: REJL(1)=Invoice^reject reason (2-40 characters)] PMT ID = Patient IEN;Vendor IEN;Date of Serice IEN;Service provided IEN{:/} | 
| {::nomarkdown}REJECT ALL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}1 (yes) 0 (no){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}