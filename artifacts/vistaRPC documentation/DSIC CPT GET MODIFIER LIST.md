---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT GET MODIFIER LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC CPT GET MODIFIER LIST{:/}
 tag | {::nomarkdown}CODM{:/}
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return a list of all acceptable modifiers for a CPT code{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the CPT, HCPCS, or level III code in either internal or external format.{:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date in internal Fileman format is optional.Other acceptable input values: 0                               TODAY, NOW, or <null> for today's date If CDT is 0 then both active and inactive modifiers will be returned.Else, only return modifiers active as of that date.{:/} | 
| {::nomarkdown}SRC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This Boolean flag (1 or 0) indicates whether or not level III codes should be returned{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ien to the PATIENT file.  It is not used at this time.{:/} | 




 Generated on January 13th 2017, 5:52:13 am