---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRLTRS LISTLTRS 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIRLTRS LISTLTRS{:/}
 tag | {::nomarkdown}LISTLTRS{:/}
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return an alphabetically sorted array containing the IEN(Internal Entry Numbers) and names of the letters contianed in either file19620.15 (DSIR NATIONAL LETTERS) or file 19620.16 (DSIR LOCAL LETTERS) asspecified in the input parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOCAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File indicator (0 - National [Default], 1 - Local) (Optional){:/} | 




 Generated on January 13th 2017, 6:55:29 am