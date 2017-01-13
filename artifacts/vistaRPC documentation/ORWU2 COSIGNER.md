---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWU2 COSIGNER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU2 COSIGNER{:/}
 tag | {::nomarkdown}COSIGNER{:/}
 routine | [ORWU2](http://code.osehra.org/dox/Routine_ORWU2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of New Person file entries for use in a long list box.The set is limited to USR PROVIDERS who do not require cosignature.{:/}


### Method description

 property | value 
 --- | --- 
 Leading comment lines | {::nomarkdown}(Set up for the DC Summary)<br/>(to use TIU doc requirments and USR PROVIDER)<br/>PARAMS from ORWU2 COSIGNER RPC call:<br/>.ORY=returned list.<br/>ORFROM=Starting name for this set.  <br/>ORDIR=Direction to move through the x-ref with $O.  <br/>ORDATE=Checks for an USR PROVIDER on this date (optional).<br/>ORTIUTYP is + of the 0 node of the 8925 docmt.  <br/>ORTIUDA is the docmt IEN,{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Fileman date that the user will be required to be active on. (optional){:/} | 
| {::nomarkdown}ORDIR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Direction to move through the #200 x-ref with $O.{:/} | 
| {::nomarkdown}ORFROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Starting name for this set.{:/} | 
| {::nomarkdown}ORTIUTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}is + of the 0 node of the 8925 docmt{:/} | 
| {::nomarkdown}ORTIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record # of the TIU Document in file 8925.{:/} | 




 Generated on January 13th 2017, 6:24:32 am