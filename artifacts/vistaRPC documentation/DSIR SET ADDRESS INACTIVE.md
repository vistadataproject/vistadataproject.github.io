---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR SET ADDRESS INACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR SET ADDRESS INACTIVE{:/}
 tag | {::nomarkdown}TOGLINAC{:/}
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC sets or resets the Address Inactive flag in the ROI Address file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ADRPTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}ADRPTR - IEN of ADDRESS (NUMERIC){:/} | 
| {::nomarkdown}FLAGVAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FLAGVAL - SET OF VALUES FOR THE INACTIVE FLAG.  ZERO(0) = ACTIVE AND ONE (1) = INACTIVE. (NUMERIC 0 OR 1){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}