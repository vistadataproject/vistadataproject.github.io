---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBARXM TRANS DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}IBARXM TRANS DATA{:/}
 tag | {::nomarkdown}TRANS{:/}
 routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure is used to receive transaction information from aremote facility and reply with an acknowledgement.This RPC call does not send user data to remote side.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IBD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the data sent by the remote treating facility to be filled infile 354.71.{:/} | 
| {::nomarkdown}IBICN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's ICN.{:/} | 




 Generated on January 13th 2017, 6:55:29 am