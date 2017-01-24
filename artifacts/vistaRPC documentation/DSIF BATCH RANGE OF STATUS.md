---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH RANGE OF STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH RANGE OF STATUS{:/}
 tag | {::nomarkdown}RANGEBAT{:/}
 routine | [DSIFBAT2](http://code.osehra.org/dox/Routine_DSIFBAT2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Used to display a list of batches based on a batch IEN. on error returns -1^error message{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input range of batch numbers in the format of n-nnn (or a single batch) {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}