---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV PURGE AUDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV PURGE AUDIT{:/}
 tag | {::nomarkdown}PURGE{:/}
 routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Purge ICB AUDIT FILE entries through <date> or keeping <days>.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Either a FileMan internal date, specifying the last date to purge,OR a number specifying how many days to keep.{:/} | 




 Generated on January 13th 2017, 7:15:28 am