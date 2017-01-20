---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF PAY FIX SEL REJECT ITEMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PAY FIX SEL REJECT ITEMS{:/}
 tag | {::nomarkdown}REINIT{:/}
 routine | [DSIFPAY6](http://code.osehra.org/dox/Routine_DSIFPAY6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN{:/} | 
| {::nomarkdown}OLD BATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Old rejected batch number (IEN){:/} | 
| {::nomarkdown}NEW BATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}New Batch IEN{:/} | 
| {::nomarkdown}LINES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Lines to re-initiate, format: passed in by a list/array  ;     B3 BATCHES: FBLINES(NUM) = PMT ID (N;N;N;N)                   FBLINES(NUM+n) = PMT ID#2, (ETC) ;     B9 BATCHES: FBLINES(NUM) = Invoice #1                   FBLINES(NUM+n) = INVOICE #2,  (ECT) Value of NUM must start with \1\!{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}