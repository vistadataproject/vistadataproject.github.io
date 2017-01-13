---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH LIST OLD 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH LIST OLD{:/}
 tag | {::nomarkdown}GETOLD{:/}
 routine | [DSIFLRJ](http://code.osehra.org/dox/Routine_DSIFLRJ_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC traverses through both inpatient and outpatient records and retrieves a list of batches that are in purgatory.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FBFROM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FBFROM - From date (optional){:/} | 
| {::nomarkdown}FBTO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FBTO - To date (optional){:/} | 




 Generated on January 13th 2017, 7:11:27 am