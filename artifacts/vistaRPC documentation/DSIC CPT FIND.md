---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC CPT FIND 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC CPT FIND{:/}
 tag | {::nomarkdown}FIND{:/}
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}For a lookup value, this will return a list of CPT codes matching that lookup value.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the lookup value for getting a list of CPT codes{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date is optional.  Default to TODAY.  Only CPT codes that were active as of this date will be included in the return list.{:/} | 




 Generated on January 13th 2017, 7:11:27 am