---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY FIX REJ LINE ITEMS 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PAY FIX REJ LINE ITEMS{:/}
 tag | {::nomarkdown}REALL{:/}
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FBOLDB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Batch IEN of the batch that held the line items that were rejected.{:/} | 
| {::nomarkdown}FBNEWB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Batch IEN of the batch that will hold the re-initiated line items.{:/} | 




 Generated on January 13th 2017, 6:24:32 am